/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Parser
 *
 */

import { decode } from "html-entities";
import { createElement, type ReactNode, useCallback } from "react";
import { Text } from "react-native";
import type { RendererAppearance, RendererConfigFull } from "../types";

const DEFAULT_TAGS = ["b", "i", "mark", "u", "code"];

export const useParser = () => {
    const getTagName = useCallback((value: string) => {
        const startTagName = value.trim().substring(1);
        const indexOfEndTagName = startTagName.match(/(\s.*?)?>/)?.index ?? 1;
        return startTagName.substring(0, Number(indexOfEndTagName) ?? 1);
    }, []);

    const getComponentByName = useCallback(
        (config: RendererConfigFull, name: string) => {
            switch (name) {
                case "b":
                    return config.components.bold;
                case "i":
                    return config.components.italic;
                case "mark":
                    return config.components.mark;
                case "u":
                    return config.components.underline;
                case "code":
                    return config.components.code;
                default:
                    return Text;
            }
        },
        [],
    );

    const createElementByTagName = useCallback(
        (
            config: RendererConfigFull,
            appearance: RendererAppearance,
            tagChildren: string | ReactNode,
            tagName: string,
        ): ReactNode => {
            return createElement(
                getComponentByName(config, tagName) as typeof Text,
                {
                    config,
                    appearance,
                } as unknown as null,
                tagChildren,
            );
        },
        [getComponentByName],
    );

    const matchTag = useCallback(
        (buffer: string, tags: string[]): RegExpMatchArray | null => {
            const { match } = tags.reduce(
                (acum, tag) => {
                    const currentMatch = buffer.match(
                        new RegExp(`<${tag}(.*?)>`),
                    );

                    if (!currentMatch) return acum;
                    if (acum.match == null) {
                        acum.match = currentMatch;
                        return acum;
                    }

                    const currentMatchIsPreviousAcumMatch =
                        currentMatch.index != null &&
                        acum.match.index != null &&
                        currentMatch.index < acum.match.index;

                    if (currentMatchIsPreviousAcumMatch) {
                        acum.match = currentMatch;
                        return acum;
                    }

                    return acum;
                },
                { match: null } as { match: RegExpMatchArray | null },
            );
            return match;
        },
        [],
    );

    const parser = useCallback(
        (
            config: RendererConfigFull,
            apparence: RendererAppearance,
            buffer: string,
        ): React.ReactElement => {
            const firstMatchTag = matchTag(buffer, DEFAULT_TAGS);

            if (firstMatchTag == null || firstMatchTag?.index == null) {
                return <>{decode(buffer)}</>;
            }

            const stringAfterTargetTag = buffer.substring(
                firstMatchTag.index + firstMatchTag[0].length,
            );
            const tagName = getTagName(firstMatchTag[0]);
            const closeTag = stringAfterTargetTag.match(
                new RegExp(`<\/${tagName}>`),
            );
            const nextOpenTag = matchTag(stringAfterTargetTag, DEFAULT_TAGS);

            if (
                closeTag?.index == null ||
                (closeTag.index == null && nextOpenTag?.index == null)
            ) {
                return <>{decode(buffer)}</>;
            }

            if (
                nextOpenTag?.index == null ||
                closeTag.index < nextOpenTag.index
            ) {
                const textBeforeTag = buffer.substring(0, firstMatchTag.index);
                const tagText = stringAfterTargetTag.substring(
                    0,
                    closeTag.index,
                );
                const textAfterTag = stringAfterTargetTag.substring(
                    closeTag.index + closeTag[0].length,
                );
                return (
                    <>
                        {textBeforeTag && decode(textBeforeTag)}
                        {createElementByTagName(
                            config,
                            apparence,
                            decode(tagText),
                            tagName,
                        )}
                        {textAfterTag &&
                            parser(config, apparence, textAfterTag)}
                    </>
                );
            }

            const textBeforeTag = buffer.substring(0, firstMatchTag.index);
            const tagText = buffer.substring(
                firstMatchTag.index + firstMatchTag[0].length,
            );
            const textAfterTag = stringAfterTargetTag.substring(
                closeTag.index + closeTag[0].length,
            );

            return (
                <>
                    {textBeforeTag && decode(textBeforeTag)}
                    {createElementByTagName(
                        config,
                        apparence,
                        parser(
                            config,
                            apparence,
                            tagText.substring(0, closeTag.index),
                        ),
                        tagName,
                    )}
                    {textAfterTag && parser(config, apparence, textAfterTag)}
                </>
            );
        },
        [matchTag, getTagName, createElementByTagName],
    );

    return { parser };
};

// Consequently, faith comes from hearing the message, and the message is
// heard through the word about Christ.
// - Romans 10:17

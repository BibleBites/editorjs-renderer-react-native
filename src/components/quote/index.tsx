/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Quote Component
 *
 */

import { useMemo } from "react";
import { Text, View } from "react-native";
import { useParser } from "@/src/parser";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { QuoteProps } from "./types";

export const Quote = (props: QuoteProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    const { parser } = useParser();

    const parsedText = useMemo(
        () => parser(props.config, props.appearance, props.data.text),
        [parser, props.config, props.appearance, props.data.text],
    );

    return (
        <View
            accessible
            style={[styles.container, props.style?.container]}
            {...props.properties?.container}
        >
            <Text
                accessibilityRole="text"
                allowFontScaling={true}
                style={[
                    styles.quote,
                    {
                        textAlign: props.data.alignment ?? "left",
                    },
                    props.style?.quote,
                ]}
                {...props.properties?.quote}
            >
                {parsedText}
            </Text>

            {props.data.caption && (
                <Text
                    style={[
                        styles.caption,
                        {
                            textAlign: props.data.alignment ?? "left",
                        },
                        props.style?.caption,
                    ]}
                    {...props.properties?.caption}
                >
                    -{props.data.caption}
                </Text>
            )}
        </View>
    );
};

// And, once made perfect, he became the source of eternal salvation for
// all who obey him.
// - Hebrews 5:9

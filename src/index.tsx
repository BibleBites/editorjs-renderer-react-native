/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Renderer
 *
 */

import type React from "react";
import { useMemo } from "react";
import { Text, View } from "react-native";
import { DEFAULT_RENDERER_CONFIG } from "./default";
import type { EditorJSBlock } from "./editorjs/types";
import {
    RendererAppearance,
    type RendererConfig,
    type RendererConfigFull,
    type RendererProps,
} from "./types";

export const Renderer = (props: RendererProps) => {
    const config = useMemo(() => getConfig(props.config), [props.config]);
    const appearence = useMemo(
        () => props.appearance || RendererAppearance.light,
        [props.appearance],
    );
    if (
        !props.data ||
        !props.data.blocks ||
        !Array.isArray(props.data.blocks)
    ) {
        const message = "Invalid data. Expected an object with a blocks array.";
        console.log(message, props.data);
        return <ErrorBlock message={message} config={config} />;
    }
    return (
        <View>
            {props.data.blocks.map((block) => (
                <View key={block.id || Date.now()}>
                    {getComponent(config, appearence, block)}
                </View>
            ))}
        </View>
    );
};

function getConfig(partialConfig: RendererConfig = {}): RendererConfigFull {
    return {
        ...DEFAULT_RENDERER_CONFIG,
        ...partialConfig,
        components: {
            ...DEFAULT_RENDERER_CONFIG.components,
            ...partialConfig.components,
        },
    };
}

function getComponent(
    config: RendererConfigFull,
    appearance: RendererAppearance,
    block: EditorJSBlock,
): React.ReactElement {
    const errorMessage = validateBlockData(block, config);
    if (errorMessage) {
        console.log(errorMessage, block);
        return <ErrorBlock message={errorMessage} config={config} />;
    }
    const Component = config.components[block.type];
    if (!Component) return <View />;
    return (
        <Component data={block.data} config={config} appearance={appearance} />
    );
}

function validateBlockData(
    block: EditorJSBlock,
    config: RendererConfigFull,
): string | null {
    if (!block) return "Block is undefined or null.";
    if (!block.id || typeof block.id !== "string")
        return "Block ID is missing or invalid.";
    if (!block.type || typeof block.type !== "string")
        return "Block type is missing or invalid.";
    if (
        !block.data ||
        typeof block.data !== "object" ||
        Array.isArray(block.data)
    )
        return `Block data is missing or invalid. Expected an object.`;
    if (!config || !config.components[block.type])
        return `Unable to find component type "${block.type}".`;
    return null;
}

function ErrorBlock(props: { message: string; config: RendererConfigFull }) {
    if (!props.config.enableFallback) return <View />;
    return (
        <View>
            <Text style={{ color: "red" }}>{props.message}</Text>
        </View>
    );
}

export * from "./exports";

// For the Lord takes delight in his people;
// he crowns the humble with victory.
// - Psalm 149:4

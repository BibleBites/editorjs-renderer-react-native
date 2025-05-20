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
    const Component = config.components[block.type];
    if (Component) {
        return (
            <Component
                data={block.data}
                config={config}
                appearance={appearance}
            />
        );
    }
    if (config.enableFallback) {
        return (
            <View>
                <Text>
                    Error: Unable to find component type "{block.type}".
                </Text>
            </View>
        );
    }
    return <View />;
}

export * from "./exports";

// For the Lord takes delight in his people;
// he crowns the humble with victory.
// - Psalm 149:4

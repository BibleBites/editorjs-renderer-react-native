/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Delimiter Component Types
 *
 */

import type { TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type DelimiterProps = RendererComponentProps & {
    data: Record<string, never>;
    style?: {
        delimiter?: TextStyle;
        container?: ViewStyle;
    };
    properties?: {
        delimiter?: TextProps;
        container?: ViewProps;
    };
};

// I sought the Lord, and he answered me; he delivered me from all my fears.
// - Psalm 34:4

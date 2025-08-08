/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Quote Component Types
 *
 */

import type { TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type QuoteProps = RendererComponentProps & {
    data: {
        text: string;
        caption?: string;
        alignment?: "left" | "center";
    };
    style?: {
        container?: ViewStyle;
        quote?: TextStyle;
        caption?: TextStyle;
    };
    properties?: {
        container?: ViewProps;
        quote?: TextProps;
        caption?: TextProps;
    };
};

// It is for freedom that Christ has set us free. Stand firm, then, and do not
// let yourselves be burdened again by a yoke of slavery.
// - Galatians 5:1

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Paragraph Component Types
 *
 */

import type { TextProps, TextStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type ParagraphProps = RendererComponentProps & {
    data: {
        text: string;
    };
    style?: TextStyle;
    properties?: TextProps;
};

// Defend the weak and the fatherless; uphold the cause of the poor and the oppressed.
// - Psalm 82:3

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Code Component Types
 *
 */

import type { TextProps, TextStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type CodeProps = RendererComponentProps & {
    children?: React.ReactNode | undefined;
    style?: TextStyle;
    properties?: TextProps;
};

// I will never forget your precepts, for by them you have preserved my life.
// - Psalm 119:93

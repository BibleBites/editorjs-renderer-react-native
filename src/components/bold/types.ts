/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Bold Component Types
 *
 */

import type { TextProps, TextStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type BoldProps = RendererComponentProps & {
    children?: React.ReactNode | undefined;
    style?: TextStyle;
    properties?: TextProps;
};

// Jesus answered, "My teaching is not my own. It comes from the one who
// sent me."
// - John 7:16

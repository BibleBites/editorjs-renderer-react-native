/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 17 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Italic Component Types
 *
 */

import type { TextProps, TextStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type ItalicProps = RendererComponentProps & {
    children?: React.ReactNode | undefined;
    style?: TextStyle;
    properties?: TextProps;
};

// In fact, the law requires that nearly everything be cleansed with blood,
// and without the shedding of blood there is no forgiveness.
// - Hebrews 9:22

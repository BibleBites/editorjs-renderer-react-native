/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Mark Component Types
 *
 */

import type { TextProps, TextStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type MarkProps = RendererComponentProps & {
    children?: React.ReactNode | undefined;
    style?: TextStyle;
    properties?: TextProps;
};

// But when you ask, you must believe and not doubt, because the one who
// doubts is like a wave of the sea, blown and tossed by the wind.
// - James 1:6

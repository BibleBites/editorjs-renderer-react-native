/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Thur Mar 20 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Underline Component Types
 *
 */

import type { TextProps, TextStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type UnderlineProps = RendererComponentProps & {
    children?: React.ReactNode | undefined;
    style?: TextStyle;
    properties?: TextProps;
};

// Do not judge, and you will not be judged. Do not condemn, and you will not
// be condemned. Forgive, and you will be forgiven.
// - Luke 6:37

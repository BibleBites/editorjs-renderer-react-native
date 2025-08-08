/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Header Component Types
 *
 */

import type { TextProps, TextStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type HeaderProps = RendererComponentProps & {
    data: {
        level: 1 | 2 | 3 | 4 | 5 | 6;
        text: string;
    };
    style?: TextStyle;
    properties?: TextProps;
};

// The rich rule over the poor, and the borrower is slave to the lender.
// - Proverbs 22:7

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Image Component Types
 *
 */

import type {
    ImageProps as NativeImageProps,
    ImageStyle as NativeImageStyle,
    TextProps,
    TextStyle,
    ViewProps,
    ViewStyle,
} from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type ImageProps = RendererComponentProps & {
    data: {
        url?: string;
        file?: {
            url: string;
        };
        caption?: string;
        withBorder?: boolean;
        withBackground?: boolean;
        stretched?: boolean;
    };
    getImageSize?: (file: { url: string }) => [number, number] | undefined;
    style?: {
        container?: ViewStyle;
        image?: NativeImageStyle;
        caption?: TextStyle;
    };
    properties?: {
        container?: ViewProps;
        image?: NativeImageProps;
        caption?: TextProps;
    };
};

// Can a man walk on hot coals without his feet being scorched?
// - Proverbs 6:28

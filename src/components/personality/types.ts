/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Personality Component Types
 *
 */

import type {
    ImageProps,
    ImageStyle,
    TextProps,
    TextStyle,
    TouchableOpacityProps,
    ViewProps,
    ViewStyle,
} from "react-native";
import type { RendererComponentProps } from "@/src/types";

export type PersonalityProps = RendererComponentProps & {
    data: {
        name?: string;
        description?: string;
        link: string;
        photo?: string;
    };
    modifyURL?: (url: string) => string;
    onClick?: (url: string) => void | Promise<void>;
    style?: {
        container?: ViewStyle;
        dataContainer?: ViewStyle;
        title?: TextStyle;
        description?: TextStyle;
        link?: TextStyle;
        image?: ImageStyle;
    };
    properties?: {
        container?: TouchableOpacityProps;
        dataContainer?: ViewProps;
        title?: TextProps;
        description?: TextProps;
        link?: TextProps;
        image?: ImageProps;
    };
};

// The fear of the Lord is the beginning of knowledge, but fools despise
// wisdom and instruction.
// - Proverbs 1:7

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 17 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Link Component Types
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

export type LinkToolProps = RendererComponentProps & {
    data: {
        link: string;
        meta: {
            title?: string;
            site_name?: string;
            description?: string;
            image?: {
                url?: string;
            };
        };
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

// Jesus replied, "Very truly I tell you, everyone who sins is a slave to sin."
// - John 8:34

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: List Component Types
 *
 */

import type { TextProps, TextStyle, ViewProps, ViewStyle } from "react-native";
import type { RendererComponentProps } from "@/src/types";

type ListConfig = {
    getLabel?: (index: number, depth: number) => string;
    style?: {
        container?: ViewStyle;
        itemContainer?: ViewStyle;
        itemContent?: TextStyle;
        numberPrimary?: TextStyle;
        numberSecondary?: TextStyle;
        bulletPrimary?: ViewStyle;
        bulletSecondary?: ViewStyle;
    };
    properties?: {
        container?: ViewProps;
        itemContainer?: ViewProps;
        itemContent?: TextProps;
        numberPrimary?: TextProps;
        numberSecondary?: TextProps;
        bulletPrimary?: ViewProps;
        bulletSecondary?: ViewProps;
    };
};

export type ListProps = RendererComponentProps &
    ListConfig & {
        data: {
            style: ListStyle;
            items: ItemData[];
        };
    };

export type ListRenderProps = RendererComponentProps &
    ListConfig & {
        items: ItemData[];
        depth: number;
        listStyle: ListStyle;
    };

export type ItemRenderProps = RendererComponentProps &
    ListConfig & {
        item: ItemData;
        index: number;
        depth: number;
        listStyle: ListStyle;
    };

export type ItemData = {
    content: string;
    items: ItemData[];
};

export type ListStyle = "ordered" | "unordered";

// And if we are careful to obey all this law before the Lord our God, as he
// has commanded us, that will be our righteousness.
// Deuteronomy 6:25

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 17 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Italic Component
 *
 */

import { Text } from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { ItalicProps } from "./types";

export const Italic = (props: ItalicProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.italic, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};

// When you make a vow to God, do not delay to fulfill it. He has no
// pleasure in fools; fulfill your vow.
// - Ecclesiastes 5:4

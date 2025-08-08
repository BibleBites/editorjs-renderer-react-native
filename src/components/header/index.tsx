/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Header Component
 *
 */

import { useMemo } from "react";
import { Text } from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { HeaderProps } from "./types";

export const Header = (props: HeaderProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    const headingStyle = useMemo(
        () => styles[`h${props.data.level}`],
        [props.data.level, styles],
    );
    return (
        <Text
            accessible={true}
            accessibilityRole="header"
            allowFontScaling={true}
            style={[styles.text, headingStyle, props.style]}
            {...props.properties}
        >
            {props.data.text}
        </Text>
    );
};

// If I give all I possess to the poor and give over my body to hardship that
// I may boast, but do not have love, I gain nothing.
// - 1 Corinthians 13:3

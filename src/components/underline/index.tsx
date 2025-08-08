/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Thur Mar 20 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Underline Component
 *
 */

import { Text } from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { UnderlineProps } from "./types";

export const Underline = (props: UnderlineProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.underline, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};

// For it is with your heart that you believe and are justified, and it is with
// your mouth that you profess your faith and are saved.
// - Romans 10:10

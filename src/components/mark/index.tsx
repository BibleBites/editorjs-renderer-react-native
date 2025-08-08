/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Mark Component
 *
 */

import { Text } from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { MarkProps } from "./types";

export const Mark = (props: MarkProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.mark, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};

// Take delight in the Lord, and he will give you the desires of your heart.
// - Psalm 37:4

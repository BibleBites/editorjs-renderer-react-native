/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: types.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Bold Component
 *
 */

import { Text } from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { BoldProps } from "./types";

export const Bold = (props: BoldProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.bold, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};

// If we confess our sins, he is faithful and just and will forgive us
// our sins and purify us from all unrighteousness.
// - 1 John 1:9

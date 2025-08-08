/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Code Component
 *
 */

import { Text } from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { CodeProps } from "./types";

export const Code = (props: CodeProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            allowFontScaling={true}
            style={[styles.code, props.style]}
            {...props.properties}
        >
            {props.children}
        </Text>
    );
};

// Very truly I tell you, whoever accepts anyone I send accepts me; and
// whoever accepts me accepts the one who sent me.
// - John 13:20

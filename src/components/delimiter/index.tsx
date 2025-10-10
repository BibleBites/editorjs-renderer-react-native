/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Delimiter Component
 *
 */

import { decode } from "html-entities";
import { Text, View } from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { DelimiterProps } from "./types";

export const Delimiter = (props: DelimiterProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <View
            aria-hidden
            style={[styles.container, props.style?.container]}
            {...props.properties?.container}
        >
            <Asterisk {...props} />
            <Asterisk {...props} />
            <Asterisk {...props} />
        </View>
    );
};

function Asterisk(props: DelimiterProps) {
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            style={[styles.delimiter, props.style?.delimiter]}
            {...props.properties?.delimiter}
        >
            {decode("&ast;")}
        </Text>
    );
}

// Turn my heart toward your statutes and not toward selfish gain.
// - Psalm 119:36

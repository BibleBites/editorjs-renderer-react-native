/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Paragraph Component
 *
 */

import { useMemo } from "react";
import { Text } from "react-native";
import { useParser } from "@/src/parser";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { ParagraphProps } from "./types";

export const Paragraph = (props: ParagraphProps) => {
    const { parser } = useParser();
    const parsedText = useMemo(
        () => parser(props.config, props.appearance, props.data.text),
        [parser, props.config, props.appearance, props.data.text],
    );
    const styles = useStyle(stylesheet, props.appearance);
    return (
        <Text
            accessible
            accessibilityRole="text"
            allowFontScaling={true}
            style={[styles.paragraph, props.style]}
            {...props.properties}
        >
            {parsedText}
        </Text>
    );
};

// Since you are my rock and my fortress, for the sake of your name lead and guide me.
// - Psalm 31:3

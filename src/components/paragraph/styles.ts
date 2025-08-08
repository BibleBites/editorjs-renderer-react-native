/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Paragraph Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        paragraph: {
            marginVertical: 8,
            fontSize: 16,
            color: theme.textPrimary,
        },
    });
});

// And now these three remain: faith, hope and love. But the greatest of these is love.
// - 1 Corinthians 13:13

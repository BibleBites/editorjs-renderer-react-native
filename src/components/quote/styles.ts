/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Quote Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        container: {
            width: "100%",
            marginVertical: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderLeftWidth: 4,
            borderLeftColor: theme.backgroundSecondary,
            borderStyle: "solid",
        },
        quote: {
            fontSize: 16,
            color: theme.textPrimary,
        },
        caption: {
            marginTop: 12,
            fontSize: 14,
            fontWeight: "300",
            color: theme.textSecondary,
        },
    });
});

// Bless those who persecute you; bless and do not curse.
// - Romans 12:14

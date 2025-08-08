/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: List Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        itemContainer: {
            flexDirection: "row",
            alignContent: "center",
            paddingLeft: 16,
        },
        itemContent: {
            fontSize: 16,
            color: theme.textPrimary,
            flexShrink: 1,
        },
        numberPrimary: {
            fontSize: 16,
            color: theme.textPrimary,
            marginRight: 4,
        },
        numberSecondary: {
            fontSize: 16,
            color: theme.textPrimary,
            marginRight: 4,
        },
        bulletPrimary: {
            height: 6,
            width: 6,
            marginTop: 8,
            marginRight: 6,
            borderRadius: 6,
            backgroundColor: theme.textPrimary,
            borderColor: theme.textPrimary,
            borderWidth: 1,
        },
        bulletSecondary: {
            height: 6,
            width: 6,
            marginTop: 8,
            marginRight: 6,
            borderRadius: 6,
            borderColor: theme.textPrimary,
            borderWidth: 1,
        },
    });
});

// I will exalt you, my God the King; I will praise your name for ever and ever.
// - Psalm 145:1

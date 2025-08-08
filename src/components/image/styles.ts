/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Image Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

const MAX_IMAGE_HEIGHT = 100;

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        container: {
            width: "100%",
            marginVertical: 8,
            alignItems: "center",
        },
        defaultImage: {
            height: MAX_IMAGE_HEIGHT,
            width: "100%",
            resizeMode: "contain",
        },
        caption: {
            width: "100%",
            marginTop: 4,
            fontSize: 12,
            color: theme.textSecondary,
            textAlign: "center",
        },
    });
});

// For with much wisdom comes much sorrow; the more knowledge, the more grief.
// - Ecclesiastes 1:18

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Code Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        code: {
            color: theme.textPrimary,
            backgroundColor: theme.backgroundSecondary,
        },
    });
});

// In fact, the law requires that nearly everything be cleansed with blood,
// and without the shedding of blood there is no forgiveness.
// - Hebrews 9:22

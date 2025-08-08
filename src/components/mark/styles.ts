/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Mark Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";
import { RendererAppearance } from "@/src/types";

export const styles = createStyle((_, appearence) => {
    const isDarkMode = appearence === RendererAppearance.dark;
    return StyleSheet.create({
        mark: {
            backgroundColor: isDarkMode ? "#E5C441" : "#F3DF84",
        },
    });
});

// May he give you the desire of your heart and make all your plans succeed.
// - Psalm 20:4

/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 17 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Italic Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle(() => {
    return StyleSheet.create({
        italic: {
            fontStyle: "italic",
        },
    });
});

// So then, let us not be like others, who are asleep, but let us
// be awake and sober.
// - 1 Thessalonians 5:6

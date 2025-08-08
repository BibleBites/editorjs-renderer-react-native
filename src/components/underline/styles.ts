/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Thur Mar 20 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Underline Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle(() => {
    return StyleSheet.create({
        underline: {
            textDecorationLine: "underline",
        },
    });
});

// Blessed are you when people insult you, persecute you and falsely say all
// kinds of evil against you because of me.
// - Matthew 5:11

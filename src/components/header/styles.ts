/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Header Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        text: {
            marginVertical: 8,
            color: theme.textPrimary,
        },
        h1: {
            fontWeight: "700",
            fontSize: 28,
        },
        h2: {
            fontWeight: "700",
            fontSize: 24,
        },
        h3: {
            fontWeight: "600",
            fontSize: 20,
        },
        h4: {
            fontWeight: "600",
            fontSize: 18,
        },
        h5: {
            fontWeight: "600",
            fontSize: 16,
        },
        h6: {
            fontWeight: "500",
            fontSize: 16,
        },
    });
});

// These are the things God has revealed to us by his Spirit. The Spirit
// searches all things, even the deep things of God.
// - 1 Corinthians 2:10

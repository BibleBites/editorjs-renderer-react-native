/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 17 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Link Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

const MAX_IMAGE_SIZE = 104;

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            width: "100%",
            borderRadius: 4,
            borderColor: theme.backgroundSecondary,
            borderStyle: "solid",
            borderWidth: 1,
            marginVertical: 8,
        },
        dataContainer: {
            flex: 1,
            padding: 12,
        },
        title: {
            color: theme.textPrimary,
            fontWeight: "600",
            fontSize: 16,
            height: 18,
        },
        description: {
            color: theme.textSecondary,
            marginTop: 4,
            fontSize: 14,
            height: 36,
        },
        link: {
            color: theme.textSecondary,
            fontWeight: "300",
            marginTop: 6,
            fontSize: 12,
            height: 16,
        },
        image: {
            width: MAX_IMAGE_SIZE,
            height: MAX_IMAGE_SIZE,
            resizeMode: "cover",
            borderTopEndRadius: 4,
        },
    });
});

// One who has unreliable friends soon comes to ruin,
// but there is a friend who sticks closer than a brother.
// - Proverbs 18:24

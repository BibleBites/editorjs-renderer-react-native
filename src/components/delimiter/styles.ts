/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: styles.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Delimiter Component Styles
 *
 */

import { StyleSheet } from "react-native";
import { createStyle } from "@/src/theme";

export const styles = createStyle((theme) => {
    return StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginVertical: 8,
            paddingVertical: 16,
        },
        delimiter: {
            marginHorizontal: 6,
            fontSize: 24,
            color: theme.textPrimary,
        },
    });
});

// About midnight Paul and Silas were praying and singing hymns to God, and
// the other prisoners were listening to them.
// - Acts 16:25

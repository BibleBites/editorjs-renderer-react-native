/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Thur Mar 20 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Preview Page
 *
 */

import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, type ImageProps, LinkTool, Renderer } from "@/src";
import { DEFAULT_THEME_STYLE } from "@/src/theme/style";
import { RendererAppearance, type RendererConfig } from "@/src/types";
import { EDITOR_DATA } from "./data";
import { Navigation } from "./navigation";

const RENDERER_CONFIG: RendererConfig = {
    enableFallback: true,
    components: {
        linkTool: LinkTool,
        image: (props: ImageProps) => (
            <Image
                {...props}
                getImageSize={(file) => {
                    const _file = file as {
                        url: string;
                        width: number | undefined;
                        height: number | undefined;
                    };
                    if (_file.width && _file.height) {
                        return [_file.width, _file.height];
                    }
                    return undefined;
                }}
            />
        ),
    },
};

export default () => {
    const [appearance, setAppearence] = useState(RendererAppearance.light);
    return (
        <SafeAreaView
            style={{
                height: "100%",
                backgroundColor:
                    DEFAULT_THEME_STYLE[appearance].backgroundPrimary,
            }}
        >
            <Navigation appearance={appearance} setAppearence={setAppearence} />
            <ScrollView style={{ paddingHorizontal: 10 }}>
                <Renderer
                    data={EDITOR_DATA}
                    config={RENDERER_CONFIG}
                    appearance={appearance}
                />
                <View style={{ height: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

// Be completely humble and gentle; be patient, bearing with one another in love.
// - Ephesians 4:2

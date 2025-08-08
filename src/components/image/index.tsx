/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 16 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Image Component
 *
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
    type LayoutChangeEvent,
    Image as NativeImage,
    Text,
    View,
} from "react-native";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { ImageProps } from "./types";

const FAILED_IMAGE_URL =
    "https://dummyimage.com/600x200/808080/fff&text=Failed+to+Load+Image";

export const Image = (props: ImageProps) => {
    const imageURL = useMemo(
        () => props.data.file?.url || props.data.url || FAILED_IMAGE_URL,
        [props.data],
    );
    const styles = useStyle(stylesheet, props.appearance);
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [containerWidth, setContainerWidth] = useState(-1);
    const [hasErrorOnSize, setHasErrorOnSize] = useState(false);

    useEffect(() => {
        if (containerWidth === -1) {
            return;
        }
        if (props.getImageSize) {
            const file = props.data.file || {
                url: props.data.url || FAILED_IMAGE_URL,
            };
            const dimensions = props.getImageSize(file);
            if (dimensions) {
                const [_width, _height] = dimensions;
                setWidth(containerWidth);
                setHeight((containerWidth * _height) / _width);
                return;
            }
        }
        NativeImage.getSize(
            imageURL,
            (w, h) => {
                setWidth(containerWidth);
                setHeight((containerWidth * h) / w);
            },
            () => {
                setHasErrorOnSize(true);
            },
        );
    }, [imageURL, props.data, containerWidth, props.getImageSize]);

    const onLayout = useCallback((event: LayoutChangeEvent) => {
        setContainerWidth(event.nativeEvent.layout.width);
    }, []);

    return (
        <View
            onLayout={onLayout}
            style={[styles.container, props.style?.container]}
            {...props.style?.container}
        >
            <View>
                {hasErrorOnSize ? (
                    <NativeImage
                        source={{ uri: imageURL }}
                        style={[styles.defaultImage, props.style?.image]}
                        {...props.properties?.image}
                    />
                ) : (
                    <NativeImage
                        source={{ uri: imageURL }}
                        style={[{ width, height }, props.style?.image]}
                        {...props.properties?.image}
                    />
                )}
            </View>

            {props.data.caption && (
                <Text
                    aria-hidden
                    style={[styles.caption, props.style?.caption]}
                    {...props.properties?.caption}
                >
                    {props.data.caption}
                </Text>
            )}
        </View>
    );
};

// But do not forget this one thing, dear friends: With the Lord a day is like
// a thousand years, and a thousand years are like a day.
// - 2 Peter 3:8

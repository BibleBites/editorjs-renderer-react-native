/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   original Author: Alexandre Hideki Siroma
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 19 2025
 *   file: index.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: List Component
 *
 */

import { useMemo } from "react";
import { Text, View } from "react-native";
import { useParser } from "@/src/parser";
import { useStyle } from "@/src/theme";
import { styles as stylesheet } from "./styles";
import type { ItemRenderProps, ListProps, ListRenderProps } from "./types";

export const List = (props: ListProps) => {
    return (
        <View style={props.style?.container} {...props.properties?.container}>
            <ListRender
                {...props}
                depth={0}
                items={props.data.items}
                listStyle={props.data.style}
            />
        </View>
    );
};

const ListRender = (props: ListRenderProps) => {
    return props.items.map((item, index) => (
        <ItemRender
            {...props}
            key={`${props.depth}-${index}`}
            index={index}
            item={item}
        />
    ));
};

const ItemRender = (props: ItemRenderProps) => {
    const styles = useStyle(stylesheet, props.appearance);
    const { parser } = useParser();
    const parsedText = useMemo(
        () => parser(props.config, props.appearance, props.item.content),
        [parser, props.config, props.appearance, props.item.content],
    );
    const getLabel = useMemo(
        () => props.getLabel || getLabelDefault,
        [props.getLabel],
    );
    const paddingLeft = useMemo(() => {
        const customPadding = props.style?.itemContainer?.paddingLeft;
        const defaultPadding = styles.itemContainer?.paddingLeft as number;
        return (
            ((customPadding || defaultPadding) as number) * (1 + props.depth)
        );
    }, [props.style, props.depth, styles.itemContainer.paddingLeft]);

    return (
        <>
            <View
                style={[
                    styles.itemContainer,
                    props.style?.itemContainer,
                    {
                        paddingLeft: paddingLeft,
                    },
                ]}
                {...props.properties?.itemContainer}
            >
                {props.listStyle === "unordered" && props.depth === 0 && (
                    <View
                        style={[
                            styles.bulletPrimary,
                            props.style?.bulletPrimary,
                        ]}
                        {...props.properties?.bulletPrimary}
                    />
                )}
                {props.listStyle === "unordered" && props.depth !== 0 && (
                    <View
                        style={[
                            styles.bulletSecondary,
                            props.style?.bulletSecondary,
                        ]}
                        {...props.properties?.bulletSecondary}
                    />
                )}
                {props.listStyle === "ordered" && props.depth === 0 && (
                    <Text
                        style={[
                            styles.numberPrimary,
                            props.style?.numberPrimary,
                        ]}
                        {...props.properties?.numberPrimary}
                    >
                        {getLabel(props.index, props.depth)}
                    </Text>
                )}
                {props.listStyle === "ordered" && props.depth !== 0 && (
                    <Text
                        style={[
                            styles.numberSecondary,
                            props.style?.numberSecondary,
                        ]}
                        {...props.properties?.numberSecondary}
                    >
                        {getLabel(props.index, props.depth)}
                    </Text>
                )}
                <Text
                    accessible
                    accessibilityRole="text"
                    allowFontScaling={true}
                    style={[styles.itemContent, props.style?.itemContent]}
                    {...props.properties?.itemContent}
                >
                    {parsedText}
                </Text>
            </View>
            {props.item.items.length > 0 && (
                <ListRender
                    {...props}
                    depth={props.depth + 1}
                    items={props.item.items}
                />
            )}
        </>
    );
};

function getLabelDefault(index: number, depth: number): string {
    if (depth === 0) {
        return `${index + 1})`;
    }
    return `${String.fromCharCode(97 + index)}.`;
}

// The Lord will fight for you; you need only to be still.
// - Exodus 14:14

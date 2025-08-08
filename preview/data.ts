/*
 *   Copyright (C) 2024 Bible Bytes.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Thur Mar 20 2025
 *   file: data.tsx
 *   project: EditorJS Renderer for React Native
 *   purpose: Preview - EditorJS Data
 *
 */

import type { EditorJSData } from "@/src/editorjs/types";

export const EDITOR_DATA: EditorJSData = {
    blocks: [
        {
            id: "header-1",
            type: "header",
            data: {
                text: "Header 1",
                level: 1,
            },
        },
        {
            id: "header-2",
            type: "header",
            data: {
                text: "Header 2",
                level: 2,
            },
        },
        {
            id: "header-3",
            type: "header",
            data: {
                text: "Header 3",
                level: 3,
            },
        },
        {
            id: "header-4",
            type: "header",
            data: {
                text: "Header 4",
                level: 4,
            },
        },
        {
            id: "paragraph-1",
            type: "paragraph",
            data: {
                text: "Hello World <b>Bold</b>, <i>italics</i>, <u>underline</u>, <mark>highligher</mark>, and <code>code</code>.",
            },
        },
        {
            id: "paragraph-2",
            type: "paragraph",
            data: {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu dapibus magna. vestibulum vitae erat nec, dictum efficitur turpis. Nullam sollicitudin hendrerit est, sit amet porttitor orci facilisis non. Curabitur feugiat ultricies dui convallis maximus. Sed at ipsum et arcu dictum posuere eu eu magna. Vestibulum molestie consectetur risus vel imperdiet. Aliquam dapibus id quam eu scelerisque. Maecenas ut ligula vel tortor maximus varius. Vestibulum a mauris elementum, euismod diam id, maximus felis. Praesent id felis ac odio luctus elementum. Morbi a massa non odio bibendum viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            },
        },
        {
            id: "delimiter-1",
            type: "delimiter",
            data: {},
        },
        {
            id: "paragraph-3",
            type: "paragraph",
            data: {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu dapibus magna. Donec nisi eros, vestibulum vitae erat nec, dictum efficitur turpis. Nullam sollicitudin hendrerit est, sit amet porttitor orci facilisis non. Curabitur feugiat ultricies dui convallis maximus. Sed at ipsum et arcu dictum posuere eu eu magna. Vestibulum molestie consectetur risus vel imperdiet. Aliquam dapibus id quam eu scelerisque. Maecenas ut ligula vel tortor maximus varius. Vestibulum a mauris elementum, euismod diam id, maximus felis. Praesent id felis ac odio luctus elementum. Morbi a massa non odio bibendum viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
            },
        },
        {
            id: "link-1",
            type: "linkTool",
            data: {
                link: "https://getbiblebites.com",
                meta: {
                    title: "BibleBites",
                    site_name: "BibleBites",
                    description:
                        "Engage with the Bible on a deeper level, in just a couple of minutes with our free Christian Bible study app, BibleBites. Deepen your understanding of scripture",
                    image: {
                        url: "https://avatars.githubusercontent.com/u/168451918?s=200&v=4",
                    },
                },
            },
        },
        {
            id: "personality-1",
            type: "personality",
            data: {
                name: "Elon Musk",
                description:
                    "Elon Reeve Musk FRS is a technology entrepreneur, investor, and engineer. He holds South African, Canadian, and U.S. citizenship and is the founder",
                link: "https://twitter.com/elonmusk",
                photo: "https://capella.pics/3c0e1b97-bc56-4961-b54e-2a6c2c3260f2.jpg",
            },
        },
        {
            id: "quote-1",
            type: "quote",
            data: {
                text: "The <b>unexamined</b> life is not worth living.",
                caption: "Socrates",
                alignment: "left",
            },
        },
        {
            id: "quote-2",
            type: "quote",
            data: {
                text: "The unexamined life is not worth living.",
                caption: "Socrates",
                alignment: "center",
            },
        },
        {
            id: "image-1",
            type: "image",
            data: {
                url: "https://getbiblebites.com/thumbnail.png",
                caption: "BibleBites",
                withBorder: false,
                withBackground: false,
                stretched: true,
            },
        },
        {
            id: "image-2",
            type: "image",
            data: {
                file: {
                    url: "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
                    width: 100,
                    height: 100,
                },
                caption: "Roadster // tesla.com",
                withBorder: false,
                withBackground: false,
                stretched: true,
            },
        },
        {
            id: "list-1",
            type: "list",
            data: {
                style: "unordered",
                items: [
                    {
                        content: "Apple",
                        meta: {},
                        items: [],
                    },
                    {
                        content: "Pears",
                        meta: {},
                        items: [],
                    },
                    {
                        content:
                            "Apple, Banana, Orange, Mango, Pineapple, Grape, Strawberry, Blueberry, Watermelon, Peach, Pear, Kiwi, Plum, Apricot, Pomegranate, Papaya, Cherry, Raspberry, Blackberry, Lemon, Lime",
                        meta: {},
                        items: [
                            {
                                content: "Strawberry",
                                meta: {},
                                items: [],
                            },
                            {
                                content: "Blueberry",
                                meta: {},
                                items: [],
                            },
                            {
                                content: "Watermelon",
                                meta: {},
                                items: [],
                            },
                            {
                                content:
                                    "Peach, Pear, Kiwi, Plum, Apricot, Pomegranate, Papaya, Cherry, Raspberry, Blackberry, Lemon, Lime",
                                meta: {},
                                items: [
                                    {
                                        content: "Cherry",
                                        meta: {},
                                        items: [],
                                    },
                                    {
                                        content: "Raspberry",
                                        meta: {},
                                        items: [],
                                    },
                                    {
                                        content: "Lemon",
                                        meta: {},
                                        items: [],
                                    },
                                    {
                                        content:
                                            "Pomegranate, Papaya, Cherry, Raspberry, Blackberry, Lemon, Lime",
                                        meta: {},
                                        items: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        content: "Papaya",
                        meta: {},
                        items: [],
                    },
                ],
            },
        },
        {
            id: "delimiter-2",
            type: "delimiter",
            data: {},
        },
        {
            id: "list-2",
            type: "list",
            data: {
                style: "ordered",
                items: [
                    {
                        content: "Apple",
                        meta: {},
                        items: [],
                    },
                    {
                        content: "Pears",
                        meta: {},
                        items: [],
                    },
                    {
                        content:
                            "Apple, Banana, Orange, Mango, Pineapple, Grape, Strawberry, Blueberry, Watermelon, Peach, Pear, Kiwi, Plum, Apricot, Pomegranate, Papaya, Cherry, Raspberry, Blackberry, Lemon, Lime",
                        meta: {},
                        items: [
                            {
                                content: "Strawberry",
                                meta: {},
                                items: [],
                            },
                            {
                                content: "Blueberry",
                                meta: {},
                                items: [],
                            },
                            {
                                content: "Watermelon",
                                meta: {},
                                items: [],
                            },
                            {
                                content:
                                    "Peach, Pear, Kiwi, Plum, Apricot, Pomegranate, Papaya, Cherry, Raspberry, Blackberry, Lemon, Lime",
                                meta: {},
                                items: [
                                    {
                                        content: "Cherry",
                                        meta: {},
                                        items: [],
                                    },
                                    {
                                        content: "Raspberry",
                                        meta: {},
                                        items: [],
                                    },
                                    {
                                        content: "Lemon",
                                        meta: {},
                                        items: [],
                                    },
                                    {
                                        content:
                                            "Pomegranate, Papaya, Cherry, Raspberry, Blackberry, Lemon, Lime",
                                        meta: {},
                                        items: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        content: "Papaya",
                        meta: {},
                        items: [],
                    },
                ],
            },
        },
    ],
};

// He holds success in store for the upright, he is a shield to those whose
// walk is blameless.
// - Proverbs 2:7

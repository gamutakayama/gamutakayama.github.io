import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  alias: {
    "@theme-hope/layouts/NotFound": path.resolve(
      __dirname,
      "./layouts/NotFound.vue"
    ),
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),
    "@theme-hope/modules/blog/components/InfoList": path.resolve(
      __dirname,
      "./components/InfoList.ts"
    ),
  },
  description: "我梦的笔记本",
  dest: "build",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/assets/icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/assets/icons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "/assets/icons/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-2048-2732.jpg",
        media:
          "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1668-2388.jpg",
        media:
          "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1536-2048.jpg",
        media:
          "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1488-2266.jpg",
        media:
          "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1640-2360.jpg",
        media:
          "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1668-2224.jpg",
        media:
          "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1620-2160.jpg",
        media:
          "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1290-2796.jpg",
        media:
          "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1179-2556.jpg",
        media:
          "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1284-2778.jpg",
        media:
          "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1170-2532.jpg",
        media:
          "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1125-2436.jpg",
        media:
          "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1242-2688.jpg",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-828-1792.jpg",
        media:
          "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-1242-2208.jpg",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-750-1334.jpg",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-startup-image",
        href: "/assets/images/apple-splash-640-1136.jpg",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
  ],
  lang: "zh-CN",
  shouldPrefetch: false,
  theme,
  title: "我梦的笔记本",
});

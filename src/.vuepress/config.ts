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
  ],
  lang: "zh-CN",
  shouldPrefetch: false,
  theme,
  title: "我梦的笔记本",
});

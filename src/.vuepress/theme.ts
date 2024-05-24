import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme(
  {
    author: {
      name: "我梦",
      url: "https://wome.ng",
    },
    blog: {
      articleInfo: ["Date", "Category", "Tag"],
    },
    contributors: false,
    displayFooter: true,
    docsDir: "src",
    hideSiteNameOnMobile: false,
    hostname: "https://wome.ng",
    lastUpdated: false,
    logo: "/assets/icons/favicon.svg",
    metaLocales: {
      toc: "目录",
    },
    pageInfo: ["Date", "Category", "Tag"],
    plugins: {
      blog: true,
      mdEnhance: {
        align: true,
        echarts: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        tasklist: true,
      },
      pwa: {
        apple: {
          icon: "/assets/icons/apple-icon-180.png",
          statusBarColor: "white",
        },
        cacheHTML: true,
        cacheImage: true,
        manifest: {
          icons: [
            {
              src: "/assets/icons/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/assets/icons/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/assets/icons/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/assets/icons/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
        themeColor: "#ffffff",
      },
    },
    print: false,
  },
  { custom: true }
);

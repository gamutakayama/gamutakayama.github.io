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
    darkmode: "disable",
    displayFooter: true,
    docsDir: "src",
    hideSiteNameOnMobile: false,
    hostname: "https://wome.ng",
    lastUpdated: false,
    logo: "/assets/icons/favicon.svg",
    metaLocales: {
      toc: "目录",
    },
    navbarAutoHide: "none",
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
    },
    print: false,
  },
  { custom: true }
);

import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "HelloWRC.Dev",
  description: "HelloWRC 的小站",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/icon/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/icon/favicon-16x16.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/icon/apple-touch-icon.png" }],
    ["link", { rel: "apple-touch-icon", sizes: "152x152", href: "/assets/icon/apple-icon-152.png" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "msapplication-TileImage", content: "/assets/icon/ms-icon-144.png" }],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

import { ViteToml } from "vite-plugin-toml";

import { DenoFixPlugin } from "./src/rollup-plugins/deno-fix";
import { ProcessVersionsNodePlugin } from "./src/rollup-plugins/process-versions-node";

export default defineNuxtConfig({
  srcDir: "src/",
  build: { transpile: ["vscode-textmate"] },
  vite: {
    plugins: [ViteToml()],
  },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/critters",
    "@nuxtjs/robots",
    "unplugin-icons/nuxt",
  ],
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  colorMode: {
    fallback: "light",
    dataValue: "theme",
  },
  googleFonts: {
    families: {
      "EB Garamond": {
        wght: [400, 500, 700],
        ital: [400, 700],
      },
      "Noto Serif SC": [400, 500, 700],
      "Source Code Pro": {
        wght: [400, 700],
        ital: [400, 700],
      },
      "Cinzel Decorative": {
        wght: [700],
      },
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "zh",
        file: "zh.json",
      },
    ],
    langDir: "i18n",
    defaultLocale: "zh",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  nitro: {
    rollupConfig: {
      // @ts-expect-error ???
      plugins: [DenoFixPlugin(), ProcessVersionsNodePlugin()],
    },
  },
  experimental: {
    watcher: "parcel",
  },
  typescript: {
    shim: false,
  },
});

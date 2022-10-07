import { ViteToml } from "vite-plugin-toml";

export default defineNuxtConfig({
  srcDir: "src/",
  vite: {
    plugins: [
      // @ts-expect-error Ignore type error
      ViteToml(),
    ],
  },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "unplugin-icons/nuxt",
  ],
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
    },
  },
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.yaml",
      },
      {
        code: "zh",
        file: "zh.yaml",
      },
    ],
    // TODO: Remove lazy when nuxt-community/i18n-module#1518 is fixed
    lazy: true,
    langDir: "i18n/",
    defaultLocale: "zh",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
  experimental: {
    reactivityTransform: true,
  },
});

import { ViteToml } from "vite-plugin-toml";

export default defineNuxtConfig({
  srcDir: "src/",
  vite: {
    plugins: [
      // @ts-expect-error Ignore type error
      ViteToml(),
    ],
  },
  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "unplugin-icons/nuxt",
  ],
  colorMode: {
    classSuffix: "",
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
  experimental: {
    reactivityTransform: true,
  },
});

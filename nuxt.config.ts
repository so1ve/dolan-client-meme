import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    ["@pinia/nuxt", { disableVuex: false }],
  ],
  typescript: {
    shim: false,
  },
  experimental: {
    reactivityTransform: true,
  },
});

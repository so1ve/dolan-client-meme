<script setup lang="ts">
import "./styles/main.scss";

const configStore = useConfigStore();
await configStore.fetchConfig();

const customConfig = $computed(() => configStore.config.custom);

useHead({
  title: "Index",
  titleTemplate: `%s | ${customConfig.title}`,
  meta: [
    { name: "description", content: customConfig.siteDescription },
    { name: "author", content: customConfig.author.name },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    { name: "apple-mobile-web-app-title", content: customConfig.title },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "application-name", content: customConfig.title },
  ],
  link: [
    { rel: "shortcut icon", href: customConfig.favicon },
    { rel: "apple-touch-icon", sizes: "180x180", href: customConfig.appleTouchIcon },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
// stylelint-disable-next-line selector-id-pattern
#__nuxt {
  width: 100%;
  height: 100%;
}
</style>

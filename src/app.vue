<script setup lang="ts">
import "./styles/main.scss";

const configStore = useConfigStore();
const { t } = useI18n();

await configStore.fetchConfig();

const siteConfig = computed(() => configStore.config.site);
const customConfig = computed(() => configStore.config.custom);

useHead({
  title: t("index.other"),
  titleTemplate: `%s | ${siteConfig.value.name}`,
  meta: [
    { name: "description", content: siteConfig.value.description },
    { name: "author", content: customConfig.value.author.name },
    { name: "keywords", content: siteConfig.value.keywords.join(", ") },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    { name: "apple-mobile-web-app-title", content: customConfig.value.title },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "application-name", content: customConfig.value.title },
  ],
  link: [
    { rel: "shortcut icon", href: customConfig.value.favicon },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: customConfig.value.appleTouchIcon,
    },
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

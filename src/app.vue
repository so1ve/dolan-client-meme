<script setup lang="ts">
import "./styles/main.scss";

useHead({
  title: "Dolan Client MemE",
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

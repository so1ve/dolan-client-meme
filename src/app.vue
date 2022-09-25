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

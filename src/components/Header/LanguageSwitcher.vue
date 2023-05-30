<script setup lang="ts">
const { locale, setLocale } = useI18n();

const isEnglish = computed(() => locale.value === "en");

function switchLanguage() {
  setLocale(locale.value === "en" ? "zh" : "en");
}
</script>

<template>
  <span class="language-switcher" @click="switchLanguage">
    <span v-if="isEnglish">🇺🇸</span>
    <span v-else>🇨🇳</span>
  </span>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.language-switcher {
  z-index: 4;
  display: inline-flex;
  align-items: center;
  color: var(--color-contrast-medium);
  cursor: pointer;
  transition: color $duration;

  &:hover {
    color: var(--color-primary);
  }
}
</style>

<script setup lang="ts">
const colorMode = useColorMode();

const isLight = computed(() => colorMode.preference === "light");
function toggleColorMode (e: MouseEvent) {
  e.preventDefault();
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
}
</script>

<template>
  <ColorScheme placeholder="🌓">
    <a class="theme-switcher" href="#" @click="toggleColorMode">
      <Icon v-if="isLight" icon="sun" />
      <Icon v-else icon="moon" />
    </a>
  </ColorScheme>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.theme-switcher {
  z-index: 4;
  color: var(--color-contrast-medium);
  transition: color $duration;

  &:hover {
    color: var(--color-primary);
  }

  .icon {
    margin-right: 0 !important;
  }
}
</style>

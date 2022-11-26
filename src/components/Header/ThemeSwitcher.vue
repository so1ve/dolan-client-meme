<script setup lang="ts">
import { ColorScheme as _ColorScheme } from "#components";
// Workaround: Type
const ColorScheme = defineComponent(_ColorScheme);

const colorMode = useColorMode();

const isLight = $computed(() => colorMode.preference === "light");
function toggleColorMode (e: MouseEvent) {
  e.preventDefault();
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
}
</script>

<template>
  <ColorScheme placeholder="🌓">
    <span class="theme-switcher" @click="toggleColorMode">
      <Icon v-if="isLight" icon="sun" />
      <Icon v-else icon="moon" />
    </span>
  </ColorScheme>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.theme-switcher {
  z-index: 4;
  color: var(--color-contrast-medium);
  cursor: pointer;
  transition: color $duration;

  &:hover {
    color: var(--color-primary);
  }

  .icon {
    margin-right: 0 !important;
  }
}
</style>

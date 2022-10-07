<script setup lang="ts">
import SVG from "@/data/SVG.toml";

const props = defineProps<{
  icon: string
}>();

const icon = computed(() => SVG[props.icon]);
</script>

<template>
  <span class="icon" v-html="icon" />
</template>

<style scoped lang="scss">
.icon {
  display: inline-flex;
  align-items: center;
  width: 1.05em;
  height: 1em;
  margin: 0 0.3em 0 0;
  fill: currentColor;
}
</style>

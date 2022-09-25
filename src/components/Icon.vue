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
  display: inline-block;
  width: 1.05em;
  height: 1em;
  fill: currentColor;
}
</style>

<script setup lang="ts">
interface FontAwesomeIconProps {
  border?: boolean;
  fixedWidth?: boolean;
  flip?: "horizontal" | "vertical" | "both";
  icon: object | Array<string> | string;
  mask?: object | Array<string> | string;
  listItem?: boolean;
  pull?: "right" | "left";
  pulse?: boolean;
  rotation?: 90 | 180 | 270 | "90" | "180" | "270";
  swapOpacity?: boolean;
  size?:
    | "lg"
    | "xs"
    | "sm"
    | "1x"
    | "2x"
    | "3x"
    | "4x"
    | "5x"
    | "6x"
    | "7x"
    | "8x"
    | "9x"
    | "10x";
  spin?: boolean;
  transform?: object | string;
  symbol?: boolean | string;
  title?: string;
  inverse?: boolean;
}

const props = defineProps<FontAwesomeIconProps>();
</script>

<template>
  <ClientOnly>
    <FAIcon class="icon" v-bind="props" />
  </ClientOnly>
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

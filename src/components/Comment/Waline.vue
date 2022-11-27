<script setup lang="ts">
import type { WalineInitOptions } from "@waline/client";
// @ts-expect-error Ignore type
import { Waline as _Waline } from "@waline/client/dist/component.mjs";
import "@waline/client/dist/waline.css";

const props = defineProps<{
  config: WalineInitOptions
}>();

// Workaround
const Waline = defineComponent<Omit<WalineInitOptions, "el">>(_Waline);

const route = useRoute();
const colorMode = useColorMode();

const path = $computed(() => route.path);
const darkmode = $computed(() => colorMode.preference === "dark");
</script>

<template>
  <Waline v-bind="props.config" :path="path" :dark="darkmode" />
</template>

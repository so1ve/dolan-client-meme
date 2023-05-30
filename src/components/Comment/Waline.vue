<script setup lang="ts">
import type { WalineInitOptions } from "@waline/client";
// @ts-expect-error Ignore type
import { Waline as _Waline } from "@waline/client/dist/component.mjs";
import "@waline/client/dist/waline.css";

const props = defineProps<{
  config: WalineInitOptions;
}>();

// Workaround
const Waline = defineComponent<Omit<WalineInitOptions, "el">>(_Waline);

const route = useRoute();
const colorMode = useColorMode();
const { locale } = useI18n();

const path = computed(() => route.path);
const darkmode = computed(() =>
  typeof window === "undefined" ? "auto" : colorMode.value === "dark",
);
</script>

<template>
  <Waline v-bind="props.config" :dark="darkmode" :lang="locale" :path="path" />
</template>

<script setup lang="ts">
import type { FetchError } from "ohmyfetch";

const props = defineProps<{
  error: true | Error | null
}>();
</script>

<template>
  <template v-if="props.error">
    <slot name="error" />
  </template>
  <template v-else>
    <slot />
  </template>
</template>

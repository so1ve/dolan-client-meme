<script setup lang="ts">
// Workaround
const props = defineProps<{
  error: any;
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

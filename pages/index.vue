<script setup lang="ts">
const route = useRoute();
const name = computed(() => route.params.name);

const appStore = useAppStore();
</script>

<template>
  <div>
    Hello {{ name }}!
    Hello {{ appStore.name }}
  </div>
</template>

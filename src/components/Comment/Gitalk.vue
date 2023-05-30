<script setup lang="ts">
// Hey copilot!
// Implement gitalk comment component

import Gitalk from "gitalk";
import "gitalk/dist/gitalk.css";

const props = defineProps<{
  config: Gitalk.GitalkOptions;
}>();

const route = useRoute();

const containerRef = ref<HTMLElement | null>(null);
const id = computed(() => route.path);

onMounted(() => {
  const gitalk = new Gitalk({
    ...props.config,
    id: id.value,
  });
  gitalk.render(containerRef.value!);
});
</script>

<template>
  <div ref="containerRef" />
</template>

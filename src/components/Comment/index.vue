<script setup lang="ts">
import type { ConfigSchema } from "@/types/config";

const props = defineProps<{
  config: ConfigSchema["comment"];
}>();
</script>

<template>
  <ClientOnly>
    <CommentWaline
      v-if="props.config.type === 'waline'"
      :config="props.config"
    />
    <CommentGitalk
      v-else-if="props.config.type === 'gitalk'"
      :config="props.config"
    />
  </ClientOnly>
</template>

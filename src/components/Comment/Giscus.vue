<script setup lang="ts">
import Giscus from "@giscus/vue";

const props = defineProps<{
  name: string
}>();
</script>

<template>
  <Giscus
    id="comments"
    repo="giscus/giscus-component"
    repo-id="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
    category="Announcements"
    category-id="DIC_kwDOF1L2fM4B-hVS"
    mapping="specific"
    term="Welcome to @giscus/react component!"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    theme="light"
    lang="en"
    loading="lazy"
  />
</template>

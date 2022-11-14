<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const route = useRoute();
const slug = $computed(() => route.params.slug);
const tagApiUrl = $computed(() => `/api/tags/${slug}` as const);
const { data: tagData, error: tagError } = await useAsyncData(tagApiUrl, () => $fetch(tagApiUrl));
const { data, error } = await useFetch("/api/posts", { query: { tag: slug } });

let posts = $ref([] as Post[]);
let title = $ref("");
if (tagData.value && data.value) {
  if (tagData.value.code === 404) {
    throw notFound();
  // TODO
  }
  posts = data.value.data;
  title = `Tag: ${tagData.value.data.name}`;
  useHead({
    title,
  });
}
</script>

<template>
  <div>
    <List :title="title" :posts="posts" />
  </div>
</template>

<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const route = useRoute();
const slug = $computed(() => route.params.slug);
const categoryAPIURL = $computed(() => `/api/categories/${slug}` as const);
const { data: categoryData, error: categoryError } = await useAsyncData(categoryAPIURL, () => $fetch(categoryAPIURL));
const { data, error } = await useAsyncData(`/api/posts?category=${slug}`, () => $fetch("/api/posts", { query: { category: slug } }));

let posts = $ref([] as Post[]);
let title = $ref("");
if (categoryData.value && data.value) {
  if (categoryData.value.code === 404) {
    throw notFound();
  // TODO
  }
  posts = data.value.data;
  title = `Category: ${categoryData.value.data.name}`;
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

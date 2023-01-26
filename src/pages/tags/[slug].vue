<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const route = useRoute();
const { t } = useI18n();

const slug = $computed(() => route.params.slug);
const tagAPIURL = $computed(() => `/api/tags/${slug}` as const);
const { data: tagData, error: tagError } = await useAsyncData(tagAPIURL, () => $fetch(tagAPIURL));
const { data } = await useAsyncData(`/api/posts?tag=${slug}`, () => $fetch("/api/posts", { query: { tag: slug } }));

let posts = $ref([] as Post[]);
let title = $ref("");
if (tagData.value && data.value) {
  if (tagData.value.code === 404) {
    throw notFound();
  // TODO
  }
  posts = data.value.data;
  title = `${t("tags.one")}: ${tagData.value.data.name}`;
  useHead({
    title,
  });
}
</script>

<template>
  <div>
    <List :posts="posts" :title="title" />
  </div>
</template>

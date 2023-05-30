<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const route = useRoute();
const { t } = useI18n();

const slug = computed(() => route.params.slug);
const tagAPIURL = computed(() => `/api/tags/${slug}` as const);
const { data: tagData } = await useAsyncData(tagAPIURL.value, () =>
  $fetch(tagAPIURL.value),
);
const { data } = await useAsyncData(`/api/posts?tag=${slug}`, () =>
  $fetch("/api/posts", { query: { tag: slug } }),
);

const posts = ref([] as Post[]);
const title = ref("");
if (tagData.value && data.value) {
  if (tagData.value.code === 404) {
    throw notFound();
    // TODO
  }
  posts.value = data.value.data;
  title.value = `${t("tags.one")}: ${tagData.value.data.name}`;
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

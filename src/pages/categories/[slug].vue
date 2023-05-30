<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const route = useRoute();
const { t } = useI18n();

const slug = computed(() => route.params.slug);
const categoryAPIURL = computed(() => `/api/categories/${slug}` as const);
const { data: categoryData } = await useAsyncData(categoryAPIURL.value, () =>
  $fetch(categoryAPIURL.value),
);
const { data } = await useAsyncData(`/api/posts?category=${slug}`, () =>
  $fetch("/api/posts", { query: { category: slug } }),
);

const posts = ref([] as Post[]);
const title = ref("");
if (categoryData.value && data.value) {
  if (categoryData.value.code === 404) {
    throw notFound();
  }
  posts.value = data.value.data;
  title.value = `${t("categories.one")}: ${categoryData.value.data.name}`;
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

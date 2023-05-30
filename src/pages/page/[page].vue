<script setup lang="ts">
import type { Metas, Post } from "@dolan-x/shared";

const route = useRoute();
const page = +route.params.page;
const { data, error } = await useFetch("/api/posts", {
  query: { page },
});
const posts = ref([] as Post[]);
const metas = ref({} as Metas);
if (data.value) {
  if (data.value.data.length === 0) {
    throw notFound();
  }
  posts.value = data.value.data;
  metas.value = data.value.metas;
}
</script>

<template>
  <div class="home">
    <ErrorWrapper :error="error">
      <HomePost :metas="metas" :posts="posts" />
    </ErrorWrapper>
  </div>
</template>

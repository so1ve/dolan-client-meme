<script setup lang="ts">
import type { Metas, Post } from "@dolan-x/shared";
const route = useRoute();
const page = +route.params.page;
const { data, error } = await useFetch("/api/posts", {
  query: { page },
});
let posts = $ref([] as Post[]);
let metas = $ref({} as Metas);
if (data.value) {
  if (data.value.data.length === 0) {
    throw notFound();
  }
  posts = data.value.data;
  metas = data.value.metas;
}
</script>

<template>
  <div class="home">
    <ErrorWrapper :error="error">
      <HomePost :metas="metas" :posts="posts" />
    </ErrorWrapper>
  </div>
</template>

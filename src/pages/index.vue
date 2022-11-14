<script setup lang="ts">
import type { Metas, Post } from "@dolan-x/shared";

const { data, error } = await useFetch("/api/posts");

let posts = $ref([] as Post[]);
let metas = $ref({} as Metas);
if (data.value) {
  posts = data.value.data;
  metas = data.value.metas;
}
useHead({
  title: "Posts",
});
</script>

<template>
  <div class="home">
    <ErrorWrapper :error="error">
      <HomePost :posts="posts" :metas="metas" />
    </ErrorWrapper>
  </div>
</template>

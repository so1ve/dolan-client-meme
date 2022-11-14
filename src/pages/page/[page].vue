<script setup lang="ts">
import type { Metas, Post } from "@dolan-x/shared";
const route = useRoute();
const page = +route.params.page;
const { data, error } = await useFetch("/api/posts", {
  query: { page },
});
let posts: Post[];
let metas: Metas;
if (data.value) {
  posts = data.value.data;
  metas = data.value.metas;
}
</script>

<template>
  <div class="home">
    <ErrorWrapper :error="error">
      <HomePost :posts="posts" :metas="metas" />
      <!-- <template #error>
        <div>
          1
        </div>
      </template> -->
    </ErrorWrapper>
  </div>
</template>

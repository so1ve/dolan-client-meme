<script setup lang="ts">
import type { Metas, Post } from "@dolan-x/shared";

const { t } = useI18n();

const { data, error } = await useFetch("/api/posts");

let posts = $ref([] as Post[]);
let metas = $ref({} as Metas);
if (data.value) {
  posts = data.value.data;
  metas = data.value.metas;
}
useHead({
  title: t("home.other"),
});
</script>

<template>
  <div class="home">
    <ErrorWrapper :error="error">
      <HomePost :metas="metas" :posts="posts" />
    </ErrorWrapper>
  </div>
</template>

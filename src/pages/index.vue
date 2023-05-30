<script setup lang="ts">
import type { Metas, Post } from "@dolan-x/shared";

const { t } = useI18n();

const { data, error } = await useFetch("/api/posts");

const posts = ref([] as Post[]);
const metas = ref({} as Metas);

if (data.value) {
  posts.value = data.value.data;
  metas.value = data.value.metas;
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

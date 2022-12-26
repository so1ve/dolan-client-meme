<script setup lang="ts">
import type { Post, Tag } from "@dolan-x/shared";

const route = useRoute();
const configStore = useConfigStore();
const customConfig = $computed(() => configStore.config.custom);

const slug = $computed(() => route.params.slug);
const apiURL = $computed(() => `/api/posts/${slug}` as const);
const { data, error } = await useAsyncData(apiURL, () => $fetch(apiURL));

let post = $ref({} as Post);
let tags = $ref([] as Tag[]);
let title = $ref("");
let renderedContent = $ref("");
if (data.value) {
  if (data.value.code === 404) {
    throw notFound();
  // TODO
  }
  post = data.value.data;
  title = post.title;
  renderedContent = await useRenderMarkdown(post.content);
  const slugString = $computed(() => post.tags.join(","));
  const { data: tagData } = await useAsyncData(`/api/tags/slug:${slugString}`, () => $fetch("/api/tags", {
    query: {
      slugs: slugString,
    },
  }));
  tags = tagData.value!.data;
  useHead({
    title: post.title,
  });
}
</script>

<template>
  <div>
    <ErrorWrapper :error="error">
      <Article :rendered-content="renderedContent" :title="title">
        <template #meta>
          <PostMeta :post="post" />
        </template>
      </Article>
      <PostMinimalFooter :tags="tags" />
      <PostDonate />
      <ClientOnly>
        <PostShare :post="post" :tags="tags" />
      </ClientOnly>
      <template v-if="customConfig.comment">
        <br>
        <Comment :config="customConfig.comment" />
      </template>
    </ErrorWrapper>
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@import "@/styles/variables.scss";
@import "@/styles/utils/functions.scss";

.single .main-inner {
  width: $postWidth;
}
</style>

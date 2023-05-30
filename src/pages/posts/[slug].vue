<script setup lang="ts">
import type { Post, Tag } from "@dolan-x/shared";

const route = useRoute();
const configStore = useConfigStore();
const customConfig = computed(() => configStore.config.custom);

const slug = computed(() => route.params.slug);
const apiURL = computed(() => `/api/posts/${slug}` as const);
const { data, error } = await useAsyncData(apiURL.value, () =>
  $fetch(apiURL.value),
);

const post = ref({} as Post);
const tags = ref([] as Tag[]);
const title = ref("");
const renderedContent = ref("");
if (data.value) {
  if (data.value.code === 404) {
    throw notFound();
    // TODO
  }
  post.value = data.value.data;
  title.value = post.value.title;
  renderedContent.value = await useRenderMarkdown(post.value.content);
  const slugString = computed(() => post.value.tags.join(","));
  const { data: tagData } = await useAsyncData(
    `/api/tags/slug:${slugString.value}`,
    () =>
      $fetch("/api/tags", {
        query: {
          slugs: slugString.value,
        },
      }),
  );
  tags.value = tagData.value!.data;
  useHead({
    title: post.value.title,
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
        <br />
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

<script setup lang="ts">
import type { Page } from "@dolan-x/shared";

const route = useRoute();
const configStore = useConfigStore();

const customConfig = computed(() => configStore.config.custom);

const slug = computed(() => route.params.slug);
const apiURL = computed(() => `/api/pages/${slug}` as const);
const { data, error } = await useAsyncData(apiURL.value, () =>
  $fetch(apiURL.value),
);

const page = ref({} as Page);
const title = ref("");
const renderedContent = ref("");
if (data.value) {
  if (data.value.code === 404) {
    throw notFound();
  }
  page.value = data.value.data;
  title.value = page.value.title;
  renderedContent.value = await useRenderMarkdown(page.value.content);
  useHead({
    title: page.value.title,
  });
}
</script>

<template>
  <div>
    <ErrorWrapper :error="error">
      <Article :rendered-content="renderedContent" :title="title" />
      <PostDonate />
      <template v-if="customConfig.comment">
        <br />
        <Comment :config="customConfig.comment" />
      </template>
    </ErrorWrapper>
  </div>
</template>

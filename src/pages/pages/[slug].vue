<script setup lang="ts">
import type { Page } from "@dolan-x/shared";

const route = useRoute();
const configStore = useConfigStore();

const customConfig = $computed(() => configStore.config.custom);

const slug = $computed(() => route.params.slug);
const apiURL = $computed(() => `/api/pages/${slug}` as const);
const { data, error } = await useAsyncData(apiURL, () => $fetch(apiURL));

let page = $ref({} as Page);
let title = $ref("");
let renderedContent = $ref("");
if (data.value) {
  if (data.value.code === 404) {
    throw notFound();
  // TODO
  }
  page = data.value.data;
  title = page.title;
  renderedContent = await useRenderMarkdown(page.content);
  useHead({
    title: page.title,
  });
}
</script>

<template>
  <div>
    <ErrorWrapper :error="error">
      <Article :rendered-content="renderedContent" :title="title" />
      <template v-if="customConfig.comment">
        <br>
        <Comment :config="customConfig.comment" />
      </template>
    </ErrorWrapper>
  </div>
</template>

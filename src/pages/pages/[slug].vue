<script setup lang="ts">
import type { Page } from "@dolan-x/shared";

const route = useRoute();
const slug = $computed(() => route.params.slug);
const apiURL = $computed(() => `/api/pages/${slug}` as const);
const { data, error } = await useAsyncData(apiURL, () => $fetch(apiURL));

let page = $ref({} as Page);
let renderedTitle = $ref("");
let renderedContent = $ref("");
if (data.value) {
  if (data.value.code === 404) {
    throw notFound();
  // TODO
  }
  page = data.value.data;
  renderedTitle = await useRenderMarkdown(page.title);
  renderedContent = await useRenderMarkdown(page.content);
}
</script>

<template>
  <div>
    <ErrorWrapper :error="error">
      <Article :rendered-content="renderedContent" :rendered-title="renderedTitle" />
    </ErrorWrapper>
  </div>
</template>

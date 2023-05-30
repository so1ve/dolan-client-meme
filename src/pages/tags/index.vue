<script setup lang="ts">
import type { Tag } from "@dolan-x/shared";

const { t } = useI18n();
const { data, error } = await useFetch("/api/tags");

const tags = ref([] as Tag[]);
if (data.value) {
  tags.value = data.value.data;
}

useHead({
  title: t("tags.other"),
});
</script>

<template>
  <div class="content tag-cloud">
    <ErrorWrapper :error="error">
      <h1 class="list-title">
        <!-- TODO: Get title from config -->
        Tags
      </h1>
      <!-- TODO: different sizes -->
      <NuxtLink
        v-for="tag in tags"
        :key="tag.slug"
        class="tag-cloud-item"
        :to="useTagLink(tag.slug)"
      >
        {{ tag.name }}
      </NuxtLink>
    </ErrorWrapper>
  </div>
</template>

<style scoped lang="scss">
.tag-cloud {
  text-align: center;
}

.tag-cloud-item {
  display: inline-block;
  margin: 0.5rem;
}
</style>

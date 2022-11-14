<script setup lang="ts">
import type { Tag } from "@dolan-x/shared";

const { data, error } = await useFetch("/api/tags");

let tags: Tag[];
if (data.value) {
  tags = data.value.data;
}
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
        :to="useTagLink(tag.slug)"
        class="tag-cloud-item"
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

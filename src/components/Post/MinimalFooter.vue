<script setup lang="ts">
import type { Tag } from "@dolan-x/shared";

const props = defineProps<{
  tags: Tag[]
}>();
</script>

<template>
  <footer class="minimal-footer">
    <div class="post-tag">
      <NuxtLink v-for="tag, i in props.tags" :key="tag.slug" :to="useTagLink(tag.slug)" rel="tag" class="post-tag-link">
        <template v-if="i > 0">
&nbsp;
        </template>
        #{{ tag.name }}
      </NuxtLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";

.minimal-footer {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 5rem;
  font-size: 80%;
  line-height: 2;
}

.post-tag,
.post-category {
  max-width: 42%;
}

.post-category {
  text-align: right;

  .active {
    color: var(--color-contrast-high);
  }
}

.post-tag-link,
.post-category-link {
  display: inline-block;
}

.post-category-link,
.post-category {
  color: alpha(var(--color-contrast-medium), 0.9);
}
</style>

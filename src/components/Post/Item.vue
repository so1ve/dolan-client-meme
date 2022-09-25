<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post
}>();
</script>

<template>
  <article class="content post home">
    <h2 class="post-title">
      <NuxtLink :href="getPostSlug(props.post.slug)" class="summary-title-link">
        {{ props.post.title }}
      </NuxtLink>
    </h2>
    <PostMeta :post="props.post" />
    <!-- {{ partial "components/post-meta.html" (dict "$" . "isHome" true) }} -->
    <summary class="summary">
      {{ props.post.excerpt }}
    </summary>
    <div class="read-more-container">
      <NuxtLink :href="getPostSlug(props.post.slug)" class="read-more-link">
        <!-- {{ i18n "readMore" }} » -->
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/layout/single.scss";

article.content.post.home {
  margin-top: 5em;
}

.summary-title-link {
  color: var(--color-contrast-higher);
}

.summary {
  display: block;
  line-height: $lineHeight;
}

.read-more-container {
  margin-top: 1.618em;
  text-align: center;
}

.read-more-link {
  display: inline-block;
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin: 5em 0 0;
  padding: 0;
  list-style: none;

  &-prev {
    margin-right: auto;
  }

  &-next {
    margin-left: auto;
    text-align: right;
  }
}
</style>

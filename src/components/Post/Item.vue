<script setup lang="ts">
import { renderMarkdownSync } from "@dolan-x/markdown-renderer";
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post;
}>();

const localePath = useLocalePath();

const renderedExcerpt = computed(() => renderMarkdownSync(props.post.excerpt));
</script>

<template>
  <article class="content home post">
    <h2 class="post-title">
      <NuxtLink
        class="summary-title-link"
        :to="localePath(usePostLink(props.post.slug))"
      >
        {{ props.post.title }}
      </NuxtLink>
    </h2>
    <PostMeta :post="props.post" />
    <summary class="summary" v-html="renderedExcerpt" />
    <div class="read-more-container">
      <NuxtLink
        class="read-more-link"
        :to="localePath(usePostLink(props.post.slug))"
      >
        {{ $t("readMore.other") }}
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

  &:hover {
    color: var(--color-primary);
  }
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

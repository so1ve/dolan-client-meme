<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  posts: Post[]
}>();
</script>

<template>
  <!-- {{ range $paginator.Pages }} -->
  <PostItem v-for="post in props.posts" :key="post.slug" :post="post" />
  <!-- <ul class="pagination">
        {{ if $paginator.HasPrev }}
        <li class="pagination-prev">
          <a href="{{ $paginator.Prev.URL }}" rel="prev">&lt; {{ i18n "prevPage" }}</a>
        </li>
        {{ end }}
        {{ if $paginator.HasNext }}
        <li class="pagination-next">
          <a href="{{ $paginator.Next.URL }}" rel="next">{{ i18n "nextPage" }} &gt;</a>
        </li>
      </ul> -->
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

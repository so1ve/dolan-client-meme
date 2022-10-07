<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  posts: Post[]
  metas: Record<string, any>
}>();
const localePath = useLocalePath();
const route = useRoute();
const page = +(route.params.page || 1);

const hasPrev = $computed(() => page > 1 && props.metas.pages > 1);
const prevLink = $computed(() => page - 1 === 1 ? "/" : `/page/${page - 1}`);
const hasNext = $computed(() => page < props.metas.pages);
const nextLink = $computed(() => `/page/${page + 1}`);
</script>

<template>
  <!-- {{ range $paginator.Pages }} -->
  <div>
    <PostItem v-for="post in props.posts" :key="post.slug" :post="post" />
    <ul class="pagination">
      <li v-if="hasPrev" class="pagination-prev">
        <NuxtLink :to="localePath(prevLink)" rel="prev">
          &lt; {{ $t('prevPage') }}
        </NuxtLink>
      </li>
      <li v-if="hasNext" class="pagination-next">
        <NuxtLink :to="localePath(nextLink)" rel="prev">
          {{ $t('nextPage') }} &gt;
        </NuxtLink>
      </li>
    </ul>
  </div>
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

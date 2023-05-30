<script setup lang="ts">
import type { Category, Post } from "@dolan-x/shared";

const { t } = useI18n();

const { data: categoriesData, error: categoriesError } = await useFetch(
  "/api/categories",
);
const { data: postsData } = await useFetch("/api/posts", {
  params: { all: "" },
});

const categories = ref([] as Category[]);
if (categoriesData.value) {
  categories.value = categoriesData.value.data;
}
const posts = ref([] as Post[]);
if (postsData.value) {
  posts.value = postsData.value.data;
}

const map = new Map<Category, Post[]>();
for (const post of posts.value) {
  const category = categories.value.find(
    (category) => category.slug === post.category,
  );
  if (category) {
    if (map.has(category)) {
      map.get(category)!.push(post);
    } else {
      map.set(category, [post]);
    }
  }
}

useHead({
  title: t("categories.other"),
});
</script>

<template>
  <div class="content">
    <ErrorWrapper :error="categoriesError">
      <h1 class="list-title">
        <!-- TODO: Get title from config -->
        Categories
      </h1>
      <div class="tree">
        <ul class="list-categories">
          <li v-for="item in map" :key="item[0].slug">
            <NuxtLink class="category-item" :to="useCategoryLink(item[0].slug)">
              {{ item[0].name }}
            </NuxtLink>
            <span class="category-count">({{ item[1].length }})</span>
            <ul class="list-posts">
              <li v-for="post in item[1]" :key="post.slug">
                <NuxtLink class="category-post" :to="usePostLink(post.slug)">
                  {{ post.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </ErrorWrapper>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";

.list-title {
  text-align: center;
}

.tree {
  overflow: auto hidden;
  white-space: nowrap;

  ul {
    padding-left: 2.4em;
  }

  & > ul {
    padding: 0;
  }
}

.list-categories > li {
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    top: 2.4em;
    left: 0.1em;
    width: 0.2em;
    height: calc(100% - 2.8em);
    background: var(--color-contrast-lower);
  }
}

.category-item {
  color: var(--color-primary);
  font-size: 1.2em;

  &:hover {
    color: alpha(var(--color-primary), 0.75);
  }
}

.category-count {
  color: var(--color-contrast-medium);
}

.category-post {
  &:hover {
    color: var(--color-contrast-medium);
  }
}
</style>

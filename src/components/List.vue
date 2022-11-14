<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

import { renderMarkdown } from "@dolan-x/markdown-renderer";
import chineseZodiac from "@/data/ChineseZodiac.toml";

const props = defineProps<{
  title: string
  posts: Post[]
}>();

const getZodiac = (year: number) => {
  const zodiac = chineseZodiac[year % 12];
  return zodiac;
};

const groupByYearedPosts = $computed(() => {
  const yearedPosts = props.posts.reduce((acc, post) => {
    const year = new Date(post.created).getFullYear();
    const zodiac = getZodiac(year);
    if (!acc[year]) {
      acc[year] = {
        year,
        zodiac,
        posts: [],
      };
    }
    acc[year].posts.push(post);
    return acc;
  }, {} as Record<number, {
    year: number
    zodiac: string
    posts: Post[]
  }>);
  return Object.values(yearedPosts).sort((a, b) => b.year - a.year);
});
</script>

<template>
  <div>
    <h1 class="list-title">
      {{ props.title }}
    </h1>
    <!-- Hello {{ props.name }} -->
    <template v-for="item in groupByYearedPosts" :key="item.year">
      <h2 class="list-year">
        {{ item.year }}<Icon class="chinese-zodiac" :icon="item.zodiac" />
      </h2>
      <ul class="list-part">
        <li v-for="post in item.posts" :key="post.slug" class="list-item">
          <NuxtLink :to="usePostLink(post.slug)" class="list-item-title">
            {{ post.title }}
          </nuxtlink>
          <time :datetime="post.created" class="list-item-time">{{ useDateFormat(post.created, "YYYY-MM-DD").value }}</time>
        </li>
      </ul>
    </template>
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@import "@/styles/variables.scss";

.list .main-inner {
  width: $listWidth;
}

.list-title {
  text-align: center;
}

.list-part {
  padding: 0;
  list-style: none;
}

.list-item-title {
  flex: 1;
  margin: 0 0.618em 0 2em;
  font-size: 1.2em;
  line-height: 1.5;
}

.list-item-time {
  margin: 0 0.618em 0 2em;
  margin-left: 1em;
  color: var(--color-contrast-medium);
  line-height: 1.5;
  text-align: right;
}

.list-item {
  position: relative;
  display: flex;
  align-items: baseline;
  margin-top: 1em;
  padding-bottom: 0.5em;
  border-bottom: 1px dashed var(--color-contrast-low);
  line-height: 2;
  transition: border $duration;

  &:hover {
    border-bottom-color: var(--color-primary);

    ::before {
      background: var(--color-primary);
    }
  }

  ::before {
    content: " ";
    position: absolute;
    top: 0.618em;
    left: 0.618em;
    width: math.div($fontSize, 3);
    height: math.div($fontSize, 3);
    border: 1px solid var(--color-bg);
    border-radius: 50%;
    background: var(--color-contrast-low);
    font-size: 1rem;
    transition: background $duration;
  }
}

.list-read-more {
  line-height: 1.5;
}

.list-year {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-family: "Cinzel Decorative", "Noto Serif SC", serif;
}

.term-count {
  color: var(--color-contrast-medium);
  font-size: 0.7em;
}
</style>

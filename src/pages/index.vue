<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const posts: Post[] = [
  {
    authors: [],
    categories: [],
    content: "# Hello Dolan!\n\nYou are creating a `new post`!\n\nababa\n\n\\<div>test\\</div>\n",
    created: "2022-07-20T03:12:21.000Z",
    excerpt: "# Hello Dolan!\n\nYou are creating a `new post`!\n\n\n\nxddddddd\n",
    metas: {},
    slug: "dddd",
    status: "published",
    sticky: true,
    tags: ["dddddddddddddddddddddd", "tessssssssssee", "1"],
    title: "hello",
    updated: "2022-07-14T03:28:47.000Z",
    hidden: false,
  },
  {
    authors: [],
    categories: [],
    content: "# Hello Dolan!\n\nYou are creating a `new post`!\n\nababa\n\n\\<div>test\\</div>\n",
    created: "2022-07-20T03:12:21.000Z",
    excerpt: "# Hello Dolan!\n\nYou are creating a `new post`!\n\n\n\nxddddddd\n",
    metas: {},
    slug: "dddd",
    status: "published",
    sticky: true,
    tags: ["dddddddddddddddddddddd", "tessssssssssee", "1"],
    title: "hello",
    updated: "2022-07-14T03:28:47.000Z",
    hidden: false,
  },
  {
    authors: [],
    categories: [],
    content: "# Hello Dolan!\n\nYou are creating a `new post`!\n\nababa\n\n\\<div>test\\</div>\n",
    created: "2022-07-20T03:12:21.000Z",
    excerpt: "# Hello Dolan!\n\nYou are creating a `new post`!\n\n\n\nxddddddd\n",
    metas: {},
    slug: "dddd",
    status: "published",
    sticky: true,
    tags: ["dddddddddddddddddddddd", "tessssssssssee", "1"],
    title: "hello",
    updated: "2022-07-14T03:28:47.000Z",
    hidden: false,
  },
  {
    authors: [],
    categories: [],
    content: "# Hello Dolan!\n\nYou are creating a `new post`!\n\nababa\n\n\\<div>test\\</div>\n",
    created: "2022-07-20T03:12:21.000Z",
    excerpt: "# Hello Dolan!\n\nYou are creating a `new post`!\n\n\n\nxddddddd\n",
    metas: {},
    slug: "dddd",
    status: "published",
    sticky: true,
    tags: ["dddddddddddddddddddddd", "tessssssssssee", "1"],
    title: "hello",
    updated: "2022-07-14T03:28:47.000Z",
    hidden: false,
  },
];
</script>

<template>
  <div class="home">
    <HomePost :posts="posts as any" />
  </div>
</template>

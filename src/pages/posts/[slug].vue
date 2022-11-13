<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const route = useRoute();
const slug = $computed(() => route.params.slug);
const apiURL = $computed(() => `/api/posts/${slug}` as const);
const { data, error } = await useAsyncData(apiURL, () => $fetch(apiURL));

let post = $ref({} as Post);
let renderedTitle = $ref("");
let renderedContent = $ref("");
if (data.value) {
  if (data.value.code === 404) {
    throw notFound();
  // TODO
  }
  post = data.value.data;
  renderedTitle = await useRenderMarkdown(post.title);
  renderedContent = await useRenderMarkdown(post.content);
}
</script>

<template>
  <div>
    <ErrorWrapper :error="error">
      <article class="content post">
        <h1 class="post-title" v-html="renderedTitle" />
        <PostMeta :post="post" />
        <div class="post-body e-content" v-html="renderedContent" />
      </article>
    </ErrorWrapper>
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@import "@/styles/variables.scss";
@import "@/styles/utils/functions.scss";

.single .main-inner {
  width: $postWidth;
}

.post-title {
  text-align: center;
}

.post-subtitle {
  margin-top: -0.618em;
  font-weight: 700;
  font-size: 1.8em;
  text-align: center;
}

.post-description {
  margin: 1rem 0;
  font-size: 90%;
  text-align: center;
}

.post-body {
  margin-top: 5em !important;

  a {
    text-decoration: underline;
    text-decoration-color: var(--color-contrast-low);

    &:hover {
      text-decoration-color: alpha(var(--color-primary), 0.5);
    }
  }
}

:deep(.post) {
  // :deep {
  .table-container {
    overflow-x: auto;
    margin: 2em 0;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    border-color: var(--color-contrast-lower);
  }

  th {
    font-weight: 700;
  }

  th,
  td {
    padding: 0.4em;
    border: 1px solid var(--color-contrast-lower);
    font-size: 0.9em;
  }

  table > tbody > tr:nth-of-type(odd) {
    background-color: alpha(var(--color-contrast-lower), 0.5);
  }

  table > tbody > tr:hover {
    background-color: var(--color-contrast-lower);
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-left: 2em;
  }

  code {
    padding: math.div($fontSize, 8), math.div($fontSize, 4);
    background-color: alpha(var(--color-contrast-lower), 0.5);
    font-size: 80%;
  }

  pre {
    overflow: auto;
    max-height: $maxHeight;
    margin: 2rem 0;
    padding: 1em;
    background-color: alpha(var(--color-contrast-lower), 0.5);
    font-size: 0.8rem;
    line-height: 1.618;
    word-wrap: normal;
    overflow-wrap: normal;

    code {
      padding: 0;
      background-color: unset;
      font-size: 0.8rem;
    }
  }

  p {
    margin: 1em 0;
    line-height: $lineHeight;
  }

  img {
    display: block;
    clear: both;
    max-width: 100%;
    margin: 2em auto;
    border: 1px solid var(--color-contrast-lower);
  }

  video {
    display: block;
    clear: both;
    max-width: 100%;
    margin: 2em auto;
  }

  sup {
    vertical-align: super;
    font-size: 70%;

    a {
      text-decoration: none;
    }
  }

  ol,
  ul {
    margin: 0;
    padding-left: 2em;
    line-height: $lineHeight;
  }

  hr {
    margin: 2.427em 0 1.5em;
    border: none;
    text-align: center;

    &::after {
      content: "···";
      padding-left: 2em;
      letter-spacing: 2em;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  .anchor-link {
    &:hover {
      --anchor-opacity: 1;
    }
  }

  // }
}

blockquote {
  margin: 2em 0;
  padding-left: 1em;
  border-left: 3px solid var(--color-contrast-low);
  color: var(--color-contrast-medium);

  a {
    color: var(--color-contrast-medium);

    &:hover {
      color: var(--color-primary);
    }
  }
}

.drop-cap {
  float: left;
  margin-top: math.div($fontSize, $lineHeight);
  margin-right: $lineHeight * $fontSize - $fontSize;
  font-size: $fontSize * 3;
  line-height: $lineHeight * $fontSize;
}

.caption {
  display: block;
  margin: -1em 0 0;
  color: var(--color-contrast-medium);
  font-size: 90%;
  text-align: center;
}

.contents {
  margin-top: 5em;

  ol,
  ul {
    list-style: none;
  }
}

ol,
ul {
  &.toc {
    overflow: auto hidden;
    padding: 0;
    white-space: nowrap;
  }
}

.footnotes {
  margin-top: 5rem;
  font-size: 90%;

  hr {
    height: 1px;
    margin: 0;
    border: none;
    background-color: var(--color-contrast-medium);

    &::after {
      content: none;
    }
  }

  ol {
    margin: 1.618rem 0 0 !important;
    padding: 0 1rem 0 2rem !important;
  }
}

.footnote-icon {
  margin-bottom: 0.3em;
  fill: alpha(var(--color-contrast-high), 0.5);
  transition: fill $duration;

  &:hover {
    fill: var(--color-primary);
  }
}

.anchor-link {
  position: absolute;
  opacity: var(--anchor-opacity);
  transition: all math.div($duration, 2);
  transform: translate(-150%);
}

.anchor-icon {
  vertical-align: baseline;
  width: 0.75em;
  height: 0.75em;
}

:root {
  --anchor-opacity: 0;
}

// :deep {
//   .table-container {
//     overflow-x: auto;
//     margin: 2em 0;
//   }

//   table {
//     width: 100%;
//     border-spacing: 0;
//     border-collapse: collapse;
//     border-color: var(--color-contrast-lower);
//   }

//   th {
//     font-weight: 700;
//   }

//   th,
//   td {
//     padding: 0.4em;
//     border: 1px solid var(--color-contrast-lower);
//     font-size: 0.9em;
//   }

//   table > tbody > tr:nth-of-type(odd) {
//     background-color: alpha(var(--color-contrast-lower), 0.5);
//   }

//   table > tbody > tr:hover {
//     background-color: var(--color-contrast-lower);
//   }

//   dt {
//     font-weight: 700;
//   }

//   dd {
//     margin-left: 2em;
//   }

//   code {
//     padding: math.div($fontSize, 8), math.div($fontSize, 4);
//     background-color: alpha(var(--color-contrast-lower), 0.5);
//     font-size: 80%;
//   }

//   pre {
//     overflow: auto;
//     max-height: $maxHeight;
//     margin: 2rem 0;
//     padding: 1em;
//     background-color: alpha(var(--color-contrast-lower), 0.5);
//     font-size: 0.8rem;
//     line-height: 1.618;
//     word-wrap: normal;
//     overflow-wrap: normal;

//     code {
//       padding: 0;
//       background-color: unset;
//       font-size: 0.8rem;
//     }
//   }
// }

.copy-button {
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background-color: alpha(var(--color-contrast-medium), 0.5);
  color: var(--color-bg);
  font-size: inherit;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  transition: all $duration;

  &:hover {
    background-color: alpha(var(--color-primary), 0.5);
  }
}

.katex-display,
mjx-container[jax="CHTML"][display="true"] {
  overflow: auto hidden;
  text-indent: 0;
}
</style>

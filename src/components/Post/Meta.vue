<script setup lang="ts">
import type { Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post
}>();

const formattedCreatedTime = useDateFormat(props.post.created, "YYYY.MM.DD");
const formattedUpdatedTime = useDateFormat(props.post.updated, "YYYY.MM.DD");
const wordCount = $computed(() => props.post.content.length);
</script>

<template>
  <div class="post-meta">
    <time :datetime="props.post.created" class="post-meta-item">
      <!-- TODO: Custom Icon -->
      <Icon icon="calendar-alt" class="post-meta-icon" />&nbsp;{{ formattedCreatedTime }}
    </time>
    <time :datetime="props.post.updated" class="post-meta-item">
      <Icon icon="calendar-check" class="post-meta-icon" />&nbsp;{{ formattedUpdatedTime }}
    </time>
    <span class="post-meta-item wordcount">
      <Icon icon="pencil-alt" class="post-meta-icon" />&nbsp;{{ wordCount }}
    </span>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";
@import "@/styles/variables.scss";

.post-meta {
  margin: 1rem 0;
  color: var(--color-contrast-medium);
  font-size: 80%;
  font-family: $fontFamilyCode;
  text-align: center;

  a {
    color: var(--color-contrast-medium);

    &:hover {
      color: var(--color-primary);
    }
  }
}

.home {
  .post-meta {
    margin: 1rem 0;
  }
}

.post-meta-item {
  display: inline-flex;
  align-items: center;
  margin: 0.5em;
}

.post-meta-icon {
  margin-bottom: 0.3em;
  fill: alpha(var(--color-contrast-medium), 0.5) !important;
}
</style>

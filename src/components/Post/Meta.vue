<script setup lang="ts">
import type { Category, Post } from "@dolan-x/shared";

const props = defineProps<{
  post: Post;
}>();

const category = ref({} as Category);
if (props.post.category) {
  const categoryAPIURL = computed(
    () => `/api/categories/${props.post.category}` as const,
  );
  const { data } = await useAsyncData(categoryAPIURL.value, () =>
    $fetch(categoryAPIURL.value),
  );
  if (data.value) {
    if (data.value.code === 404) {
      throw notFound();
    }
    category.value = data.value.data;
  }
}

const formattedCreatedTime = useDateFormat(props.post.created, "YYYY.MM.DD");
const formattedUpdatedTime = useDateFormat(props.post.updated, "YYYY.MM.DD");
const wordCount = computed(() => props.post.content.length);
</script>

<template>
  <div class="post-meta">
    <time class="post-meta-item" :datetime="String(props.post.created)">
      <!-- TODO: Custom Icon -->
      <Icon class="post-meta-icon" icon="calendar-alt" />
      &nbsp;{{ formattedCreatedTime }}
    </time>
    <time class="post-meta-item" :datetime="String(props.post.updated)">
      <Icon class="post-meta-icon" icon="calendar-check" />
      &nbsp;{{ formattedUpdatedTime }}
    </time>
    <NuxtLink
      v-if="category.name"
      class="post-meta-item"
      :to="useCategoryLink(category.slug)"
    >
      <Icon class="post-meta-icon" icon="folder" />
      &nbsp;{{ category.name }}
    </NuxtLink>
    <span class="post-meta-item wordcount">
      <Icon class="post-meta-icon" icon="pencil-alt" />
      &nbsp;{{ wordCount }}
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

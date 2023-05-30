<script setup lang="ts">
import type { CommonItem } from "@/types/config";

const props = defineProps<{
  item: CommonItem;
}>();

const localePath = useLocalePath();
</script>

<template>
  <NuxtLink
    v-if="!useIsExternal(props.item.url)"
    class="menu-item-link"
    :to="localePath(props.item.url)"
  >
    <FontAwesomeIcon v-if="props.item.icon" :icon="props.item.icon || ''" />
    <span class="menu-item-name">{{ props.item.name }}</span>
  </NuxtLink>
  <a
    v-else
    class="menu-item-link"
    :href="props.item.url"
    rel="noopener noreferrer"
    target="_blank"
  >
    <FontAwesomeIcon v-if="props.item.icon" :icon="props.item.icon || ''" />
    <span class="menu-item-name">{{ props.item.name }}</span>
  </a>
</template>

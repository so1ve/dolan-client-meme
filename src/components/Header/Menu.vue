<script setup lang="ts">
export type MenuItem = {
  name: string
  url: string
  icon?: string
} | {
  identifier: "theme-switcher"
};
// eslint-disable-next-line vue/define-macros-order
const props = defineProps<{
  items: MenuItem[]
}>();
const localePath = useLocalePath();
</script>

<template>
  <nav class="nav">
    <ul id="menu" class="menu">
      <template v-for="item in props.items" :key="item.name">
        <li v-if="!('identifier' in item)" class="menu-item">
          <NuxtLink class="menu-item-link" :to="localePath(item.url)">
            <Icon v-if="item.icon" :icon="item.icon" />
            <span class="menu-item-name">{{ item.name }}</span>
          </NuxtLink>
        </li>
        <li v-else-if="item.identifier === 'theme-switcher'" class="menu-item">
          <HeaderThemeSwitcher />
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: relative;
  z-index: 3;
  font-size: 80%;
  text-align: right;
}

.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 500;
  line-height: 1.5;

  &-item {
    display: inline-block;
    margin-left: 0.5em;

    &-link {
      display: inline-flex;
      align-items: center;
      color: var(--color-contrast-medium);

      &:hover,
      &.router-link-active {
        color: var(--color-primary);
      }
    }
  }
}
</style>

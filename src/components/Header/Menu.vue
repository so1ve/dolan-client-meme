<script setup lang="ts">
export interface CommonItem {
  name: string
  url: string
  icon?: string
}
export interface ThemeSwitcher {
  identifier: "theme-switcher"
}
export type MenuItem = CommonItem | ThemeSwitcher;
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
          <HeaderMenuLink :item="item" />
        </li>
        <li v-else-if="item.identifier === 'theme-switcher'" class="menu-item">
          <HeaderThemeSwitcher />
        </li>
      </template>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/utils/functions.scss";
@import "@/styles/utils/mixins.scss";

@media (max-width: $maxWidth) {
  .nav {
    display: none;
    margin: 2em 0;
    text-align: center;
  }

  .menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }

  .menu-item {
    margin: 0;
    padding: 2em;
    text-align: center;

    .icon {
      margin: 0;
    }
  }

  .menu-item-name {
    display: block;
  }
}

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

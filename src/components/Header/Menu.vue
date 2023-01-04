<script setup lang="ts">
import type { MenuItem } from "@/types/config";

const props = defineProps<{
  items: MenuItem[]
}>();
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
        <li v-else-if="item.identifier === 'language-switcher'" class="menu-item">
          <HeaderLanguageSwitcher />
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
    display: grid !important;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
  }

  .menu-item {
    justify-content: center;
    margin: 0;
    padding: 2em 1em;

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
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 500;
  line-height: 1.5;

  &-item {
    display: inline-flex;
    align-items: center;
    height: 20px;
    margin-left: 0.5em;

    &-link {
      display: inline-flex;
      align-items: center;
      height: 20px;
      color: var(--color-contrast-medium);

      &:hover,
      &.router-link-active {
        color: var(--color-primary);
      }
    }
  }
}
</style>

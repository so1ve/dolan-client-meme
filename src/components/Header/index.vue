<script setup lang="ts">
import type { MenuItem } from "./Menu.vue";
const props = defineProps<{
  title: string
}>();

const menuItems: MenuItem[] = [
  {
    name: "测试",
    url: "/",
    icon: "home",
  },
];
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-inner">
        <div class="site-brand">
          <NuxtLink href="/" class="brand">
            {{ props.title }}
          </NuxtLink>
        </div>
        <!-- {{ template "site-brand" . }}
        {{ partial "menu.html" . }} -->
        <HeaderMenu :items="menuItems" />
      </div>
    </div>
    <!-- {{ partial "components/nav-toggle.html" . }} -->
  </header>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/utils/functions.scss";
@import "@/styles/utils/mixins.scss";

// stylelint-disable-next-line order/order
$headerBackground: linear-gradient(90deg, #f795331a 0, #f370551a 15%, #ef4e7b1a 30%, #a166ab1a 44%, #5073b81a 58%, #1098ad1a 72%, #07b39b1a 86%, #6dba821a 100%);
$brandHeight: $fontSize * strip-unit($siteBrandFontSize) * 1.618;

// :root {
//   /* This is an approximate calculation, it won't cover all scenarios */
//   --header-height:
//     calc(
//       max(
//         #{$brandHeight},
//         #{$fontSize * 0.8 * 1.5}
//       ) + #{$fontSize * 2}
//     );
// }

/* Scrolling fix for anchors being hidden below the header */
// *[id] {
//   scroll-margin-top: var(--header-height);
// }

.header {
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100vw;
  transition: top 0.3s ease-in-out;

  &.hide {
    top: calc(var(--header-height) * -1);
  }
}

.header-wrapper {
  @include blur;

  padding: 1em 0;
  background: $headerBackground;
  transition: background $duration;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;

  // max-width: $postWidth;
  max-width: 36em;
  margin: 0 auto;
}

.header-inner.list {
  max-width: $listWidth;
}

.site-brand {
  margin-right: 1em;
}

.brand {
  color: $siteBrandFontColor;
  font-size: $siteBrandFontSize;
  text-decoration: none;

  &:hover {
    color: $siteBrandFontColor;
  }
}
</style>

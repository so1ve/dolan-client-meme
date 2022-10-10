<script setup lang="ts">
import type { MenuItem } from "./Menu.vue";

const props = defineProps<{
  title: string
}>();
const localePath = useLocalePath();

const menuItems: MenuItem[] = [
  {
    name: "测试1",
    url: "/",
    icon: "home",
  },
  {
    identifier: "theme-switcher",
  },
];
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <div class="header-inner">
        <div class="site-brand">
          <NuxtLink :to="localePath('/')" class="brand">
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

@media (max-width: $maxWidth) {
  .header-inner {
    display: block;
    width: 100%;
    max-width: none;
    margin: 0;
  }

  .site-brand {
    margin-left: 1em;
  }

  .nav-toggle {
    display: block;
  }

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
    padding: 1em;

    .icon {
      margin: 0;
    }
  }

  .menu-item-name {
    display: block;
  }

  .header.open {
    .nav {
      display: block;
      animation: appear $duration;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes appear {
      0% {
        height: 0;
        margin: 0;
        opacity: 0;
        transform: scaleY(0);
        transform-origin: top;
      }

      100% {
        height: $navHeight;
        margin: 2em 0;
        opacity: 1;
        transform: scaleY(1);
        transform-origin: top;
      }
    }

    .nav-curtain {
      animation: appearCurtain $duration;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes appearCurtain {
      0% {
        opacity: 0;
        visibility: hidden;
      }

      100% {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  .header.fade {
    .nav {
      display: block;
      animation: fade $duration;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes fade {
      0% {
        height: $navHeight;
        margin: 2em 0;
        opacity: 1;
        transform: scaleY(1);
        transform-origin: top;
      }

      100% {
        height: 0;
        margin: 0;
        opacity: 0;
        transform: scaleY(0);
        transform-origin: top;
      }
    }

    .nav-curtain {
      animation: fadeCurtain $duration;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes fadeCurtain {
      0% {
        opacity: 1;
        visibility: visible;
      }

      100% {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  #langs li {
    width: auto;
  }
}
</style>

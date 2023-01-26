<script setup lang="ts">
const store = useStore();

const toggleNav = (e: MouseEvent) => {
  e.preventDefault();
  store.toggleNav();
};
</script>

<template>
  <span class="nav-toggle" :class="{ open: store.showNav, fade: !store.showNav }" @click="toggleNav">
    <div class="nav-toggle-inner">
      <span />
      <span />
      <span />
    </div>
  </span>
  <label class="nav-curtain" for="nav-toggle" />
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/utils/functions.scss";
@import "@/styles/utils/mixins.scss";

@media (max-width: $maxWidth) {
  .nav-toggle {
    display: block !important;
    cursor: pointer;
  }
}

#nav-toggle {
  display: none;
}

.nav-toggle-inner {
  display: inline-block;
}

.nav-toggle {
  position: absolute;
  top: 1em;
  right: 1em;
  display: none;
  width: 1em;
  height: 1em;
  cursor: pointer;

  span {
    position: absolute;
    display: block;
    width: 1em;
    height: 0.1em;
    background-color: var(--color-contrast-high);
    transition: all $duration;

    &:nth-child(1) {
      top: 0.4em;
    }

    &:nth-child(2) {
      top: 0.7em;
    }

    &:nth-child(3) {
      top: 1em;
    }
  }

  &.open {
    span {
      &:nth-child(1) {
        top: 75%;
        transform: rotate(225deg);
      }

      &:nth-child(2) {
        width: 0;
        opacity: 0;
        transform: rotate(-135deg);
      }

      &:nth-child(3) {
        top: 75%;
        transform: rotate(-45deg);
      }
    }
  }
}

.nav-curtain {
  @include blur;

  width: 100vw;
  height: 100vh;
  background: $headerBackground rgb(0 0 0 / 50%);
}
</style>

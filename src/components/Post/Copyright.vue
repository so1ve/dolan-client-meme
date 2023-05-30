<script setup lang="ts"></script>

<template>
  <ul class="post-copyright"></ul>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";

.post-copyright {
  margin: 0;
  margin-top: 5em !important;
  padding: 0.5em 1em;
  border-left: 3px solid alpha(var(--color-primary), 0.5);
  background-color: alpha(var(--color-contrast-lower), 0.5);
  list-style: none;
  line-height: 2;
}

.copyright-item {
  margin: 0.5em 0;
  line-height: 1.5;
}

.copyright-item-text {
  font-weight: 500;
}
</style>

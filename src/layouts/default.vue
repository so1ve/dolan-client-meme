<script setup lang="ts">
const configStore = useConfigStore();

const customConfig = $computed(() => configStore.config.custom);

const grayFilter = $computed(() => customConfig.grayFilter ? "grayscale(1)" : "none");
</script>

<template>
  <div class="container">
    <Header :menu-items="customConfig.menu" :title="customConfig.title" />
    <main class="main">
      <div class="main-inner">
        <slot />
      </div>
    </main>
    <Footer :display-powered-by="customConfig.displayPoweredBy" :site-created="customConfig.siteCreated" />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.container {
  position: relative;
  min-width: 100%;
  min-height: 100%;
  filter: v-bind(grayFilter);
}

.main {
  display: block;
  padding: 2em 1em 15em;
  padding-top: 7em;

  &-inner {
    display: block;
    width: $postWidth;
    margin: 0 auto;
  }
}

@media (max-width: $maxWidth) {
  .main-inner {
    width: auto !important;
  }
}
</style>

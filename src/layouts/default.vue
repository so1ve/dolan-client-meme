<template>
  <div class="container">
    <Header title="Dolan Client MemE" />
    <main class="main">
      <div class="main-inner">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/variables.scss";

.container {
  position: relative;
  min-width: 100%;
  min-height: 100%;
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

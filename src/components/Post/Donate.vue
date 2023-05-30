<script setup lang="ts">
const configStore = useConfigStore();
const donateConfig = computed(() => configStore.config.custom.donate);

const afdianLink = computed(
  () => `https://afdian.net/a/${donateConfig.value?.afdian}`,
);
</script>

<template>
  <div v-if="donateConfig?.enable" class="donate">
    <div v-if="donateConfig.afdian">
      <a :href="afdianLink" rel="noopener noreferrer" target="_blank">
        <img
          src="https://anya.215213344.xyz/?text=%E4%B8%BA%E7%88%B1%E5%8F%91%E7%94%B5%20&img=https://i.imgur.com/r3hX9Ww.png&bgcolor1=946ce6&bgcolor2=946ce6&color=eee"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.donate {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
}
</style>

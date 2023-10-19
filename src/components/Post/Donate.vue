<script setup lang="ts">
const configStore = useConfigStore();
const { t } = useI18n();

const donateConfig = computed(() => configStore.config.custom.donate);
const afdianLink = computed(
  () => `https://afdian.net/a/${donateConfig.value?.afdian}`,
);
const afdianBadge = computed(
  () =>
    `https://img.shields.io/badge/${t("afdian.other")}-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#EA4AAA`,
);
</script>

<template>
  <div v-if="donateConfig?.enable" class="donate">
    <div v-if="donateConfig.afdian">
      <a :href="afdianLink" rel="noopener noreferrer" target="_blank">
        <img :src="afdianBadge" />
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

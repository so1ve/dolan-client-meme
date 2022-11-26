import { acceptHMRUpdate, defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const showNav = ref(false);
  const toggleNav = () => showNav.value = !showNav.value;

  return {
    showNav,
    toggleNav,
  };
});

if (import.meta.hot) { import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot)); }

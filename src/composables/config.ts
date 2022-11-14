import type { ConfigAll } from "@dolan-x/shared";
import { acceptHMRUpdate, defineStore } from "pinia";
import type { ConfigSchema } from "@/types/config";

export const useConfigStore = defineStore("config", () => {
  const config = useState("config", () => ({
    functions: {},
    authors: {},
    categories: {},
    tags: {},
    posts: {},
    pages: {},
    site: {},
    custom: {},
  } as ConfigAll & { custom: ConfigSchema }));

  async function fetchConfig () {
    const { data } = await useFetch("/api/config");
    config.value = data.value!.data as any;
  }

  return {
    config,
    fetchConfig,
  };
});

if (import.meta.hot) { import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot)); }

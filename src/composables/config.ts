import type { ConfigAll } from "@dolan-x/shared";
import defu from "defu";
import { acceptHMRUpdate, defineStore } from "pinia";

import type { ConfigSchema } from "@/types/config";

const defaultCustomConfig: Partial<ConfigSchema> = {
  menu: [],
  displayPoweredBy: true,
  favicon: "",
  author: {
    name: "",
  },
  share: {
    enable: true,
    shareOnTwitter: true,
    shareOnFacebook: true,
    shareOnLinkedIn: true,
    shareOnTelegram: true,
    shareOnWeibo: true,
    shareOnDouban: true,
    shareOnQQ: true,
    shareOnQzone: true,
    shareViaQRCode: true,
  },
  grayFilter: false,
};

export const useConfigStore = defineStore("config", () => {
  const config = useState(
    "config",
    () =>
      ({
        functions: {},
        authors: {},
        categories: {},
        tags: {},
        posts: {},
        pages: {},
        site: {},
        custom: {},
      } as ConfigAll & { custom: ConfigSchema }),
  );

  async function fetchConfig() {
    const { data } = await useFetch("/api/config");
    config.value = data.value!.data as any;
    config.value.custom = defu(config.value.custom, defaultCustomConfig);
  }

  return {
    config,
    fetchConfig,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot));
}

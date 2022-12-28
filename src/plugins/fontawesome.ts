import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

config.autoAddCss = false;

library.add(fas, fab, far);

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FAIcon: typeof FontAwesomeIcon
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FAIcon", FontAwesomeIcon);
});

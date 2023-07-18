import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

config.autoAddCss = false;

library.add(fas, fab, far);

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    FAIcon: typeof FontAwesomeIcon;
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FAIcon", FontAwesomeIcon);
});

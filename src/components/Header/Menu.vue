<script setup lang="ts">
export interface MenuItem {
  name: string
  url: string
  icon?: string
}
// eslint-disable-next-line vue/define-macros-order
const props = defineProps<{
  items: MenuItem[]
}>();
</script>

<template>
  <nav class="nav">
    <ul id="menu" class="menu">
      <!-- {{ if .Site.Params.activeInSection }}
            {{ .Scratch.Set "currentPage" (.Site.GetPage (printf `/%s` .Section)) }}
        {{ else }}
            {{ .Scratch.Set "currentPage" . }}
        {{ end }}
        {{ range .Site.Menus.main }} -->
      <!-- {{ if and (eq .Identifier "theme-switcher") $.Site.Params.enableDarkMode }}
                {{ if eq $.Site.Params.headerLayout "flex" }}
                    {{ $switcher := partial "components/dark-mode.html" $ctx }}
                    {{ with $switcher }}
                        <li class="menu-item">
                            {{ . }}
                        </li>
                    {{ end }}
                {{ end }}
            {{ else if eq .Identifier "lang-switcher" }}
                {{ if and $.Site.IsMultiLingual $.Site.Params.enableLangToggle }}
                    {{ if eq $.Site.Params.headerLayout "flex" }}
                        {{ $switcher := partial "components/multilingual.html" $ctx }}
                        {{ with $switcher }}
                            <li class="menu-item">
                                {{ . }}
                            </li>
                        {{ end }}
                    {{ end }}
                {{ end }}
            {{ else if eq .Identifier "search" }}
                {{ if and (eq $.Site.Params.headerLayout "flex") (or $.Site.Params.enableLunrSearch $.Site.Params.enableAlgoliaSearch) }}
                    {{- $iconName := (string .Post) -}}
                    <li class="menu-item search-item">
                        {{ partial "components/search.html" (dict "$" $ctx "iconName" $iconName) }}
                    </li>
                {{ end }}
            {{ else }} -->
      <!-- <li class="menu-item{{ if or ($currentPage.IsMenuCurrent "main" .) ($currentPage.HasMenuCurrent "main" .) }} active{{ end }}"></li> -->
      <li v-for="item in props.items" :key="item.name" class="menu-item">
        <!-- {{- $linkType := (string .Pre) -}} -->
        <!-- <a href="{{ .URL }}"{{ if eq $linkType "external" }} target="_blank" rel="external noopener"{{ end }}></a> -->
        <NuxtLink class="menu-link" :href="item.url">
          <!-- {{- $iconName := (string .Post) -}}
          {{- partial "utils/icon.html" (dict "$" $ "name" $iconName "class" .Identifier) -}}
          {{- with .Name -}} -->
          <Icon v-if="item.icon" :icon="item.icon" />
          <span class="menu-item-name">{{ item.name }}</span>
          <!-- {{- end -}} -->
        </NuxtLink>
      </li>
      <!-- {{ end }} -->
      <!-- {{ end }} -->
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.nav {
  position: relative;
  z-index: 3;
  font-size: 80%;
  text-align: right;
}

.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 500;
  line-height: 1.5;
}

.menu-item {
  display: inline-block;
  margin-left: 0.5em;

  .icon {
    width: 0.9em;
    height: auto;
    margin-right: 3px;
  }

  .menu-link {
    display: inline-flex;
    align-items: center;
    color: var(--color-contrast-medium);

    &:hover,
    &.router-link-active {
      color: var(--color-primary);
    }
  }
}
</style>

<script setup lang="ts">
import type { Post } from "@dolan-x/shared";
import CalendarHeatMap from "virtual:icons/carbon/calendar-heat-map";

const props = defineProps<{
  post: Post
}>();

const formattedCreatedTime = useDateFormat(props.post.created, "YYYY.MM.DD");
const formattedUpdatedTime = useDateFormat(props.post.updated, "YYYY.MM.DD");
</script>

<template>
  <div class="post-meta">
    <time :datetime="props.post.created" class="post-meta-item">
      <!-- TODO: Custom Icon -->
      <Icon icon="calendar-alt" class="post-meta-icon" />&nbsp;{{ formattedCreatedTime }}
    </time>
    <time :datetime="props.post.updated" class="post-meta-item">
      <Icon icon="calendar-check" class="post-meta-icon" />&nbsp;{{ formattedUpdatedTime }}
    </time>
    <!-- {{ end }}
    {{ if and $.Site.Params.displayModifiedDate (not $.Lastmod.IsZero) }}
    {{ $icon := partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.modifiedDateIcon "class" "post-meta-icon") }}

    {{ end }}
    {{ if and $.Site.Params.displayExpiredDate (not $.ExpiryDate.IsZero) }}
    {{ $icon := partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.expiredDateIcon "class" "post-meta-icon") }}
    <time datetime="{{ $.ExpiryDate.Format "2006-01-02T15:04:05-07:00" }}" class="post-meta-item expired">{{ $icon }}&nbsp;{{ $.ExpiryDate.Format $.Site.Params.postMetaDateFormat }}</time>
    {{ end }}
    {{ if $.Site.Params.displayCategory }}
    {{ $icon := partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.categoryIcon "class" "post-meta-icon") }}
    {{ if and (eq $.Site.Params.categoryBy "sections") (in $.Site.Params.mainSections $.Section) }}
    {{ $sections := split (strings.TrimSuffix "/" ($.File.Dir | default $.Section)) "/" }}
    {{ with $sections }}
    {{ $.Scratch.Delete "sectionsDirMeta" }}
    {{ $.Scratch.Delete "sectionsMeta" }}
    {{ $.Scratch.Set "index" 0 }}
    {{ range $sections }}
    {{ $section := . }}
    {{ $.Scratch.Add "sectionsDirMeta" (printf `/%s` $section) }}
    {{ with $.Site.GetPage ($.Scratch.Get "sectionsDirMeta") }}
    {{ if (eq .Kind "section") }}
    {{ $.Scratch.SetInMap "sectionsMeta" (printf `%s/%s` (string ($.Scratch.Get "index")) .RelPermalink) (.LinkTitle | default $section) }}
    {{ $.Scratch.Set "index" (add ($.Scratch.Get "index") 1) }}
    {{ end }}
    {{ end }}
    {{ end }}
    {{ end }}
    {{ $sections := $.Scratch.Get "sectionsMeta" }}
    {{ with $sections }}
    <span class="post-meta-item category">
      {{- $icon -}}&nbsp;
      {{- range $link, $title := $sections -}}
      {{- $index := $link | replaceRE `(\d+)/.+` `$1` | int -}}
      {{- if ne $index 0 }}
      {{- $.Site.Params.categoryDelimiter | default "/" -}}
      {{- end -}}
      <A href="{{- $link | replaceRE `\d+/(.+)` `$1` -}}" class="category-link p-category">
        {{- $title -}}
      </A>
      {{- end -}}
    </span>
    {{ end }}
    {{ end }}
    {{ if eq $.Site.Params.categoryBy "categories" }}
    {{ with $.Params.categories }}
    <span class="post-meta-item category">
      {{- $icon -}}&nbsp;
      {{- range $index, $category := . -}}
      {{- if ne $index 0 -}}
      {{- $.Site.Params.categoryDelimiter | default "/" -}}
      {{- end -}}
      {{- $path := (urls.Parse ($category | urlize)).Path -}}
      {{- with $.Site.GetPage (printf `/categories/%s` $path) -}}
      <A href="{{- .RelPermalink -}}" class="category-link p-category">
        {{- .LinkTitle | default $path -}}
      </A>
      {{- end -}}
      {{- end -}}
    </span>
    {{ end }}
    {{ end }}
    {{ end }}
    {{ if $.Site.Params.displayWordCount }}
    {{ $icon := partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.wordCountIcon "class" "post-meta-icon") }}
    <span class="post-meta-item wordcount">{{ $icon }}&nbsp;{{ $.WordCount }}</span>
    {{ end }}
    {{ if $.Site.Params.displayReadingTime }}
    {{ $icon := partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.readingTimeIcon "class" "post-meta-icon") }}
    <span class="post-meta-item reading-time">{{ $icon }}&nbsp;{{ $.ReadingTime }}&nbsp;{{ i18n "minute" $.ReadingTime }}</span>
    {{ end }}
    {{ if and $.Site.Params.displayBusuanziPagePV (eq hugo.Environment "production") }}
    {{ if not $isHome }}
    {{ $icon := partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.busuanziPagePVIcon "class" "post-meta-icon") }}
    <span id="busuanzi_container_page_pv" class="post-meta-item busuanzi-page-pv">{{ $icon }}&nbsp;<span id="busuanzi_value_page_pv" /></span>
    {{ end }}
    {{ end }} -->
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";
@import "@/styles/variables.scss";

.post-meta {
  margin: 1rem 0;
  color: var(--color-contrast-medium);
  font-size: 80%;
  font-family: $fontFamilyCode;
  text-align: center;

  a {
    color: var(--color-contrast-medium);

    &:hover {
      color: var(--color-primary);
    }
  }
}

.home {
  .post-meta {
    margin: 1rem 0;
  }
}

.post-meta-item {
  display: inline-flex;
  align-items: center;
  margin: 0.5em;
}

.post-meta-icon {
  margin-bottom: 0.3em;
  fill: alpha(var(--color-contrast-medium), 0.5) !important;
}
</style>

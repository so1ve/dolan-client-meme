<script setup lang="ts">
const route = useRoute();
const slug = computed(() => route.params.slug);
</script>

<template>
  <article class="content post h-entry">
    <h1 class="post-title p-name">
      <!-- {{ (partial "utils/title.html" (dict "$" $ "title" $.Title)).htmlTitle }} -->
    </h1>

    <!-- {{ with .Params.subtitle }}
    {{- $raw := . -}}
    <div class="post-subtitle p-name">
      {{ partial "utils/markdownify.html" (dict "$" $ "raw" $raw "isContent" false) }}
    </div>
    {{ end }} -->

    <!-- {{ if .Site.Params.displayPostDescription }}
    {{ with .Params.description }}
    {{- $raw := . -}}
    <div class="post-description p-summary">
      {{ partial "utils/markdownify.html" (dict "$" $ "raw" $raw "isContent" false) }}
    </div> -->
    <!-- {{ if .Params.meta | default .Site.Params.enablePostMeta }}
    {{ partial "components/post-meta.html" (dict "$" . "isHome" false) }}
    {{ end }}

    {{ $enableTOC := .Params.toc | default .Site.Params.enableTOC -}}
    {{- if $enableTOC -}}
    {{- partial "utils/toc.html" . -}}
    {{- end -}} -->

    <div class="post-body e-content">
      <!-- {{ partial "utils/content.html" . }} -->
    </div>

    <!-- {{ partial "components/post-copyright.html" . }} -->
  </article>

  <!-- {{ if and .Site.Params.enableGoogleAdUnits (eq hugo.Environment "production") -}}
  {{ partial "third-party/google-adsense-unit.html" . }}
  {{ -end }}

  {{ partial "components/post-updated-badge.html" . }}

  {{ partial "components/post-gitinfo.html" . }}

  {{ partial "components/post-share.html" . }}

  {{ partial "components/related-posts.html" . }}

  {{ partial "components/post-tags.html" . }}

  {{ partial "components/minimal-footer.html" . }}

  {{ partial "components/minimal-footer-about.html" . }}

  {{ partial "components/post-nav.html" . }}

  {{ partial "components/comments.html" . }} -->
</template>

<style scoped lang="scss">
div {}
</style>

<script setup lang="ts">
const props = defineProps<{
  name: string
}>();

// const configStore = useConfigStore();
</script>

<template>
  <ul class="post-copyright">
    <!-- <li class="copyright-item author">
      {{- with $author.website -}}
      <span class="copyright-item-text">{{ i18n "copyrightAuthor" }}</span>{{ i18n "colon" }}<a href="{{ . }}" class="p-author h-card" target="_blank" rel="noopener">{{ $author.name }}</a>
      {{- else -}}
      <span class="copyright-item-text">{{ i18n "copyrightAuthor" }}</span>{{ i18n "colon" }}<span class="p-author h-card">{{ $author.name }}</span>
      {{- end -}}
    </li>
    {{ if $.Params.original | default $.Site.Params.original }}
    {{ $url := urls.Parse $.Permalink }}
    {{ $decodedBaseURL := (printf `%s://%s` $url.Scheme $url.Host) }}
    {{ $decodedPath := $url.Path }}
    {{ $decodedPermalink := (printf `%s%s` $decodedBaseURL $decodedPath) }}
    <li class="copyright-item link">
      <span class="copyright-item-text">{{ i18n "copyrightLink" }}</span>{{ i18n "colon" }}<a href="{{ $.RelPermalink }}" target="_blank" rel="noopener">{{ $decodedPermalink }}</a>
    </li>
    {{ else }}
    {{ with $.Params.link }}
    <li class="copyright-item link">
      <span class="copyright-item-text">{{ i18n "copyrightLink" }}</span>{{ i18n "colon" }}<a href="{{ . }}" target="_blank" rel="noopener">{{ . }}</a>
    </li>
    {{ end }}
    {{ end }}
    {{ with $author.copyright }}
    {{- $raw := . -}}
    <li class="copyright-item license">
      <span class="copyright-item-text">{{ i18n "copyrightLicense" }}</span>{{ i18n "colon" }}{{ partial "utils/markdownify.html" (dict "$" $ "raw" $raw "isContent" false) }}
    </li>
    {{ end }} -->
  </ul>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";

.post-copyright {
  margin: 0;
  margin-top: 5em !important;
  padding: 0.5em 1em;
  border-left: 3px solid alpha(var(--color-primary), 0.5);
  background-color: alpha(var(--color-contrast-lower), 0.5);
  list-style: none;
  line-height: 2;
}

.copyright-item {
  margin: 0.5em 0;
  line-height: 1.5;
}

.copyright-item-text {
  font-weight: 500;
}
</style>

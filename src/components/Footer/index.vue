<script setup lang="ts">
const siteCreated = useDateFormat("2021-01-01", "YYYY");
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer-inner">
      <div class="site-info">
        ©&nbsp;{{ siteCreated }}
        <div class="powered-by">
          Powered by <a href="https://github.com/dolan-x" target="_blank">Dolan</a> | Client is <a href="https://github.com/so1ve/dolan-client-meme" target="_blank">MemE</a>
        </div>
        <!-- {{- if .Site.Params.displayCopyleftSymbol -}}
        <span class="copyleft-symbol">🄯</span>&nbsp;
        {{- end -}}
        {{- if .Site.Params.displayCopyrightSymbol -}}
        ©&nbsp;
        {{- end -}}

        {{- if .Site.Params.displaySiteCreatedYear -}}
        {{- dateFormat "2006" (time .Site.Params.siteCreatedTime) -}}–
        {{- end -}}
        {{- now.Format "2006" -}}

        {{- with .Site.Params.iconBetweenYearAndAuthor -}}
                  &nbsp;{{- partial "utils/icon.html" (dict "$" $ "name" . "class" "footer-icon") -}}&nbsp;
        {{- else -}}
                  &nbsp;
        {{- end -}}

        {{- .Site.Author.name -}}
      </div>

      {{- if .Site.Params.displayPoweredBy }}
      {{- $raw := `Powered by [Hugo](https://github.com/gohugoio/hugo) | Theme is [MemE](https://github.com/reuixiy/hugo-theme-meme)` -}}
      <div class="powered-by">
        {{ partial "utils/markdownify.html" (dict "$" $ "raw" $raw "isContent" false) }}
      </div>
      {{ -end }}

      {{- if .Site.Params.displaySiteCopyright }}
      {{- $raw := .Site.Copyright -}}
      <div class="site-copyright">
        {{ partial "utils/markdownify.html" (dict "$" $ "raw" $raw "isContent" false) }}
      </div>
      {{ -end }}

      {{- with .Site.Params.customFooter }}
      {{- $raw := . -}}
      <div class="custom-footer">
        {{ partial "utils/markdownify.html" (dict "$" $ "raw" $raw "isContent" false) }}
      </div>
      {{ -end }}

      {{- if and .Site.Params.displayBusuanziSiteUVAndPV (eq hugo.Environment "production") }}
      <div class="busuanzi-site-uv-and-pv">
        <span id="busuanzi_container_site_uv">
          {{- with .Site.Params.busuanziSiteUVText -}}
          {{- . -}}
                            &nbsp;
          {{- end -}}

          {{- with .Site.Params.busuanziSiteUVIcon -}}
          {{- partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.busuanziSiteUVIcon "class" "busuanzi-site-uv") -}}
                            &nbsp;
          {{- end -}}

        {{ -print `<span id="busuanzi_value_site_uv"></span>` | safeHTML - }}
        </span>

        {{- print "&nbsp;|&nbsp;" | safeHTML -}}

        <span id="busuanzi_container_site_pv">
          {{- with .Site.Params.busuanziSitePVText -}}
          {{- . -}}
                            &nbsp;
          {{- end -}}

          {{- with .Site.Params.busuanziSitePVIcon -}}
          {{- partial "utils/icon.html" (dict "$" $ "name" $.Site.Params.busuanziSitePVIcon "class" "busuanzi-site-pv") -}}
                            &nbsp;
          {{- end -}}

        {{ -print `<span id="busuanzi_value_site_pv"></span>` | safeHTML - }}
        </span>
      </div>
      {{ -end }} -->

      <!-- {{ partial "components/socials.html" . }} -->
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: alpha(var(--color-contrast-medium), 0.8);
  font-size: 90%;

  a {
    color: alpha(var(--color-contrast-medium), 0.8);

    &:hover {
      color: var(--color-primary);
    }
  }
}

.footer-inner {
  padding: 1em;
  text-align: center;
}

.footer-icon {
  margin: 0 0.25em 0.3em;
  animation: heartbeat 1.33s ease-in-out infinite;
}

@if variable-exists("iconColor") {
  .footer-icon {
    fill: $iconColor;
  }
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }

  10%,
  30% {
    transform: scale(0.9);
  }

  20%,
  40%,
  50%,
  60%,
  70%,
  80% {
    transform: scale(1.1);
  }
}
</style>

<script setup lang="ts">
const props = defineProps<{
  siteCreated: string;
  displayPoweredBy: boolean;
}>();

// TODO
const siteCreated = useDateFormat(props.siteCreated, "YYYY");
const yearNow = useDateFormat(new Date(), "YYYY");
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer-inner">
      <div class="site-info">
        ©&nbsp;{{ siteCreated }}
        <template v-if="siteCreated !== yearNow">- {{ yearNow }}</template>
        <div v-if="props.displayPoweredBy" class="powered-by">
          Powered by
          <a
            href="https://github.com/dolan-x"
            rel="noopener noreferrer"
            target="_blank"
          >
            Dolan
          </a>
          | Client is
          <a
            href="https://github.com/so1ve/dolan-client-meme"
            rel="noopener noreferrer"
            target="_blank"
          >
            MemE
          </a>
        </div>
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

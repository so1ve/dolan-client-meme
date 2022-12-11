<script setup lang="ts">
import QRCode from "qrcode.vue";
import type { Post, Tag } from "@dolan-x/shared";

const props = defineProps<{
  post: Post
  tags: Tag[]
}>();

const configStore = useConfigStore();
const { t } = useI18n();

const host = $computed(() => location.host);
const useAbsoluteUrl = (path: string) => {
  return `https://${host}${path}`;
};
const siteName = $computed(() => configStore.config.site.name);
const shareConfig = $computed(() => configStore.config.custom.share);
const hashtags = $computed(() => props.tags.map(t => t.name).join(","));
const postLink = $computed(() => useAbsoluteUrl(usePostLink(props.post.slug)));
const twitterShareUrl = $computed(() => `https://twitter.com/share?url=${postLink}&text=${props.post.title}&hashtags=${hashtags}`);
const facebookShareUrl = $computed(() => `https://www.facebook.com/sharer/sharer.php?u=${postLink}&hashtag=${hashtags}`);
const linkedinShareUrl = $computed(() => `https://www.linkedin.com/shareArticle?mini=true&url=${postLink}&title=${props.post.title}&summary=${props.post.excerpt}&source=${siteName}`);
const telegramShareUrl = $computed(() => `https://t.me/share/url?url=${postLink}&text=${props.post.title}`);
const weiboShareUrl = $computed(() => `http://service.weibo.com/share/share.php?url=${postLink}&title=${props.post.title}&searchPic=false&style=simple`);
const doubanShareUrl = $computed(() => `https://www.douban.com/share/service?href=${postLink}&name=${props.post.title}&text=${props.post.excerpt}`);
const qqShareUrl = $computed(() => `https://connect.qq.com/widget/shareqq/index.html?url=${postLink}&title=${props.post.title}&summary=${props.post.excerpt}&site=${siteName}`);
const qzoneShareUrl = $computed(() => `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${postLink}&title=${props.post.title}&summary=${props.post.excerpt}&site=${siteName}`);
</script>

<template>
  <div v-if="shareConfig.enable" class="post-share">
    <div class="share-text">
      {{ t('shareOn.other') }}
    </div>

    <div class="share-items">
      <div v-if="shareConfig.shareOnTwitter" class="share-item twitter">
        <a :href="twitterShareUrl" :title="t('shareOnTitle.other') + t('twitter.other')" target="_blank" rel="noopener">
          <Icon icon="twitter" />
        </a>
      </div>
      <div v-if="shareConfig.shareOnFacebook" class="share-item facebook">
        <a :href="facebookShareUrl" :title="t('shareOnTitle.other') + t('facebook.other')" target="_blank" rel="noopener">
          <Icon icon="facebook" />
        </a>
      </div>
      <div v-if="shareConfig.shareOnLinkedIn" class="share-item linkedin">
        <a :href="linkedinShareUrl" :title="t('shareOnTitle.other') + t('linkedin.other')" target="_blank" rel="noopener">
          <Icon icon="linkedin" />
        </a>
      </div>
      <div v-if="shareConfig.shareOnTelegram" class="share-item telegram">
        <a :href="telegramShareUrl" :title="t('shareOnTitle.other') + t('telegram.other')" target="_blank" rel="noopener">
          <Icon icon="telegram" />
        </a>
      </div>
      <div v-if="shareConfig.shareOnWeibo" class="share-item weibo">
        <a :href="weiboShareUrl" :title="t('shareOnTitle.other') + t('weibo.other')" target="_blank" rel="noopener">
          <Icon icon="weibo" />
        </a>
      </div>
      <div v-if="shareConfig.shareOnDouban" class="share-item douban">
        <a :href="doubanShareUrl" :title="t('shareOnTitle.other') + t('douban.other')" target="_blank" rel="noopener">
          <Icon icon="douban" />
        </a>
      </div>
      <div v-if="shareConfig.shareOnQQ" class="share-item qq">
        <a :href="qqShareUrl" :title="t('shareOnTitle.other') + t('qq.other')" target="_blank" rel="noopener">
          <Icon icon="qq" />
        </a>
      </div>
      <div v-if="shareConfig.shareOnQzone" class="share-item qzone">
        <a :href="qzoneShareUrl" :title="t('shareOnTitle.other') + t('qzone.other')" target="_blank" rel="noopener">
          <Icon icon="qzone" />
        </a>
      </div>

      <div class="share-item qrcode">
        <div class="qrcode-container" :title="t('shareViaTitle.other') + t('qrcode.other')">
          <Icon icon="qrcode" />
          <div id="qrcode-img">
            <QRCode :value="postLink" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/utils/functions.scss";
@import "@/styles/variables.scss";

.post-share {
  margin-top: 5rem;
  color: alpha(var(--color-contrast-medium), 0.8);

  a {
    color: alpha(var(--color-contrast-medium), 0.8);

    &:hover {
      color: inherit;
    }
  }
}

.share-text {
  float: left;
}

.share-items {
  text-align: right;
}

.share-item {
  display: inline-block;
  margin-left: 1em;

  .icon {
    transition: fill $duration;
  }
}

.twitter-icon {
  &:hover {
    fill: #1da1f2;
  }
}

.facebook-icon {
  &:hover {
    fill: #1877f2;
  }
}

.linkedin-icon {
  &:hover {
    fill: #0077b5;
  }
}

.telegram-icon {
  &:hover {
    fill: #2ca5e0;
  }
}

.weibo-icon {
  &:hover {
    fill: #e6162d;
  }
}

.douban-icon {
  &:hover {
    fill: #072;
  }
}

.qq-icon {
  &:hover {
    fill: #12b7f5;
  }
}

.qzone-icon {
  &:hover {
    fill: #fece00;
  }
}

.qrcode-icon {
  &:hover {
    fill: var(--color-primary);
  }
}

#qrcode-img {
  position: absolute;
  opacity: 0;
  transition: opacity $duration;
  transform: translate(calc(-100% + 1em), calc(-100% - 1em));

  img {
    display: none;
  }
}

.qrcode-container {
  &:hover #qrcode-img {
    opacity: 1;

    img {
      display: inline-block;
      border: 1px solid var(--color-contrast-lower);
    }
  }
}
</style>

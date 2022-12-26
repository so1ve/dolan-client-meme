// Can't import directly because of ts-json-schema-generator limit
export interface CommonItem {
  name: string
  url: string
  icon?: string
}
export type MenuItem = CommonItem | {
  identifier: "theme-switcher" | "language-switcher"
};

// Copied from waline dist file
type WalineCommentSorting = "latest" | "oldest" | "hottest";
type WalineMeta = "nick" | "mail" | "link";
type WalineLoginStatus = "enable" | "disable" | "force";
interface WalineEmojiInfo {
  name: string
  folder?: string
  prefix?: string
  type?: string
  icon: string
  items: string[]
}
type WalineEmojiPresets = `//${string}` | `http://${string}` | `https://${string}`;
interface WalineComment {
  type: "waline"
  serverURL: string
  meta?: WalineMeta[]
  requiredMeta?: WalineMeta[]
  wordLimit?: number | [number, number]
  pageSize?: number
  lang?: string
  commentSorting?: WalineCommentSorting
  emoji?: (WalineEmojiInfo | WalineEmojiPresets)[] | boolean
  login?: WalineLoginStatus
  copyright?: boolean
  recaptchaV3Key?: string
  reaction?: string[] | boolean
}

interface GitalkComment {
  type: "gitalk"
  clientID: string
  clientSecret: string
  repo: string
  owner: string
  admin: string[]
  id?: string
  labels?: string[]
  title?: string
  language?: string
  perPage?: number
  distractionFreeMode?: boolean
  pagerDirection?: "last" | "first"
  createIssueManually?: boolean
  proxy?: string
  enableHotKey?: boolean
}

export interface Share {
  enable?: boolean
  shareOnTwitter?: boolean
  shareOnFacebook?: boolean
  shareOnLinkedIn?: boolean
  shareOnTelegram?: boolean
  shareOnWeibo?: boolean
  shareOnDouban?: boolean
  shareOnQQ?: boolean
  shareOnQzone?: boolean
  shareViaQRCode?: boolean
}

export interface ConfigSchema {
  title: string
  menu: MenuItem[]
  displayPoweredBy: boolean
  favicon: string
  author: {
    name: string
    email?: string
    motto?: string
    avatar?: string
    website?: string
    twitter?: string
  }
  // e.g 1969-07-20T20:17:43+00:00
  siteLogo: string
  siteDescription: string
  siteCreated: string
  share: Share
  comment: WalineComment | GitalkComment
  donate?: {
    enable?: boolean
    afdian?: string
  }
  grayFilter?: boolean
}

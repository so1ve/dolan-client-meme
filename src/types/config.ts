// Can't import directly because of ts-json-schema-generator limit
type MenuItem = {
  name: string
  url: string
  icon?: string
} | {
  identifier: "theme-switcher"
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
interface WalineComment {
  type: "waline"
  serverURL: string
  meta?: WalineMeta[]
  requiredMeta?: WalineMeta[]
  wordLimit?: number | [number, number]
  pageSize?: number
  lang?: string
  commentSorting?: WalineCommentSorting
  emoji?: (string | WalineEmojiInfo)[] | false
  login?: WalineLoginStatus
  copyright?: boolean
  recaptchaV3Key?: string
  reaction?: string[] | boolean
}

export interface ConfigSchema {
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
  comment: WalineComment
}

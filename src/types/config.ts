// Can't import directly because of ts-json-schema-generator limit
type MenuItem = {
  name: string
  url: string
  icon?: string
} | {
  identifier: "theme-switcher"
};

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
}

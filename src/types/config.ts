// Can't import directly because of ts-json-schema-generator limit
type MenuItem = {
  name: string
  url: string
  icon?: string
} | {
  identifier: "theme-switcher"
};

export interface ConfigSchema {
  title: string
  menu: MenuItem[]
  displayPoweredBy: boolean
  // e.g 1969-07-20T20:17:43+00:00
  siteCreated: string
}

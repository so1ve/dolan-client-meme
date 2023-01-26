import type { NodeIncomingMessage } from "h3";

export default [
  { Disallow: "/api" },
  { Sitemap: (req: NodeIncomingMessage) => `https://${req.headers.host}/api/sitemap` },
];

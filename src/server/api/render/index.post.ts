import { getHighlighter } from "shiki-es";
import rehypeShiki from "@so1ve/rehype-shiki";
import { getRenderer } from "@dolan-x/markdown-renderer";

export default defineEventHandler(async (req) => {
  // Workaround for https://github.com/unjs/h3/issues/381
  // @ts-expect-error - req.body is not defined in the type definitions
  const { md = "" } = await (req.node.req.body || readBody(req));
  const highlighter = await getHighlighter({ theme: "css-variables" });
  const renderer = getRenderer({ modifyRehype: instance => instance.use(rehypeShiki, { highlighter }) });
  return String(await renderer.process(md));
});

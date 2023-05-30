import { getHighlighter } from "shiki-es";
import rehypeShiki from "@so1ve/rehype-shiki";
import { getRenderer } from "@dolan-x/markdown-renderer";

export default defineEventHandler(async (req) => {
  const { md = "" } = await readBody(req);

  const highlighter = await getHighlighter({ theme: "css-variables" });
  const renderer = getRenderer({
    modifyRehype: (instance) => instance.use(rehypeShiki, { highlighter }),
  });

  return String(await renderer.process(md));
});

import rehypeShiki from "@so1ve/rehype-shiki";
import { getRenderer } from "@dolan-x/markdown-renderer";

export async function useRenderMarkdown (md: string) {
  const { getHighlighter, setCDN } = await import("shiki-es");
  setCDN("https://unpkg.com/shiki/");
  const highlighter = await getHighlighter({ theme: "css-variables" });
  const renderer = getRenderer({ modifyRehype: instance => instance.use(rehypeShiki, { highlighter }) });
  return String(renderer.processSync(md));
}

import { resolveRef } from "@vueuse/core";
import type { MaybeRef } from "@vueuse/core";
import rehypeShiki from "@leafac/rehype-shiki";
import { getRenderer } from "@dolan-x/markdown-renderer";

export async function useRenderMarkdown (_md: MaybeRef<string>) {
  const md = resolveRef(_md);
  const renderred = ref(() => "" as string);
  async function init () {
    const { getHighlighter } = await import("shiki-es");
    const highlighter = await getHighlighter({ theme: "css-variables" });
    const renderer = getRenderer({ modifyRehype: instance => instance.use(rehypeShiki, { highlighter }) });
    renderred.value = () => String(renderer.processSync(md.value));
  }
  if (process.server) {
    await init();
  } else {
    init();
  }
  return computed(() => renderred.value());
}

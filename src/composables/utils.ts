export const usePostLink = (s: string) => `/posts/${s}`;
export const useTagLink = (s: string) => `/tags/${s}`;
export const useCategoryLink = (s: string) => `/categories/${s}`;
export function useWordCount(content: string) {
  content = content.replace(/<\/?[a-z][^>]*>/gi, "");
  content = content.trim();
  return content ? (content.match(/[\u00FF-\uFFFF]|[a-zA-Z]+/g) || []).length : 0;
}
export const useIsExternal = (url: string) => url.startsWith("http");
export const notFound = () => createError({ statusCode: 404, statusMessage: "Page Not Found", fatal: true });

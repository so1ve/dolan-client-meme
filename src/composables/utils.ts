export const getPostSlug = (s: string) => `/posts/${s}`;
export function getWordCount (content: string) {
  content = content.replace(/<\/?[a-z][^>]*>/gi, "");
  content = content.trim();
  return content ? (content.match(/[\u00FF-\uFFFF]|[a-zA-Z]+/g) || []).length : 0;
}
export const notFound = () => createError({ statusCode: 404, statusMessage: "Page Not Found", fatal: true });

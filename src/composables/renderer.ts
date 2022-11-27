export async function useRenderMarkdown (md: string) {
  const { data } = await useFetch("/api/render", {
    method: "POST",
    body: { md },
  });
  return data.value!;
}

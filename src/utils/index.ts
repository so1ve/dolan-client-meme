import type { EventHandler } from "h3";

export interface DolanResponse<T> { code: number; message: string; data: T; metas: Record<string, any> }
export const defineAPI = <T>() => defineEventHandler<DolanResponse<T>>((async (event) => {
  const query = getQuery(event);
  const path = event.req.url!.replace("/api", "");

  let res: any;
  try {
    res = await $fetch(path, {
      headers: {
        "Content-Type": "application/json",
      },
      query,
      baseURL: process.env.DOLAN_API_URL as string,
      onResponseError: async (e) => { res = e.response._data; },
    });
  } catch {}

  return { ...res, query };
}) as EventHandler<DolanResponse<T>>);

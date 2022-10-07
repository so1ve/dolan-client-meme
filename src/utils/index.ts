import type { EventHandler } from "h3";

export interface DolanResponse<T> { code: number; message: string; data: T; metas: Record<string, any> }
export const defineAPI = <T>() => defineEventHandler<DolanResponse<T>>((async (event) => {
  const params = getQuery(event);
  const path = event.req.url!.replace("/api", "");

  let res: any;
  try {
    res = await $fetch(path, {
      headers: {
        "Content-Type": "application/json",
      },
      params,
      baseURL: process.env.DOLAN_API_URL,
      onResponseError: async (e) => { res = e.response._data; },
    });
  } catch {}

  return res;
}) as EventHandler<DolanResponse<T>>);

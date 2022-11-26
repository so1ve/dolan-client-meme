import type { Plugin } from "rollup";

export const DenoFixPlugin = () => ({
  name: "deno-fix",
  transform (code) {
    if (process.env.NITRO_PRESET !== "deno") { return; }
    return {
      code: code.replace(
        /process\.env\.DOLAN_API_URL/g,
        "Deno.env.get('DOLAN_API_URL')",
      ),
      map: null,
    };
  },
}) as Plugin;

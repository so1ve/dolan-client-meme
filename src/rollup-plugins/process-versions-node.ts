import type { Plugin } from "rollup";

export const ProcessVersionsNodePlugin = () =>
  ({
    name: "process-versions-node",
    transform(code) {
      if (process.env.NITRO_PRESET !== "deno") {
        return;
      }

      return {
        code: code.replace(
          /process\.versions\.node/g,
          JSON.stringify(process.versions.node),
        ),
        map: null,
      };
    },
  } as Plugin);

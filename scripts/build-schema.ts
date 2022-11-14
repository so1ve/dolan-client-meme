import fs from "node:fs/promises";
import type { Config } from "ts-json-schema-generator";
import { createGenerator } from "ts-json-schema-generator";

async function main () {
  const config: Config = {
    path: "./src/types/config.ts",
    tsconfig: "./tsconfig.json",
    type: "*",
    additionalProperties: true,
  };

  const outPath = "./schemas/schema.json";

  const schema = createGenerator(config).createSchema(config.type);
  schema.properties = (schema.definitions!.ConfigSchema as any).properties;

  const schemaString = JSON.stringify(schema, null, 2);

  await fs.writeFile(outPath, schemaString);
}

main();

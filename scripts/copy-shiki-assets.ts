// Copy shiki-es assets to the public folder

import { join } from "node:path";
import { copy } from "fs-extra";

const shikiAssetsDir = join(__dirname, "..", "node_modules", "shiki-es", "dist", "assets");
const publicAssetsDir = join(__dirname, "..", "static", "shiki-assets");

copy(shikiAssetsDir, publicAssetsDir, { recursive: true });

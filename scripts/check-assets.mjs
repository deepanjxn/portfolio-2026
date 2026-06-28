import { readdirSync, existsSync, writeFileSync } from "fs";
import { resolve, join } from "path";

const PROJECTS_DIR = resolve("public/projects");
const OUTPUT = resolve("src/data/projects-available.json");

const ids = readdirSync(PROJECTS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .filter((dir) => {
    const files = readdirSync(join(PROJECTS_DIR, dir.name));
    return files.length > 0;
  })
  .map((dir) => dir.name);

writeFileSync(OUTPUT, JSON.stringify(ids, null, 2) + "\n");
console.log(`[check-assets] ${ids.length} projects with assets:`, ids.join(", ") || "none");

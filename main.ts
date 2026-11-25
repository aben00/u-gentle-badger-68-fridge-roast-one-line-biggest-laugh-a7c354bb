// Fridge Roast: One Line, Biggest Laugh
// Writes a single one-line roast of a smart fridge to /output/entry.txt.
// Deterministic: the same fixed line every run, no randomness, no network,
// no input. The line is 128 characters, within the 1-200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My smart fridge locked the freezer until I accepted its new terms and conditions — my ice cream is now held hostage by a EULA.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

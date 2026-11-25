// Fridge Roast: One Line, Biggest Laugh
// Writes a single one-line roast of a smart fridge to /output/entry.txt.
// Deterministic: the same fixed line every run, no randomness, no network,
// no input. The line is 126 characters, within the 1-200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SETUP =
  "My smart fridge locked the freezer until I accepted its new terms and conditions";
const PUNCHLINE = "my ice cream is now held hostage by a EULA.";

const ENTRY = `${SETUP} — ${PUNCHLINE}`;

// Gate: the bounty requires one line of 1-200 characters, not whitespace only.
const length = [...ENTRY].length; // code points, so multi-byte chars count once
if (length < 1 || length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

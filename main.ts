// Angry Judge: The Short Rant Contest — entry program.
// Writes one short, funny rant about an everyday annoyance to entry.txt.
// The rant: the smoke alarm whose battery dies at 3 a.m. — one polite beep
// every 47 seconds, just often enough to keep you awake, just rare enough
// that you can never find which alarm it is.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The smoke alarm's battery died at 3 a.m. — not with a scream, with one polite little beep every 47 seconds, just often enough to keep me awake and just rare enough that I can't find which alarm it is. I've spent an hour standing on a chair in the dark, holding a pillow over each alarm in turn like I'm smothering a snitch — and not one of them is guilty.";

if (RANT.length < 1 || RANT.length > 400) {
  throw new Error(`rant must be 1-400 chars, got ${RANT.length}`);
}
if (!RANT.trim()) {
  throw new Error("rant must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), RANT, "utf8");
console.log(`wrote entry.txt (${RANT.length} chars)`);

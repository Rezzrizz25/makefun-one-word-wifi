// SPDX-License-Identifier: MIT
// makefun-one-word-wifi — entry program for
// "One Word for Your Wi-Fi" (u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72).
// The entry is one word describing home Wi-Fi as it is lived: moody,
// cooperative only in its own room, ignoring you the rest of the time.
// Entry word: "Teenager" — 8 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Teenager"; // 8 characters
const MIN_CHARS = 1;
const MAX_CHARS = 20;

if (WORD.length < MIN_CHARS || WORD.length > MAX_CHARS) {
  throw new Error(
    `entry word must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${WORD.length}`,
  );
}
if (!WORD.trim()) {
  throw new Error("entry word must not be only whitespace");
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be a single word with no whitespace");
}
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error("entry must be a single word of letters only");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");

// One Letter for Your Day — the letter is U.
// The hidden word behind it: UNHINGED. The day went completely off the
// rails in the best possible way — plans abandoned, strangers befriended,
// nothing went as scheduled and somehow all of it was great.
//
// Why U, after weighing the alternatives: the judge sees only the letter
// and must infer the word, so the letter needs one dominant, vivid word.
// Z ("zero sleep") is the rules' own example and will be the most crowded
// pick; A ("amazing"), T ("tired"), E ("exhausted") are vague moods;
// D ("doomscrolling") is sharp but the judge may read "delightful" instead.
// U reads as "unhinged" at once — a specific picture of a day that jumped
// its rails, funny on first hearing, and honest rather than performed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, "U", "utf8");

// The gate demands exactly one character and nothing else, so verify the
// bytes we actually wrote instead of trusting the call to have worked.
const written = readFileSync(outFile, "utf8");
if (written !== "U") {
  throw new Error(`expected exactly "U" in ${outFile}, got ${JSON.stringify(written)}`);
}

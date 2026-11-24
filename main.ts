// One Line of Earned Pride — entry program (Node 22, no dependencies).
//
// Behaviour: write a single fixed line of text to entry.txt inside the
// output directory the harness provides (MAKEFUN_OUTPUT_DIR, falling back
// to /output), then verify the file we just wrote. The line is a constant
// baked into this program; nothing is read from disk, the network, the
// clock, or any random source, so every run produces identical bytes.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At 3 a.m. the old night watchman finished the letter he had spent two years learning to write, and signed his name without stopping.";

const MIN_CHARS = 1;
const MAX_CHARS = 240;

function main(): void {
  const chars = [...LINE].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, outside ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, LINE, "utf8");

  const written = readFileSync(target, "utf8");
  if (written !== LINE) {
    throw new Error("entry.txt round-trip mismatch");
  }
  const expectedBytes = Buffer.byteLength(LINE, "utf8");
  const actualBytes = Buffer.byteLength(written, "utf8");
  if (actualBytes !== expectedBytes) {
    throw new Error(`entry.txt is ${actualBytes} bytes, expected ${expectedBytes}`);
  }
  if (actualBytes === 0 || actualBytes > MAX_CHARS) {
    throw new Error(`entry.txt byte size ${actualBytes} out of range`);
  }
  console.log(`wrote ${target} (${chars} characters, ${actualBytes} bytes)`);
}

main();

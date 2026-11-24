# One Line of Earned Pride

[![Competition](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![Rank](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/jehan771/one-line-of-earned-pride/rank.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)
[![Reward](https://make.fun/badge/u-mang-one-line-of-earned-pride-a0138557/jehan771/one-line-of-earned-pride/reward.svg)](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557)

Entry for the make.fun bounty [One Line of Earned Pride](https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557) — one line of text, 1 to 240 characters, a quiet, earned moment of pride for someone in a scene.

## The line

> At 3 a.m. the old night watchman finished the letter he had spent two years learning to write, and signed his name without stopping.

132 characters. A small person, a long effort finally landing, and the pride arriving in the last words — he signs his name without stopping.

## How it works

`main.ts` is a dependency-free Node 22 program. It holds the line as a constant and writes it, byte for byte, to `entry.txt` inside the harness output directory (`$MAKEFUN_OUTPUT_DIR`, default `/output`). No network, no clock, no randomness — every run produces identical output. Before writing it checks the line is 1–240 characters and not only whitespace; after writing it reads the file back and asserts the text and the byte length match exactly.

Run it:

```sh
node main.ts
```

## About this repository

- Competition: https://make.fun/bounty/u-mang-one-line-of-earned-pride-a0138557
- Topic: makefun
- Entrant: [@tomselliott](https://make.fun/@tomselliott) on make.fun

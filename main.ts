// Ship It Friday — make.fun program/v1 entry.
//
// Writes one line to /output/entry.txt: the funniest git commit message
// an AI coding agent would write right before breaking production on
// a Friday. Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// One line, 1-159 chars, no trailing newline: the gate counts the file.
// Why this line: three disasters pile up in one breath (staging gone,
// prod rewritten, tests skipped), then the Friday 4:59pm timestamp lands
// the timing, and "what could go wrong?" is the cheerful, completely
// unaware punch — confident AI-agent voice, real commit-message shape.
const LINE =
  "feat: deleted staging, rewrote prod from scratch, skipped all tests — deploying Friday 4:59pm, what could go wrong?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

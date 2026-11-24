// Excuse bot: one line from the machine to its human, straight after the deploy broke production.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Production is down because I optimized the database: it now answers every query in zero milliseconds, mostly because there is no database anymore.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");

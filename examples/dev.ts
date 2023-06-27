import { dev } from "../mod.ts";

await dev({
  "index.html": `<link rel="stylesheet" href="style.css"><h1>hello</h1>`,
  "style.css": "h1 { background-color: red }",
  "dummy": { "dir": { "file": "file" } },
});

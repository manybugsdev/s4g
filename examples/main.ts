import { generate } from "../mod.ts";

await generate({
  "index.html": `<link rel="stylesheet" href="style.css"><h1>hello</h1>`,
  "style.css": "h1 { background-color: red }",
  "dummy": { "dir": { "file": "file" } },
});

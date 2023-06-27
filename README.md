# s4g

Super simple static site generator.

## How it use

For development.

```ts
import { dev } from "https://deno.land/x/s4g/mod.ts";

await dev({
  "index.html": render(<MyHomePage />),
  "static": {
    "main.css": await Deno.readTextFile("main.css"),
    "main.js": "console.log('s4g')",
  },
});
```

For production.

```ts
import { generate } from "https://deno.land/x/s4g/mod.ts";

await generate({
  "index.html": render(<MyHomePage />),
  "static": {
    "main.css": await Deno.readTextFile("main.css"),
    "main.js": "console.log('s4g')",
  },
});
```

`pub` directory was created.

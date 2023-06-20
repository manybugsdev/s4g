# s4g

Super simple static site generator.

## How it use

For development.

```ts
import { dev } from "https://deno.land/x/s4g/mod.ts";

await dev({
  routes: {
    "index.html": <MyHomePage />,
    "main.css": await Deno.readTextFile("main.css"),
  },
});
```

For production.

```ts
import { generate } from "https://deno.land/x/s4g/mod.ts";

await generate({
  routes: {
    "index.html": <MyHomePage />,
    "main.css": await Deno.readTextFile("main.css"),
  },
  basePath: "pub",
});
```
import { isValidElement, VNode } from "https://esm.sh/preact@10.15.1";
import render from "https://esm.sh/preact-render-to-string@6.1.0";

export type Route = {
  [key: string]: string | VNode | Route;
};

export async function generate(routes: Route, basePath = "pub") {
  await Deno.mkdir(basePath, { recursive: true });
  const keys = Object.keys(routes);
  for (const key of keys) {
    const value = routes[key];
    const path = basePath + "/" + key;
    if (typeof value === "string") {
      await Deno.writeTextFile(path, value);
      continue;
    }
    if (isValidElement(value)) {
      await Deno.writeTextFile(path, render(value));
      continue;
    }
    await generate(value, path);
  }
}

import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.192.0/http/file_server.ts";

export type Route = {
  [key: string]: string | Route;
};

export async function generate(route: Route, basePath = "pub") {
  let bp = basePath;
  bp = bp.endsWith("/") ? bp : (bp + "/");
  await Deno.mkdir(bp, { recursive: true });
  const keys = Object.keys(route);
  for (const key of keys) {
    const value = route[key];
    const p = bp + key;
    if (typeof value === "string") {
      await Deno.writeTextFile(p, value);
      continue;
    }
    await generate(value, p);
  }
}

export async function dev(route: Route, basePath = "pub") {
  await generate(route, basePath);
  await serve((req) => serveDir(req, { fsRoot: basePath }));
}

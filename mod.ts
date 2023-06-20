export type Route = {
  [key: string]: string | Route;
};

export async function generate(route: Route, basePath: string) {
  await Deno.mkdir(basePath, { recursive: true });
  const keys = Object.keys(route);
  for (const key of keys) {
    const value = route[key];
    const path = basePath + "/" + key;
    if (typeof value === "string") {
      await Deno.writeTextFile(path, value);
      continue;
    }
    await generate(value, path);
  }
}

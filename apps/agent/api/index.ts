function readBody(req: any): Promise<string> {
  return new Promise((resolve) => {
    if (req.body) {
      if (typeof req.body === "string") return resolve(req.body);
      return resolve(JSON.stringify(req.body));
    }
    const chunks: Buffer[] = [];
    req.on("data", (c: Buffer) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks).toString()));
  });
}

export default async function handler(req: any, res: any) {
  try {
    const { default: app } = await import("../src/app.js");
    const url = new URL(req.url || "/", `https://${req.headers.host || "localhost"}`);
    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers || {})) {
      if (v) headers.set(k, Array.isArray(v) ? v.join(", ") : String(v));
    }
    const body = req.method !== "GET" && req.method !== "HEAD" ? await readBody(req) : undefined;
    const request = new Request(url.toString(), {
      method: req.method || "GET",
      headers,
      body,
    });
    const response = await app.fetch(request);
    res.statusCode = response.status;
    response.headers.forEach((v, k) => res.setHeader(k, v));
    res.end(await response.text());
  } catch (e: any) {
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain");
    res.end(`${e?.stack || e?.message || e}`);
  }
}

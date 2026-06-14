import app from "../src/app.js";

export default async function handler(req: any, res: any) {
  const url = new URL(req.url || "/", `https://${req.headers.host || "localhost"}`);
  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers || {})) {
    if (v) headers.set(k, Array.isArray(v) ? v.join(", ") : String(v));
  }

  let body: string | undefined;
  if (req.body && typeof req.body === "object") {
    body = JSON.stringify(req.body);
    headers.set("content-type", headers.get("content-type") || "application/json");
  } else if (typeof req.body === "string") {
    body = req.body;
  }

  const request = new Request(url.toString(), {
    method: req.method || "GET",
    headers,
    body: ["GET", "HEAD"].includes(req.method || "GET") ? undefined : body,
  });

  const response = await app.fetch(request);
  res.statusCode = response.status;
  response.headers.forEach((v, k) => res.setHeader(k, v));
  const text = await response.text();
  res.end(text);
}

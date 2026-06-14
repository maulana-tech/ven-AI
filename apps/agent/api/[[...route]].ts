import app from "../src/app.js";

export const config = { runtime: "nodejs" };

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const path = url.pathname;

  if (path === "/health") {
    return new Response(JSON.stringify({ ok: true }), {
      headers: { "content-type": "application/json" },
    });
  }

  return app.fetch(req);
}

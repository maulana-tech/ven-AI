import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { config } from "./config.js";
import { planRoute } from "./routes/plan.js";
import { webhookRoute } from "./routes/webhook.js";

/**
 * Bootstrap service agent. Web memanggil endpoint ini untuk menjalankan
 * Concierge + specialist agents secara server-side (lihat PROJECT.md §7).
 */
const app = new Hono();

app.get("/health", (c) => c.json({ ok: true, service: "concierge-agent" }));
app.route("/plan", planRoute);
app.route("/webhook", webhookRoute);

serve({ fetch: app.fetch, port: config.port }, ({ port }) => {
  console.log(`[agent] listening on http://localhost:${port}`);
});

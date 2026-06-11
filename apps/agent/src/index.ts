import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { config } from "./config.js";
import { planRoute } from "./routes/plan.js";
import { webhookRoute } from "./routes/webhook.js";
import { sellerRoute } from "./routes/seller.js";
import { spikeRoute } from "./routes/spike.js";

/**
 * Bootstrap service agent. Web memanggil endpoint ini untuk menjalankan
 * Concierge + specialist agents secara server-side (lihat PROJECT.md §7).
 */
const app = new Hono();

app.use("*", cors()); // dev: izinkan web (localhost:3000) memanggil agent

app.get("/health", (c) => c.json({ ok: true, service: "concierge-agent" }));
app.route("/plan", planRoute);
app.route("/webhook", webhookRoute);
app.route("/seller", sellerRoute); // mock x402 seller (Fase 2 spike)
app.route("/spike", spikeRoute); // vertical-slice Fase 2

serve({ fetch: app.fetch, port: config.port }, ({ port }) => {
  console.log(`[agent] listening on http://localhost:${port}`);
});

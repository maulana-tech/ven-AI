import { Hono } from "hono";
import { verifyWebhook } from "../integrations/oneshot.js";

/**
 * POST /webhook/oneshot — sumber kebenaran status transaksi (UI_GUIDE: feed
 * disuapi event ini). 1Shot mengirim update pending → confirmed/failed.
 *
 * ⚠️ Fase 2: verifikasi signature + teruskan ke client (SSE). Sekarang kerangka.
 */
export const webhookRoute = new Hono().post("/oneshot", async (c) => {
  const signature = c.req.header("x-oneshot-signature") ?? "";
  const raw = await c.req.text();

  if (!(await verifyWebhook(raw, signature))) {
    return c.json({ error: "signature tidak valid" }, 401);
  }

  // TODO Fase 4: broadcast ke web via SSE/websocket
  return c.json({ ok: true });
});

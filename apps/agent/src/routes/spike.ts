import { Hono } from "hono";
import { runSpike } from "../spike.js";
import { getCapabilities } from "../integrations/oneshot.js";

/** POST /spike { request } → SpikeResult. Menjalankan vertical-slice Fase 2. */
export const spikeRoute = new Hono()
  .post("/", async (c) => {
    const body = await c.req
      .json<{ request?: string }>()
      .catch(() => ({}) as { request?: string });
    const request = body.request?.trim() || "research 3 competitors, then make a poster";
    const result = await runSpike(request);
    return c.json(result);
  })
  // GET /spike/capabilities — probe 1Shot relayer (null bila belum dikonfigurasi).
  .get("/capabilities", async (c) => {
    const caps = await getCapabilities();
    return c.json({ configured: caps !== null, capabilities: caps });
  });

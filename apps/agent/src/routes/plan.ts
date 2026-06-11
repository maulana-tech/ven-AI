import { Hono } from "hono";
import { planRequest } from "../concierge/planner.js";

/** POST /plan { request } → TaskPlan. Concierge memecah permintaan jadi sub-tugas. */
export const planRoute = new Hono().post("/", async (c) => {
  const body = await c.req
    .json<{ request?: string }>()
    .catch(() => ({}) as { request?: string });
  const request = body.request?.trim();
  if (!request) {
    return c.json({ error: "field 'request' wajib" }, 400);
  }
  const plan = await planRequest(request);
  return c.json(plan);
});

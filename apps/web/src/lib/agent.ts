import type { SpikeResult } from "@concierge/shared";

const AGENT_URL = process.env.NEXT_PUBLIC_AGENT_URL ?? "http://localhost:8787";

/**
 * Jalankan vertical-slice Fase 2 di service agent: plan → delegasi + redelegasi
 * (dengan caveat) → pembayaran x402. Mengembalikan jejak nyata untuk dirender.
 */
export async function runSpike(request: string): Promise<SpikeResult> {
  const res = await fetch(`${AGENT_URL}/spike`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ request }),
  });
  if (!res.ok) throw new Error(`agent responded ${res.status}`);
  return (await res.json()) as SpikeResult;
}

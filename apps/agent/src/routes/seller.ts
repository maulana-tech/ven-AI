import { Hono } from "hono";
import { config } from "../config.js";

/**
 * Mock x402 seller — berdiri sendiri agar loop pembayaran x402 bisa dijalankan
 * lokal tanpa layanan pihak ketiga. Tanpa header X-PAYMENT → balas 402 dengan
 * payment requirements; dengan header → balas 200 + data.
 *
 * ⚠️ Ini pengganti Fase 2 untuk "seller data berbayar" (PROJECT.md §10) sampai
 * seller x402 nyata / endpoint Venice x402 dipasang.
 */
export const SELLER = "0x000000000000000000000000000000000000dEaD" as const;

export const sellerRoute = new Hono().get("/data", (c) => {
  const payment = c.req.header("x-payment");

  if (!payment) {
    return c.json(
      {
        x402Version: 1,
        accepts: [
          {
            scheme: "exact",
            network: config.chain.name,
            maxAmountRequired: "2000000", // 2 USDC (6 desimal)
            asset: config.usdc,
            payTo: SELLER,
            resource: "/seller/data",
            description: "competitor dataset",
          },
        ],
      },
      402,
    );
  }

  const q = c.req.query("q") ?? "topic";
  return c.json({ data: `dataset for "${q}"`, source: "mock-seller" });
});

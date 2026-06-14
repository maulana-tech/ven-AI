import { keccak256, toHex, type Address, type Hex } from "viem";

/**
 * Klien pembayaran x402: menangani HTTP 402 dari layanan berbayar, "membayar",
 * lalu mengulang request. Loop 402 → bayar → 200 ini NYATA (lawan mock seller).
 *
 * Settlement-nya masih SIMULATED: di produksi, langkah bayar = menandatangani
 * otorisasi pembayaran x402 (EIP-3009 transferWithAuthorization USDC) dan
 * menyelesaikannya lewat facilitator/1Shot. Di sini kita hasilkan referensi
 * settlement deterministik agar alurnya bisa dijalankan tanpa dana.
 */

export interface X402Accept {
  scheme: string;
  network: string;
  /** jumlah dalam unit terkecil aset (USDC = 6 desimal) */
  maxAmountRequired: string;
  asset: Address;
  payTo: Address;
  resource: string;
  description?: string;
}

export interface X402Requirements {
  x402Version: number;
  accepts: X402Accept[];
}

export interface PaidFetchResult<T> {
  data: T;
  /** jumlah yang dibayar (USD) */
  paid: number;
  /** referensi settlement (tx hash on-chain di produksi; simulasi di sini) */
  txHash: Hex;
  settlement: "simulated" | "onchain";
}

export async function paidFetch<T = unknown>(
  url: string,
  payer: { address: Address },
  opts?: { maxPayUsd?: number },
): Promise<PaidFetchResult<T>> {
  const first = await fetch(url);

  if (first.status !== 402) {
    if (!first.ok) throw new Error(`seller responded ${first.status}`);
    return {
      data: (await first.json()) as T,
      paid: 0,
      txHash: ("0x" + "0".repeat(64)) as Hex,
      settlement: "simulated",
    };
  }

  const reqs = (await first.json()) as X402Requirements;
  const accept = reqs.accepts?.[0];
  if (!accept) throw new Error("402 without payment requirements");

  const amountUsd = Number(accept.maxAmountRequired) / 1_000_000;
  if (opts?.maxPayUsd != null && amountUsd > opts.maxPayUsd) {
    throw new Error(
      `payment ${amountUsd} exceeds delegated cap ${opts.maxPayUsd}`,
    );
  }

  // --- SIMULATED settlement (lihat catatan di atas) ---
  const txHash = keccak256(
    toHex(`${payer.address}:${accept.resource}:${accept.maxAmountRequired}`),
  );
  const payment = btoa(
    JSON.stringify({
      scheme: accept.scheme,
      network: accept.network,
      from: payer.address,
      to: accept.payTo,
      asset: accept.asset,
      amount: accept.maxAmountRequired,
      settlement: txHash,
    }),
  );

  const second = await fetch(url, { headers: { "X-PAYMENT": payment } });
  if (!second.ok) throw new Error(`retry after payment responded ${second.status}`);

  return {
    data: (await second.json()) as T,
    paid: amountUsd,
    txHash,
    settlement: "simulated",
  };
}

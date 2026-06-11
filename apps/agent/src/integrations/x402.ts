/**
 * Klien pembayaran x402 — menangani respons HTTP 402 dari layanan berbayar,
 * membayar micropayment, lalu mengulang request. Pembayaran direlay via 1Shot.
 *
 * ⚠️ Fase 2: implementasi nyata (butuh verifikasi seller x402 — PROJECT.md §10).
 * Sekarang stub.
 */

export interface PaidFetchResult<T> {
  data: T;
  /** jumlah yang dibayar (USD) */
  paid: number;
  txHash?: string;
}

export async function paidFetch<T = unknown>(
  url: string,
  _init?: RequestInit,
): Promise<PaidFetchResult<T>> {
  throw new Error(`paidFetch(${url}): belum diimplementasi (Fase 2)`);
}

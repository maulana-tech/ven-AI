import type { PaymentStatus } from "@concierge/shared";

/**
 * Klien 1Shot Permissionless Relayer — merelay transaksi ERC-7710 ke chain,
 * gas dibayar stablecoin, plus 7702 upgrade. Status datang via webhook.
 *
 * ⚠️ Fase 2: implementasi nyata (verifikasi chain & 7702 target — PROJECT.md §10).
 * Sekarang stub.
 */

export interface RelayResult {
  txHash: string;
  status: PaymentStatus;
}

/** Upgrade akun EOA → smart account via otorisasi 7702. */
export async function upgradeAccount(_address: string): Promise<RelayResult> {
  throw new Error("upgradeAccount: belum diimplementasi (Fase 2)");
}

/** Relay sebuah transaksi delegasi (7710) lewat relayer. */
export async function relayTransaction(_payload: unknown): Promise<RelayResult> {
  throw new Error("relayTransaction: belum diimplementasi (Fase 2)");
}

/** Verifikasi tanda tangan webhook 1Shot. */
export function verifyWebhook(_body: string, _signature: string): boolean {
  // TODO Fase 2: HMAC dengan ONESHOT_WEBHOOK_SECRET
  return false;
}

/**
 * Kontrak domain bersama web ⇄ agent.
 * Web menampilkan apa yang agent hasilkan, jadi tipe ini satu sumber kebenaran.
 * Lihat PROJECT.md untuk konteks alur.
 */

/** Peran tiap aktor dalam sistem. */
export type AgentRole = "concierge" | "research" | "media";

/** Status pembayaran on-chain (sumber: webhook 1Shot). */
export type PaymentStatus = "pending" | "confirmed" | "failed";

/** Izin yang diberikan user (ERC-7715 Advanced Permission). */
export interface Grant {
  /** plafon total dalam USD */
  cap: number;
  /** kategori yang diizinkan, mis. ["riset", "media"] */
  category: string[];
  /** epoch ms kadaluarsa */
  expiresAt: number;
}

/** State budget agregat (level user). */
export interface BudgetState {
  cap: number;
  spent: number;
}

/** Satu node dalam rantai delegasi: user → concierge → specialist. */
export interface DelegationNode {
  id: string;
  role: AgentRole | "user";
  label: string;
  /** sub-plafon node ini (USD) */
  cap: number;
  spent: number;
  active: boolean;
}

/** Satu sub-tugas hasil perencanaan Concierge (via Venice). */
export interface SubTask {
  agent: Exclude<AgentRole, "concierge">;
  description: string;
  /** estimasi biaya USD */
  estimatedCost: number;
}

/** Rencana lengkap dari Concierge untuk satu permintaan user. */
export interface TaskPlan {
  request: string;
  subtasks: SubTask[];
}

/**
 * Satu entri di activity feed — sekaligus "witness block" (UI_GUIDE §6):
 * aksi agent + bukti transaksi on-chain.
 */
export interface ActivityEvent {
  id: string;
  agent: AgentRole;
  action: string;
  /** jumlah yang dibayar (USD) */
  amount: number;
  status: PaymentStatus;
  /** hash transaksi (terisi setelah relay 1Shot) */
  txHash?: string;
  /** gas yang dibayar dalam stablecoin (USD) */
  gasUsd?: number;
  /** epoch ms */
  at: number;
}

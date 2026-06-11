import type { PaymentStatus } from "@concierge/shared";
import { cn } from "@/lib/utils";

/** Penanda status transaksi — titik solid fungsional (bukan ikon emoji). */
export function StatusDot({ status }: { status: PaymentStatus }) {
  return (
    <span
      aria-label={status}
      className={cn(
        "h-1.5 w-1.5 shrink-0 rounded-full",
        status === "confirmed" && "bg-success",
        status === "pending" && "animate-pulse-dot bg-gold",
        status === "failed" && "bg-danger",
      )}
    />
  );
}

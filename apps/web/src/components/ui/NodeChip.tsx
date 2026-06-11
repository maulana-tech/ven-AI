import { usd, cn } from "@/lib/utils";

/** Chip satu node delegasi: nama + sub-plafon mono. */
export function NodeChip({
  name,
  cap,
  active,
}: {
  name: string;
  cap: number;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded border px-3 py-2",
        active ? "border-gold/50 bg-gold-tint text-ink" : "border-line text-ink-muted",
      )}
    >
      <div className="font-sans text-[11px] font-medium">{name}</div>
      <div className="font-mono text-xs tnum">${usd(cap)}</div>
    </div>
  );
}

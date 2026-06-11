import { CornerFrame } from "./CornerFrame";

/** Hasil akhir: preview media + ringkasan teks. Placeholder sampai Fase 3. */
export function ResultPanel() {
  return (
    <CornerFrame label="Hasil">
      <div className="flex aspect-video items-center justify-center border border-dashed border-line text-xs text-ink-faint">
        preview poster
      </div>
      <div className="mt-4">
        <div className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
          Ringkasan riset
        </div>
        <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
          <li>Kompetitor A — menunggu hasil</li>
          <li>Kompetitor B — menunggu hasil</li>
          <li>Kompetitor C — menunggu hasil</li>
        </ul>
      </div>
    </CornerFrame>
  );
}

import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
            Masalahnya
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-3xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            Hari ini, memberi agent kemampuan membayar berarti menyerahkan
            kunci dompet. Sekali bocor, habis semua.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
            Concierge memutus dilema itu: izin terprogram dan terbatas. Agent
            bisa bertransaksi sendiri, tapi kontrol — plafon, kategori, masa
            berlaku, pencabutan — tetap di tanganmu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

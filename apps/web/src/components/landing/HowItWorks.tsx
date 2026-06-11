import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Kasih jatah & aturan",
    body: "Sambungkan dompet, lalu setujui sekali: plafon (mis. $50), kategori, dan masa berlaku. Bukan akses penuh — hanya amplop berisi $50.",
  },
  {
    n: "02",
    title: "Tulis permintaan",
    body: "Satu kalimat, mis. “riset 3 kompetitor lalu buat poster”. Concierge memecahnya jadi sub-tugas dan mengalokasikan budget.",
  },
  {
    n: "03",
    title: "Agent mendelegasi & bekerja",
    body: "Concierge meneruskan sub-budget ke agent spesialis. Tiap agent membayar layanan yang dipakainya sendiri lewat x402.",
  },
  {
    n: "04",
    title: "Hasil + bukti",
    body: "Kamu terima hasilnya plus jejak audit: siapa membayar apa, berapa, sisa berapa. Sisa yang tak terpakai tetap milikmu.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
          Cara kerja
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
          Kamu memberi tugas dan jatah sekali. Sisanya berjalan sendiri.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.05} className="bg-paper">
            <div className="h-full p-7">
              <div className="font-mono text-sm tnum text-gold">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

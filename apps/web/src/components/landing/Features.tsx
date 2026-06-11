import { Reveal } from "./Reveal";

const FEATURES = [
  {
    title: "Izin terbatas, bukan kunci penuh",
    body: "Plafon, kategori, dan masa berlaku yang kamu tentukan. Cabut kapan saja — agent berhenti bisa membayar saat itu juga.",
  },
  {
    title: "Budget yang terlihat bergerak",
    body: "Saldo dan setiap pembayaran tampil real-time. Tahu persis berapa terpakai dan berapa tersisa, tanpa menebak.",
  },
  {
    title: "Agent yang saling mendelegasi",
    body: "Concierge membagi sub-budget ke agent spesialis, masing-masing dengan batasnya sendiri. Total tak pernah melebihi plafonmu.",
  },
  {
    title: "Bayar-per-pakai lewat x402",
    body: "Tiap agent membayar layanan yang benar-benar dipakainya — data, model, generasi — sebagai micropayment, bukan langganan.",
  },
  {
    title: "Gas dibayar stablecoin",
    body: "Transaksi direlay lewat 1Shot; biaya gas dibayar USDC. Status datang dari webhook, bukan polling tebak-tebakan.",
  },
  {
    title: "Setiap aksi terbukti on-chain",
    body: "Bukan klaim teks. Tiap pembayaran punya hash transaksi yang bisa kamu telusuri sendiri di explorer.",
  },
];

export function Features() {
  return (
    <section id="fitur" className="border-t border-line bg-panel">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
            Fitur
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
            Dibangun supaya AI boleh memegang uang dengan aman.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05} className="bg-panel">
              <div className="h-full p-7">
                <h3 className="text-base font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

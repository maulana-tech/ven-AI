import Link from "next/link";
import { Reveal } from "./Reveal";

const TECH = [
  "MetaMask Smart Accounts",
  "ERC-7715",
  "ERC-7710",
  "x402",
  "Venice AI",
  "1Shot Relayer",
];

export function CTA() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center border-t border-line px-4 py-24 text-center">
      <div className="mx-auto w-full max-w-2xl">
        <Reveal>
          <p className="text-[11px] font-medium uppercase tracking-wide text-ink-faint">
            Built on
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            {TECH.map((t) => (
              <span
                key={t}
                className="border border-line px-3 py-1.5 font-mono text-xs text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-16 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Hand off the task, not your wallet.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Set a cap, give a command, and let the agent work within limits you
            hold completely.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            href="/app"
            className="mt-9 inline-block rounded bg-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-hover"
          >
            Open app
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

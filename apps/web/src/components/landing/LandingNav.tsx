import Link from "next/link";
import { Logo } from "../Logo";

export function LandingNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Logo />
        <div className="flex items-center gap-6">
          <Link
            href="#cara"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Cara kerja
          </Link>
          <Link
            href="#fitur"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Fitur
          </Link>
          <Link
            href="/app"
            className="rounded bg-gold px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gold-hover"
          >
            Buka App
          </Link>
        </div>
      </div>
    </nav>
  );
}

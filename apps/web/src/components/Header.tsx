"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="mb-6 flex items-center justify-between">
      <Logo />
      <ConnectButton showBalance={false} />
    </header>
  );
}

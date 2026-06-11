"use client";

import { Header } from "@/components/Header";
import { BudgetMeter } from "@/components/BudgetMeter";
import { DelegationChain } from "@/components/DelegationChain";
import { ActivityFeed } from "@/components/ActivityFeed";
import { ResultPanel } from "@/components/ResultPanel";
import { PromptBar } from "@/components/PromptBar";
import { MOCK_BUDGET, MOCK_DELEGATION, MOCK_FEED } from "@/lib/mock";

/**
 * Dashboard shell (UI_GUIDE §7) — hanya komposisi. Logika & data nyata masuk
 * di Fase 3–4. Data sekarang dari `lib/mock` (bentuknya sudah sesuai kontrak).
 */
export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-6">
      <Header />

      <div className="mb-6">
        <BudgetMeter
          spent={MOCK_BUDGET.spent}
          cap={MOCK_BUDGET.cap}
          onRevoke={() => {}}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <DelegationChain nodes={MOCK_DELEGATION} />
          <ActivityFeed events={MOCK_FEED} />
        </div>
        <ResultPanel />
      </div>

      <div className="mt-6">
        <PromptBar />
      </div>
    </main>
  );
}

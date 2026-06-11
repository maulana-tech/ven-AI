"use client";

import { useEffect, useState } from "react";
import { CAPABILITIES, type Capability } from "@concierge/shared";
import { Navbar } from "@/components/Navbar";
import { AgentCard } from "@/components/AgentCard";
import { CreateAgentForm } from "@/components/CreateAgentForm";
import { getCustomAgents, removeCustomAgent } from "@/lib/customAgents";

/**
 * Halaman Agents (hybrid). Katalog bawaan (`@concierge/shared`) + agent custom
 * user (localStorage). Concierge memilih dari gabungan keduanya per permintaan.
 */
export default function AgentsPage() {
  const [custom, setCustom] = useState<Capability[]>([]);
  const [showForm, setShowForm] = useState(false);

  // Baca custom di client (hindari mismatch hidrasi SSR).
  useEffect(() => setCustom(getCustomAgents()), []);

  const total = CAPABILITIES.length + custom.length;

  return (
    <>
      <Navbar variant="app" />
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-8">
        <header className="mb-8 flex items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight">Agents</h1>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Specialists ven-AI can delegate to. It picks the ones a request
              needs, redelegates each its own sub-budget, and each pays for the
              service it uses via x402. Add your own and it joins the catalog.
            </p>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="shrink-0 rounded bg-gold px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gold-hover"
            >
              Create agent
            </button>
          )}
        </header>

        {showForm && (
          <div className="mb-8">
            <CreateAgentForm
              onCreated={(list) => {
                setCustom(list);
                setShowForm(false);
              }}
              onCancel={() => setShowForm(false)}
            />
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
          {custom.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              custom
              onRemove={() => setCustom(removeCustomAgent(agent.id))}
            />
          ))}
        </div>

        <p className="mt-6 font-mono text-xs text-ink-faint">
          {total} agents available
          {custom.length > 0 ? ` · ${custom.length} custom` : ""}
        </p>
      </main>
    </>
  );
}

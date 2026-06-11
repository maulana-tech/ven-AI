import type { Capability } from "@concierge/shared";

/**
 * Agent custom buatan user disimpan di localStorage (belum ada backend) dan
 * dikirim bersama tiap permintaan /spike. Hybrid: katalog bawaan + custom.
 */
const KEY = "venai.customAgents";

export function getCustomAgents(): Capability[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Capability[]) : [];
  } catch {
    return [];
  }
}

function save(list: Capability[]): Capability[] {
  if (typeof window !== "undefined") {
    localStorage.setItem(KEY, JSON.stringify(list));
  }
  return list;
}

export function addCustomAgent(agent: Capability): Capability[] {
  return save([...getCustomAgents(), agent]);
}

export function removeCustomAgent(id: string): Capability[] {
  return save(getCustomAgents().filter((a) => a.id !== id));
}

/** id stabil dari label + suffix unik (hindari tabrakan dgn agent bawaan). */
export function makeAgentId(label: string): string {
  const slug =
    label
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 24) || "agent";
  return `${slug}-${Date.now().toString(36)}`;
}

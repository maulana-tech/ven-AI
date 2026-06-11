import { veniceChat } from "../integrations/venice.js";
import { paidFetch } from "../integrations/x402.js";

/**
 * ResearchAgent — menerima redelegasi sub-budget, mengakses data berbayar
 * lewat x402, lalu merangkum dengan Venice text.
 *
 * ⚠️ Fase 3. Sekarang kerangka.
 */
export async function runResearch(topic: string): Promise<{ summary: string }> {
  // Fase 2: const { data } = await paidFetch(`https://seller/data?q=${topic}`)
  void paidFetch;
  const { text } = await veniceChat(`Rangkum riset tentang: ${topic}`);
  return { summary: text };
}

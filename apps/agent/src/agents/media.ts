import { veniceImage } from "../integrations/venice.js";

/**
 * MediaAgent — menerima redelegasi sub-budget, generate gambar/poster lewat
 * Venice (berbayar via x402).
 *
 * ⚠️ Fase 3. Sekarang kerangka.
 */
export async function runMedia(brief: string): Promise<{ imageUrl: string }> {
  const { url } = await veniceImage(brief);
  return { imageUrl: url };
}

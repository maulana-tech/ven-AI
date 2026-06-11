import { config } from "../config.js";

/**
 * Klien Venice AI (OpenAI-compatible). Dipakai Concierge untuk merencanakan
 * tugas (text) dan MediaAgent untuk generate gambar.
 *
 * ⚠️ Fase 3: implementasi nyata. Sekarang stub.
 */

export interface ChatResult {
  text: string;
}

export async function veniceChat(prompt: string): Promise<ChatResult> {
  if (!config.venice.apiKey) {
    // Fase 1: belum ada key — kembalikan placeholder agar alur tetap jalan.
    return { text: `[venice-stub] ${prompt.slice(0, 40)}…` };
  }
  // TODO Fase 3: POST ${baseUrl}/chat/completions
  throw new Error("veniceChat: belum diimplementasi (Fase 3)");
}

export async function veniceImage(prompt: string): Promise<{ url: string }> {
  if (!config.venice.apiKey) {
    return { url: "data:image/svg+xml,stub" };
  }
  // TODO Fase 3: POST ${baseUrl}/image/generate
  throw new Error("veniceImage: belum diimplementasi (Fase 3)");
}

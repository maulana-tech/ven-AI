/** Konfigurasi service agent dari environment. */
export const config = {
  port: Number(process.env.PORT ?? 8787),
  venice: {
    apiKey: process.env.VENICE_API_KEY ?? "",
    baseUrl: process.env.VENICE_BASE_URL ?? "https://api.venice.ai/api/v1",
  },
  oneshot: {
    apiKey: process.env.ONESHOT_API_KEY ?? "",
    webhookSecret: process.env.ONESHOT_WEBHOOK_SECRET ?? "",
  },
} as const;

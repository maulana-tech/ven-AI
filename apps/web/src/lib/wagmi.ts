import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

/**
 * Konfigurasi wallet (RainbowKit + wagmi).
 *
 * ⚠️ Fase 0 TODO: kunci chain final setelah verifikasi 1Shot relayer
 * mendukung testnet apa (lihat PROJECT.md §10). Sementara: sepolia (dev) +
 * mainnet (placeholder). iNMerge pakai Mantle — kandidat kuat.
 */
export const wagmiConfig = getDefaultConfig({
  appName: "Concierge",
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID ?? "PLACEHOLDER_PROJECT_ID",
  chains: [sepolia, mainnet],
  ssr: true,
});

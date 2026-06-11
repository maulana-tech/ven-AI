import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format angka jadi USD dengan 2 desimal, untuk tampilan mono. */
export function usd(n: number): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/** Pendekkan address / tx hash: 0x1234…abcd */
export function truncate(hash: string, head = 6, tail = 4): string {
  if (hash.length <= head + tail) return hash;
  return `${hash.slice(0, head)}…${hash.slice(-tail)}`;
}

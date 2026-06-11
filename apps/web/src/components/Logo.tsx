/**
 * Mark + wordmark. Mark digambar via CSS (kotak bronze), bukan glyph/emoji —
 * sesuai aturan anti-slop UI_GUIDE (tanpa emote, tanpa gradient).
 */
export function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden className="h-3 w-3 rotate-45 border-2 border-gold" />
      <span className="text-lg font-semibold tracking-tight">Concierge</span>
    </div>
  );
}

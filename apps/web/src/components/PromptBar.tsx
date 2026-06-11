"use client";

import { useState } from "react";
import { CornerFrame } from "./CornerFrame";

/**
 * Input permintaan — sengaja KECIL & di bawah (UI_GUIDE §0: bukan chatbot).
 * Tanpa caret glyph/emote. Submit memicu spike di service agent.
 */
export function PromptBar({
  onSubmit,
  loading,
}: {
  onSubmit?: (value: string) => void;
  loading?: boolean;
}) {
  const [value, setValue] = useState("");

  return (
    <CornerFrame>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (value.trim()) onSubmit?.(value.trim());
        }}
        className="flex items-center gap-3"
      >
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={loading}
          placeholder="type a request — e.g. research 3 competitors, then make a poster"
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-ink-faint disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded bg-gold px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gold-hover disabled:opacity-50"
        >
          {loading ? "Running…" : "Send"}
        </button>
      </form>
    </CornerFrame>
  );
}

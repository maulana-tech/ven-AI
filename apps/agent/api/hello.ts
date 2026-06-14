export const config = { runtime: "nodejs" };

export default async function handler() {
  return new Response(
    JSON.stringify({ ok: true, file: "api/hello.ts (no deps)" }),
    { headers: { "content-type": "application/json" } },
  );
}

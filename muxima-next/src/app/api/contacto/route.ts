import { NextResponse } from "next/server";

const TIPOS = ["contacto", "intencao", "voluntario"];
const lim = (v: unknown, n = 2000) => String(v ?? "").slice(0, n).trim();

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ erro: "Pedido inválido" }, { status: 400 }); }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot anti-spam
  if (!TIPOS.includes(String(b.tipo))) return NextResponse.json({ erro: "Tipo inválido" }, { status: 400 });
  const dados: Record<string, string> = Object.fromEntries(Object.entries(b).filter(([k]) => k !== "website").map(([k, v]) => [k, lim(v)]));
  if (b.tipo === "contacto" && (!dados.nome || !/^\S+@\S+\.\S+$/.test(dados.email ?? "") || !dados.mensagem)) return NextResponse.json({ erro: "Campos obrigatórios em falta" }, { status: 422 });
  if (b.tipo === "intencao" && !dados.mensagem) return NextResponse.json({ erro: "Indique a intenção" }, { status: 422 });
  if (b.tipo === "voluntario" && (!dados.nome || !dados.contacto)) return NextResponse.json({ erro: "Campos obrigatórios em falta" }, { status: 422 });

  const endpoint = process.env.FORM_ENDPOINT;
  if (endpoint) {
    const r = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(dados) });
    if (!r.ok) return NextResponse.json({ erro: "Falha no envio" }, { status: 502 });
  } else {
    console.info("[formulário em modo local — FORM_ENDPOINT não definido]", dados.tipo);
  }
  return NextResponse.json({ ok: true });
}

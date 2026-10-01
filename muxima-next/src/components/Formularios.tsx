"use client";
import { useState } from "react";
type Tipo = "contacto" | "intencao" | "voluntario";
export default function Formulario({ tipo }: { tipo: Tipo }) {
  const [estado, setEstado] = useState<"idle" | "a-enviar" | "ok" | "erro">("idle");
  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget; setEstado("a-enviar");
    try {
      const r = await fetch("/api/contacto", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tipo, ...Object.fromEntries(new FormData(f)) }) });
      if (!r.ok) throw new Error(); setEstado("ok"); f.reset();
    } catch { setEstado("erro"); }
  }
  return (
    <form onSubmit={enviar} className="form">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      {tipo === "contacto" && <>
        <label>Nome completo *<input name="nome" required autoComplete="name" /></label>
        <label>E-mail *<input name="email" type="email" required autoComplete="email" /></label>
        <label>Telefone (opcional)<input name="telefone" type="tel" autoComplete="tel" /></label>
        <label>Assunto<select name="assunto"><option>Informações gerais</option><option>Grande Peregrinação / grupos</option><option>Artigos religiosos</option><option>Doações / voluntariado</option></select></label>
        <label>Mensagem *<textarea name="mensagem" rows={5} required /></label></>}
      {tipo === "intencao" && <>
        <label>Nome (ou «anónimo»)<input name="nome" /></label>
        <label>Intenção *<textarea name="mensagem" rows={5} required /></label></>}
      {tipo === "voluntario" && <>
        <label>Nome *<input name="nome" required autoComplete="name" /></label>
        <label>Telefone / e-mail *<input name="contacto" required /></label>
        <label>Área preferida<select name="area"><option>Acolhimento de peregrinos</option><option>Logística e organização</option><option>Apoio sanitário</option><option>Cantina / alimentação</option><option>Limpeza e ambiente</option><option>Canto e liturgia</option></select></label></>}
      <button className="btn" disabled={estado === "a-enviar"}>{estado === "a-enviar" ? "A enviar…" : tipo === "contacto" ? "Enviar mensagem" : tipo === "intencao" ? "Confiar a minha intenção" : "Inscrever-me como voluntário"}</button>
      <p role="status" className={estado === "erro" ? "err" : "okmsg"}>{estado === "ok" && "Mensagem recebida. O cartório responderá em breve."}{estado === "erro" && "Não foi possível enviar. Tente novamente ou contacte o cartório por telefone."}</p>
    </form>
  );
}

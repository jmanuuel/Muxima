"use client";
import { useEffect, useState } from "react";
import { anoPeregrinacao, janelaPeregrinacao } from "@/lib/calendar";
export default function Countdown() {
  const [s, setS] = useState<{ ano: number; falta: number; decorre: boolean } | null>(null);
  useEffect(() => {
    const tick = () => {
      const agora = new Date(), ano = anoPeregrinacao(agora), j = janelaPeregrinacao(ano);
      setS({ ano, falta: +j.inicio - +agora, decorre: agora >= j.inicio && agora <= j.fim });
    };
    tick(); const t = setInterval(tick, 1000); return () => clearInterval(t);
  }, []);
  if (!s) return <div className="countdown" aria-hidden="true" style={{ minHeight: 76 }} />;
  if (s.decorre) return <p className="decorre" role="status">A Grande Peregrinação {s.ano} está a decorrer.</p>;
  const d = Math.floor(s.falta / 864e5), h = Math.floor(s.falta / 36e5) % 24, m = Math.floor(s.falta / 6e4) % 60, sec = Math.floor(s.falta / 1e3) % 60;
  return (
    <div className="countdown" role="timer" aria-label={`Faltam ${d} dias para a Grande Peregrinação ${s.ano}`}>
      {[[d, "dias"], [h, "horas"], [m, "min"], [sec, "seg"]].map(([v, l]) => <div key={l as string}><b>{String(v).padStart(2, "0")}</b><span>{l}</span></div>)}
    </div>
  );
}

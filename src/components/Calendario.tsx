"use client";
import { useMemo, useState } from "react";
import { eventosDoAno, type Categoria } from "@/lib/calendar";
const CATS: ("Todos" | Categoria)[] = ["Todos", "Liturgia", "Peregrinação", "Formação", "Cultural"];
const MESES = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
export default function Calendario() {
  const hoje = new Date();
  const [ano, setAno] = useState(hoje.getFullYear());
  const [mes, setMes] = useState(hoje.getMonth());
  const [cat, setCat] = useState<(typeof CATS)[number]>("Todos");
  const evs = useMemo(() => eventosDoAno(ano).filter(e => cat === "Todos" || e.categoria === cat), [ano, cat]);
  const doMes = evs.filter(e => e.data.getMonth() === mes);
  const primeiro = (new Date(ano, mes, 1).getDay() + 6) % 7, dias = new Date(ano, mes + 1, 0).getDate();
  const mover = (n: number) => { const d = new Date(ano, mes + n, 1); setAno(d.getFullYear()); setMes(d.getMonth()); };
  return (
    <div className="cal">
      <div className="cal-head">
        <button onClick={() => mover(-1)} aria-label="Mês anterior">‹</button>
        <h3 aria-live="polite">{MESES[mes]} {ano}</h3>
        <button onClick={() => mover(1)} aria-label="Mês seguinte">›</button>
      </div>
      <div className="chips" role="group" aria-label="Filtrar por categoria">
        {CATS.map(c => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div className="cal-grid" role="grid">
        {["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"].map(d => <div key={d} className="dow">{d}</div>)}
        {Array.from({ length: primeiro }, (_, i) => <div key={"v" + i} />)}
        {Array.from({ length: dias }, (_, i) => {
          const e = doMes.filter(x => x.data.getDate() === i + 1);
          const ehHoje = hoje.getFullYear() === ano && hoje.getMonth() === mes && hoje.getDate() === i + 1;
          return <div key={i} className={`day${e.length ? " has" : ""}${ehHoje ? " today" : ""}`} title={e.map(x => x.titulo).join("; ")}>{i + 1}{e.length > 0 && <i aria-hidden="true" />}</div>;
        })}
      </div>
      <h4>Eventos de {MESES[mes]}</h4>
      {doMes.length ? <ul className="evlist">{doMes.map(e => <li key={e.titulo + e.data}><b>{e.data.getDate()}</b><span>{e.titulo}<small>{e.categoria}</small></span></li>)}</ul> : <p>Sem eventos nesta categoria neste mês.</p>}
    </div>
  );
}

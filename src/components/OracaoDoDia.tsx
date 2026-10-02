"use client";
import { useEffect, useState } from "react";
import { ORACOES, oracaoDoDia } from "@/content";
export default function OracaoDoDia() {
  const [o, setO] = useState(ORACOES[0]);
  useEffect(() => setO(oracaoDoDia()), []);
  return (
    <div className="card">
      <p className="eyebrow">Oração do Dia</p>
      <h3>{o.titulo}</h3>
      <p>{o.texto}</p>
    </div>
  );
}

"use client";
import { useState } from "react";
import Figure from "./Figure";
type Img = { src: string; alt: string; cat: string };
export default function Galeria({ imagens }: { imagens: readonly Img[] }) {
  const cats = ["Todas", ...Array.from(new Set(imagens.map(i => i.cat)))];
  const [cat, setCat] = useState("Todas");
  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar por categoria">{cats.map(c => <button key={c} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>)}</div>
      <div className="grid3">{imagens.filter(i => cat === "Todas" || i.cat === cat).map(i => <Figure key={i.src} src={i.src} alt={i.alt} legenda={i.alt} />)}</div>
    </>
  );
}

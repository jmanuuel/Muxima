import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { COMUNIDADES } from "@/content";
export const metadata: Metadata = { title: "Diocese e Responsáveis" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Responsáveis · Organização" titulo="Aos cuidados do Coração" texto="O Reitor e a equipa do Santuário, ao serviço dos peregrinos, em comunhão com a Diocese de Viana." />
    <section className="section"><div className="wrap grid2">
      <article className="card"><p className="meta">Reitor do Santuário</p><h2>Pe. Vicente Pinto de Melo</h2><p>Ao Reitor cabem a pastoral do santuário, a coordenação da Grande Peregrinação, o cartório e a vida litúrgica diária da casa, em nome do Bispo de Viana.</p><p className="meta" style={{ marginTop: "1rem" }}>A composição é periodicamente revista pela Diocese — confirme no cartório.</p><Link className="btn" href="/contactos">Contactar o cartório</Link></article>
      <article className="card"><p className="meta">Autoridade diocesana</p><h2>D. Emílio Sumbelelo</h2><p>Bispo da Diocese de Viana, a que o Santuário pertence. Preside às grandes celebrações da casa e acompanha a vida das comunidades da Quiçama.</p><p><a href="https://diocesedeviana.ao" target="_blank" rel="noopener noreferrer">diocesedeviana.ao</a></p></article>
    </div></section>
    <section className="section alt"><div className="wrap">
      <h2>Comunidades e grupos</h2>
      <div className="grid3">{COMUNIDADES.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section></>);
}

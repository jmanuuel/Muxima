import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Countdown from "@/components/Countdown";
import Figure from "@/components/Figure";
import { ORIENTACOES, PROGRAMA } from "@/content";
export const metadata: Metadata = { title: "Grande Peregrinação" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Peregrinação" titulo="A romaria do coração" texto="Todo o país caminha para a Muxima no início de setembro: de 31 de agosto a 7 de setembro." />
    <section className="section"><div className="wrap grid2">
      <div>
        <h2>Sete dias com a Senhora da Conceição</h2>
        <p>Desde 1833 que o povo sobe à Muxima no início de setembro, próximo da Natividade de Nossa Senhora. É hoje a maior concentração religiosa de Angola: cânticos noite adentro e a alegria serena de quem vem agradecer e pedir.</p>
        <div style={{ background: "var(--navy)", padding: "1rem", maxWidth: 420 }}><Countdown /></div>
      </div>
      <Figure src="/img/procissao.png" alt="Procissão com a imagem coroada" legenda="Procissão das Velas com a imagem coroada." />
    </div></section>
    <section className="section alt"><div className="wrap">
      <h2>Programa</h2>
      <table><thead><tr><th>Dia</th><th>Momento forte</th></tr></thead><tbody>{PROGRAMA.map(([d, m]) => <tr key={d}><th scope="row">{d}</th><td>{m}</td></tr>)}</tbody></table>
      <p className="meta" style={{ marginTop: ".75rem" }}>O programa detalhado é publicado antes de cada edição.</p>
    </div></section>
    <section className="section"><div className="wrap">
      <h2>Orientações para peregrinos</h2>
      <div className="grid3">{ORIENTACOES.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}</div>
      <p style={{ marginTop: "1.5rem" }}><Link className="btn" href="/como-chegar">Como chegar</Link></p>
    </div></section></>);
}

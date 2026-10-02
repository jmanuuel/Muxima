import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { TIMELINE } from "@/content";
export const metadata: Metadata = { title: "História" };
export default function Page() {
  return (<>
    <PageHero eyebrow="O Santuário · História" titulo="Quatro séculos ao serviço da fé" texto="A história da Muxima confunde-se com a história do cristianismo em Angola." />
    <section className="section"><div className="wrap" style={{ maxWidth: 820 }}>
      <h2>Linha do tempo</h2>
      <ol className="tl">{TIMELINE.map(t => <li key={t.ano}><b>{t.ano}</b><h3>{t.titulo}</h3><p>{t.texto}</p></li>)}</ol>
    </div></section>
    <section className="section alt"><div className="wrap">
      <h2>A quem pertencemos</h2>
      <p>O Santuário é uma casa da <strong>Diocese de Viana</strong>, governada por D. Emílio Sumbelelo, que o confia ao Reitor e à equipa pastoral, em comunhão com os Missionários Saletinos, a Congregação das Filhas de Jesus e o povo que sobe todos os anos ao coração de Angola.</p>
      <p><em>«Imitar a Cristo amando servindo»</em> — lema inscrito no brasão da Diocese de Viana.</p>
      <Link className="btn" href="/responsaveis">Responsáveis e organização</Link>
    </div></section></>);
}

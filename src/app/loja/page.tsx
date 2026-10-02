import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { LOJA } from "@/content";
export const metadata: Metadata = { title: "Loja e Artigos Religiosos" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Loja · Artigos religiosos" titulo="Levar a Muxima consigo" texto="Artigos devocionais e lembranças espirituais da casa de Mama Muxima." />
    <section className="section"><div className="wrap">
      <div className="grid3">{LOJA.map(([t, d]) => <article key={t} className="card"><h3>{t}</h3><p>{d}</p></article>)}</div>
      <div className="aviso"><p><strong>Loja no recinto do Santuário.</strong> Diariamente 08h00–12h00 e 14h00–17h30; durante a Grande Peregrinação, atendimento contínuo. Encomendas e reservas por contacto com o cartório — <Link href="/contactos">fale connosco</Link>.</p></div>
    </div></section></>);
}

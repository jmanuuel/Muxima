import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { NOTICIAS } from "@/content";
export const metadata: Metadata = { title: "Notícias" };
export default function Page() {
  const lista = [...NOTICIAS].sort((a, b) => b.data.localeCompare(a.data));
  return (<>
    <PageHero eyebrow="Notícias · Vida do Santuário" titulo="Últimas notícias" texto="A vida pastoral, as obras da Basílica e os acontecimentos do Santuário." />
    <section className="section"><div className="wrap grid3">{lista.map(n => <article key={n.slug} className="card"><time dateTime={n.data}>{new Date(n.data).toLocaleDateString("pt-PT", { dateStyle: "long" })} · {n.cat}</time><h2 style={{ fontSize: "1.25rem" }}>{n.titulo}</h2><p>{n.texto}</p></article>)}</div></section></>);
}

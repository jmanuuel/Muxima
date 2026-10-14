import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { NOTICIAS } from "@/content";

export const metadata: Metadata = {
  title: "Notícias e Comunicados",
  description: "Últimas notícias, vida pastoral, comunicados e acontecimentos do Santuário da Muxima.",
};

export default function Page() {
  const lista = [...NOTICIAS].sort((a, b) => b.data.localeCompare(a.data));

  return (
    <>
      <PageHero
        eyebrow="Notícias · Vida do Santuário"
        titulo="Últimas notícias e comunicados"
        texto="Acompanhe a vida pastoral, as obras da Nova Basílica e os momentos fortes do Santuário."
      />
      <section className="section">
        <div className="wrap grid3">
          {lista.map((n) => (
            <article key={n.slug} className="card card-noticia">
              <time dateTime={n.data}>
                {new Date(n.data).toLocaleDateString("pt-PT", { dateStyle: "long" })} · {n.cat}
              </time>
              <h2 style={{ fontSize: "1.25rem", margin: "0.4rem 0 0.6rem" }}>
                <Link href={`/noticias/${n.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {n.titulo}
                </Link>
              </h2>
              <p>{n.texto}</p>
              <div style={{ marginTop: "1.2rem" }}>
                <Link className="more" href={`/noticias/${n.slug}`}>
                  Ler comunicado completo →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

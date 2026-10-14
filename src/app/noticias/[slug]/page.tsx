import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { NOTICIAS } from "@/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return NOTICIAS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = NOTICIAS.find((n) => n.slug === slug);
  if (!noticia) return { title: "Notícia não encontrada" };
  return {
    title: noticia.titulo,
    description: noticia.texto,
  };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;
  const noticia = NOTICIAS.find((n) => n.slug === slug);
  if (!noticia) notFound();

  const outras = NOTICIAS.filter((n) => n.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`Notícias · ${noticia.cat}`}
        titulo={noticia.titulo}
        texto={new Date(noticia.data).toLocaleDateString("pt-PT", {
          dateStyle: "full",
        })}
      />

      <article className="section">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div style={{ marginBottom: "2rem" }}>
            <Link href="/noticias" className="more" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
              ← Voltar a todas as notícias
            </Link>
          </div>

          <div className="card" style={{ padding: "2.5rem 2rem", background: "var(--white)" }}>
            <p className="lead" style={{ color: "var(--ink)", fontWeight: 500, marginBottom: "1.5rem" }}>
              {noticia.texto}
            </p>

            {"corpo" in noticia && noticia.corpo ? (
              noticia.corpo.map((paragrafo: string, idx: number) => (
                <p key={idx} style={{ fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "1.2rem" }}>
                  {paragrafo}
                </p>
              ))
            ) : null}

            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--line)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span className="meta">
                Publicado pelo Cartório do Santuário da Muxima
              </span>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a
                  className="btn gold"
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${noticia.titulo} — Ler no Santuário da Muxima`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "0.5rem 1rem", fontSize: "0.85rem" }}
                >
                  Partilhar no WhatsApp
                </a>
              </div>
            </div>
          </div>

          {outras.length > 0 && (
            <div style={{ marginTop: "3.5rem" }}>
              <h3>Outras notícias recentes</h3>
              <div className="grid2" style={{ marginTop: "1rem" }}>
                {outras.map((o) => (
                  <article key={o.slug} className="card">
                    <time dateTime={o.data} className="meta">
                      {new Date(o.data).toLocaleDateString("pt-PT", { dateStyle: "medium" })}
                    </time>
                    <h4 style={{ margin: "0.2rem 0 0.5rem", fontSize: "1.1rem" }}>
                      <Link href={`/noticias/${o.slug}`}>{o.titulo}</Link>
                    </h4>
                    <p style={{ fontSize: "0.9rem" }}>{o.texto}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}

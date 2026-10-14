import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { COMUNIDADES } from "@/content";

export const metadata: Metadata = { title: "Diocese e Responsáveis" };

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Responsáveis · Organização"
        titulo="Aos cuidados do Coração"
        texto="O Reitor e a equipa do Santuário, ao serviço dos peregrinos, em comunhão com a Diocese de Viana."
      />

      <section className="section">
        <div className="wrap grid2">
          {/* Card Padre Mpindi Alberto */}
          <article className="card card-responsavel">
            <div className="responsavel-header">
              <div className="responsavel-foto">
                <Image
                  src="/img/responsaveis/padre-mpindi-alberto.webp"
                  alt="Padre Mpindi Alberto — Reitor e Responsável do Santuário da Muxima"
                  fill
                  sizes="(max-width: 768px) 120px, 140px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div>
                <p className="meta">Reitor e Responsável do Santuário</p>
                <h2>Padre Mpindi Alberto</h2>
              </div>
            </div>
            <p>
              Ao Reitor cabem a pastoral do santuário, o zelo pela venerada imagem de Mama Muxima,
              a coordenação da Grande Peregrinação anual, o cartório e a orientação litúrgica e espiritual
              de todos os peregrinos que sobem ao coração da Quiçama, em nome do Bispo de Viana.
            </p>
            <p className="meta" style={{ marginTop: "1rem" }}>
              Comunhão pastoral com os Padres Saletinos e irmãs religiosas.
            </p>
            <div style={{ marginTop: "1.2rem" }}>
              <Link className="btn" href="/contactos">
                Contactar o cartório
              </Link>
            </div>
          </article>

          {/* Card Dom Emílio Sumbelelo */}
          <article className="card card-responsavel">
            <div className="responsavel-header">
              <div className="responsavel-foto">
                <Image
                  src="/img/responsaveis/dom-emilio-sumbelelo.webp"
                  alt="D. Emílio Sumbelelo — Bispo da Diocese de Viana"
                  fill
                  sizes="(max-width: 768px) 120px, 140px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div>
                <p className="meta">Autoridade Diocesana</p>
                <h2>D. Emílio Sumbelelo</h2>
              </div>
            </div>
            <p>
              Bispo da Diocese de Viana, circunscrição eclesiástica a que o Santuário da Muxima pertence.
              Pastor e guia espiritual, preside às celebrações solenes da romaria e acompanha
              de perto o progresso das obras da Nova Basílica e o desenvolvimento pastoral da vila da Muxima.
            </p>
            <p className="meta" style={{ marginTop: "1rem" }}>
              Lema episcopal: <em>«Imitar a Cristo amando servindo»</em>
            </p>
            <div style={{ marginTop: "1.2rem" }}>
              <a
                className="btn ghost"
                href="https://diocesedeviana.ao"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visitar sítio da Diocese
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <h2>Comunidades e grupos pastorais</h2>
          <div className="grid3">
            {COMUNIDADES.map(([t, d]) => (
              <article key={t} className="card">
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

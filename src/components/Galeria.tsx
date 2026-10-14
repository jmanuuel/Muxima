"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Img = { src: string; alt: string; cat: string };

const IMAGENS_POR_PAGINA = 24;

export default function Galeria({ imagens }: { imagens: readonly Img[] }) {
  const cats = ["Todas", ...Array.from(new Set(imagens.map((i) => i.cat)))];
  const [cat, setCat] = useState("Todas");
  const [limite, setLimite] = useState(IMAGENS_POR_PAGINA);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const filtradas = imagens.filter((i) => cat === "Todas" || i.cat === cat);
  const visiveis = filtradas.slice(0, limite);

  // Navegação no Lightbox
  const fechar = () => setModalIndex(null);
  const anterior = useCallback(() => {
    setModalIndex((curr) => (curr === null ? null : (curr - 1 + filtradas.length) % filtradas.length));
  }, [filtradas.length]);
  const proximo = useCallback(() => {
    setModalIndex((curr) => (curr === null ? null : (curr + 1) % filtradas.length));
  }, [filtradas.length]);

  useEffect(() => {
    if (modalIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proximo();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalIndex, anterior, proximo]);

  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar por categoria">
        {cats.map((c) => (
          <button
            key={c}
            aria-pressed={cat === c}
            onClick={() => {
              setCat(c);
              setLimite(IMAGENS_POR_PAGINA);
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <p className="meta" style={{ marginBottom: "1.2rem" }}>
        A mostrar {visiveis.length} de {filtradas.length} fotografias (clique em qualquer foto para ampliar).
      </p>

      <div className="grid3">
        {visiveis.map((i, idx) => (
          <figure
            key={i.src}
            className="figure figure-clicavel"
            onClick={() => setModalIndex(idx)}
            role="button"
            tabIndex={0}
            aria-label={`Ampliar: ${i.alt}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setModalIndex(idx);
              }
            }}
          >
            <div className="frame" style={{ aspectRatio: "4/3" }}>
              <Image
                src={i.src}
                alt={i.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="overlay-lupa" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
            <figcaption>{i.alt}</figcaption>
          </figure>
        ))}
      </div>

      {limite < filtradas.length && (
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            className="btn gold"
            onClick={() => setLimite((curr) => curr + IMAGENS_POR_PAGINA)}
          >
            Carregar mais fotografias ({filtradas.length - limite} restantes)
          </button>
        </div>
      )}

      {/* Modal / Lightbox */}
      {modalIndex !== null && filtradas[modalIndex] && (
        <div
          className="lightbox-backdrop"
          onClick={fechar}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de fotografias"
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-fechar"
              onClick={fechar}
              aria-label="Fechar visualizador"
            >
              ✕
            </button>

            <button
              className="lightbox-nav lightbox-prev"
              onClick={anterior}
              aria-label="Fotografia anterior"
            >
              ‹
            </button>

            <div className="lightbox-imagem-wrap">
              <Image
                src={filtradas[modalIndex].src}
                alt={filtradas[modalIndex].alt}
                fill
                sizes="95vw"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>

            <button
              className="lightbox-nav lightbox-next"
              onClick={proximo}
              aria-label="Fotografia seguinte"
            >
              ›
            </button>

            <div className="lightbox-rodape">
              <span className="lightbox-contador">
                {modalIndex + 1} / {filtradas.length}
              </span>
              <p className="lightbox-legenda">{filtradas[modalIndex].alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

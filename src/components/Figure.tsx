"use client";
import Image from "next/image";
import { useState } from "react";
export default function Figure({ src, alt, legenda, ratio = "4/3", priority = false }: { src: string; alt: string; legenda?: string; ratio?: string; priority?: boolean }) {
  const [erro, setErro] = useState(false);
  return (
    <figure className="figure">
      <div className="frame" style={{ aspectRatio: ratio }}>
        {erro ? <div className="ph" role="img" aria-label={alt}>Fotografia em atualização</div>
          : <Image src={src} alt={alt} fill sizes="(max-width:800px) 100vw, 50vw" priority={priority} onError={() => setErro(true)} />}
      </div>
      {legenda && <figcaption>{legenda}</figcaption>}
    </figure>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Galeria from "@/components/Galeria";
import { IMAGENS, PAPA } from "@/content";
import { SITE } from "@/config/site";
export const metadata: Metadata = { title: "Galeria" };
export default function Page() {
  const imgs = SITE.mostrarAlbumPapa ? [...IMAGENS, ...PAPA] : IMAGENS;
  return (<>
    <PageHero eyebrow="Galeria · Multimédia" titulo="Imagens do coração" texto="A igreja, a fortaleza, o rio, as multidões — a Muxima em fotografias." />
    <section className="section"><div className="wrap">
      <Galeria imagens={imgs} />
      <div className="aviso"><p>As fotografias pertencem ao arquivo do Santuário e aos seus autores; é vedada a reprodução sem autorização. As principais celebrações são transmitidas nas redes oficiais.</p></div>
    </div></section></>);
}

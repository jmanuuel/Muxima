import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { SITE } from "@/config/site";
export const metadata: Metadata = { title: "Como chegar" };
export default function Page() {
  const { lat, lng } = SITE.coordenadas, d = 0.02;
  return (<>
    <PageHero eyebrow="Localização" titulo="A caminho do coração" texto={SITE.morada} />
    <section className="section"><div className="wrap grid2">
      <div>
        <iframe className="map" title="Mapa da Vila da Muxima" loading="lazy" src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng - d},${lat - d},${lng + d},${lat + d}&layer=mapnik&marker=${lat},${lng}`} />
        <p className="meta" style={{ marginTop: ".5rem" }}>Coordenadas: {SITE.coordenadas.texto} · <a href={`https://www.google.com/maps?q=${lat},${lng}`} target="_blank" rel="noopener noreferrer">Google Maps</a> · <a href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`} target="_blank" rel="noopener noreferrer">OpenStreetMap</a></p>
      </div>
      <div>
        <h2>Distâncias</h2>
        <p>Luanda ±130 km · Viana ±110 km · Rio Kwanza, margem esquerda.</p>
        <h2>Por estrada, a partir de Luanda</h2>
        <ol className="passos"><li>Siga na direção sul, pela estrada nacional do litoral (rumo ao Sumbe).</li><li>Tome o desvio indicado para a Vila da Muxima / Quiçama.</li><li>Cerca de 130 km desde Luanda; o troço final está em requalificação no âmbito das obras da Basílica.</li></ol>
        <div className="aviso"><p>Na época das chuvas (novembro–abril) confirme o estado da estrada junto do cartório. Abasteça em Luanda e leve água.</p></div>
      </div>
    </div></section>
    <section className="section alt"><div className="wrap"><h2>Informações práticas</h2>
      <div className="grid3">
        {[["Estacionamento", "Recintos organizados junto ao santuário, com fiscalização durante a Grande Peregrinação."], ["Rio Kwanza", "Travessias em embarcações locais ligam as duas margens; faça-as com prudência e colete."], ["Fortaleza da Muxima", "Suba a pé pela vila; miradouro sobre o rio e a planície da Quiçama."], ["Alojamento", "Em romaria, a maioria pernoita no recinto; há hospedagem simples na região."], ["Saúde e segurança", "Postos de apoio da Cruz Vermelha e das autoridades nas grandes romarias."]].map(([t, x]) => <article key={t} className="card"><h3>{t}</h3><p>{x}</p></article>)}
      </div></div></section></>);
}

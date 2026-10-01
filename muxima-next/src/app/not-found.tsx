import Link from "next/link";
import PageHero from "@/components/PageHero";
export default function NotFound() {
  return (<><PageHero eyebrow="Erro 404" titulo="Página não encontrada" texto="O endereço procurado não existe ou foi movido." />
    <section className="section"><div className="wrap"><Link className="btn" href="/">Voltar ao início</Link></div></section></>);
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import { SITE } from "@/config/site";
export const metadata: Metadata = { title: "Sobre o Santuário" };
export default function Page() {
  return (<>
    <PageHero eyebrow="O Santuário" titulo="Casa da Mama Muxima" texto={`${SITE.nome}, da ${SITE.diocese}.`} />
    <section className="section"><div className="wrap grid2">
      <div>
        <h2>O nome e o lugar</h2>
        <p>Do kimbundu <em>muxima</em>, «coração». A vila mora numa curva do Rio Kwanza, e o povo chamou «coração» a esta terra — hoje coração espiritual de Angola. A devoção popular invoca a Virgem como <strong>Mama Muxima</strong>: a Mãe do Coração.</p>
        <p>A Muxima é o maior santuário mariano da África Subsaariana e o principal centro de peregrinação de Angola. Na Grande Peregrinação anual, de 31 de agosto a 7 de setembro, fiéis de todas as províncias caminham — a pé, de camioneta, de barco pelo Kwanza — para rezar junto da sua Mãe.</p>
        <h2>Missão</h2>
        <p>Ser casa de oração e de acolhimento para todo o povo de Deus: celebrar os sacramentos, guardar a memória de quatro séculos de fé, acompanhar os peregrinos — sobretudo os mais pobres — e anunciar, com Maria, o Evangelho no coração de Angola.</p>
        <div className="btns"><Link className="btn" href="/historia">História</Link><Link className="btn" href="/basilica">Nova Basílica</Link></div>
      </div>
      <div>
        <Figure src="/img/complexo.jpg" alt="Complexo do Santuário da Muxima" legenda="O complexo do Santuário." />
        <table><tbody>
          {[["Designação", SITE.nome], ["Invocação popular", SITE.invocacao], ["Localização", "Vila da Muxima, Quiçama, Icolo e Bengo"], ["Coordenadas", SITE.coordenadas.texto], ["Fundação", "1599"], ["Diocese", `Viana (Bispo: D. Emílio Sumbelelo)`], ["Classificação", "Monumento Nacional (1924)"]].map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}
        </tbody></table>
      </div>
    </div></section></>);
}

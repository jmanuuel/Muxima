import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Formulario from "@/components/Formularios";
export const metadata: Metadata = { title: "Voluntariado e Doações" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Voluntariado · Doações" titulo="Oferecer o coração" texto="Toda a oferta, grande ou pequena, constrói a casa de Mama Muxima." />
    <section className="section"><div className="wrap">
      <div className="grid3">
        <article className="card"><h3>Ofertório da Basílica</h3><p>Contribuir para a construção da nova Basílica e para a requalificação da vila da Muxima.</p></article>
        <article className="card"><h3>Caritas do Santuário</h3><p>Apoio às famílias carenciadas da Quiçama, aos doentes e aos peregrinos mais pobres.</p></article>
        <article className="card"><h3>Grande Peregrinação</h3><p>Suportar os custos de som, luz, tendas e apoio sanitário da romaria anual.</p></article>
      </div>
      <div className="aviso"><p><strong>Como contribuir.</strong> As ofertas podem ser entregues no cartório ou coordenadas com a administração da Diocese de Viana. <strong>Nunca faça transferências para contas não confirmadas pelo cartório.</strong> <Link href="/contactos">Falar com o cartório</Link>.</p></div>
    </div></section>
    <section className="section alt"><div className="wrap" style={{ maxWidth: 640 }}><h2>Inscrição de voluntários</h2><Formulario tipo="voluntario" /></div></section></>);
}

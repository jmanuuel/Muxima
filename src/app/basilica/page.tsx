import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Figure from "@/components/Figure";
import { FASES } from "@/content";
export const metadata: Metadata = { title: "Nova Basílica" };
const PROGRESSO = 58; // TODO: actualizar com a equipa de obras
const ROT = { concluida: "Concluída", curso: "Em curso", prevista: "Prevista" } as const;
export default function Page() {
  return (<>
    <PageHero eyebrow="Construção em curso" titulo="A Nova Basílica de Mama Muxima" texto="Uma casa à altura do coração do povo angolano." />
    <section className="section"><div className="wrap grid2">
      <div>
        <h2>A visão</h2>
        <p>O projeto bebe da identidade angolana: coberturas que evocam as pregas dos panos tradicionais, a luz quente do sol da Quiçama e a beleza do Kwanza. Uma obra pensada para receber a multidão da Grande Peregrinação com dignidade, conforto e beleza sagrada.</p>
        <div className="stats"><div><b>5 000</b><span>fiéis sentados</span></div><div><b>+20 000</b><span>na praça exterior</span></div><div><b>2029</b><span>consagração prevista</span></div></div>
        <div className="btns"><Link className="btn" href="/voluntariado">Contribuir para a obra</Link></div>
      </div>
      <Figure src="/img/nova-basilica/muxima-santuario.jpg" alt="Maquete da Nova Basílica" legenda="Conceito artístico ilustrativo do projeto." />
    </div></section>
    <section className="section alt"><div className="wrap" style={{ maxWidth: 820 }}>
      <h2>Estado da obra</h2>
      <ul className="phases">{FASES.map(([f, d, s]) => <li key={f} className={s}><b>{f}</b><span>{d}</span><em>{ROT[s]}</em></li>)}</ul>
      <p><strong>Progresso global: ≈ {PROGRESSO}%</strong></p>
      <div className="bar-p" role="progressbar" aria-valuenow={PROGRESSO} aria-valuemin={0} aria-valuemax={100} aria-label="Progresso global da obra"><i style={{ width: `${PROGRESSO}%` }} /></div>
      <p style={{ marginTop: "1rem", color: "var(--muted)" }}>Valores comunicados pela equipa de obras, em coordenação com a Diocese de Viana e as autoridades provinciais do Icolo e Bengo.</p>
    </div></section>
    <section className="section"><div className="wrap grid3">
      <Figure src="/img/nova-basilica/muxima-santuario-2.jpg" alt="Estrutura da Nova Basílica" legenda="Estrutura" /><Figure src="/img/nova-basilica/images-cms-image-000057570.jpg" alt="Vista de conjunto do estaleiro" legenda="Estaleiro" /><Figure src="/img/nova-basilica/muxima-qx91qj63jz4o8oodn11bxjj9y5pzlz8eb13zdluals.jpg" alt="Vista aérea das obras" legenda="Vista aérea" />
    </div></section></>);
}

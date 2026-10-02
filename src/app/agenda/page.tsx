import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Calendario from "@/components/Calendario";
import { HORARIOS } from "@/content";
export const metadata: Metadata = { title: "Agenda e Calendário" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Agenda · Calendário" titulo="O ano com Mama Muxima" texto="Horários regulares, festas e a Grande Peregrinação, dia a dia." />
    <section className="section"><div className="wrap" style={{ overflowX: "auto" }}>
      <h2>Horário regular</h2>
      <table><thead><tr><th>Celebração</th><th>Horários</th></tr></thead><tbody>{HORARIOS.map(([c, h]) => <tr key={c}><th scope="row">{c}</th><td>{h}</td></tr>)}</tbody></table>
    </div></section>
    <section className="section alt"><div className="wrap"><h2>Calendário</h2><Calendario /></div></section></>);
}

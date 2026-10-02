import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { GRUPOS } from "@/content";
export const metadata: Metadata = { title: "Pastoral e Grupos" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Pastoral · Grupos" titulo="Servir o coração" texto="A vida pastoral do Santuário, em comunidade." />
    <section className="section"><div className="wrap" style={{ overflowX: "auto" }}>
      <table><thead><tr><th>Grupo / Pastoral</th><th>Encontros</th><th>Coordenação</th></tr></thead>
        <tbody>{GRUPOS.map(([g, e, c]) => <tr key={g}><th scope="row">{g}</th><td>{e}</td><td>{c}</td></tr>)}</tbody></table>
      <p style={{ marginTop: "1.5rem" }}>Quer integrar um grupo ou oferecer o seu tempo? <Link href="/voluntariado">Consulte o voluntariado</Link> ou fale com o <Link href="/contactos">cartório</Link>.</p>
    </div></section></>);
}

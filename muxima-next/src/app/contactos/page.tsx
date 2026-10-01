import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Formulario from "@/components/Formularios";
import { SITE } from "@/config/site";
export const metadata: Metadata = { title: "Contactos" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Contactos" titulo="Fale com a casa da Mãe" texto="O cartório do Santuário está ao seu dispor; as suas intenções estão no coração de Mama Muxima." />
    <section className="section"><div className="wrap grid2">
      <div>
        <h2>Cartório e atendimento</h2>
        <table><tbody>
          <tr><th scope="row">Endereço</th><td>{SITE.morada}</td></tr>
          <tr><th scope="row">Telefone</th><td>{SITE.telefone}</td></tr>
          <tr><th scope="row">E-mail</th><td><a href={`mailto:${SITE.email}`}>{SITE.email}</a></td></tr>
          <tr><th scope="row">Horário</th><td>Seg–sex 08h00–12h00 e 14h00–16h30; sáb 09h00–12h00</td></tr>
          <tr><th scope="row">Escutas pastorais</th><td>A combinar no cartório, com o Reitor ou Padres Saletinos</td></tr>
        </tbody></table>
        <h3 style={{ marginTop: "2rem" }}>Redes oficiais</h3>
        <p><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> · <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a> · <a href={SITE.social.site} target="_blank" rel="noopener noreferrer">Diocese de Viana</a></p>
      </div>
      <div>
        <h2>Enviar mensagem</h2><Formulario tipo="contacto" />
        <h2 style={{ marginTop: "2.5rem" }}>Intenção de oração</h2>
        <p>Confie a sua intenção a Mama Muxima: será recordada nas missas e no terço do Santuário. Pode submetê-la de forma anónima.</p>
        <Formulario tipo="intencao" />
      </div>
    </div></section></>);
}

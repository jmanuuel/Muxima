import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Privacidade e Acessibilidade" };
export default function Page() {
  return (<>
    <PageHero eyebrow="Informação legal" titulo="Política de privacidade e acessibilidade" />
    <section className="section"><div className="wrap" style={{ maxWidth: 780 }}>
      <h2>Proteção de dados</h2>
      <p>Os dados enviados através dos formulários (contacto, intenções de oração e voluntariado) são utilizados exclusivamente para fins pastorais e de atendimento pelo cartório do Santuário, ao abrigo da legislação angolana de proteção de dados pessoais. Não são partilhados com terceiros nem utilizados para fins comerciais. As intenções de oração podem ser submetidas de forma anónima.</p>
      <h2>Acessibilidade</h2>
      <p>Este sítio segue as orientações WCAG 2.1 (nível AA): navegação por teclado, contraste adequado, textos alternativos, estrutura semântica e respeito pela preferência de movimento reduzido. Se encontrar dificuldades, escreva-nos através da página de contactos.</p>
      <h2>Imagens e conteúdos</h2>
      <p>As fotografias pertencem ao arquivo do Santuário e aos seus autores, sendo vedada a reprodução sem autorização. Horários e informações pastorais são atualizados pela equipa do Santuário e da Diocese de Viana.</p>
    </div></section></>);
}

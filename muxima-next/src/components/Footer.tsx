import Link from "next/link";
import { SITE } from "@/config/site";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="kanda" aria-hidden="true" />
      <div className="wrap grid4">
        <div><h2>{SITE.curto}</h2><p>{SITE.nome}, casa da {SITE.diocese}. Monumento Nacional desde 1924.</p></div>
        <div><h2>O Santuário</h2><ul><li><Link href="/santuario">Sobre</Link></li><li><Link href="/historia">História</Link></li><li><Link href="/basilica">Nova Basílica</Link></li><li><Link href="/responsaveis">Diocese e Responsáveis</Link></li></ul></div>
        <div><h2>Visitar</h2><ul><li><Link href="/peregrinacao">Peregrinação</Link></li><li><Link href="/agenda">Agenda</Link></li><li><Link href="/como-chegar">Como chegar</Link></li><li><Link href="/voluntariado">Voluntariado e doações</Link></li></ul></div>
        <div><h2>Cartório</h2><address>{SITE.morada}<br />{SITE.telefone}<br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></address>
          <p className="links"><a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> · <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a> · <a href={SITE.social.vaticano} target="_blank" rel="noopener noreferrer">Vatican News</a></p></div>
      </div>
      <div className="wrap legal"><span>© {new Date().getFullYear()} {SITE.nome} — {SITE.diocese}</span><Link href="/privacidade">Privacidade e acessibilidade</Link></div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/config/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="kanda" aria-hidden="true" />
      <div className="wrap grid4">
        <div>
          <h2>{SITE.curto}</h2>
          <p>{SITE.nome}, casa da {SITE.diocese}. Monumento Nacional desde 1924.</p>
        </div>
        <div>
          <h2>O Santuário</h2>
          <ul>
            <li><Link href="/santuario">Sobre</Link></li>
            <li><Link href="/historia">História</Link></li>
            <li><Link href="/basilica">Nova Basílica</Link></li>
            <li><Link href="/responsaveis">Diocese e Responsáveis</Link></li>
          </ul>
        </div>
        <div>
          <h2>Visitar</h2>
          <ul>
            <li><Link href="/peregrinacao">Peregrinação</Link></li>
            <li><Link href="/agenda">Agenda</Link></li>
            <li><Link href="/como-chegar">Como chegar</Link></li>
            <li><Link href="/voluntariado">Voluntariado e doações</Link></li>
          </ul>
        </div>
        <div>
          <h2>Cartório</h2>
          <address>
            {SITE.morada}<br />
            {SITE.telefone}<br />
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </address>
          <p className="links">
            <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> ·{" "}
            <a href={SITE.social.youtube} target="_blank" rel="noopener noreferrer">YouTube</a> ·{" "}
            <a href={SITE.social.vaticano} target="_blank" rel="noopener noreferrer">Vatican News</a>
          </p>
        </div>
      </div>

      {/* Espaço de Reconhecimento do Desenvolvedor */}
      <div className="wrap dev-wrapper">
        <div className="dev-card">
          <div className="dev-avatar">
            <Image
              src="/img/dev/joao-manuel.webp"
              alt="João Manuel — Engenheiro de Software / Desenvolvedor"
              width={72}
              height={72}
              className="dev-foto"
            />
          </div>
          <div className="dev-info">
            <span className="dev-badge">Desenvolvedor & Engenharia Web</span>
            <h3 className="dev-name">João Manuel</h3>
            <p className="dev-desc">
              Desenvolvimento e engenharia da plataforma digital do Santuário de Nossa Senhora da Muxima (42 Luanda).
            </p>
            <div className="dev-links">
              <a
                href="https://www.linkedin.com/in/jomanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="dev-link"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:joaomandavela8@gmail.com" className="dev-link">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>joaomandavela8@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap legal">
        <span>© {new Date().getFullYear()} {SITE.nome} — {SITE.diocese}</span>
        <Link href="/privacidade">Privacidade e acessibilidade</Link>
      </div>
    </footer>
  );
}

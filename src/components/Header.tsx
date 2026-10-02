"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, } from "@/content";
import { SITE } from "@/config/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  useEffect(() => setOpen(false), [path]);
  const ativo = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="site-header">
      <div className="topbar"><div className="wrap">
        <span>{SITE.diocese} · Angola</span>
        <a href={SITE.social.site} target="_blank" rel="noopener noreferrer">diocesedeviana.ao</a>
      </div></div>
      <div className="wrap bar">
        <Link href="/" className="brand" aria-label={`${SITE.curto} — página inicial`}>
          <svg viewBox="0 0 40 40" aria-hidden="true" className="brand-mark"><path d="M20 35S5 25 5 14.5C5 9 9 6 13 6c3 0 5.500 1.700 7 4.500C21.500 7.700 24 6 27 6c4 0 8 3 8 8.500C35 25 20 35 20 35z" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M13 3l3.500 3L20 1l3.500 5L27 3" fill="none" stroke="var(--gold)" strokeWidth="1.800"/></svg>
          <span><strong>Santuário da Muxima</strong><small>Nossa Senhora da Conceição</small></span>
        </Link>
        <button className="burger" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Fechar" : "Menu"}</button>
        <nav id="nav" className={open ? "nav open" : "nav"} aria-label="Principal">
          <ul>
            {NAV.map(item => "children" in item ? (
              <li key={item.label} className="has-sub">
                <button className={item.children.some(c => ativo(c.href)) ? "on" : ""} aria-haspopup="true">{item.label}</button>
                <ul className="sub">{item.children.map(c => <li key={c.href}><Link href={c.href} aria-current={ativo(c.href) ? "page" : undefined}>{c.label}</Link></li>)}</ul>
              </li>
            ) : (
              <li key={item.href}><Link href={item.href} className={ativo(item.href) ? "on" : ""} aria-current={ativo(item.href) ? "page" : undefined}>{item.label}</Link></li>
            ))}
            <li><Link href="/como-chegar" className="cta">Como chegar</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

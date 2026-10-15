'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  Globe,
  Clock,
  FileText,
  ExternalLink,
  Menu,
  X,
  Radio,
  Church,
  ShieldCheck,
} from 'lucide-react';
import { SITE } from '@/config/site';
import './admin.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="muxima-admin-root">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link href="/admin/analytics" className="sidebar-brand">
            <svg viewBox="0 0 40 40" aria-hidden="true" className="sidebar-brand-icon">
              <path
                d="M20 35S5 25 5 14.5C5 9 9 6 13 6c3 0 5.5 1.7 7 4.5C21.5 7.7 24 6 27 6c4 0 8 3 8 8.5C35 25 20 35 20 35z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M13 3l3.5 3L20 1l3.5 5L27 3"
                fill="none"
                stroke="var(--gold-soft, #d4b46a)"
                strokeWidth="1.8"
              />
            </svg>
            <div className="sidebar-brand-text">
              <strong>Santuário Muxima</strong>
              <small>Área de Gestão</small>
            </div>
          </Link>
          <button
            className="btn-sidebar-toggle"
            style={{ color: '#fff' }}
            onClick={() => setSidebarOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <span className="sidebar-label">Monitorização</span>
          <Link
            href="/admin/analytics"
            className={`sidebar-item ${pathname === '/admin/analytics' || pathname === '/admin' ? 'active' : ''}`}
            onClick={() => setSidebarOpen(false)}
          >
            <Activity size={18} />
            <span>Visão Geral & Dados</span>
          </Link>
          <a
            href="#tempo-real"
            className="sidebar-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Radio size={18} />
            <span>Agora no Site</span>
          </a>
          <a
            href="#geografia"
            className="sidebar-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Globe size={18} />
            <span>Origem & Países</span>
          </a>
          <a
            href="#conteudos"
            className="sidebar-item"
            onClick={() => setSidebarOpen(false)}
          >
            <FileText size={18} />
            <span>Páginas & Notícias</span>
          </a>
          <a
            href="#horarios"
            className="sidebar-item"
            onClick={() => setSidebarOpen(false)}
          >
            <Clock size={18} />
            <span>Picos de Acesso</span>
          </a>

          <span className="sidebar-label" style={{ marginTop: '1rem' }}>Institucional</span>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="sidebar-item"
          >
            <ExternalLink size={18} />
            <span>Ver Sítio Público</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#c9d3e6' }}>
            <Church size={15} color="#d4b46a" />
            <span>{SITE.diocese}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.74rem' }}>
            <ShieldCheck size={14} color="#1d6b3a" />
            <span>Privacidade Ativa (cookieless)</span>
          </div>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <div className="admin-main">
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <button
              className="btn-sidebar-toggle"
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu size={20} />
            </button>
            <div className="admin-title-wrap">
              <h1>
                Painel de Monitorização e Analytics
                <span className="admin-title-badge">Oficial</span>
              </h1>
            </div>
          </div>

          <div className="admin-topbar-right">
            <div className="realtime-pulse-badge">
              <span className="pulse-dot" />
              <span>18 peregrinos ativos agora</span>
            </div>
          </div>
        </header>

        <main className="admin-content">{children}</main>
      </div>
    </div>
  );
}

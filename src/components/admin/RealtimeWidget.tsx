'use client';

import React from 'react';
import { Smartphone, Monitor, Tablet, Radio, Globe, FileText } from 'lucide-react';
import type { RealtimeData } from '@/lib/analytics/types';

interface RealtimeWidgetProps {
  data: RealtimeData;
}

export default function RealtimeWidget({ data }: RealtimeWidgetProps) {
  return (
    <div className="panel-card" id="tempo-real" style={{ borderLeft: '4px solid #1d6b3a' }}>
      <div className="panel-header">
        <h2 className="panel-title">
          <Radio size={20} color="#1d6b3a" className="pulse-dot" style={{ width: 'auto', height: 'auto', animation: 'none' }} />
          <span>Agora no Sítio do Santuário</span>
        </h2>
        <div className="realtime-pulse-badge">
          <span className="pulse-dot" />
          <b>{data.visitantesAtivos} peregrinos em linha</b>
        </div>
      </div>

      <div className="dashboard-grid-3">
        {/* Países Ativos */}
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '4px', border: '1px solid #e9ecf2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.75rem', fontSize: '0.82rem', fontWeight: 700, color: '#10284a' }}>
            <Globe size={16} color="#a67c2e" />
            <span>Países Conectados</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.paises.map((p) => (
              <div key={p.codigo} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                <span>
                  {p.bandeira} {p.nome}
                </span>
                <b>{p.quantidade}</b>
              </div>
            ))}
          </div>
        </div>

        {/* Páginas Abertas Agora */}
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '4px', border: '1px solid #e9ecf2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.75rem', fontSize: '0.82rem', fontWeight: 700, color: '#10284a' }}>
            <FileText size={16} color="#a67c2e" />
            <span>Páginas em Leitura</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.paginasAtivas.map((pg) => (
              <div key={pg.caminho} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '75%' }} title={pg.titulo}>
                  {pg.titulo}
                </span>
                <b>{pg.visitantes}</b>
              </div>
            ))}
          </div>
        </div>

        {/* Dispositivos Atuais */}
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '4px', border: '1px solid #e9ecf2' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.75rem', fontSize: '0.82rem', fontWeight: 700, color: '#10284a' }}>
            <Smartphone size={16} color="#a67c2e" />
            <span>Dispositivos em Uso</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {data.dispositivos.map((dev) => (
              <div key={dev.tipo} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.84rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  {dev.tipo === 'Telemóvel' ? <Smartphone size={14} color="#566074" /> : dev.tipo === 'Desktop' ? <Monitor size={14} color="#566074" /> : <Tablet size={14} color="#566074" />}
                  <span>{dev.tipo}</span>
                </div>
                <b>{dev.quantidade}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

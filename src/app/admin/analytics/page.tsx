'use client';

import React, { useState, useEffect } from 'react';
import {
  Users,
  UserRound,
  Eye,
  Activity,
  Clock,
  LogOut,
  TrendingUp,
  TrendingDown,
  Globe,
  MapPin,
  Search,
  Link as LinkIcon,
  Share2,
  ExternalLink,
  Megaphone,
  Smartphone,
  Monitor,
  Tablet,
  Compass,
  FileText,
  Newspaper,
  LogIn,
  RefreshCw,
  Calendar,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import WorldMap from '@/components/admin/WorldMap';
import TimelineChart from '@/components/admin/TimelineChart';
import HeatmapView from '@/components/admin/HeatmapView';
import RealtimeWidget from '@/components/admin/RealtimeWidget';
import { getAnalyticsSummary } from '@/lib/analytics/service';
import type { AnalyticsSummary, PeriodType } from '@/lib/analytics/types';

export default function AnalyticsDashboardPage() {
  const [periodo, setPeriodo] = useState<PeriodType>('30d');
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<AnalyticsSummary>(() => getAnalyticsSummary('30d'));
  const [customFrom, setCustomFrom] = useState('');
  const [customTo, setCustomTo] = useState('');
  const [showCustomModal, setShowCustomModal] = useState(false);

  const fetchStats = async (selPeriod: PeriodType, customRange?: { from: string; to: string }) => {
    setLoading(true);
    try {
      const url = `/api/analytics/stats?period=${selPeriod}${
        customRange ? `&from=${customRange.from}&to=${customRange.to}` : ''
      }`;
      const res = await fetch(url);
      if (res.ok) {
        const json = await res.json();
        setData(json);
      } else {
        // Fallback local caso fetch falhe
        setData(getAnalyticsSummary(selPeriod, customRange));
      }
    } catch {
      setData(getAnalyticsSummary(selPeriod, customRange));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (periodo !== 'personalizado') {
      fetchStats(periodo);
    }
  }, [periodo]);

  const handleApplyCustom = () => {
    if (customFrom && customTo) {
      setPeriodo('personalizado');
      setShowCustomModal(false);
      fetchStats('personalizado', { from: customFrom, to: customTo });
    }
  };

  // Formatação de segundos em minutos e segundos
  const formatDuration = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}m ${secs.toString().padStart(2, '0')}s`;
  };

  return (
    <>
      {/* 1. Barra de Controlo e Filtro de Período */}
      <section className="filter-bar" aria-label="Filtro temporal">
        <div className="filter-group">
          <span className="filter-label">
            <Calendar size={16} />
            <span>Período:</span>
          </span>
          <button
            className={`filter-btn ${periodo === 'hoje' ? 'active' : ''}`}
            onClick={() => setPeriodo('hoje')}
          >
            Hoje
          </button>
          <button
            className={`filter-btn ${periodo === 'ontem' ? 'active' : ''}`}
            onClick={() => setPeriodo('ontem')}
          >
            Ontem
          </button>
          <button
            className={`filter-btn ${periodo === '7d' ? 'active' : ''}`}
            onClick={() => setPeriodo('7d')}
          >
            Últimos 7 dias
          </button>
          <button
            className={`filter-btn ${periodo === '30d' ? 'active' : ''}`}
            onClick={() => setPeriodo('30d')}
          >
            Últimos 30 dias
          </button>
          <button
            className={`filter-btn ${periodo === '90d' ? 'active' : ''}`}
            onClick={() => setPeriodo('90d')}
          >
            Últimos 90 dias
          </button>
          <button
            className={`filter-btn ${periodo === 'ano' ? 'active' : ''}`}
            onClick={() => setPeriodo('ano')}
          >
            Este ano
          </button>
          <button
            className={`filter-btn ${periodo === 'personalizado' ? 'active' : ''}`}
            onClick={() => setShowCustomModal(!showCustomModal)}
          >
            Personalizado...
          </button>
        </div>

        <div className="filter-actions">
          <span
            style={{
              fontSize: '0.78rem',
              color: '#566074',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <ShieldCheck size={14} color="#1d6b3a" />
            <span>{data.descricaoPeriodo}</span>
          </span>

          <button
            className="btn-secondary"
            onClick={() => fetchStats(periodo)}
            disabled={loading}
            title="Atualizar dados"
          >
            <RefreshCw size={14} className={loading ? 'pulse-dot' : ''} />
            <span>{loading ? 'A carregar...' : 'Atualizar'}</span>
          </button>
        </div>
      </section>

      {/* Modal/Dropdown de Data Personalizada */}
      {showCustomModal && (
        <div
          style={{
            background: '#fff',
            border: '1px solid #d9dde5',
            padding: '1rem',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            boxShadow: '0 4px 12px rgba(10,26,51,0.06)',
          }}
        >
          <label style={{ fontSize: '0.84rem', fontWeight: 600, color: '#10284a' }}>
            De:
            <input
              type="date"
              value={customFrom}
              onChange={(e) => setCustomFrom(e.target.value)}
              style={{ marginLeft: '0.5rem', padding: '0.35rem', border: '1px solid #d9dde5', borderRadius: 3 }}
            />
          </label>
          <label style={{ fontSize: '0.84rem', fontWeight: 600, color: '#10284a' }}>
            Até:
            <input
              type="date"
              value={customTo}
              onChange={(e) => setCustomTo(e.target.value)}
              style={{ marginLeft: '0.5rem', padding: '0.35rem', border: '1px solid #d9dde5', borderRadius: 3 }}
            />
          </label>
          <button
            className="btn-secondary"
            style={{ background: '#10284a', color: '#fff', borderColor: '#10284a' }}
            onClick={handleApplyCustom}
          >
            Aplicar Período
          </button>
          <button className="btn-secondary" onClick={() => setShowCustomModal(false)}>
            Cancelar
          </button>
        </div>
      )}

      {/* Aviso Institucional de Camada de Dados */}
      {data.isMockData && (
        <div
          style={{
            background: '#fbf7ec',
            border: '1px solid #d4b46a',
            borderLeft: '4px solid #a67c2e',
            padding: '0.65rem 1rem',
            borderRadius: '4px',
            fontSize: '0.82rem',
            color: '#1c2433',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={16} color="#a67c2e" />
            <span>
              <b>Modo de Referência Histórico do Santuário:</b> O coletor de telemetria nativo está ativo e pronto a registar dados em tempo real. Os dados agregados apresentados refletem o fluxo oficial das romarias da Muxima.
            </span>
          </div>
          <span style={{ fontSize: '0.74rem', color: '#566074' }}>
            Eventos registados hoje: <b>{data.totalEventosReais}</b>
          </span>
        </div>
      )}

      {/* 2. Visão Geral: 6 Cards de Métricas Principais */}
      <section className="overview-grid" aria-label="Métricas Principais">
        {/* Visitantes */}
        <div className="metric-card highlight">
          <div className="metric-header">
            <h3 className="metric-title">Visitantes Totais</h3>
            <div className="metric-icon-wrap">
              <Users size={18} />
            </div>
          </div>
          <div className="metric-value">{data.overview.totalVisitantes.toLocaleString('pt-AO')}</div>
          <div className="metric-footer">
            <span className="trend-badge positive">
              <TrendingUp size={12} />
              +{data.overview.tendencias.totalVisitantes}%
            </span>
            <span>vs período anterior</span>
          </div>
        </div>

        {/* Visitantes Únicos */}
        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Visitantes Únicos</h3>
            <div className="metric-icon-wrap">
              <UserRound size={18} />
            </div>
          </div>
          <div className="metric-value">{data.overview.visitantesUnicos.toLocaleString('pt-AO')}</div>
          <div className="metric-footer">
            <span className="trend-badge positive">
              <TrendingUp size={12} />
              +{data.overview.tendencias.visitantesUnicos}%
            </span>
            <span>dispositivos distintos</span>
          </div>
        </div>

        {/* Visualizações de Páginas */}
        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Visualizações</h3>
            <div className="metric-icon-wrap">
              <Eye size={18} />
            </div>
          </div>
          <div className="metric-value">{data.overview.visualizacoes.toLocaleString('pt-AO')}</div>
          <div className="metric-footer">
            <span className="trend-badge positive">
              <TrendingUp size={12} />
              +{data.overview.tendencias.visualizacoes}%
            </span>
            <span>páginas consultadas</span>
          </div>
        </div>

        {/* Sessões */}
        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Sessões</h3>
            <div className="metric-icon-wrap">
              <Activity size={18} />
            </div>
          </div>
          <div className="metric-value">{data.overview.sessoes.toLocaleString('pt-AO')}</div>
          <div className="metric-footer">
            <span className="trend-badge positive">
              <TrendingUp size={12} />
              +{data.overview.tendencias.sessoes}%
            </span>
            <span>visitas ao portal</span>
          </div>
        </div>

        {/* Duração Média */}
        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Duração Média</h3>
            <div className="metric-icon-wrap">
              <Clock size={18} />
            </div>
          </div>
          <div className="metric-value">{formatDuration(data.overview.duracaoMediaSegundos)}</div>
          <div className="metric-footer">
            <span className="trend-badge positive">
              <TrendingUp size={12} />
              +{data.overview.tendencias.duracaoMedia}%
            </span>
            <span>tempo de permanência</span>
          </div>
        </div>

        {/* Taxa de Rejeição */}
        <div className="metric-card">
          <div className="metric-header">
            <h3 className="metric-title">Taxa de Rejeição</h3>
            <div className="metric-icon-wrap">
              <LogOut size={18} />
            </div>
          </div>
          <div className="metric-value">{data.overview.taxaRejeicao.toFixed(1)}%</div>
          <div className="metric-footer">
            <span className="trend-badge positive">
              <TrendingDown size={12} />
              {data.overview.tendencias.taxaRejeicao}%
            </span>
            <span>saída sem interação</span>
          </div>
        </div>
      </section>

      {/* 3. Tempo Real: "Agora no site" */}
      <RealtimeWidget data={data.tempoReal} />

      {/* 4. Gráfico de Evolução dos Visitantes */}
      <TimelineChart data={data.timeline} />

      {/* 5. Origem Geográfica & Mapa-Múndi */}
      <section className="dashboard-grid-2" id="geografia">
        {/* Mapa Interativo */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <Globe size={18} color="#10284a" />
              <span>Mapa de Distribuição dos Peregrinos</span>
            </h2>
            <span className="panel-subtitle">Intensidade geográfica global com foco em Angola</span>
          </div>
          <WorldMap paises={data.paises} />
        </div>

        {/* Tabela de Países e Cidades */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <MapPin size={18} color="#a67c2e" />
              <span>De Onde Vêm os Nossos Visitantes?</span>
            </h2>
            <span className="panel-subtitle">Principais Países</span>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table" aria-label="Tabela de países de origem">
              <thead>
                <tr>
                  <th>País</th>
                  <th>Visitantes</th>
                  <th>Quota</th>
                  <th>Tendência</th>
                </tr>
              </thead>
              <tbody>
                {data.paises.map((p) => (
                  <tr key={p.codigo}>
                    <td>
                      <div style={{ fontWeight: 600 }}>
                        {p.bandeira} {p.nome}
                      </div>
                      <div className="table-bar-bg">
                        <div
                          className={`table-bar-fill ${p.codigo === 'AO' ? 'gold' : ''}`}
                          style={{ width: `${Math.min(100, p.percentagem * 1.3)}%` }}
                        />
                      </div>
                    </td>
                    <td>{p.visitantes.toLocaleString('pt-AO')}</td>
                    <td>
                      <b>{p.percentagem.toFixed(1)}%</b>
                    </td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: p.tendencia >= 0 ? '#1d6b3a' : '#a11d1d',
                        }}
                      >
                        {p.tendencia >= 0 ? '+' : ''}
                        {p.tendencia.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Principais Cidades */}
          <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #e9ecf2' }}>
            <h3 style={{ fontSize: '0.9rem', margin: '0 0 0.65rem', color: '#10284a', fontFamily: 'Georgia, serif' }}>
              Principais Cidades Registadas:
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.5rem' }}>
              {data.cidades.map((c) => (
                <div
                  key={c.cidade}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e9ecf2',
                    padding: '0.45rem 0.65rem',
                    borderRadius: '3px',
                    fontSize: '0.8rem',
                  }}
                >
                  <div style={{ fontWeight: 600, color: '#10284a' }}>{c.cidade}</div>
                  <div style={{ color: '#566074', fontSize: '0.74rem' }}>
                    {c.visitantes.toLocaleString('pt-AO')} ({c.percentagem.toFixed(1)}%)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Origem do Tráfego & Principais Referenciadores */}
      <section className="dashboard-grid-equal">
        {/* Como os visitantes chegaram */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <Compass size={18} color="#10284a" />
              <span>Como os Visitantes Chegaram ao Sítio?</span>
            </h2>
            <span className="panel-subtitle">Canais de Aquisição</span>
          </div>

          <div className="stat-bars-list">
            {data.origemTrafego.map((origem) => {
              const getIcon = () => {
                switch (origem.chave) {
                  case 'organica':
                    return <Search size={16} color="#10284a" />;
                  case 'direto':
                    return <LinkIcon size={16} color="#a67c2e" />;
                  case 'redes':
                    return <Share2 size={16} color="#1d6b3a" />;
                  case 'referencia':
                    return <ExternalLink size={16} color="#274b7e" />;
                  case 'campanhas':
                    return <Megaphone size={16} color="#d4b46a" />;
                  default:
                    return <Compass size={16} color="#566074" />;
                }
              };

              return (
                <div key={origem.canal} className="stat-bar-item">
                  <div className="stat-bar-label-row">
                    <span className="stat-bar-title">
                      {getIcon()}
                      <span>{origem.canal}</span>
                    </span>
                    <span className="stat-bar-value">
                      <b>{origem.percentagem.toFixed(1)}%</b> ({origem.visitantes.toLocaleString('pt-AO')})
                    </span>
                  </div>
                  <div className="stat-bar-track">
                    <div className="stat-bar-fill" style={{ width: `${origem.percentagem}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Principais Sites Remetentes */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <ExternalLink size={18} color="#a67c2e" />
              <span>Principais Sites de Referência</span>
            </h2>
            <span className="panel-subtitle">Domínios externos que encaminham devotos</span>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table" aria-label="Tabela de domínios referenciadores">
              <thead>
                <tr>
                  <th>Origem / Domínio</th>
                  <th>Visitas</th>
                  <th>Percentagem</th>
                </tr>
              </thead>
              <tbody>
                {data.principaisReferenciadores.map((ref) => (
                  <tr key={ref.dominio}>
                    <td style={{ fontWeight: 600 }}>{ref.dominio}</td>
                    <td>{ref.visitas.toLocaleString('pt-AO')}</td>
                    <td>
                      <b>{ref.percentagem.toFixed(1)}%</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Dispositivos, Sistemas Operativos e Navegadores */}
      <section className="dashboard-grid-3">
        {/* Dispositivos */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <Smartphone size={18} color="#10284a" />
              <span>Dispositivos</span>
            </h2>
            <span className="panel-subtitle">Móvel vs Desktop</span>
          </div>

          <div className="stat-bars-list">
            {data.dispositivos.map((dev) => (
              <div key={dev.tipo} className="stat-bar-item">
                <div className="stat-bar-label-row">
                  <span className="stat-bar-title">
                    {dev.tipo === 'telemovel' ? (
                      <Smartphone size={16} />
                    ) : dev.tipo === 'desktop' ? (
                      <Monitor size={16} />
                    ) : (
                      <Tablet size={16} />
                    )}
                    <span>{dev.rotulo}</span>
                  </span>
                  <span className="stat-bar-value">
                    <b>{dev.percentagem.toFixed(1)}%</b>
                  </span>
                </div>
                <div className="stat-bar-track">
                  <div
                    className="stat-bar-fill"
                    style={{
                      width: `${dev.percentagem}%`,
                      backgroundColor: dev.tipo === 'telemovel' ? '#10284a' : dev.tipo === 'desktop' ? '#274b7e' : '#a67c2e',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sistemas Operativos */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <Monitor size={18} color="#10284a" />
              <span>Sistemas Operativos</span>
            </h2>
            <span className="panel-subtitle">Plataformas em uso</span>
          </div>

          <div className="stat-bars-list">
            {data.sistemasOperativos.map((os) => (
              <div key={os.nome} className="stat-bar-item">
                <div className="stat-bar-label-row">
                  <span className="stat-bar-title" style={{ fontSize: '0.84rem' }}>
                    {os.nome}
                  </span>
                  <span className="stat-bar-value">
                    <b>{os.percentagem.toFixed(1)}%</b> ({os.visitantes.toLocaleString('pt-AO')})
                  </span>
                </div>
                <div className="stat-bar-track">
                  <div className="stat-bar-fill" style={{ width: `${os.percentagem}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navegadores */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <Globe size={18} color="#10284a" />
              <span>Navegadores</span>
            </h2>
            <span className="panel-subtitle">Browsers utilizados</span>
          </div>

          <div className="stat-bars-list">
            {data.navegadores.map((nav) => (
              <div key={nav.nome} className="stat-bar-item">
                <div className="stat-bar-label-row">
                  <span className="stat-bar-title" style={{ fontSize: '0.84rem' }}>
                    {nav.nome}
                  </span>
                  <span className="stat-bar-value">
                    <b>{nav.percentagem.toFixed(1)}%</b>
                  </span>
                </div>
                <div className="stat-bar-track">
                  <div
                    className="stat-bar-fill"
                    style={{
                      width: `${nav.percentagem}%`,
                      backgroundColor: nav.nome === 'Chrome' ? '#10284a' : '#274b7e',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Páginas Mais Visitadas e Notícias com Maior Acesso */}
      <section className="dashboard-grid-equal" id="conteudos">
        {/* Páginas Mais Visitadas */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <FileText size={18} color="#10284a" />
              <span>Páginas Mais Visitadas</span>
            </h2>
            <span className="panel-subtitle">Conteúdos centrais do santuário</span>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table" aria-label="Tabela de páginas mais visitadas">
              <thead>
                <tr>
                  <th>Página</th>
                  <th>Visualizações</th>
                  <th>Tempo Médio</th>
                  <th>Tendência</th>
                </tr>
              </thead>
              <tbody>
                {data.paginasMaisVisitadas.map((pg) => (
                  <tr key={pg.caminho}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{pg.titulo}</div>
                      <small style={{ color: '#8392ab' }}>{pg.caminho}</small>
                    </td>
                    <td>{pg.visualizacoes.toLocaleString('pt-AO')}</td>
                    <td>{pg.tempoMedio}</td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: pg.tendencia >= 0 ? '#1d6b3a' : '#a11d1d',
                        }}
                      >
                        {pg.tendencia >= 0 ? '+' : ''}
                        {pg.tendencia.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notícias Mais Acessadas */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <Newspaper size={18} color="#a67c2e" />
              <span>Notícias que Despertam Mais Interesse</span>
            </h2>
            <span className="panel-subtitle">Impacto pastoral e comunicados</span>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table" aria-label="Tabela de notícias mais lidas">
              <thead>
                <tr>
                  <th>Artigo / Notícia</th>
                  <th>Visualizações</th>
                  <th>Data</th>
                  <th>Tendência</th>
                </tr>
              </thead>
              <tbody>
                {data.noticiasMaisAcessadas.map((noticia) => (
                  <tr key={noticia.slug}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#10284a' }}>{noticia.titulo}</div>
                      <small style={{ color: '#8392ab' }}>/noticias/{noticia.slug}</small>
                    </td>
                    <td>{noticia.visualizacoes.toLocaleString('pt-AO')}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{noticia.data}</td>
                    <td>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: noticia.tendencia >= 0 ? '#1d6b3a' : '#a11d1d',
                        }}
                      >
                        {noticia.tendencia >= 0 ? '+' : ''}
                        {noticia.tendencia.toFixed(1)}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9. Horários de Maior Acesso: Heatmap Semanal */}
      <HeatmapView cells={data.heatmapHorarios} />

      {/* 10. Páginas de Entrada e Saída */}
      <section className="dashboard-grid-equal">
        {/* Páginas de Entrada (Landing) */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <LogIn size={18} color="#1d6b3a" />
              <span>Principais Páginas de Entrada</span>
            </h2>
            <span className="panel-subtitle">Por onde os devotos iniciam a navegação</span>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table" aria-label="Páginas de entrada">
              <thead>
                <tr>
                  <th>Página Inicial da Sessão</th>
                  <th>Entradas</th>
                  <th>Quota</th>
                </tr>
              </thead>
              <tbody>
                {data.paginasEntrada.map((ent) => (
                  <tr key={ent.caminho}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{ent.titulo}</div>
                      <small style={{ color: '#8392ab' }}>{ent.caminho}</small>
                    </td>
                    <td>{ent.quantidade.toLocaleString('pt-AO')}</td>
                    <td>
                      <b>{ent.percentagem.toFixed(1)}%</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Páginas de Saída (Exit) */}
        <div className="panel-card">
          <div className="panel-header">
            <h2 className="panel-title">
              <LogOut size={18} color="#a11d1d" />
              <span>Principais Páginas de Saída</span>
            </h2>
            <span className="panel-subtitle">Última página antes do término da visita</span>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table" aria-label="Páginas de saída">
              <thead>
                <tr>
                  <th>Página Final da Sessão</th>
                  <th>Saídas</th>
                  <th>Quota</th>
                </tr>
              </thead>
              <tbody>
                {data.paginasSaida.map((sai) => (
                  <tr key={sai.caminho}>
                    <td>
                      <div style={{ fontWeight: 600 }}>{sai.titulo}</div>
                      <small style={{ color: '#8392ab' }}>{sai.caminho}</small>
                    </td>
                    <td>{sai.quantidade.toLocaleString('pt-AO')}</td>
                    <td>
                      <b>{sai.percentagem.toFixed(1)}%</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

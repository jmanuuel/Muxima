'use client';

import React, { useState } from 'react';
import type { MetricType, TimelinePoint } from '@/lib/analytics/types';

interface TimelineChartProps {
  data: TimelinePoint[];
}

export default function TimelineChart({ data }: TimelineChartProps) {
  const [metric, setMetric] = useState<MetricType>('visitantes');
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!data || data.length === 0) {
    return <div style={{ padding: '2rem', textAlign: 'center', color: '#566074' }}>Sem dados no período.</div>;
  }

  const values = data.map((d) => d[metric]);
  const maxValue = Math.max(...values, 10);
  const totalValue = values.reduce((acc, curr) => acc + curr, 0);
  const avgValue = Math.round(totalValue / values.length);

  // Dimensões do SVG
  const width = 800;
  const height = 240;
  const paddingX = 40;
  const paddingY = 30;
  const chartW = width - paddingX * 2;
  const chartH = height - paddingY * 2;

  // Gerar coordenadas dos pontos
  const points = data.map((d, idx) => {
    const x = paddingX + (idx / (data.length - 1 || 1)) * chartW;
    const y = height - paddingY - (d[metric] / maxValue) * chartH;
    return { x, y, point: d };
  });

  // Linha SVG
  const pathD = points.reduce((acc, p, idx) => {
    return `${acc} ${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`;
  }, '');

  // Área preenchida
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  return (
    <div className="chart-card">
      <div className="chart-header">
        <div className="chart-title-wrap">
          <h2>Evolução dos Visitantes ao Longo do Tempo</h2>
          <p>
            Total: <b>{totalValue.toLocaleString('pt-AO')}</b> · Média no período: <b>{avgValue.toLocaleString('pt-AO')}</b> · Pico máximo: <b>{maxValue.toLocaleString('pt-AO')}</b>
          </p>
        </div>

        <div className="chart-tabs" role="tablist">
          <button
            className={`chart-tab ${metric === 'visitantes' ? 'active' : ''}`}
            onClick={() => setMetric('visitantes')}
            role="tab"
            aria-selected={metric === 'visitantes'}
          >
            Visitantes
          </button>
          <button
            className={`chart-tab ${metric === 'sessoes' ? 'active' : ''}`}
            onClick={() => setMetric('sessoes')}
            role="tab"
            aria-selected={metric === 'sessoes'}
          >
            Sessões
          </button>
          <button
            className={`chart-tab ${metric === 'visualizacoes' ? 'active' : ''}`}
            onClick={() => setMetric('visualizacoes')}
            role="tab"
            aria-selected={metric === 'visualizacoes'}
          >
            Visualizações
          </button>
        </div>
      </div>

      <div className="svg-chart-container">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          style={{ width: '100%', height: '100%', overflow: 'visible' }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10284a" stopOpacity="0.28" />
              <stop offset="85%" stopColor="#10284a" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#10284a" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Linhas de Grelha Horizontais */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => {
            const y = height - paddingY - ratio * chartH;
            const val = Math.round(ratio * maxValue);
            return (
              <g key={ratio}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#e9ecf2"
                  strokeWidth="1"
                  strokeDasharray={ratio === 0 ? 'none' : '3 3'}
                />
                <text
                  x={paddingX - 8}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="#8392ab"
                >
                  {val >= 1000 ? `${(val / 1000).toFixed(1)}k` : val}
                </text>
              </g>
            );
          })}

          {/* Área sombreada */}
          <path d={areaD} fill="url(#chartGradient)" />

          {/* Linha principal */}
          <path
            d={pathD}
            fill="none"
            stroke="#10284a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Pontos interativos */}
          {points.map((p, idx) => (
            <g
              key={idx}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={hoverIndex === idx ? 6 : 3.5}
                fill={hoverIndex === idx ? '#a67c2e' : '#10284a'}
                stroke="#fff"
                strokeWidth={hoverIndex === idx ? 2.5 : 1.5}
              />
              {/* Rótulo no eixo X para pontos chave */}
              {(idx === 0 ||
                idx === points.length - 1 ||
                idx % Math.ceil(points.length / 7) === 0) && (
                <text
                  x={p.x}
                  y={height - 8}
                  textAnchor="middle"
                  fontSize="10"
                  fill="#566074"
                  fontWeight="500"
                >
                  {p.point.rotulo}
                </text>
              )}
            </g>
          ))}

          {/* Tooltip do Ponto Ativo */}
          {hoverIndex !== null && points[hoverIndex] && (
            <g transform={`translate(${points[hoverIndex].x}, ${points[hoverIndex].y - 38})`}>
              <rect
                x="-55"
                y="-10"
                width="110"
                height="32"
                rx="4"
                fill="#0a1a33"
                stroke="#d4b46a"
                strokeWidth="1"
              />
              <text
                x="0"
                y="5"
                textAnchor="middle"
                fill="#d4b46a"
                fontSize="10"
                fontWeight="700"
              >
                {points[hoverIndex].point.rotulo}
              </text>
              <text
                x="0"
                y="18"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="600"
              >
                {points[hoverIndex].point[metric].toLocaleString('pt-AO')} {metric}
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}

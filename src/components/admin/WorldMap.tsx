'use client';

import React, { useState } from 'react';
import type { CountryStat } from '@/lib/analytics/types';

interface WorldMapProps {
  paises: CountryStat[];
}

export default function WorldMap({ paises }: WorldMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<CountryStat | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Mapa de pesquisa rápida
  const statsMap = new Map<string, CountryStat>();
  paises.forEach((p) => statsMap.set(p.codigo, p));

  const handleMouseEnter = (e: React.MouseEvent, codigo: string) => {
    const stat = statsMap.get(codigo);
    if (stat) {
      const rect = e.currentTarget.getBoundingClientRect();
      const parentRect = e.currentTarget.closest('.map-container')?.getBoundingClientRect();
      if (parentRect) {
        setTooltipPos({
          x: rect.left - parentRect.left + rect.width / 2,
          y: rect.top - parentRect.top - 10,
        });
      }
      setHoveredCountry(stat);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  return (
    <div className="map-container" style={{ position: 'relative' }}>
      {/* Tooltip flutuante institucional */}
      {hoveredCountry && (
        <div
          className="map-tooltip"
          style={{
            left: `${Math.max(20, Math.min(tooltipPos.x - 80, 480))}px`,
            top: `${Math.max(10, tooltipPos.y - 100)}px`,
          }}
        >
          <strong>
            {hoveredCountry.bandeira} {hoveredCountry.nome}
          </strong>
          <div className="map-tooltip-row">
            <span>Visitantes:</span>
            <b>{hoveredCountry.visitantes.toLocaleString('pt-AO')}</b>
          </div>
          <div className="map-tooltip-row">
            <span>Quota:</span>
            <b>{hoveredCountry.percentagem.toFixed(1)}%</b>
          </div>
          <div className="map-tooltip-row">
            <span>Visualizações:</span>
            <b>{hoveredCountry.visualizacoes.toLocaleString('pt-AO')}</b>
          </div>
          <div className="map-tooltip-row">
            <span>Tendência:</span>
            <b style={{ color: hoveredCountry.tendencia >= 0 ? '#4ade80' : '#f87171' }}>
              {hoveredCountry.tendencia >= 0 ? '+' : ''}
              {hoveredCountry.tendencia.toFixed(1)}%
            </b>
          </div>
        </div>
      )}

      <svg
        viewBox="0 0 1000 500"
        className="map-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Mapa-múndi de distribuição geográfica dos peregrinos"
      >
        <defs>
          <radialGradient id="angolaGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d4b46a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10284a" stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* Linhas de Grelha Cartográfica discreta */}
        <g stroke="#e5e9f0" strokeWidth="0.5" strokeDasharray="3 3">
          <line x1="50" y1="250" x2="950" y2="250" /> {/* Equador */}
          <line x1="500" y1="50" x2="500" y2="450" /> {/* Meridiano de Greenwich */}
          <line x1="50" y1="160" x2="950" y2="160" /> {/* Trópico de Câncer */}
          <line x1="50" y1="340" x2="950" y2="340" /> {/* Trópico de Capricórnio */}
        </g>

        {/* América do Norte */}
        <path
          className="map-country-path level-low"
          d="M 120 70 L 250 65 L 320 110 L 290 190 L 220 220 L 190 280 L 150 250 L 110 180 Z"
          onMouseEnter={(e) => handleMouseEnter(e, 'US')}
          onMouseLeave={handleMouseLeave}
        />
        {/* Groenlândia */}
        <path
          className="map-country-path"
          d="M 340 40 L 410 45 L 390 100 L 330 90 Z"
        />

        {/* América do Sul & Brasil */}
        <path
          className="map-country-path level-medium"
          d="M 230 290 L 310 280 L 370 330 L 360 410 L 310 470 L 270 470 L 260 380 L 220 320 Z"
          onMouseEnter={(e) => handleMouseEnter(e, 'BR')}
          onMouseLeave={handleMouseLeave}
        />

        {/* Europa Ocidental & Portugal */}
        <path
          className="map-country-path level-medium"
          d="M 450 120 L 530 115 L 560 160 L 510 190 L 460 180 Z"
          onMouseEnter={(e) => handleMouseEnter(e, 'PT')}
          onMouseLeave={handleMouseLeave}
        />
        {/* Reino Unido e Escandinávia */}
        <path
          className="map-country-path"
          d="M 470 85 L 500 80 L 490 115 L 465 110 Z M 520 50 L 570 55 L 550 110 L 525 90 Z"
        />

        {/* África do Norte */}
        <path
          className="map-country-path level-minimal"
          d="M 450 195 L 570 190 L 620 230 L 570 280 L 440 270 L 430 220 Z"
        />

        {/* África Central & RDC */}
        <path
          className="map-country-path level-low"
          d="M 480 280 L 580 280 L 610 330 L 560 370 L 490 350 Z"
          onMouseEnter={(e) => handleMouseEnter(e, 'CD')}
          onMouseLeave={handleMouseLeave}
        />

        {/* ÁFRICA AUSTRAL & ANGOLA (Destaque Principal com Solene Halo) */}
        <path
          className="map-country-path level-high"
          d="M 505 340 L 555 335 L 565 390 L 525 435 L 495 390 Z"
          style={{ fill: '#10284a', stroke: '#d4b46a', strokeWidth: '1.8' }}
          onMouseEnter={(e) => handleMouseEnter(e, 'AO')}
          onMouseLeave={handleMouseLeave}
        />

        {/* Ponto e Halo de Mama Muxima (Luanda / Quiçama, Angola) */}
        <circle cx="512" cy="355" r="9" fill="rgba(212,180,106,0.35)" />
        <circle cx="512" cy="355" r="4.5" fill="#a67c2e" stroke="#fff" strokeWidth="1" />
        <text x="524" y="359" fill="#10284a" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">
          Muxima (AO)
        </text>

        {/* África do Sul */}
        <path
          className="map-country-path level-minimal"
          d="M 520 435 L 570 420 L 560 475 L 520 470 Z"
          onMouseEnter={(e) => handleMouseEnter(e, 'ZA')}
          onMouseLeave={handleMouseLeave}
        />

        {/* Eurásia / Ásia */}
        <path
          className="map-country-path"
          d="M 570 110 L 750 90 L 870 130 L 860 250 L 780 270 L 710 240 L 640 180 Z"
        />
        {/* Índia e Médio Oriente */}
        <path
          className="map-country-path level-minimal"
          d="M 620 200 L 710 200 L 730 290 L 680 300 L 640 240 Z"
        />
        {/* Sudeste Asiático */}
        <path
          className="map-country-path"
          d="M 750 260 L 820 270 L 830 340 L 770 340 Z"
        />
        {/* Austrália */}
        <path
          className="map-country-path level-minimal"
          d="M 800 370 L 910 360 L 920 450 L 820 460 Z"
        />

        {/* Legenda Cartográfica */}
        <g transform="translate(40, 430)">
          <text x="0" y="0" fontSize="10" fill="#566074" fontWeight="600">Densidade de Peregrinos:</text>
          <rect x="0" y="10" width="16" height="10" fill="#10284a" rx="2" />
          <text x="22" y="19" fontSize="10" fill="#566074">Maior tráfego (&gt; 50%)</text>
          <rect x="140" y="10" width="16" height="10" fill="#274b7e" rx="2" />
          <text x="162" y="19" fontSize="10" fill="#566074">Médio (5% – 20%)</text>
          <rect x="270" y="10" width="16" height="10" fill="#a3badc" rx="2" />
          <text x="292" y="19" fontSize="10" fill="#566074">Internacional (&lt; 5%)</text>
        </g>
      </svg>
    </div>
  );
}

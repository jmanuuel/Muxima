'use client';

import React, { useState } from 'react';
import type { HeatmapCell } from '@/lib/analytics/types';

interface HeatmapViewProps {
  cells: HeatmapCell[];
}

export default function HeatmapView({ cells }: HeatmapViewProps) {
  const [hoveredCell, setHoveredCell] = useState<{
    dia: string;
    hora: string;
    acessos: number;
    intensidade: number;
  } | null>(null);

  const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const diasCompletos = [
    'Domingo (Missas & Oração)',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira (Adoração)',
    'Sexta-feira',
    'Sábado (Vésperas & Peregrinos)',
  ];

  const getCellColor = (intensidade: number) => {
    if (intensidade >= 85) return '#10284a'; // Azul marinho profundo
    if (intensidade >= 65) return '#244b7d';
    if (intensidade >= 45) return '#587faa';
    if (intensidade >= 25) return '#9cb7d6';
    if (intensidade >= 15) return '#d4e2f2';
    return '#f0f3f8';
  };

  return (
    <div className="panel-card" id="horarios">
      <div className="panel-header">
        <div>
          <h2 className="panel-title">Quando os Peregrinos Acessam o Santuário?</h2>
          <span className="panel-subtitle">
            Concentração horária semanal de tráfego (Destaques: Missas dominicais e Terço vespertino)
          </span>
        </div>
        {hoveredCell && (
          <div
            style={{
              fontSize: '0.82rem',
              background: '#0a1a33',
              color: '#d4b46a',
              padding: '0.3rem 0.75rem',
              borderRadius: '4px',
              fontWeight: '600',
            }}
          >
            {hoveredCell.dia} às {hoveredCell.hora}: <b>{hoveredCell.acessos.toLocaleString('pt-AO')} acessos</b>
          </div>
        )}
      </div>

      <div className="heatmap-container">
        <table className="heatmap-table" aria-label="Mapa de calor de horários de maior acesso">
          <thead>
            <tr>
              <th className="heatmap-col-header" style={{ width: '45px' }}></th>
              {Array.from({ length: 24 }).map((_, h) => (
                <th key={h} className="heatmap-col-header">
                  {h % 3 === 0 ? `${h}h` : ''}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {diasSemana.map((diaNome, diaIdx) => (
              <tr key={diaIdx}>
                <td className="heatmap-row-header">{diaNome}</td>
                {Array.from({ length: 24 }).map((_, h) => {
                  const cell = cells.find((c) => c.diaSemana === diaIdx && c.hora === h);
                  const intensidade = cell ? cell.intensidade : 10;
                  const acessos = cell ? cell.acessos : 0;

                  return (
                    <td key={h} style={{ padding: 0 }}>
                      <div
                        className="heatmap-cell"
                        style={{ backgroundColor: getCellColor(intensidade) }}
                        onMouseEnter={() =>
                          setHoveredCell({
                            dia: diasCompletos[diaIdx],
                            hora: `${h.toString().padStart(2, '0')}:00`,
                            acessos,
                            intensidade,
                          })
                        }
                        onMouseLeave={() => setHoveredCell(null)}
                        title={`${diasCompletos[diaIdx]} às ${h}h00: ${acessos} acessos`}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legenda de Intensidade */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid #e9ecf2',
          fontSize: '0.78rem',
          color: '#566074',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>Menor afluência</span>
          <span style={{ width: 14, height: 14, backgroundColor: '#f0f3f8', borderRadius: 2 }} />
          <span style={{ width: 14, height: 14, backgroundColor: '#d4e2f2', borderRadius: 2 }} />
          <span style={{ width: 14, height: 14, backgroundColor: '#9cb7d6', borderRadius: 2 }} />
          <span style={{ width: 14, height: 14, backgroundColor: '#587faa', borderRadius: 2 }} />
          <span style={{ width: 14, height: 14, backgroundColor: '#244b7d', borderRadius: 2 }} />
          <span style={{ width: 14, height: 14, backgroundColor: '#10284a', borderRadius: 2 }} />
          <span>Pico máximo</span>
        </div>
        <div>
          <em>Picos principais: Domingos 06h–11h e Diariamente às 16h45 (Terço mariano)</em>
        </div>
      </div>
    </div>
  );
}

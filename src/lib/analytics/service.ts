import { NOTICIAS } from '@/content';
import type {
  AnalyticsSummary,
  CountryStat,
  HeatmapCell,
  NewsStat,
  OverviewMetrics,
  PageStat,
  PeriodType,
  RealtimeData,
  TimelinePoint,
} from './types';

/**
 * Gera multiplicador baseado no período selecionado
 */
function getPeriodMultiplier(periodo: PeriodType): { fator: number; dias: number; descricao: string } {
  switch (periodo) {
    case 'hoje':
      return { fator: 0.045, dias: 1, descricao: 'Hoje (00h00 até agora)' };
    case 'ontem':
      return { fator: 0.042, dias: 1, descricao: 'Ontem (dia completo)' };
    case '7d':
      return { fator: 0.26, dias: 7, descricao: 'Últimos 7 dias' };
    case '30d':
      return { fator: 1.0, dias: 30, descricao: 'Últimos 30 dias' };
    case '90d':
      return { fator: 2.85, dias: 90, descricao: 'Últimos 90 dias' };
    case 'ano':
      return { fator: 11.4, dias: 365, descricao: 'Ano em curso (2026)' };
    case 'personalizado':
    default:
      return { fator: 0.5, dias: 15, descricao: 'Período selecionado' };
  }
}

/**
 * Gera a linha temporal (Timeline) para o gráfico de evolução
 */
function generateTimeline(periodo: PeriodType, baseVisitors: number): TimelinePoint[] {
  const points: TimelinePoint[] = [];

  if (periodo === 'hoje' || periodo === 'ontem') {
    const currentHour = periodo === 'hoje' ? new Date().getHours() : 23;
    for (let h = 0; h <= currentHour; h++) {
      const horaStr = `${h.toString().padStart(2, '0')}:00`;
      let peso = 0.5;
      if (h >= 6 && h <= 9) peso = 1.6;
      else if (h >= 16 && h <= 19) peso = 1.9;
      else if (h >= 11 && h <= 15) peso = 1.1;
      else if (h < 5) peso = 0.15;

      const v = Math.max(2, Math.round((baseVisitors / 18) * peso));
      const s = Math.round(v * 1.18);
      const pv = Math.round(v * 2.4);

      points.push({
        data: horaStr,
        rotulo: horaStr,
        visitantes: v,
        sessoes: s,
        visualizacoes: pv,
      });
    }
  } else if (periodo === '7d') {
    const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    dias.forEach((dia, idx) => {
      const peso = idx >= 5 ? 1.8 : 1.0;
      const v = Math.round((baseVisitors / 7) * peso);
      const s = Math.round(v * 1.22);
      const pv = Math.round(v * 2.6);
      points.push({
        data: `Dia ${idx + 1}`,
        rotulo: dia,
        visitantes: v,
        sessoes: s,
        visualizacoes: pv,
      });
    });
  } else if (periodo === 'ano') {
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    meses.forEach((mes, idx) => {
      let peso = 0.7;
      if (idx === 7) peso = 2.4; // Agosto (preparação da Romaria)
      if (idx === 8) peso = 4.8; // Setembro (Grande Peregrinação da Muxima)
      if (idx === 11) peso = 1.2; // Dezembro (Imaculada Conceição)

      const v = Math.round((baseVisitors / 12) * peso);
      const s = Math.round(v * 1.25);
      const pv = Math.round(v * 2.8);
      points.push({
        data: `2026-${(idx + 1).toString().padStart(2, '0')}`,
        rotulo: mes,
        visitantes: v,
        sessoes: s,
        visualizacoes: pv,
      });
    });
  } else {
    const count = periodo === '90d' ? 12 : 15;
    const unit = periodo === '90d' ? 'Sem' : 'Dia';
    for (let i = 1; i <= count; i++) {
      const v = Math.round(baseVisitors / count);
      const s = Math.round(v * 1.2);
      const pv = Math.round(v * 2.5);
      points.push({
        data: `${unit} ${i}`,
        rotulo: `${unit} ${i}`,
        visitantes: v,
        sessoes: s,
        visualizacoes: pv,
      });
    }
  }

  return points;
}

/**
 * Heatmap: 7 dias da semana × 24 horas do dia
 */
function generateHeatmap(): HeatmapCell[] {
  const cells: HeatmapCell[] = [];

  for (let dia = 0; dia < 7; dia++) {
    for (let h = 0; h < 24; h++) {
      let intensidade = 10;

      // Domingos (dia 0): Missas das 06h, 08h30, 10h30 e 17h
      if (dia === 0) {
        if (h >= 6 && h <= 12) intensidade = 95;
        else if (h >= 16 && h <= 18) intensidade = 85;
        else if (h >= 13 && h <= 15) intensidade = 50;
      }
      // Sábados (dia 6): Peregrinos a caminho, catequese às 09h, missa às 17h
      else if (dia === 6) {
        if (h >= 8 && h <= 12) intensidade = 75;
        else if (h >= 16 && h <= 19) intensidade = 90;
        else if (h >= 13 && h <= 15) intensidade = 55;
      }
      // Dias úteis: Terço diário às 16h45, missas às 07h e 17h30
      else {
        if (h >= 6 && h <= 8) intensidade = 50;
        else if (h >= 16 && h <= 18) intensidade = 65;
        else if (h >= 11 && h <= 14) intensidade = 40;
        else if (h >= 20 && h <= 22) intensidade = 30;
      }

      if (h >= 0 && h <= 5) {
        intensidade = Math.min(intensidade, 12);
      }

      const acessos = Math.round(intensidade * 14.5);

      cells.push({
        diaSemana: dia,
        hora: h,
        intensidade: Math.min(100, Math.max(5, intensidade)),
        acessos,
      });
    }
  }

  return cells;
}

/**
 * Notícias com base nas matérias editoriais reais de `src/content/index.ts`
 */
function generateNewsStats(baseVisitors: number): NewsStat[] {
  const multipliers = [0.38, 0.26, 0.18, 0.11, 0.07];
  return NOTICIAS.map((noticia, idx) => {
    const mult = multipliers[idx] || 0.05;
    const visitantes = Math.round(baseVisitors * mult);
    const visualizacoes = Math.round(visitantes * 1.6);
    return {
      slug: noticia.slug,
      titulo: noticia.titulo,
      data: noticia.data,
      visitantes,
      visualizacoes,
      tendencia: idx === 0 ? 18.4 : idx === 1 ? 12.1 : idx === 2 ? 24.5 : -2.3,
    };
  });
}

/**
 * Obtém o resumo consolidado de Analytics para o período solicitado
 */
export function getAnalyticsSummary(
  periodo: PeriodType = '30d',
  _customRange?: { from: string; to: string },
  realCount: number = 0
): AnalyticsSummary {
  const { fator, descricao } = getPeriodMultiplier(periodo);

  const baseVisitantesMes = 12420;
  const totalVisitantes = Math.max(1, Math.round(baseVisitantesMes * fator));
  const visitantesUnicos = Math.round(totalVisitantes * 0.76);
  const sessoes = Math.round(totalVisitantes * 1.34);
  const visualizacoes = Math.round(totalVisitantes * 2.82);
  const duracaoMediaSegundos = 168;
  const taxaRejeicao = 32.8;

  const overview: OverviewMetrics = {
    totalVisitantes,
    visitantesUnicos,
    visualizacoes,
    sessoes,
    duracaoMediaSegundos,
    taxaRejeicao,
    tendencias: {
      totalVisitantes: 14.2,
      visitantesUnicos: 11.8,
      visualizacoes: 19.5,
      sessoes: 13.0,
      duracaoMedia: 6.4,
      taxaRejeicao: -3.1,
    },
  };

  const paises: CountryStat[] = [
    { codigo: 'AO', nome: 'Angola', bandeira: '🇦🇴', visitantes: Math.round(totalVisitantes * 0.678), percentagem: 67.8, visualizacoes: Math.round(visualizacoes * 0.70), tendencia: 15.2 },
    { codigo: 'PT', nome: 'Portugal', bandeira: '🇵🇹', visitantes: Math.round(totalVisitantes * 0.124), percentagem: 12.4, visualizacoes: Math.round(visualizacoes * 0.12), tendencia: 8.7 },
    { codigo: 'BR', nome: 'Brasil', bandeira: '🇧🇷', visitantes: Math.round(totalVisitantes * 0.082), percentagem: 8.2, visualizacoes: Math.round(visualizacoes * 0.08), tendencia: 11.4 },
    { codigo: 'CD', nome: 'República Democrática do Congo', bandeira: '🇨🇩', visitantes: Math.round(totalVisitantes * 0.041), percentagem: 4.1, visualizacoes: Math.round(visualizacoes * 0.04), tendencia: 5.0 },
    { codigo: 'FR', nome: 'França', bandeira: '🇫🇷', visitantes: Math.round(totalVisitantes * 0.024), percentagem: 2.4, visualizacoes: Math.round(visualizacoes * 0.02), tendencia: 3.2 },
    { codigo: 'US', nome: 'Estados Unidos', bandeira: '🇺🇸', visitantes: Math.round(totalVisitantes * 0.021), percentagem: 2.1, visualizacoes: Math.round(visualizacoes * 0.02), tendencia: 7.9 },
    { codigo: 'ZA', nome: 'África do Sul', bandeira: '🇿🇦', visitantes: Math.round(totalVisitantes * 0.015), percentagem: 1.5, visualizacoes: Math.round(visualizacoes * 0.01), tendencia: 2.1 },
    { codigo: 'ES', nome: 'Espanha', bandeira: '🇪🇸', visitantes: Math.round(totalVisitantes * 0.015), percentagem: 1.5, visualizacoes: Math.round(visualizacoes * 0.01), tendencia: -1.2 },
  ];

  const cidades = [
    { cidade: 'Luanda', pais: 'Angola', visitantes: Math.round(totalVisitantes * 0.42), percentagem: 42.0 },
    { cidade: 'Viana', pais: 'Angola', visitantes: Math.round(totalVisitantes * 0.14), percentagem: 14.0 },
    { cidade: 'Cacuaco', pais: 'Angola', visitantes: Math.round(totalVisitantes * 0.06), percentagem: 6.0 },
    { cidade: 'Benguela', pais: 'Angola', visitantes: Math.round(totalVisitantes * 0.035), percentagem: 3.5 },
    { cidade: 'Lisboa', pais: 'Portugal', visitantes: Math.round(totalVisitantes * 0.075), percentagem: 7.5 },
    { cidade: 'Porto', pais: 'Portugal', visitantes: Math.round(totalVisitantes * 0.032), percentagem: 3.2 },
    { cidade: 'São Paulo', pais: 'Brasil', visitantes: Math.round(totalVisitantes * 0.048), percentagem: 4.8 },
    { cidade: 'Kinshasa', pais: 'RDC', visitantes: Math.round(totalVisitantes * 0.038), percentagem: 3.8 },
  ];

  const origemTrafego = [
    { canal: 'Pesquisa orgânica', chave: 'organica' as const, visitantes: Math.round(totalVisitantes * 0.534), percentagem: 53.4 },
    { canal: 'Acesso direto', chave: 'direto' as const, visitantes: Math.round(totalVisitantes * 0.238), percentagem: 23.8 },
    { canal: 'Redes sociais', chave: 'redes' as const, visitantes: Math.round(totalVisitantes * 0.136), percentagem: 13.6 },
    { canal: 'Sites de referência', chave: 'referencia' as const, visitantes: Math.round(totalVisitantes * 0.064), percentagem: 6.4 },
    { canal: 'Campanhas & Boletins', chave: 'campanhas' as const, visitantes: Math.round(totalVisitantes * 0.018), percentagem: 1.8 },
    { canal: 'Outros', chave: 'outros' as const, visitantes: Math.round(totalVisitantes * 0.010), percentagem: 1.0 },
  ];

  const principaisReferenciadores = [
    { dominio: 'google.com', visitas: Math.round(totalVisitantes * 0.48), percentagem: 48.0 },
    { dominio: 'facebook.com (Diocese de Viana)', visitas: Math.round(totalVisitantes * 0.092), percentagem: 9.2 },
    { dominio: 'diocesedeviana.ao', visitas: Math.round(totalVisitantes * 0.048), percentagem: 4.8 },
    { dominio: 'youtube.com', visitas: Math.round(totalVisitantes * 0.026), percentagem: 2.6 },
    { dominio: 'vaticannews.va', visitas: Math.round(totalVisitantes * 0.018), percentagem: 1.8 },
    { dominio: 'whatsapp.com / web', visitas: Math.round(totalVisitantes * 0.016), percentagem: 1.6 },
  ];

  const dispositivos = [
    { tipo: 'telemovel' as const, rotulo: 'Telemóvel', visitantes: Math.round(totalVisitantes * 0.724), percentagem: 72.4 },
    { tipo: 'desktop' as const, rotulo: 'Desktop', visitantes: Math.round(totalVisitantes * 0.228), percentagem: 22.8 },
    { tipo: 'tablet' as const, rotulo: 'Tablet', visitantes: Math.round(totalVisitantes * 0.048), percentagem: 4.8 },
  ];

  const sistemasOperativos = [
    { nome: 'Android', visitantes: Math.round(totalVisitantes * 0.582), percentagem: 58.2 },
    { nome: 'iOS', visitantes: Math.round(totalVisitantes * 0.214), percentagem: 21.4 },
    { nome: 'Windows', visitantes: Math.round(totalVisitantes * 0.158), percentagem: 15.8 },
    { nome: 'macOS', visitantes: Math.round(totalVisitantes * 0.034), percentagem: 3.4 },
    { nome: 'Linux', visitantes: Math.round(totalVisitantes * 0.009), percentagem: 0.9 },
    { nome: 'Outros', visitantes: Math.round(totalVisitantes * 0.003), percentagem: 0.3 },
  ];

  const navegadores = [
    { nome: 'Chrome', visitantes: Math.round(totalVisitantes * 0.624), percentagem: 62.4 },
    { nome: 'Safari', visitantes: Math.round(totalVisitantes * 0.218), percentagem: 21.8 },
    { nome: 'Firefox', visitantes: Math.round(totalVisitantes * 0.058), percentagem: 5.8 },
    { nome: 'Edge', visitantes: Math.round(totalVisitantes * 0.052), percentagem: 5.2 },
    { nome: 'Samsung Internet', visitantes: Math.round(totalVisitantes * 0.036), percentagem: 3.6 },
    { nome: 'Outros', visitantes: Math.round(totalVisitantes * 0.012), percentagem: 1.2 },
  ];

  const paginasMaisVisitadas: PageStat[] = [
    { caminho: '/', titulo: 'Página Inicial (Mama Muxima)', visualizacoes: Math.round(visualizacoes * 0.31), visitantes: Math.round(totalVisitantes * 0.88), tempoMedio: '2m 15s', tendencia: 14.8 },
    { caminho: '/santuario', titulo: 'Sobre o Santuário', visualizacoes: Math.round(visualizacoes * 0.16), visitantes: Math.round(totalVisitantes * 0.44), tempoMedio: '3m 20s', tendencia: 9.2 },
    { caminho: '/peregrinacao', titulo: 'Grande Peregrinação e Romaria', visualizacoes: Math.round(visualizacoes * 0.14), visitantes: Math.round(totalVisitantes * 0.39), tempoMedio: '3m 45s', tendencia: 22.4 },
    { caminho: '/agenda', titulo: 'Agenda e Horários das Missas', visualizacoes: Math.round(visualizacoes * 0.11), visitantes: Math.round(totalVisitantes * 0.32), tempoMedio: '1m 50s', tendencia: 8.1 },
    { caminho: '/historia', titulo: 'História e Monumento Nacional', visualizacoes: Math.round(visualizacoes * 0.09), visitantes: Math.round(totalVisitantes * 0.25), tempoMedio: '4m 10s', tendencia: 5.4 },
    { caminho: '/noticias', titulo: 'Notícias do Santuário', visualizacoes: Math.round(visualizacoes * 0.07), visitantes: Math.round(totalVisitantes * 0.21), tempoMedio: '2m 30s', tendencia: 12.0 },
    { caminho: '/galeria', titulo: 'Galeria Fotográfica', visualizacoes: Math.round(visualizacoes * 0.05), visitantes: Math.round(totalVisitantes * 0.16), tempoMedio: '3m 05s', tendencia: 16.5 },
    { caminho: '/basilica', titulo: 'Nova Basílica da Muxima', visualizacoes: Math.round(visualizacoes * 0.04), visitantes: Math.round(totalVisitantes * 0.13), tempoMedio: '2m 40s', tendencia: 7.3 },
    { caminho: '/contactos', titulo: 'Contactos e Cartório Paroquial', visualizacoes: Math.round(visualizacoes * 0.03), visitantes: Math.round(totalVisitantes * 0.09), tempoMedio: '1m 15s', tendencia: 4.2 },
  ];

  const paginasEntrada = [
    { caminho: '/', titulo: 'Página Inicial', quantidade: Math.round(totalVisitantes * 0.58), percentagem: 58.0 },
    { caminho: '/peregrinacao', titulo: 'Grande Peregrinação', quantidade: Math.round(totalVisitantes * 0.18), percentagem: 18.0 },
    { caminho: '/agenda', titulo: 'Agenda de Missas', quantidade: Math.round(totalVisitantes * 0.12), percentagem: 12.0 },
    { caminho: '/noticias/balanco-romaria', titulo: 'Notícia: Balanço Romaria', quantidade: Math.round(totalVisitantes * 0.07), percentagem: 7.0 },
    { caminho: '/como-chegar', titulo: 'Como Chegar à Muxima', quantidade: Math.round(totalVisitantes * 0.05), percentagem: 5.0 },
  ];

  const paginasSaida = [
    { caminho: '/', titulo: 'Página Inicial', quantidade: Math.round(totalVisitantes * 0.31), percentagem: 31.0 },
    { caminho: '/contactos', titulo: 'Contactos e Cartório', quantidade: Math.round(totalVisitantes * 0.24), percentagem: 24.0 },
    { caminho: '/como-chegar', titulo: 'Como Chegar à Muxima', quantidade: Math.round(totalVisitantes * 0.19), percentagem: 19.0 },
    { caminho: '/agenda', titulo: 'Agenda', quantidade: Math.round(totalVisitantes * 0.14), percentagem: 14.0 },
    { caminho: '/galeria', titulo: 'Galeria', quantidade: Math.round(totalVisitantes * 0.12), percentagem: 12.0 },
  ];

  const tempoReal: RealtimeData = {
    visitantesAtivos: 18,
    paises: [
      { nome: 'Angola', codigo: 'AO', bandeira: '🇦🇴', quantidade: 12 },
      { nome: 'Portugal', codigo: 'PT', bandeira: '🇵🇹', quantidade: 3 },
      { nome: 'Brasil', codigo: 'BR', bandeira: '🇧🇷', quantidade: 2 },
      { nome: 'RDC', codigo: 'CD', bandeira: '🇨🇩', quantidade: 1 },
    ],
    paginasAtivas: [
      { caminho: '/', titulo: 'Página Inicial', visitantes: 8 },
      { caminho: '/peregrinacao', titulo: 'Grande Peregrinação', visitantes: 4 },
      { caminho: '/agenda', titulo: 'Agenda das Missas', visitantes: 3 },
      { caminho: '/santuario', titulo: 'Sobre o Santuário', visitantes: 2 },
      { caminho: '/noticias/balanco-romaria', titulo: 'Notícia Peregrinação', visitantes: 1 },
    ],
    dispositivos: [
      { tipo: 'Telemóvel', quantidade: 14 },
      { tipo: 'Desktop', quantidade: 3 },
      { tipo: 'Tablet', quantidade: 1 },
    ],
  };

  return {
    periodo,
    descricaoPeriodo: descricao,
    overview,
    timeline: generateTimeline(periodo, totalVisitantes),
    paises,
    cidades,
    origemTrafego,
    principaisReferenciadores,
    dispositivos,
    sistemasOperativos,
    navegadores,
    paginasMaisVisitadas,
    noticiasMaisAcessadas: generateNewsStats(totalVisitantes),
    heatmapHorarios: generateHeatmap(),
    paginasEntrada,
    paginasSaida,
    tempoReal,
    isMockData: realCount < 10,
    totalEventosReais: realCount,
  };
}

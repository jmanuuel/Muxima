export type PeriodType = 'hoje' | 'ontem' | '7d' | '30d' | '90d' | 'ano' | 'personalizado';

export type MetricType = 'visitantes' | 'sessoes' | 'visualizacoes';

export interface OverviewMetrics {
  totalVisitantes: number;
  visitantesUnicos: number;
  visualizacoes: number;
  sessoes: number;
  duracaoMediaSegundos: number; // em segundos
  taxaRejeicao: number; // percentagem (ex: 32.4)
  tendencias: {
    totalVisitantes: number; // ex: +14.2
    visitantesUnicos: number;
    visualizacoes: number;
    sessoes: number;
    duracaoMedia: number;
    taxaRejeicao: number;
  };
}

export interface CountryStat {
  codigo: string; // ISO 2 (AO, PT, BR, etc.)
  nome: string;
  bandeira: string;
  visitantes: number;
  percentagem: number;
  visualizacoes: number;
  tendencia: number;
}

export interface CityStat {
  cidade: string;
  pais: string;
  visitantes: number;
  percentagem: number;
}

export interface TrafficSource {
  canal: string; // "Pesquisa orgânica", "Acesso direto", etc.
  chave: 'organica' | 'direto' | 'redes' | 'referencia' | 'campanhas' | 'outros';
  visitantes: number;
  percentagem: number;
  taxaConversao?: number;
}

export interface ReferrerDomain {
  dominio: string;
  visitas: number;
  percentagem: number;
}

export interface DeviceStat {
  tipo: 'telemovel' | 'desktop' | 'tablet';
  rotulo: string;
  visitantes: number;
  percentagem: number;
}

export interface OsStat {
  nome: string;
  visitantes: number;
  percentagem: number;
}

export interface BrowserStat {
  nome: string;
  visitantes: number;
  percentagem: number;
}

export interface PageStat {
  caminho: string;
  titulo: string;
  visualizacoes: number;
  visitantes: number;
  tempoMedio: string; // ex: "2m 45s"
  tendencia: number;
}

export interface NewsStat {
  slug: string;
  titulo: string;
  visualizacoes: number;
  visitantes: number;
  data: string;
  tendencia: number;
}

export interface TimelinePoint {
  data: string; // "YYYY-MM-DD" ou "DD/MM" ou "HH:00"
  rotulo: string;
  visitantes: number;
  sessoes: number;
  visualizacoes: number;
}

export interface HeatmapCell {
  diaSemana: number; // 0 = Domingo, 1 = Segunda, ... 6 = Sábado
  hora: number; // 0..23
  intensidade: number; // 0..100 (normalizado)
  acessos: number;
}

export interface PageFlowStat {
  caminho: string;
  titulo: string;
  quantidade: number;
  percentagem: number;
}

export interface RealtimeData {
  visitantesAtivos: number;
  paises: { nome: string; codigo: string; bandeira: string; quantidade: number }[];
  paginasAtivas: { caminho: string; titulo: string; visitantes: number }[];
  dispositivos: { tipo: string; quantidade: number }[];
}

export interface AnalyticsSummary {
  periodo: PeriodType;
  descricaoPeriodo: string;
  overview: OverviewMetrics;
  timeline: TimelinePoint[];
  paises: CountryStat[];
  cidades: CityStat[];
  origemTrafego: TrafficSource[];
  principaisReferenciadores: ReferrerDomain[];
  dispositivos: DeviceStat[];
  sistemasOperativos: OsStat[];
  navegadores: BrowserStat[];
  paginasMaisVisitadas: PageStat[];
  noticiasMaisAcessadas: NewsStat[];
  heatmapHorarios: HeatmapCell[];
  paginasEntrada: PageFlowStat[];
  paginasSaida: PageFlowStat[];
  tempoReal: RealtimeData;
  isMockData: boolean;
  totalEventosReais: number;
}

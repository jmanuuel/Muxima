import { SITE } from "@/config/site";

export type Categoria = "Liturgia" | "Peregrinação" | "Formação" | "Cultural";
export type Evento = { data: Date; titulo: string; categoria: Categoria };

/** Algoritmo de Meeus/Jones/Butcher para a Páscoa (calendário gregoriano). */
export function pascoa(y: number): Date {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100;
  const d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const mes = Math.floor((h + l - 7 * m + 114) / 31);
  const dia = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(y, mes - 1, dia);
}
const add = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

export function eventosDoAno(y: number): Evento[] {
  const p = pascoa(y);
  const ev: Evento[] = [
    { data: new Date(y, 0, 1), titulo: "Santa Maria, Mãe de Deus", categoria: "Liturgia" },
    { data: new Date(y, 1, 2), titulo: "Apresentação do Senhor", categoria: "Liturgia" },
    { data: add(p, -46), titulo: "Quarta-feira de Cinzas", categoria: "Liturgia" },
    { data: add(p, -7), titulo: "Domingo de Ramos", categoria: "Liturgia" },
    { data: add(p, -3), titulo: "Quinta-feira Santa", categoria: "Liturgia" },
    { data: add(p, -2), titulo: "Sexta-feira Santa", categoria: "Liturgia" },
    { data: p, titulo: "Domingo de Páscoa", categoria: "Liturgia" },
    { data: add(p, 49), titulo: "Pentecostes", categoria: "Liturgia" },
    { data: new Date(y, 7, 15), titulo: "Assunção de Nossa Senhora", categoria: "Liturgia" },
    { data: new Date(y, 8, 8), titulo: "Natividade de Nossa Senhora", categoria: "Liturgia" },
    { data: new Date(y, 11, 8), titulo: "Imaculada Conceição — solenidade titular do Santuário", categoria: "Liturgia" },
    { data: new Date(y, 11, 25), titulo: "Natal do Senhor", categoria: "Liturgia" },
    { data: new Date(y, 7, 31), titulo: "Abertura da Grande Peregrinação — Missa solene, 17h00", categoria: "Peregrinação" },
    { data: new Date(y, 8, 5), titulo: "Dia do perdão — confissões 09h00–18h00", categoria: "Peregrinação" },
    { data: new Date(y, 8, 6), titulo: "Procissão das Velas, 19h30", categoria: "Peregrinação" },
    { data: new Date(y, 8, 7), titulo: "Encerramento — Missa campal, 10h00", categoria: "Peregrinação" },
    { data: new Date(y, 0, 15), titulo: "Abertura das inscrições de voluntários", categoria: "Formação" },
  ];
  return ev.sort((a, b) => +a.data - +b.data);
}

export function janelaPeregrinacao(y: number) {
  const { inicio, fim } = SITE.peregrinacao;
  return { inicio: new Date(y, inicio.mes - 1, inicio.dia), fim: new Date(y, fim.mes - 1, fim.dia, 23, 59, 59) };
}
/** Ano da próxima (ou actual) Grande Peregrinação. */
export function anoPeregrinacao(agora = new Date()) {
  return agora > janelaPeregrinacao(agora.getFullYear()).fim ? agora.getFullYear() + 1 : agora.getFullYear();
}

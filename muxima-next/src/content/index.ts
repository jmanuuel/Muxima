export const NAV = [
  { href: "/", label: "Início" },
  { label: "O Santuário", children: [
    { href: "/santuario", label: "Sobre o Santuário" },
    { href: "/historia", label: "História" },
    { href: "/basilica", label: "Nova Basílica" },
    { href: "/responsaveis", label: "Diocese e Responsáveis" },
    { href: "/pastoral", label: "Pastoral e Grupos" },
  ]},
  { href: "/peregrinacao", label: "Peregrinação" },
  { href: "/agenda", label: "Agenda" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contactos", label: "Contactos" },
] as const;

export const TIMELINE = [
  { ano: "1589", titulo: "Presença portuguesa na margem do Kwanza", texto: "É instalado um posto avançado no caminho fluvial entre Luanda e o interior. Nasce a povoação que o povo kimbundu chamaria Muxima — o coração." },
  { ano: "1599", titulo: "Igreja e Fortaleza de Nossa Senhora da Conceição", texto: "Erguida a igreja, junto à Fortaleza da Muxima, hoje entre os mais antigos e importantes monumentos coloniais de Angola e centro da evangelização do interior." },
  { ano: "1641", titulo: "Ocupação holandesa", texto: "As forças da Companhia Holandesa das Índias Ocidentais pilham e danificam a igreja e a fortaleza. Em 1648, com a retomada de Angola, a igreja é restaurada e a vida paroquial retomada." },
  { ano: "1833", titulo: "A primeira grande romaria", texto: "Regista-se a primeira grande romaria de que há memória: peregrinos sobem de Luanda e das margens do Kwanza. Nasce a tradição que se repete todos os anos, no início de setembro." },
  { ano: "1924", titulo: "Monumento Nacional", texto: "O conjunto de igreja e fortaleza é classificado como Monumento Nacional, reconhecendo o seu valor histórico e artístico." },
  { ano: "1975–2002", titulo: "Guerra e persistência da devoção", texto: "Mesmo nos anos mais difíceis da guerra, a Mama Muxima nunca ficou sem o seu povo. A romaria manteve-se como sinal de esperança e fé." },
  { ano: "1992", titulo: "São João Paulo II em Angola", texto: "A visita apostólica de São João Paulo II confirma a Muxima como coração mariano da nação." },
  { ano: "2022", titulo: "Primeira pedra da Nova Basílica", texto: "É benzida e lançada a primeira pedra da nova Basílica, resposta à multidão de peregrinos que já não cabe na igreja colonial." },
  { ano: "2026", titulo: "Visita do Papa Leão XIV", texto: "No âmbito da sua viagem apostólica, o Santo Padre foi acolhido na Muxima por uma multidão sem precedentes, presidindo à oração mariana junto ao Rio Kwanza." },
];

export const HORARIOS = [
  ["Missas — dias úteis", "07h00 e 17h30"],
  ["Missas — sábados", "07h00 e 17h00"],
  ["Missas — domingos", "06h00 (alvorada) · 08h30 · 10h30 · 17h00"],
  ["Terço", "Diariamente às 16h45"],
  ["Confissões", "Dias úteis 16h30–17h15; domingos antes de cada missa; a pedido no cartório"],
  ["Adoração ao Santíssimo", "Quintas-feiras 09h00–11h00; primeiro sábado do mês 09h00–12h00"],
  ["Catequese", "Sábados 09h00–11h00"],
  ["Cartório", "Seg–sex 08h00–12h00 e 14h00–16h30; sábados 09h00–12h00"],
] as const;

/** Horário do dia (0 = domingo). */
export const HOJE: Record<number, string> = {
  0: "Missas 06h00, 08h30, 10h30 e 17h00 · Terço 16h45",
  6: "Missas 07h00 e 17h00 · Terço 16h45 · Catequese 09h00",
  4: "Missas 07h00 e 17h30 · Adoração 09h00 · Terço 16h45",
};
export const HOJE_UTIL = "Missas 07h00 e 17h30 · Terço 16h45";

export const PROGRAMA = [
  ["31 de agosto", "Missa de abertura, 17h00, no recinto"],
  ["1–4 de setembro", "Terço da aurora · catequeses (crianças, jovens, famílias, doentes) · missas e confissões contínuas"],
  ["5 de setembro", "Dia do perdão — confissões das 09h00 às 18h00"],
  ["6 de setembro", "Procissão das Velas, às 19h30, com a imagem coroada"],
  ["7 de setembro", "Solenidade de encerramento — Missa campal, 10h00"],
] as const;

export const ORIENTACOES = [
  ["O que levar", "Terço, chapéu ou lenço, calçado confortável, garrafa de água, manta para o frio da madrugada, medicamentos pessoais."],
  ["Comportamento", "Recato e respeito no recinto sagrado; silêncio durante as celebrações; cuidado com crianças e idosos; zelo pela limpeza da vila e da margem do rio."],
  ["Acomodação", "A maioria pernoita junto ao santuário — leve o seu material. Há também hospedagem simples na região."],
  ["Saúde e segurança", "Postos de apoio da Cruz Vermelha e das autoridades durante as grandes romarias."],
] as const;

export const FASES = [
  ["Fase 1", "Terrenos, projeto e primeira pedra (2022)", "concluida"],
  ["Fase 2", "Fundações e estruturas", "concluida"],
  ["Fase 3", "Cobertura e fachadas", "curso"],
  ["Fase 4", "Interior, arte sacra e equipamentos", "prevista"],
  ["Fase 5", "Requalificação da vila e da margem", "prevista"],
] as const;

export const GRUPOS = [
  ["Catequese (crianças e adultos)", "Sábados, 09h00–11h00", "Equipas de catequese com as Irmãs Filhas de Jesus"],
  ["Coro principal do Santuário", "Sextas, 18h00", "Maestrina e mestre de coro"],
  ["Legião de Maria", "Terças, 17h00", "Presidente local do praesidium"],
  ["Associação Mama Muxima", "Primeiro sábado do mês", "Junta directiva da Associação"],
  ["Pastoral juvenil", "Domingos, 14h00", "Animadores juvenis saletinos"],
  ["Ministros extraordinários da Comunhão", "Formação mensal", "Reitor do Santuário"],
  ["Caritas paroquial", "Sextas, 15h00", "Coordenação Caritas"],
] as const;

export const COMUNIDADES = [
  ["Missionários Saletinos (MS)", "Assistência espiritual e formação no santuário e na região da Quiçama."],
  ["Congregação das Filhas de Jesus", "Catequese, visita aos doentes e apoio às famílias da vila."],
  ["Associação Mama Muxima", "Leigos dedicados à organização das romarias e à promoção da devoção mariana."],
  ["Legião de Maria", "Evangelização e serviço de acolhimento aos peregrinos."],
  ["Coros do Santuário", "Coro principal e coros das comunidades, ao serviço da liturgia."],
  ["Catequese e Jovens", "Iniciação cristã e pastoral juvenil para a vila e arredores."],
] as const;

export const LOJA = [
  ["Terços", "Em madeira, sementes e contas artesanais angolanas, benzidos no santuário."],
  ["Imagens de Mama Muxima", "Reproduções da imagem coroada, em resina e madeira."],
  ["Velas devocionais", "Para acender junto da Senhora ou levar consigo."],
  ["Livraria", "História do santuário, vidas de Maria, hinários e materiais de catequese."],
  ["Cruzes e medalhas", "Cruzes da Muxima, medalhas da Imaculada Conceição e artigos de devoção pessoal."],
  ["Lembranças espirituais", "Cartões e recordações da Grande Peregrinação e da nova Basílica."],
] as const;

/** Conteúdo editorial: rever datas e textos antes da publicação. */
export const NOTICIAS = [
  { slug: "balanco-romaria", data: "2027-09-12", cat: "Grande Peregrinação", titulo: "Balanço da 195.ª Grande Peregrinação", texto: "Terminou a Grande Peregrinação, com fiéis de todas as províncias e da diáspora, procissão das velas com a imagem coroada e missa campal de encerramento. O Santuário agradece a cada peregrino, voluntário e comunidade." },
  { slug: "ano-pastoral", data: "2027-09-17", cat: "Pastoral", titulo: "Lançado o Ano Pastoral 2027/2028", texto: "Sob o lema «Fazei tudo o que Ele vos disser» (Jo 2,5), o Santuário e as comunidades da Quiçama iniciam o novo ano de caminhada." },
  { slug: "cartorio-horario", data: "2027-09-10", cat: "Santuário", titulo: "Cartório retoma o horário regular", texto: "Concluído o esforço extraordinário da romaria, o cartório volta ao atendimento de seg–sex 08h00–12h00 e 14h00–16h30, sáb 09h00–12h00." },
  { slug: "cobertura-basilica", data: "2027-09-05", cat: "Nova Basílica", titulo: "Começou a cobertura da nova Basílica", texto: "A Fase 3 arrancou: gruas e primeiras peças da cobertura dominam já o horizonte da vila. Consagração prevista para 2029." },
  { slug: "voluntarios", data: "2027-09-02", cat: "Voluntariado", titulo: "Mais de mil voluntários serviram a romaria", texto: "Acolhimento, saúde, logística e cantina: o serviço discreto dos voluntários sustentou a Grande Peregrinação." },
] as const;

export const IMAGENS = [
  { src: "/img/procissao.png", alt: "Procissão com a imagem coroada de Nossa Senhora", cat: "Peregrinações" },
  { src: "/img/aerea.png", alt: "Vista aérea do recinto do Santuário", cat: "Igreja" },
  { src: "/img/complexo.jpg", alt: "Complexo do Santuário da Muxima", cat: "Igreja" },
  { src: "/img/forte1.jpg", alt: "Fortaleza da Muxima", cat: "Rio Kwanza e Fortaleza" },
  { src: "/img/forte2.jpg", alt: "Rio Kwanza visto da Fortaleza", cat: "Rio Kwanza e Fortaleza" },
  { src: "/img/obraMaquete.jpg", alt: "Maquete da Nova Basílica", cat: "Nova Basílica" },
  { src: "/img/obraEstrutura.jpg", alt: "Estrutura da Nova Basílica em construção", cat: "Nova Basílica" },
  { src: "/img/obraConjunto.jpg", alt: "Vista de conjunto do estaleiro", cat: "Nova Basílica" },
  { src: "/img/obraVoo.jpg", alt: "Imagem aérea das obras", cat: "Nova Basílica" },
  { src: "/img/obraDez25.jpg", alt: "Estado das obras em dezembro de 2025", cat: "Nova Basílica" },
] as const;
export const PAPA = [1,2,3,4,5,6,7].map(n => ({ src: `/img/papa${n}.jpg`, alt: `Visita do Papa à Muxima (${n})`, cat: "Visita do Papa" }));

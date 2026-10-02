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
/** Oração do Dia: uma diferente em cada dia do ano. */
export const ORACOES: { titulo: string; texto: string }[] = [
  { titulo: "À Mama Muxima", texto: "Mãe de Deus e Mãe nossa, Mama Muxima, olha pelos teus filhos. Conduze os peregrinos de todo o mundo até à tua casa, no coração de Angola. Amén." },
  { titulo: "Oração do peregrino", texto: "Senhor, guarda os meus passos no caminho e abençoa quem me acolhe. Que eu chegue à Muxima com o coração simples e confiante. Amén." },
  { titulo: "Angelus", texto: "O Anjo do Senhor anunciou a Maria, e ela concebeu do Espírito Santo. Ave Maria, cheia de graça... Rogai por nós, Santa Mãe de Deus. Amén." },
  { titulo: "Salve Rainha", texto: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve. A vós bradamos, os degredados filhos de Eva... E depois deste desterro, nos mostrai Jesus, bendito fruto do vosso ventre. Amén." },
  { titulo: "À Imaculada Conceição", texto: "Ó Maria, concebida sem pecado, rogai por nós que recorremos a vós. Guarda a nossa terra, a nossa Igreja e as nossas famílias. Amén." },
  { titulo: "Terço da aurora", texto: "Virgem Santa Maria, ao acordar o novo dia, consagramos a ti o nosso trabalho, a nossa alegria e a nossa fadiga. Santifica este dia. Amén." },
  { titulo: "Oração pela paz", texto: "Senhor, dá-nos a paz. Afasta de nós a guerra e a discórdia e ensina-nos a amar como irmãos. Amén." },
  { titulo: "Oração pela família", texto: "Sagrada Família de Nazaré, protege as famílias de Angola e do mundo. Que sejam lugar de fé, de perdão e de amor. Amén." },
  { titulo: "Oração pelos doentes", texto: "Mãe de todos os que sofrem, visita os doentes e os aflitos. Sê consolo dos que choram e esperança dos que desanimam. Amén." },
  { titulo: "Oração pela juventude", texto: "Senhora da Muxima, guia os jovens nos seus caminhos. Dá-lhes coragem, sabedoria e um coração generoso. Amén." },
  { titulo: "Oração pela Igreja em Angola", texto: "Senhor, abençoa a Igreja em Angola, seus bispos, padres e leigos. Fortalece os missionários no seu serviço. Amén." },
  { titulo: "Oração pelas vocações", texto: "Jesus, envia operários para a tua messe. Suscita santas vocações ao sacerdócio, à vida consagrada e ao serviço dos irmãos. Amén." },
  { titulo: "Oração pelos falecidos", texto: "Senhor, dá aos nossos fiéis defuntos a luz perpétua. Descansem em paz junto da Mãe Celestial. Amén." },
  { titulo: "Consagração diária", texto: "Maria, eu me ofereço todo a ti e, para te mostrar a minha dedicação, te dou hoje os meus olhos, os meus ouvidos, a minha boca, o meu coração e toda a minha pessoa. Amén." },
];

/** Oração do dia (índice pelo dia do ano). */
export function oracaoDoDia(data = new Date()) {
  const inicio = new Date(data.getFullYear(), 0, 0);
  const diaDoAno = Math.floor((data.getTime() - inicio.getTime()) / 86400000);
  return ORACOES[diaDoAno % ORACOES.length];
}

export const NOTICIAS = [
  { slug: "balanco-romaria", data: "2027-09-12", cat: "Grande Peregrinação", titulo: "Balanço da 195.ª Grande Peregrinação", texto: "Terminou a Grande Peregrinação, com fiéis de todas as províncias e da diáspora, procissão das velas com a imagem coroada e missa campal de encerramento. O Santuário agradece a cada peregrino, voluntário e comunidade." },
  { slug: "ano-pastoral", data: "2027-09-17", cat: "Pastoral", titulo: "Lançado o Ano Pastoral 2027/2028", texto: "Sob o lema «Fazei tudo o que Ele vos disser» (Jo 2,5), o Santuário e as comunidades da Quiçama iniciam o novo ano de caminhada." },
  { slug: "cartorio-horario", data: "2027-09-10", cat: "Santuário", titulo: "Cartório retoma o horário regular", texto: "Concluído o esforço extraordinário da romaria, o cartório volta ao atendimento de seg–sex 08h00–12h00 e 14h00–16h30, sáb 09h00–12h00." },
  { slug: "cobertura-basilica", data: "2027-09-05", cat: "Nova Basílica", titulo: "Começou a cobertura da nova Basílica", texto: "A Fase 3 arrancou: gruas e primeiras peças da cobertura dominam já o horizonte da vila. Consagração prevista para 2029." },
  { slug: "voluntarios", data: "2027-09-02", cat: "Voluntariado", titulo: "Mais de mil voluntários serviram a romaria", texto: "Acolhimento, saúde, logística e cantina: o serviço discreto dos voluntários sustentou a Grande Peregrinação." },
] as const;

export const IMAGENS = [
  { src: "/img/fortaleza-e-rio-kwanza/20180325-153909-largejpg.jpg", alt: "Fortaleza e rio kwanza — 20180325 153909 largejpg", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/20180325-154039-largejpg.jpg", alt: "Fortaleza e rio kwanza — 20180325 154039 largejpg", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/20180325-154121-largejpg.jpg", alt: "Fortaleza e rio kwanza — 20180325 154121 largejpg", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/20180325-154153-largejpg.jpg", alt: "Fortaleza e rio kwanza — 20180325 154153 largejpg", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/20180325-154925-largejpg.jpg", alt: "Fortaleza e rio kwanza — 20180325 154925 largejpg", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/759727878-1652759296269974-5079176774603921060-n.jpg", alt: "Fortaleza e rio kwanza — 759727878 1652759296269974 5079176774603921060 n", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/759776611-2532656147199486-4141758614238616933-n.jpg", alt: "Fortaleza e rio kwanza — 759776611 2532656147199486 4141758614238616933 n", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/762234999-1921216191896025-4820649331180963720-n.jpg", alt: "Fortaleza e rio kwanza — 762234999 1921216191896025 4820649331180963720 n", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/809979330-917196901109985-1434088420997350889-n.jpg", alt: "Fortaleza e rio kwanza — 809979330 917196901109985 1434088420997350889 n", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/muxima-fort-01.jpg", alt: "Fortaleza e rio kwanza — muxima fort 01", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/aktualny-widok-na-twierdze.jpg", alt: "Fortaleza e rio kwanza — aktualny widok na twierdze", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/img-0022.jpg", alt: "Fortaleza e rio kwanza — img 0022", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/img-5233.jpg", alt: "Fortaleza e rio kwanza — img 5233", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/img-5240.jpg", alt: "Fortaleza e rio kwanza — img 5240", cat: "fortaleza e rio kwanza" },
  { src: "/img/fortaleza-e-rio-kwanza/widok-z-lodzi-na-wzgorze.jpg", alt: "Fortaleza e rio kwanza — widok z lodzi na wzgorze", cat: "fortaleza e rio kwanza" },
  { src: "/img/igreja/426-001-muxima-postal-ilustrado-delcampe.jpg", alt: "Igreja — 426 001 muxima postal ilustrado delcampe", cat: "igreja" },
  { src: "/img/igreja/789651895-28460076913649618-791722998956126829-n.jpg", alt: "Igreja — 789651895 28460076913649618 791722998956126829 n", cat: "igreja" },
  { src: "/img/igreja/muxima-angola-igreja-de-n.-sra-da-conceicao-e-rio-cuanza-postal-ilustrado-cerca-de-1940.jpg", alt: "Igreja — muxima angola igreja de n. sra da conceicao e rio cuanza postal ilustrado cerca de 1940", cat: "igreja" },
  { src: "/img/igreja/muxima-igreja-n-sra-conceicao--0001-2.jpg", alt: "Igreja — muxima igreja n sra conceicao  0001 2", cat: "igreja" },
  { src: "/img/igreja/muxima.jpg", alt: "Igreja — muxima", cat: "igreja" },
  { src: "/img/igreja/download.jpg", alt: "Igreja — download", cat: "igreja" },
  { src: "/img/igreja/image.jpg", alt: "Igreja — image", cat: "igreja" },
  { src: "/img/igreja/images-1.jpg", alt: "Igreja — images 1", cat: "igreja" },
  { src: "/img/igreja/images-2.jpg", alt: "Igreja — images 2", cat: "igreja" },
  { src: "/img/igreja/images.jpg", alt: "Igreja — images", cat: "igreja" },
  { src: "/img/igreja/img-5210.jpg", alt: "Igreja — img 5210", cat: "igreja" },
  { src: "/img/muxima-peregrinacoes/473193953-9413751038658793-9196465429479148280-n.jpg", alt: "Muxima peregrinacoes — 473193953 9413751038658793 9196465429479148280 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/670787236-18580956589048020-4412253615690887349-n.jpg", alt: "Muxima peregrinacoes — 670787236 18580956589048020 4412253615690887349 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/788744004-2042521503023365-7358864873641863663-n.jpg", alt: "Muxima peregrinacoes — 788744004 2042521503023365 7358864873641863663 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/790528903-4535481769931234-859371756491711329-n.jpg", alt: "Muxima peregrinacoes — 790528903 4535481769931234 859371756491711329 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/793378179-122252408936132193-5700514622365516957-n.jpg", alt: "Muxima peregrinacoes — 793378179 122252408936132193 5700514622365516957 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/793447434-122252409200132193-1477572673542074853-n.jpg", alt: "Muxima peregrinacoes — 793447434 122252409200132193 1477572673542074853 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/795679779-122252408738132193-7160172655963348976-n.jpg", alt: "Muxima peregrinacoes — 795679779 122252408738132193 7160172655963348976 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/797278751-122143407915178478-8908794692197846412-n.jpg", alt: "Muxima peregrinacoes — 797278751 122143407915178478 8908794692197846412 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/797315821-122143407717178478-4766545106187484081-n.jpg", alt: "Muxima peregrinacoes — 797315821 122143407717178478 4766545106187484081 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/797625292-122143407969178478-3040636325115096212-n.jpg", alt: "Muxima peregrinacoes — 797625292 122143407969178478 3040636325115096212 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/797830062-969191212880431-7978456942213257657-n.jpg", alt: "Muxima peregrinacoes — 797830062 969191212880431 7978456942213257657 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/797906196-1688738578866143-5934022451472852818-n.jpg", alt: "Muxima peregrinacoes — 797906196 1688738578866143 5934022451472852818 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/797919782-2899777927055425-6675654846191625223-n.jpg", alt: "Muxima peregrinacoes — 797919782 2899777927055425 6675654846191625223 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/798116619-122143407771178478-2744999339348242424-n.jpg", alt: "Muxima peregrinacoes — 798116619 122143407771178478 2744999339348242424 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/798281193-2899778550388696-7136443108060582663-n.jpg", alt: "Muxima peregrinacoes — 798281193 2899778550388696 7136443108060582663 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/798718634-2899777883722096-6998519482024733814-n.jpg", alt: "Muxima peregrinacoes — 798718634 2899777883722096 6998519482024733814 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/798743386-122143407633178478-7635318870924893977-n.jpg", alt: "Muxima peregrinacoes — 798743386 122143407633178478 7635318870924893977 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/799239303-122143407615178478-3701165116230924379-n.jpg", alt: "Muxima peregrinacoes — 799239303 122143407615178478 3701165116230924379 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/800643893-122181625766852740-5205751878814822162-n.jpg", alt: "Muxima peregrinacoes — 800643893 122181625766852740 5205751878814822162 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/800993657-122181625232852740-8691622401878548905-n.jpg", alt: "Muxima peregrinacoes — 800993657 122181625232852740 8691622401878548905 n", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/altar-da-muxima-passa-a-designar-se-esplanada-da-bem-aventurada-nossa-senhora-da-muxima-427460.jpg", alt: "Muxima peregrinacoes — altar da muxima passa a designar se esplanada da bem aventurada nossa senhora da muxima 427460", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/cq5dam.thumbnail.cropped.750.422.jpg", alt: "Muxima peregrinacoes — cq5dam.thumbnail.cropped.750.422", cat: "muxima peregrinacoes" },
  { src: "/img/muxima-peregrinacoes/img-1-small480.jpg", alt: "Muxima peregrinacoes — img 1 small480", cat: "muxima peregrinacoes" },
  { src: "/img/nova-basilica/642403260839151774381155.jpg", alt: "Nova basilica — 642403260839151774381155", cat: "nova basilica" },
  { src: "/img/nova-basilica/muxima-qx91qj63jz4o8oodn11bxjj9y5pzlz8eb13zdluals.jpg", alt: "Nova basilica — muxima qx91qj63jz4o8oodn11bxjj9y5pzlz8eb13zdluals", cat: "nova basilica" },
  { src: "/img/nova-basilica/download.jpg", alt: "Nova basilica — download", cat: "nova basilica" },
  { src: "/img/nova-basilica/images-cms-image-000057570.jpg", alt: "Nova basilica — images cms image 000057570", cat: "nova basilica" },
  { src: "/img/nova-basilica/muxima-santuario-2.jpg", alt: "Nova basilica — muxima santuario 2", cat: "nova basilica" },
  { src: "/img/nova-basilica/muxima-santuario.jpg", alt: "Nova basilica — muxima santuario", cat: "nova basilica" },
] as const;
export const PAPA = [
  { src: "/img/visita-do-papa/42449ec0-ad30-43c3-b5a9-35eb888d0591-770x514.jpg", alt: "Visita do Papa — 42449ec0 ad30 43c3 b5a9 35eb888d0591 770x514", cat: "visita do papa" },
  { src: "/img/visita-do-papa/469593521153c2031677defaultlarge-1024.jpg", alt: "Visita do Papa — 469593521153c2031677defaultlarge 1024", cat: "visita do papa" },
  { src: "/img/visita-do-papa/672687622-1590777535739986-5047695419788961241-n.jpg", alt: "Visita do Papa — 672687622 1590777535739986 5047695419788961241 n", cat: "visita do papa" },
  { src: "/img/visita-do-papa/ap26109611062903-1776621445.jpg", alt: "Visita do Papa — ap26109611062903 1776621445", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2271542245-612x612.jpg", alt: "Visita do Papa — gettyimages 2271542245 612x612", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2271542246-612x612.jpg", alt: "Visita do Papa — gettyimages 2271542246 612x612", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2271545462-612x612.jpg", alt: "Visita do Papa — gettyimages 2271545462 612x612", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2271547379-612x612.jpg", alt: "Visita do Papa — gettyimages 2271547379 612x612", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2272086582-612x612.jpg", alt: "Visita do Papa — gettyimages 2272086582 612x612", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2272086589-612x612.jpg", alt: "Visita do Papa — gettyimages 2272086589 612x612", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2272086599-612x612.jpg", alt: "Visita do Papa — gettyimages 2272086599 612x612", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2272086608-612x612-1.jpg", alt: "Visita do Papa — gettyimages 2272086608 612x612 1", cat: "visita do papa" },
  { src: "/img/visita-do-papa/gettyimages-2272087307-612x612.jpg", alt: "Visita do Papa — gettyimages 2272087307 612x612", cat: "visita do papa" },
] as const;

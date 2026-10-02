/** Configuração central — equivalente ao antigo objecto CONFIG. */
export const SITE = {
  nome: "Santuário de Nossa Senhora da Conceição da Muxima",
  curto: "Santuário da Muxima",
  invocacao: "Mama Muxima",
  diocese: "Diocese de Viana",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.santuariomuxima.ao", // TODO: domínio definitivo
  morada: "Vila da Muxima, Município da Quiçama, Província do Icolo e Bengo, Angola",
  telefone: "+244 923 456 789", // TODO: confirmar com o cartório
  email: "cartorio@santuariomuxima.ao", // TODO: confirmar com o cartório
  whatsapp: "", // TODO
  coordenadas: { lat: -9.1447, lng: 13.8419, texto: "9°08'41\"S · 13°50'31\"E" },
  peregrinacao: { inicio: { mes: 8, dia: 31 }, fim: { mes: 9, dia: 7 } },
  statPeregrinos: "Multidões", // TODO: número oficial
  mostrarAlbumPapa: true, // activar só após confirmar licenciamento das fotografias
  social: {
    facebook: "https://www.facebook.com/DiocesedeVianaAngola",
    youtube: "https://www.youtube.com/@diocesedevianane5",
    site: "https://diocesedeviana.ao",
    vaticano: "https://www.vaticannews.va/pt.html",
    instagram: "",
  },
};

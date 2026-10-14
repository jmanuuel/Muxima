import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
import { NOTICIAS } from "@/content";

const rotas = [
  "",
  "santuario",
  "historia",
  "basilica",
  "responsaveis",
  "pastoral",
  "peregrinacao",
  "agenda",
  "galeria",
  "noticias",
  "loja",
  "contactos",
  "voluntariado",
  "como-chegar",
  "privacidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = rotas.map((r) => ({
    url: r ? `${SITE.url}/${r}` : SITE.url,
    lastModified: new Date(),
  }));

  const noticias = NOTICIAS.map((n) => ({
    url: `${SITE.url}/noticias/${n.slug}`,
    lastModified: new Date(n.data),
  }));

  return [...estaticas, ...noticias];
}

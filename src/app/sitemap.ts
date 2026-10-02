import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";
const rotas = ["", "santuario", "historia", "basilica", "responsaveis", "pastoral", "peregrinacao", "agenda", "galeria", "noticias", "loja", "contactos", "voluntariado", "como-chegar", "privacidade"];
export default function sitemap(): MetadataRoute.Sitemap { return rotas.map(r => ({ url: `${SITE.url}/${r}`, lastModified: new Date() })); }

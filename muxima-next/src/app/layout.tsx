import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.nome} — Mama Muxima`, template: `%s · ${SITE.curto}` },
  description: "Sítio institucional do Santuário de Nossa Senhora da Conceição da Muxima (Mama Muxima), Diocese de Viana, Angola: história, Grande Peregrinação, agenda, Nova Basílica e contactos.",
  keywords: ["Muxima", "Mama Muxima", "santuário", "peregrinação", "Diocese de Viana", "Angola", "Quiçama"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_AO", siteName: SITE.curto, title: SITE.nome, url: SITE.url, images: ["/img/aerea.png"] },
};
export const viewport: Viewport = { themeColor: "#10284a", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org", "@type": "Church", name: SITE.nome, alternateName: SITE.invocacao, url: SITE.url,
  address: { "@type": "PostalAddress", addressLocality: "Muxima, Quiçama", addressRegion: "Icolo e Bengo", addressCountry: "AO" },
  geo: { "@type": "GeoCoordinates", latitude: SITE.coordenadas.lat, longitude: SITE.coordenadas.lng },
  parentOrganization: { "@type": "Organization", name: SITE.diocese, url: SITE.social.site },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-AO">
      <body>
        <a className="skip" href="#conteudo">Saltar para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

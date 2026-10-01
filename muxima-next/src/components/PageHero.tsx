export default function PageHero({ eyebrow, titulo, texto }: { eyebrow: string; titulo: string; texto?: string }) {
  return (
    <section className="page-hero"><div className="wrap">
      <p className="eyebrow">{eyebrow}</p><h1>{titulo}</h1>{texto && <p className="lead">{texto}</p>}
    </div></section>
  );
}

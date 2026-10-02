import Link from "next/link";
import Countdown from "@/components/Countdown";
import Hoje from "@/components/Hoje";
import OracaoDoDia from "@/components/OracaoDoDia";
import Figure from "@/components/Figure";
import { NOTICIAS, TIMELINE } from "@/content";
import { SITE } from "@/config/site";

const ACESSOS = [
  ["Grande Peregrinação", "Programa, orientações e informações práticas para peregrinos.", "/peregrinacao"],
  ["Agenda", "Missas, terço, confissões e calendário do ano pastoral.", "/agenda"],
  ["Como chegar", "A cerca de 130 km de Luanda, junto ao Rio Kwanza.", "/como-chegar"],
  ["Contactos e intenções", "Cartório do Santuário e intenções de oração.", "/contactos"],
] as const;

export default function Home() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <div>
          <p className="eyebrow">Santuário de Nossa Senhora da Conceição · desde 1599</p>
          <h1>Muxima</h1>
          <p style={{ fontSize: "1.2rem" }}>No coração da Quiçama, à margem do Rio Kwanza, ergue-se a casa da <strong>Mama Muxima</strong> — o maior santuário mariano da África Subsaariana e o coração da fé do povo angolano.</p>
          <div className="btns"><Link className="btn gold" href="/historia">Conhecer a nossa história</Link><Link className="btn ghost" href="/como-chegar">Como chegar</Link></div>
        </div>
        <aside className="panel" aria-label="Próxima peregrinação">
          <h2>Grande Peregrinação</h2>
          <p>31 de agosto a 7 de setembro, com Missa solene de abertura no recinto do Santuário.</p>
          <Countdown />
          <Hoje />
          <Link className="btn gold" href="/agenda">Ver agenda</Link>
        </aside>
      </div></section>

      <section className="section"><div className="wrap">
        <p className="eyebrow">Planeie a sua visita</p><h2>Bem-vindo, peregrino</h2>
        <div className="grid3">{ACESSOS.map(([t, d, h]) => <article className="card" key={h}><h3>{t}</h3><p>{d}</p><Link className="more" href={h}>Consultar</Link></article>)}</div>
      </div></section>

      <section className="section"><div className="wrap grid2">
        <div><p className="eyebrow">Oração</p><h2>Uma oração para cada dia</h2><p>Todos os dias uma nova oração para começar o caminho com o coração voltado à Mãe. Pode rezar em qualquer lugar, antes ou depois da visita ao Santuário.</p></div>
        <OracaoDoDia />
      </div></section>

      <section className="section alt"><div className="wrap grid2">
        <div>
          <p className="eyebrow">O Santuário</p><h2>Quatro séculos ao serviço da fé</h2>
          <p>«Muxima» significa «coração» em kimbundu. Desde 1599, a igreja e a fortaleza guardam a memória de um povo que sobe todos os anos ao encontro da sua Mãe. Monumento Nacional desde 1924, o Santuário pertence à {SITE.diocese} e é o principal centro de peregrinação de Angola.</p>
          <div className="stats"><div><b>1599</b><span>fundação da igreja</span></div><div><b>1924</b><span>Monumento Nacional</span></div><div><b>{SITE.statPeregrinos}</b><span>peregrinos por ano</span></div></div>
          <p style={{ marginTop: "1.5rem" }}><Link href="/santuario">Sobre o Santuário</Link></p>
        </div>
        <Figure src="/img/muxima-peregrinacoes/cq5dam.thumbnail.cropped.750.422.jpg" alt="Vista aérea do recinto do Santuário da Muxima" legenda="Igreja de N. Sra. da Conceição e Fortaleza da Muxima, sentinelas do Kwanza." ratio="4/3" priority />
      </div></section>

      <section className="section"><div className="wrap">
        <p className="eyebrow">História</p><h2>Marcos principais</h2>
        <ol className="tl">{[0, 1, 3, 7].map(i => <li key={i}><b>{TIMELINE[i].ano}</b><h3>{TIMELINE[i].titulo}</h3></li>)}</ol>
        <Link className="btn" href="/historia">Ver linha do tempo completa</Link>
      </div></section>

      <section className="section alt"><div className="wrap">
        <p className="eyebrow">Notícias</p><h2>Vida do Santuário</h2>
        <div className="grid3">{NOTICIAS.slice(0, 3).map(n => <article key={n.slug} className="card"><time dateTime={n.data}>{new Date(n.data).toLocaleDateString("pt-PT", { dateStyle: "long" })} · {n.cat}</time><h3>{n.titulo}</h3><p>{n.texto}</p></article>)}</div>
        <p style={{ marginTop: "1.5rem" }}><Link href="/noticias">Todas as notícias</Link></p>
      </div></section>

      <section className="verse"><div className="wrap"><blockquote>«A partir daquele momento, o discípulo acolheu-a em sua casa.»</blockquote><cite>João 19, 27</cite></div></section>
    </>
  );
}

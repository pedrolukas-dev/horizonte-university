
import { useState } from 'react'
import './app.css'

const noticias = [
  {
    categoria: 'EVENTOS',
    data: '12 NOV 2026',
    titulo: 'Semana de integração aproxima estudantes e comunidade acadêmica',
    resumo: 'Uma programação especial reúne atividades, troca de experiências e momentos de acolhimento para os alunos.',
    imagem: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1100&q=85'
  },
  {
    categoria: 'VIDA ACADÊMICA',
    data: '08 NOV 2026',
    titulo: 'Projetos dos estudantes ganham espaço em mostra de inovação',
    resumo: 'Trabalhos desenvolvidos ao longo do semestre mostram criatividade e soluções para desafios atuais.',
    imagem: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=85'
  },
  {
    categoria: 'COMUNICADOS',
    data: '03 NOV 2026',
    titulo: 'Confira as orientações para o próximo período letivo',
    resumo: 'Veja informações importantes sobre calendário acadêmico, organização e atividades do campus.',
    imagem: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85'
  },
  {
    categoria: 'EVENTOS',
    data: '28 OUT 2026',
    titulo: 'Palestra debate as novas oportunidades no mercado de trabalho',
    resumo: 'Convidados compartilham experiências e conversam com os estudantes sobre carreira e desenvolvimento profissional.',
    imagem: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=85'
  },
  {
    categoria: 'PESQUISA',
    data: '20 OUT 2026',
    titulo: 'Faculdade incentiva iniciação científica e produção de conhecimento',
    resumo: 'A iniciativa estimula a curiosidade, a pesquisa e a participação dos alunos em projetos acadêmicos.',
    imagem: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85'
  }
]

const filtros = [
  'Todas',
  'Eventos',
  'Vida acadêmica',
  'Comunicados',
  'Pesquisa'
]

function Noticias() {
  const [filtro, setFiltro] = useState('Todas')

  const lista = noticias.filter(n =>
    filtro === 'Todas' ||
    n.categoria.toLowerCase() === filtro.toLowerCase()
  )

  const destaque = noticias[0]

  return (
    <div className="noticias-page">

      <section className="noticias-topo">
        <div className="noticias-topo-inner">

          <span className="eyebrow">FIQUE POR DENTRO</span>

          <h1>
            Notícias que movimentam
            <em> nosso horizonte.</em>
          </h1>

          <p>
            Acompanhe novidades, eventos, projetos e comunicados
            da Faculdade Horizonte.
          </p>

        </div>
      </section>

      <section className="noticia-destaque section-wrap">

        <div className="destaque-img">
          <img src={destaque.imagem} alt="Estudantes participando de atividade universitária" />
          <span>DESTAQUE</span>
        </div>

        <div className="destaque-texto">

          <div className="noticia-meta">
            <span>{destaque.categoria}</span>
            <time>{destaque.data}</time>
          </div>

          <h2>{destaque.titulo}</h2>

          <p>{destaque.resumo}</p>

          <a href="#lista-noticias">
            Explorar notícias <span>↓</span>
          </a>

        </div>

      </section>

      <section
        className="lista-noticias section-wrap"
        id="lista-noticias"
      >

        <div className="section-heading">
          <div>
            <span className="eyebrow">
              NOTÍCIAS E ATUALIZAÇÕES
            </span>

            <h2>
              O que acontece <em>por aqui.</em>
            </h2>
          </div>

          <p>
            Informação e conhecimento fazem parte
            da vida acadêmica.
          </p>
        </div>

        <div className="noticia-filtros" aria-label="Filtrar notícias">
          {filtros.map(item => (
            <button
              key={item}
              type="button"
              className={filtro === item ? 'selecionado' : ''}
              onClick={() => setFiltro(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="noticias-grid">

          {lista.map(n => (
            <article className="noticia-card" key={n.titulo}>

              <div className="noticia-card-img">
                <img src={n.imagem} alt="" />
                <span>{n.categoria}</span>
              </div>

              <div className="noticia-card-conteudo">

                <time>{n.data}</time>

                <h3>{n.titulo}</h3>

                <p>{n.resumo}</p>

                <a href="#lista-noticias">
                  Leia mais <span>→</span>
                </a>

              </div>

            </article>
          ))}

        </div>

        {lista.length === 0 && (
          <p className="sem-noticias">
            Nenhuma notícia encontrada nesta categoria.
          </p>
        )}

      </section>

      <section className="noticias-aviso">
        <div className="section-wrap">

          <span className="eyebrow">
            ACOMPANHE A FACULDADE
          </span>

          <h2>
            As novidades não param
            <em> por aqui.</em>
          </h2>

          <p>
            Volte sempre para conferir os próximos eventos,
            comunicados e projetos da nossa comunidade.
          </p>

        </div>
      </section>

    </div>
  )
}

export default Noticias

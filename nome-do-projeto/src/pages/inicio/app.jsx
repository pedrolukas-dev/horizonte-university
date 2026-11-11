
import { Link } from 'react-router-dom'
import './app.css'

const diferenciais = [
  {
    numero: '01',
    titulo: 'Aprendizado na prática',
    texto: 'Projetos, atividades e experiências que aproximam o conhecimento dos desafios do mercado.'
  },
  {
    numero: '02',
    titulo: 'Professores preparados',
    texto: 'Uma equipe comprometida com o ensino, a orientação e o desenvolvimento dos estudantes.'
  },
  {
    numero: '03',
    titulo: 'Formação para o futuro',
    texto: 'Uma jornada acadêmica que estimula a criatividade, a autonomia e novas oportunidades.'
  }
]

const cursos = [
  {
    area: 'TECNOLOGIA',
    nome: 'Análise e Desenvolvimento de Sistemas',
    duracao: '2 anos e meio'
  },
  {
    area: 'GESTÃO',
    nome: 'Administração',
    duracao: '4 anos'
  },
  {
    area: 'SAÚDE',
    nome: 'Enfermagem',
    duracao: '5 anos'
  }
]

function Inicio() {
  return (
    <div className="home-page">

      <section className="home-hero">
        <div className="home-hero-inner">

          <div className="home-copy">
            <span className="eyebrow">
              <i /> SEU FUTURO COMEÇA AQUI
            </span>

            <h1>
              O próximo capítulo da sua história
              <em> começa com educação.</em>
            </h1>

            <p>
              Na Faculdade Horizonte, você encontra conhecimento,
              oportunidades e experiências para construir o futuro
              que deseja.
            </p>

            <div className="home-actions">
              <Link to="/cursos" className="botao botao-laranja">
                Conheça os cursos <span>→</span>
              </Link>

              <Link to="/sobre" className="link-seta">
                Conheça a faculdade <span>↗</span>
              </Link>
            </div>

            <div className="home-mini-info">
              <span>✦</span> Educação que transforma pessoas e realidades.
            </div>
          </div>

          <div className="home-visual">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1100&q=85"
              alt="Estudantes caminhando pelo campus de uma universidade"
            />

            <div className="visual-tag">
              <strong>Seu horizonte</strong>
              <span>de possibilidades</span>
            </div>

            <div className="visual-mark">
              H<span>.</span>
            </div>
          </div>

        </div>
      </section>

      <section className="home-intro section-wrap">
        <div>
          <span className="eyebrow">FACULDADE HORIZONTE</span>

          <h2>
            Mais do que uma graduação.
            <br />
            <em>Uma nova perspectiva.</em>
          </h2>
        </div>

        <p>
          Acreditamos que a educação é capaz de abrir portas
          e transformar trajetórias. Por isso, buscamos oferecer
          um ambiente acolhedor, atual e conectado com o mundo.
        </p>
      </section>

      <section className="diferenciais-section">
        <div className="section-wrap">

          <div className="section-heading">
            <div>
              <span className="eyebrow">NOSSO JEITO DE ENSINAR</span>

              <h2>
                Conhecimento que vai
                <em> mais longe.</em>
              </h2>
            </div>

            <p>
              Uma formação construída para acompanhar você
              em cada etapa da sua jornada.
            </p>
          </div>

          <div className="diferenciais-grid">
            {diferenciais.map(item => (
              <article className="diferencial-card" key={item.numero}>
                <span>{item.numero}</span>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="home-cursos section-wrap">

        <div className="section-heading">
          <div>
            <span className="eyebrow">CAMINHOS PARA O SEU FUTURO</span>

            <h2>
              Encontre sua <em>vocação.</em>
            </h2>
          </div>

          <Link to="/cursos" className="link-seta">
            Ver todos os cursos ↗
          </Link>
        </div>

        <div className="home-cursos-grid">
          {cursos.map((curso, i) => (
            <article className="home-curso-card" key={curso.nome}>
              <span className="curso-area">{curso.area}</span>

              <span className="curso-ordem">
                0{i + 1}
              </span>

              <h3>{curso.nome}</h3>

              <p>Duração: {curso.duracao}</p>

              <Link to="/cursos">
                Saiba mais <span>→</span>
              </Link>
            </article>
          ))}
        </div>

      </section>

      <section className="home-cta">
        <div className="section-wrap cta-content">

          <div>
            <span className="eyebrow">DÊ O PRIMEIRO PASSO</span>

            <h2>
              O futuro não espera.
              <br />
              <em>Venha construir o seu.</em>
            </h2>
          </div>

          <Link to="/ingresso" className="botao botao-escuro">
            Saiba como ingressar <span>→</span>
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Inicio

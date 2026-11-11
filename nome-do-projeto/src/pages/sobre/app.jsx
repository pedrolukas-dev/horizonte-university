
import { Link } from 'react-router-dom'
import instituicaoImg from '../../assets/instituicao.jfif'
import './app.css'

const valores = [
  ['Ética', 'Agimos com responsabilidade, respeito e transparência em todas as relações.'],
  ['Inovação', 'Valorizamos ideias, criatividade e novas formas de aprender e ensinar.'],
  ['Inclusão', 'Acreditamos em uma educação acessível, diversa e acolhedora.'],
  ['Excelência', 'Buscamos qualidade e melhoria contínua em nossas práticas.']
]

function Sobre() {
  return (
    <div className="sobre-page">

      <section className="sobre-hero">
        <div className="sobre-hero-inner">

          <div>
            <span className="eyebrow">QUEM SOMOS</span>

            <h1>
              Educação para transformar
              <em> horizontes.</em>
            </h1>

            <p>
              A Faculdade Horizonte nasceu com o propósito
              de aproximar pessoas do conhecimento e criar
              oportunidades para que cada estudante construa
              seu próprio caminho.
            </p>

            <Link to="/cursos" className="botao botao-laranja">
              Descubra nossos cursos <span>→</span>
            </Link>
          </div>

          <div className="sobre-image">
            <img
              src={instituicaoImg}
              alt="Prédio de uma instituição de ensino superior"
            />

            <span>
              Conhecimento que inspira novos caminhos.
            </span>
          </div>

        </div>
      </section>

      <section className="sobre-historia">

        <div className="sobre-numeral">
          H<span>.</span>
        </div>

        <div className="sobre-historia-texto">
          <span className="eyebrow">NOSSA HISTÓRIA</span>

          <h2>
            Um compromisso com o <em>amanhã.</em>
          </h2>

          <p>
            Acreditamos que uma instituição de ensino vai
            além das salas de aula. Ela conecta pessoas,
            incentiva descobertas e prepara profissionais
            para contribuir com a sociedade.
          </p>

          <p>
            Por isso, a Faculdade Horizonte tem como
            compromisso oferecer uma formação que una
            conhecimento acadêmico, desenvolvimento humano
            e visão de futuro. Nossa trajetória é construída
            diariamente com estudantes, professores e toda
            a comunidade acadêmica.
          </p>
        </div>

      </section>

      <section className="sobre-proposito">
        <div className="section-wrap">

          <span className="eyebrow">NOSSO PROPÓSITO</span>

          <div className="proposito-grid">

            <article>
              <span>01 / MISSÃO</span>
              <h3>Ensinar para transformar.</h3>
              <p>
                Promover educação de qualidade, formando
                pessoas éticas, críticas e preparadas para
                os desafios profissionais e sociais.
              </p>
            </article>

            <article>
              <span>02 / VISÃO</span>
              <h3>Inspirar o futuro.</h3>
              <p>
                Ser reconhecida como uma instituição
                comprometida com a aprendizagem, a inovação
                e o desenvolvimento da comunidade.
              </p>
            </article>

          </div>
        </div>
      </section>

      <section className="sobre-valores section-wrap">

        <div className="section-heading">
          <div>
            <span className="eyebrow">A BASE DE TUDO</span>

            <h2>
              Valores que orientam
              <em> nossas escolhas.</em>
            </h2>
          </div>

          <p>
            Princípios que fazem parte da nossa forma
            de ensinar, aprender e conviver.
          </p>
        </div>

        <div className="valores-grid">
          {valores.map((valor, i) => (
            <article key={valor[0]}>
              <span>0{i + 1}</span>
              <h3>{valor[0]}</h3>
              <p>{valor[1]}</p>
            </article>
          ))}
        </div>

      </section>

      <section className="sobre-final">
        <div className="section-wrap">

          <h2>
            Seu futuro tem lugar <em>aqui.</em>
          </h2>

          <p>
            Conheça nossas possibilidades e dê o próximo
            passo na sua formação.
          </p>

          <Link to="/cursos" className="botao botao-escuro">
            Ver cursos disponíveis <span>→</span>
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Sobre

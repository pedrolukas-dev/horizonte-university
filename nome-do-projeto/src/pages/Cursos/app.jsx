
import { Link } from 'react-router-dom';
import './app.css';

const cursos = [
    {
        area: 'TECNOLOGIA',
        nome: 'Análise e Desenvolvimento de Sistemas',
        duracao: '2 anos e meio',
        modalidade: 'Presencial',
        descricao: 'Formação voltada ao desenvolvimento de sistemas, aplicações web e soluções tecnológicas.'
    },
    {
        area: 'GESTÃO',
        nome: 'Administração',
        duracao: '4 anos',
        modalidade: 'Presencial',
        descricao: 'Estudo de gestão empresarial, liderança, planejamento e organização.'
    },
    {
        area: 'EDUCAÇÃO',
        nome: 'Pedagogia',
        duracao: '4 anos',
        modalidade: 'EAD',
        descricao: 'Formação de profissionais para atuar na educação e no ensino.'
    },
    {
        area: 'GESTÃO',
        nome: 'Ciências Contábeis',
        duracao: '4 anos',
        modalidade: 'EAD',
        descricao: 'Estudo de contabilidade, finanças, auditoria e gestão tributária.'
    },
    {
        area: 'SAÚDE',
        nome: 'Enfermagem',
        duracao: '5 anos',
        modalidade: 'Presencial',
        descricao: 'Formação de profissionais para atuar na assistência e nos cuidados com a saúde.'
    },
    {
        area: 'SAÚDE',
        nome: 'Educação Física',
        duracao: '4 anos',
        modalidade: 'Presencial',
        descricao: 'Estudo das atividades físicas, do movimento humano e da promoção da saúde.'
    }
];

function Cursos() {
    return (
        <div className="cursos-page">
            <section className="cursos-topo">
                <div className="cursos-topo-inner">
                    <span className="eyebrow">CAMINHOS PARA O SEU FUTURO</span>
                    <h1>
                        Conheça nossas
                        <em> graduações.</em>
                    </h1>
                    <p>
                        Explore as opções de cursos da Faculdade Horizonte e encontre
                        a formação que combina com seus interesses e objetivos.
                    </p>
                </div>
            </section>

            <section className="cursos-lista section-wrap">
                <div className="section-heading">
                    <div>
                        <span className="eyebrow">NOSSOS CURSOS</span>
                        <h2>
                            Seu próximo passo
                            <em> começa aqui.</em>
                        </h2>
                    </div>
                    <p>
                        Conhecimento, prática e novas possibilidades para construir
                        sua trajetória profissional.
                    </p>
                </div>

                <div className="cursos-grid">
                    {cursos.map((curso, index) => (
                        <article className="curso-card" key={curso.nome}>
                            <div className="curso-card-topo">
                                <span className="curso-area">{curso.area}</span>
                                <span className="curso-numero">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <h3>{curso.nome}</h3>
                            <p className="curso-descricao">{curso.descricao}</p>

                            <div className="curso-info">
                                <span>
                                    <strong>Duração</strong>
                                    {curso.duracao}
                                </span>
                                <span>
                                    <strong>Modalidade</strong>
                                    {curso.modalidade}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="cursos-cta">
                <div className="section-wrap cursos-cta-conteudo">
                    <div>
                        <span className="eyebrow">DÊ O PRIMEIRO PASSO</span>
                        <h2>
                            Pronto para começar
                            <em> sua jornada?</em>
                        </h2>
                        <p>Conheça as formas de ingresso e venha estudar com a gente.</p>
                    </div>
                    <Link to="/ingresso" className="botao botao-escuro">
                        Saiba como ingressar <span>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Cursos;

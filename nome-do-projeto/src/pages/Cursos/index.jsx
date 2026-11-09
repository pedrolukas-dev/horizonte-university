
import './cursos.css';

function Cursos() {
    const cursos = [
        {
            nome: 'Análise e Desenvolvimento de Sistemas',
            duracao: '2 anos e meio',
            modalidade: 'Presencial',
            descricao: 'Formação voltada ao desenvolvimento de sistemas, aplicações web e soluções tecnológicas.'
        },
        {
            nome: 'Administração',
            duracao: '4 anos',
            modalidade: 'Presencial',
            descricao: 'Estudo de gestão empresarial, liderança, planejamento e organização.'
        },
        {
            nome: 'Pedagogia',
            duracao: '4 anos',
            modalidade: 'EAD',
            descricao: 'Formação de profissionais para atuar na educação e no ensino.'
        },
        {
            nome: 'Ciências Contábeis',
            duracao: '4 anos',
            modalidade: 'EAD',
            descricao: 'Estudo de contabilidade, finanças, auditoria e gestão tributária.'
        },
        {
            nome: 'Enfermagem',
            duracao: '5 anos',
            modalidade: 'Presencial',
            descricao: 'Formação de profissionais para atuar na assistência e nos cuidados com a saúde.'
        },
        {
            nome: 'Educação Física',
            duracao: '4 anos',
            modalidade: 'Presencial',
            descricao: 'Estudo das atividades físicas, do movimento humano e da promoção da saúde.'
        }
    ];

    return (
        <section className="cursos">
            <div className="cursos-header">
                <span>NOSSOS CURSOS</span>
                <h1>Conheça nossas graduações</h1>
                <p>
                    Confira as opções de cursos disponíveis e escolha
                    a formação ideal para sua carreira profissional.
                </p>
            </div>

            <div className="cursos-grid">
                {cursos.map((curso, index) => (
                    <div className="curso-card" key={index}>
                        <span className="curso-numero">
                            Curso {index + 1}
                        </span>

                        <h2>{curso.nome}</h2>

                        <p>{curso.descricao}</p>

                        <div className="curso-info">
                            <span>Duração: {curso.duracao}</span>
                            <span>Modalidade: {curso.modalidade}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Cursos;


import { Link } from 'react-router-dom';
import './app.css';

function Ingresso() {
    return (
        <section className="ingresso">
            <div className="ingresso-banner">
                <span>FAÇA PARTE DA HORIZONTE</span>
                <h1>Seu futuro começa aqui</h1>
                <p>
                    Dê o próximo passo na sua trajetória acadêmica.
                    Conheça nossas formas de ingresso e comece a construir
                    seu futuro profissional.
                </p>
                <Link to="/cursos" className="ingresso-button">
                    Conheça nossos cursos
                </Link>
            </div>

            <div className="ingresso-content">
                <div className="ingresso-title">
                    <span>COMO INGRESSAR</span>
                    <h2>Escolha sua forma de ingresso</h2>
                    <p>
                        A Faculdade Horizonte oferece diferentes possibilidades
                        para você iniciar sua jornada no ensino superior.
                    </p>
                </div>

                <div className="formas-ingresso">
                    <div className="forma-card">
                        <h3>Vestibular</h3>
                        <p>
                            Participe do processo seletivo da instituição e
                            conquiste sua vaga por meio da avaliação.
                        </p>
                    </div>

                    <div className="forma-card">
                        <h3>Nota do ENEM</h3>
                        <p>
                            Utilize sua nota do Exame Nacional do Ensino Médio
                            como forma de ingresso, conforme os critérios da instituição.
                        </p>
                    </div>

                    <div className="forma-card">
                        <h3>Transferência</h3>
                        <p>
                            Já está cursando uma graduação? Solicite sua
                            transferência para a Faculdade Horizonte.
                        </p>
                    </div>

                    <div className="forma-card">
                        <h3>Segunda graduação</h3>
                        <p>
                            Já possui um diploma de ensino superior?
                            Conheça as possibilidades para iniciar outra graduação.
                        </p>
                    </div>
                </div>
            </div>

            <div className="etapas-ingresso">
                <div className="ingresso-title">
                    <span>PROCESSO DE INGRESSO</span>
                    <h2>Veja como começar</h2>
                </div>

                <div className="etapas-container">
                    <div className="etapa">
                        <span>01</span>
                        <h3>Escolha seu curso</h3>
                        <p>
                            Conheça as opções disponíveis e escolha a graduação
                            que combina com seus objetivos.
                        </p>
                    </div>

                    <div className="etapa">
                        <span>02</span>
                        <h3>Entre em contato</h3>
                        <p>
                            Converse com nossa equipe para conhecer os
                            procedimentos de inscrição.
                        </p>
                    </div>

                    <div className="etapa">
                        <span>03</span>
                        <h3>Realize sua inscrição</h3>
                        <p>
                            Siga as orientações do processo seletivo escolhido.
                        </p>
                    </div>

                    <div className="etapa">
                        <span>04</span>
                        <h3>Comece sua jornada</h3>
                        <p>
                            Após a aprovação e matrícula, prepare-se para
                            iniciar sua vida acadêmica.
                        </p>
                    </div>
                </div>
            </div>

            <div className="ingresso-cta">
                <h2>Está pronto para transformar seu futuro?</h2>
                <p>
                    Nossa equipe está disponível para ajudar você
                    durante o processo de ingresso.
                </p>
                <Link to="/contato" className="ingresso-button">
                    Fale conosco
                </Link>
            </div>
        </section>
    );
}

export default Ingresso;

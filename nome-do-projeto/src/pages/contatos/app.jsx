
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './app.css';

function Contatos() {
    const [enviado, setEnviado] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setEnviado(true);
        event.target.reset();
    }

    return (
        <section className="contato">
            <div className="contato-banner">
                <span>FALE CONOSCO</span>
                <h1>Entre em contato</h1>
                <p>
                    Estamos à disposição para esclarecer suas dúvidas
                    e fornecer mais informações sobre a Faculdade Horizonte.
                </p>
            </div>

            <div className="contato-container">
                <div className="contato-info">
                    <span>FALE COM NOSSA EQUIPE</span>
                    <h2>Informações de contato</h2>
                    <p>
                        Entre em contato com nossa equipe pelos canais
                        disponíveis. Será um prazer atender você.
                    </p>

                    <div className="info-item">
                        <h3>Endereço</h3>
                        <p>Salvador - Bahia, Brasil</p>
                    </div>

                    <div className="info-item">
                        <h3>Telefone</h3>
                        <p>(71) 3000-0000</p>
                    </div>

                    <div className="info-item">
                        <h3>E-mail</h3>
                        <p>contato@faculdadehorizonte.edu.br</p>
                    </div>

                    <div className="info-item">
                        <h3>Horário de atendimento</h3>
                        <p>Segunda a sexta, das 8h às 18h.</p>
                    </div>
                </div>

                <div className="contato-form">
                    <h2>Envie sua mensagem</h2>
                    <p>
                        Preencha os campos abaixo e nossa equipe
                        poderá entrar em contato.
                    </p>

                    {enviado && (
                        <p className="mensagem-sucesso">
                            Mensagem enviada com sucesso!
                        </p>
                    )}

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="nome">Nome completo</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Digite seu nome"
                            required
                        />

                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            required
                        />

                        <label htmlFor="assunto">Assunto</label>
                        <input
                            type="text"
                            id="assunto"
                            placeholder="Digite o assunto"
                            required
                        />

                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            placeholder="Digite sua mensagem"
                            rows="5"
                            required
                        />

                        <button type="submit">
                            Enviar mensagem
                        </button>
                    </form>
                </div>
            </div>

            <div className="contato-final">
                <h2>Estamos esperando por você!</h2>
                <p>
                    Conheça nossos cursos e descubra as oportunidades
                    que a Faculdade Horizonte oferece.
                </p>
                <Link to="/cursos" className="contato-button">
                    Conheça nossos cursos
                </Link>
            </div>
        </section>
    );
}

export default Contatos;

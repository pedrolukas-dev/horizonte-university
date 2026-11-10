import { useState } from 'react';
import './pages/contatos/index.css';

function Contato() {
    const [enviado, setEnviado] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        setEnviado(true);
        event.target.reset();
    }

    return (
        <section className="contato">
            <div className="contato-header">
                <span>FALE CONOSCO</span>
                <h1>Entre em contato</h1>
                <p>
                    Estamos à disposição para esclarecer suas dúvidas
                    e fornecer mais informações sobre a Faculdade Horizonte.
                </p>
            </div>

            <div className="contato-container">
                <div className="contato-info">
                    <h2>Informações de contato</h2>
                    <p>Entre em contato com nossa equipe pelos canais abaixo.</p>

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

                        <button type="submit">Enviar mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contato;
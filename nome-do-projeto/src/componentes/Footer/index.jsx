
import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <h2>Faculdade Horizonte</h2>
                    <p>Construindo conhecimento, transformando futuros.</p>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>
                    <p>E-mail: contato@faculdadehorizonte.edu.br</p>
                    <p>Telefone: (71) 3000-0000</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Faculdade Horizonte.
                    Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;


import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <a href="/" className="logo">
                    <span>Faculdade</span>
                    <h2>Horizonte</h2>
                </a>

                <nav className="nav">
                    <a href="/">Início</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/cursos">Cursos</a>
                    <a href="/ingresso">Ingresso</a>
                    <a href="/noticias">Notícias</a>
                    <a href="/contato">Contato</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './pages/inicio';
import Sobre from './pages/sobre';
import Cursos from './pages/cursos';
import Ingresso from './pages/ingressos';
import Noticias from './pages/noticias';
import Contatos from './pages/contatos';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/ingresso" element={<Ingresso />} />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/contato" element={<Contatos />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;

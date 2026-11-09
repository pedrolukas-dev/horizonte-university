
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cursos from './pages/Cursos';
import Ingresso from './pages/Ingresso';
import Noticias from './pages/Noticias';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/cursos" element={<Cursos />} />
                    <Route path="/ingresso" element={<Ingresso />} />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;

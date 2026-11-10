
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ingresso from './ingressos';
import Contatos from './contatos';
import Cursos from './cursos';
import Home from './home';

import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/ingresso" element={<Ingresso />} />
                <Route path="/contato" element={<Contatos />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

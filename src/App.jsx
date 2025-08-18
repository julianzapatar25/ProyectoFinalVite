import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import Contacto from './components/Contacto/Contacto';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header tittle="Bienvenidos a mi sitio web" show={true}/>
      
      {/* Menú de navegación simple */}
      <nav className="main-nav">
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;

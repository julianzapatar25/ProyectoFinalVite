import  Header  from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import Contacto from './components/Contacto/Contacto';
import './App.css';

function App() {

  return (
    <>
      <Header tittle="Bienvenidos a mi sitio web" show={true}/>
      <Section />
      <Footer />
      <Contacto />
      <p className="footer-text">© 2025 Mi Sitio Web. Todos los derechos reservados.</p>
      <p className="footer-text">Desarrollado por Julian Zapata - Julián Zapata</p>
       

    </>


  )
}

export default App

import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <Header tittle="Bienvenidos a mi sitio web">
        <h3>Esto es el header</h3>
      </Header>

      <section>
        <p>Esta es una pagina de ejemplo para mostrar el uso de React y JSX.</p>
      </section>
      <Footer />
    </>


  )
}

export default App

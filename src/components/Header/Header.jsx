import './Header.css';

export const Header = ({children, tittle, show}) => {
  return (
    <header className="header">
      <h1 className="tittle">{tittle || "Titulo por defecto"}</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      {children}

      {show &&
        <p>Este texto se va a mostrar solo si el prop show es true</p>}
    </header>
  );
};
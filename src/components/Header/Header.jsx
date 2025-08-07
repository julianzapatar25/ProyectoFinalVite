import './Header.css';
export const Header = ({children, tittle}) => {
  return (
    <header className="header">
      <h1 className="tittle">{tittle}</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      {children}
    </header>
  );
}
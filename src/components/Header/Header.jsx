import React from "react";
import "./Header.css";
import logo from "../../assets/Header.jpg";

const Header = () => {
  return (
    <header className="header-center">
      <img src={logo} alt="Logo" className="header-logo" />
      <h1 className="header-title">Click & Like</h1>
      <nav className="header-nav">
        <a href="#">Inicio</a>
        <a href="#">Servicios</a>
        <a href="#">Portafolio</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;

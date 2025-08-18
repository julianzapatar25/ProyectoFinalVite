import React from "react";
import "./Footer.css"; // Importamos el CSS
import logo from "../../assets/logo.png"; // Importamos el logo

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <ul className="footer-nav">
          <li className="footer-item">
            <a href="#" className="footer-link">Inicio</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">Nosotros</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">Servicios</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">FAQs</a>
          </li>
          <li className="footer-item">
            <a href="#" className="footer-link">Contáctenos</a>
          </li>
        </ul>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Company, Inc. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Footer;


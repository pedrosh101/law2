import { useState } from "react";
import { Link } from "react-router-dom";
import Map from "./Map";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            div
            className="logoContainer"
          >
            <div className="navbarLogo" onClick={closeMobileMenu}>
              <img src="./img/logo.jpg" alt="law"></img>
            </div>
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <div className={click ? "navMenu active" : "navMenu"}>
            <ul>
              <li>
                <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                  INÍCIO
                </Link>
              </li>
              <li>
                <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                  ESCRITÓRIO
                </Link>
              </li>
              <li>
                <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                  SOBRE NÓS
                </Link>
              </li>
              <li>
                <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                  CONTATO
                </Link>
              </li>
            </ul>
            <div className="mapNav">
              <Map />
            </div>
            <div className="contatoNav">
              <div className="endereco">
                <h1 className="endereco-heading">Endereço</h1>
                <p>Rua Durval Rocha, 192</p>
                <p>Vila Paraíba - Guaratinguetá-SP</p>
                <div className="social-media">
                  <div className="social-icons">
                    <Link
                      className="social-icon-link facebook"
                      to="/"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>

                    <a
                      href="https://www.instagram.com/beautyspavp/"
                      className="social-icon-link instagram"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram" />
                    </a>

                    <a
                      href="https://wa.me/5512981622637"
                      className="social-icon-link whatsapp"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Whatsapp"
                    >
                      <i className="fab fa-whatsapp" />
                    </a>

                    <a
                      href="mailto:pedro.sh101@gmail.com"
                      className="social-icon-link mail"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Mail"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

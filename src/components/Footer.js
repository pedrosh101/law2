import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer-container">
        <div className="footer-info">
          <div className="prof">
            <div className="footer-subscription">
              <h1 className="footer-heading">Alexandre Gabriel</h1>
              <p className="footer-text">Terapeuta - CRT: 43.332</p>
              <p className="footer-tel">
                <i className="fab fa-whatsapp" /> (12) 99797-9084 -{" "}
                <i className="fa fa-phone" /> (12) 3125-4889
              </p>
            </div>
            <div className="footer-subscription">
              <h1 className="footer-heading">Heloisa Laia</h1>
              <p className="footer-text">Massoterapeuta - Depiladora</p>
              <p className="footer-tel">
                <i className="fab fa-whatsapp" /> (12) 99715-8384 -{" "}
                <i className="fa fa-phone" /> (12) 3125-4889
              </p>
            </div>
            <div className="footer-subscription">
              <h1 className="footer-heading">Profissional 3</h1>
              <p className="footer-text">Terapeuta - CRT: 43.332</p>
              <p className="footer-tel">
                <i className="fab fa-whatsapp" /> (12) 99797-9084
              </p>
            </div>
          </div>
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

                
              </div>
            </div>
          </div>
        </div>
        <div className="last-line">
          <p>Template Advocacia</p>
          <p>All rights reserved © 2022</p>
          <a
            href="https://www.pedrohenriquelima.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <p>Designed by Pedro Henrique Lima</p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;

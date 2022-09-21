import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footerContainer">
        <div className="footerInfo">
          <div className="row">
            <h3>Quem Somos</h3>
            <div className="items">
              <p>Advocacia</p>
              <p>A Equipe</p>
              <p>Sócios</p>
            </div>
          </div>
          <div className="row">
            <h3>Áreas De Atuação</h3>
            <div className="items">
              <p>Direito Civil</p>
              <p>Direito Imobiliário</p>
              <p>Direito Tributário</p>
              <p>Direito Trabalhista</p>
              <p>Direito Criminal</p>
            </div>
          </div>
          <div className="row">
            <h3>Notícias</h3>
            <div className="items">
              <p>Blog</p>
              <p>Artigos</p>
            </div>
          </div>
          <div className="row">
            <h3>Endereço</h3>
            <div className="items">

            </div>
          </div>
        </div>
        <div className="lastLine">
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

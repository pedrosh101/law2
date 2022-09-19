import React from "react";
import Slide from "./Slide";
import Cards from "./Cards";
import Map from "./Map";
import "./Hero.css";

function Hero() {
  return (
    <>
      <Slide />
      <section className="hero">
        <div className="aboutContainer">
          <h1>Sobre a Template Advogados</h1>
          <div className="imgText">
            <img src="./img/office.jpg" alt="office"></img>
            <div className="textBtn">
            <p>
              Com sede e uma filial em São Paulo (SP), a banca Template Advocacia presta serviços de representação judicial,
              consultoria e assessoria, aliando recursos de tecnologia e
              logística nas suas rotinas de trabalho, propondo assistência,
              representação e orientação jurídica para a defesa dos direitos e
              interesses dos clientes, nos mais variados ramos do direito e dos
              negócios. As atividades da banca iniciaram em 2004. <br/> Sua
              infraestrutura a posiciona como uma das principais bancas de
              advocacia da região, oferecendo aos clientes um ambiente moderno e
              confortável. Dispõe dos mais modernos sistemas de gerenciamento e
              acompanhamento processual, material de estudo farto e atualizado,
              que somados ao seu capital humano proporciona atuação eficaz,
              ética e competente na defesa dos interesses de nossos clientes.
            </p>
            <button>Fale Conosco</button>
            </div>
          </div>
        </div>
        <div className="workContainer">
          <Cards />
        </div>
        <Map />
      </section>
    </>
  );
}

export default Hero;

import React from "react";
import { useRef, useEffect } from "react";
import Slide from "./Slide";
import Cards from "./Cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const imgRef = useRef();

  useEffect(() => {
    const q = gsap.utils.selector(imgRef);
    q(".imgMove").forEach((imgframe) => {
      gsap.fromTo(
        imgframe,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 3,
          scrollTrigger: { trigger: imgframe, start: "top 85%" },
        }
      );
    });
  }, []);

  useEffect(() => {
    const q = gsap.utils.selector(imgRef);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      q(".textBtn").forEach((txt) => {
        gsap.to(txt, {
          scrollTrigger: {
            trigger: txt,
            scrub: 0.8,
            start: "top 40%",
            end: "+=400",
            pin: true,
            pinSpacing: false,
          },
        });
      });
    });
  }, []);

  return (
    <>
      <Slide />
      <section className="hero" ref={imgRef}>
        <div className="aboutContainer">
          <h1>Sobre a Template Advogados</h1>
          <div className="imgText">
            <img src="./img/office.jpg" alt="office" className="imgMove"></img>
            <div className="textBtn">
              <p>
                Com sede e uma filial em Guaratinguetá (SP), a banca Template
                Advocacia presta serviços de representação judicial, consultoria
                e assessoria, aliando recursos de tecnologia e logística nas
                suas rotinas de trabalho, propondo assistência, representação e
                orientação jurídica para a defesa dos direitos e interesses dos
                clientes, nos mais variados ramos do direito e dos negócios.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutContainer">
          <div className="imgText2">
            <div className="textBtn">
              <p>
                Sua infraestrutura a posiciona como uma das principais bancas de
                advocacia da região, oferecendo aos clientes um ambiente moderno
                e confortável. Dispõe dos mais modernos sistemas de
                gerenciamento e acompanhamento processual, material de estudo
                farto e atualizado, que somados ao seu capital humano
                proporciona atuação eficaz, ética e competente na defesa dos
                interesses de nossos clientes.
              </p>
              <button>Fale Conosco</button>
            </div>
            <img
              src="./img/office2.jpg"
              alt="office2"
              className="imgMove"
            ></img>
          </div>
        </div>
        <div className="bannerContainer">
          <div className="bannerText">
            <h1>Servindo Guaratinguetá e região desde 2004</h1>
            <p>
              In iaculis massa vel ligula semper accumsan. Morbi maximus
              suscipit sodales. In non efficitur neque. Aenean et bibendum
              lectus. Nam est felis, auctor ut augue eu, semper commodo quam.
              Cras ex ligula, dapibus eu nunc sed, dignissim bibendum enim. Cras
              viverra neque dolor. Cras quis sapien sed metus rhoncus auctor et
              et nisi.
            </p>
          </div>
        </div>
        <div className="workContainer">
          <Cards />
        </div>
      </section>
    </>
  );
}

export default Hero;

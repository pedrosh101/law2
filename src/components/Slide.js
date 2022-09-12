import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { A11y, Autoplay } from "swiper";
import "swiper/css";
import "./Slide.css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

SwiperCore.use([A11y, Autoplay]);

const pics = [
  {
    id: 1,
    username: "Nossa Política",
    testimonial: "O escritório Template Advogados, destaca-se por prestar serviços jurídicos personalizados, com uma advocacia inovadora, dinâmica, eficaz e ágil, voltada para resultados.",
    img: "../img/adv1.jpg",
  },
  {
    id: 2,
    username: "Abordagem Moderna",
    testimonial: "Além dos setores tradicionais, o Template Advogados acompanha as novas tendências sociais e econômicas, bem como seus reflexos no direito.",
    img: "../img/adv2.jpg",
  },
  {
    id: 3,
    username: "Direito Trabalhista",
    testimonial: "Contamos com advogados especialistas em direito do trabalho e processo do trabalho. Trabalhamos tanto na defesa dos direitos dos empregados, quanto na defesa dos empregadores (empresas).",
    img: "../img/adv3.jpg",
  },
];

function Slides() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        className="swiper"
      >
        {pics.map((user) => (
          <SwiperSlide key={user.id} className="slide">
            <div className="slideContent">
              <div className="userImg">
                <img src={user.img} alt={user.username} className="userPhoto" />
              </div>
              <div className="text">
                <h5 className="userName">{user.username}</h5>
                <div className="line"></div>
                <h5 className="userText">{user.testimonial}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slides;

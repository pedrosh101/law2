import React from "react";
import "./Cards.css";

function Cards() {
  const card = [
    {
      id: 1,
      title: "DIREITO EMPRESARIAL, ECONÔMICO E SUCESSÃO EMPRESARIAL",
      testimonial:
        "A sucessão empresarial é um procedimento de passagem de poder e capital de uma empresa para outra empresa que, continuará executando as atividades da empresa anterior mesmo que com outra razão social.",
    },
    {
      id: 2,
      title: "DIREITO IMOBILIÁRIO",
      testimonial:
        "O direito imobiliário é um ramo do direito privado que lida, como o nome já aponta, que estuda e lida com as relações jurídicas e de direito que envolvam a posse, compra, venda, doação, sucessão, troca e propriedade de bens imóveis, inclusive a incorporação imobiliária.",
    },
    {
      id: 3,
      title: "DIREITO CIVIL",
      testimonial:
        "O Direito Civil, dentro do ordenamento jurídico brasileiro, é o ramo do direito que lida com as relações jurídicas, como os direitos e as obrigações, de pessoas físicas e jurídicas dentro da esfera civil.",
    },
    {
      id: 4,
      title: "DIREITO TRIBUTÁRIO",
      testimonial:
        "Direito Tributário é a área do direito responsável por determinar e fiscalizar a arrecadação de tributos, como taxas e impostos. Também chamado de Direito Fiscal, o segmento tem, como principal papel, o combate de possíveis abusos por parte do Fisco e o controle de pagamento dos contribuintes.",
    },
    {
      id: 5,
      title: "DIREITO TRABALHISTA",
      testimonial:
        "Ramo do direito privado que é responsável por regular a relação jurídica entre trabalhadores e empregadores, baseado nos princípios e leis trabalhistas. O direito do trabalho é um dos ramos do direito privado mais importantes para a sociedade.",
    },
    {
      id: 6,
      title: "DIREITO DE FAMÍLIAS E SUCESSÕES",
      testimonial:
        "As varas da Família e Sucessões são responsáveis por processar e julgar litígios relacionados a temas como inventários, testamentos, separação judicial, divórcio, anulação de casamento, investigação de paternidade, ação de alimentos, entre outros.",
    },
  ];

  return (
    <>
      <section>
        <div className="cardsContainer">
          <div className="cardsTitle">
            <h1>Áreas de Atuação</h1>
            <h5>Como podemos ajudar?</h5>
          </div>
          <div className="allCards">
            {card.map((info) => (
              <div className="card">
                <div className="cardTitle">{info.title}</div>
                <div className="cardTxt">{info.testimonial}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;

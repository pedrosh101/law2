import React from "react";
import "./Cards.css";

function Cards() {
  const card = [
    {
      id: 1,
      title: "DIREITO EMPRESARIAL, ECONÔMICO E SUCESSÃO EMPRESARIAL",
      testimonial: "Advogado - OAB/PS 19.590",
    },
    {
      id: 2,
      title: "DIREITO IMOBILIÁRIO",
      testimonial: "O Direito Imobiliário consegue assegurar o direito de posse e propriedade. Tanto na esfera extrajudicial, quanto no contencioso, nosso escritório está preparado para garantir o assessoramento, ajuizamento e defesa de demandas relacionadas à locação, compra e venda de imóveis, usucapião, relações condominiais, incorporação imobiliária, direitos de vizinhança e regularização urbana e fundiária.",
    },
    {
      id: 3,
      title: "DIREITO CIVIL",
      testimonial: "Advogado - OAB/PS 19.000",
    },
    {
      id: 4,
      title: "DIREITO TRIBUTÁRIO",
      testimonial:
        "Direito Tributário é a área do direito responsável por determinar e fiscalizar a arrecadação de tributos, como taxas e impostos. Também chamado de Direito Fiscal, o segmento tem, como principal papel, o combate de possíveis abusos por parte do Fisco e o controle de pagamento dos contribuintes.",
    },
    {
      id: 5,
      title: "DIREITO TRABALHISTA E PREVIDENCIÁRIO",
      testimonial: "Advogado - OAB/PS 19.590",
    },
    {
      id: 6,
      title: "DIREITO DE FAMÍLIAS E SUCESSÕES",
      testimonial: "No âmbito familiar, por vezes, é necessário compreender as questões pessoais de cada cliente, pois estamos lidando justamente com as relações mais próximas das pessoas. Com essa filosofia, atuamos no assessoramento judicial e extrajudicial de questões relativas ao Direito das Famílias, incluindo ainda o assessoramento para questões relativas à sucessão familiar.",
    },
    {
      id: 7,
      title: "DIREITO BANCÁRIO E FINANCEIRO",
      testimonial: "Advogado - OAB/PS 19.000",
    },
    {
      id: 8,
      title: "DIREITO DO CONSUMIDOR",
      testimonial: "Advogado - OAB/PS 25.190",
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
                <div>{info.title}</div>
                {info.testimonial}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;

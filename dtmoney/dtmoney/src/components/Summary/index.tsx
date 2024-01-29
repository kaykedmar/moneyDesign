import React, { useContext } from "react";

import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";
import total from "../../assets/Total.svg";

//Ponto e barra, Pegar do estilo da propria pasta;
import { Container } from "./styles";

import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const transactions = useContext(TransactionsContext);

  console.log(transactions)
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$17.400,00 </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />
        </header>
        <strong>-R$1.259,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$16.141,00 </strong>
      </div>
    </Container>
  );
}

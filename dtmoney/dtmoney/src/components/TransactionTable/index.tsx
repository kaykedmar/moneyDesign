import React, { useContext } from "react"; // Adicione a importação do useState
import { Container } from "./styles";
// Importe o tipo Transaction do arquivo onde ele está definido
import { TransactionsContext } from "../../TransactionsContext";

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);

 
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {/* Transformando a moeda em Real */}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                {/* Transformando a data em Data BR*/}
                <td>
                  {" "}
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                ,
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}

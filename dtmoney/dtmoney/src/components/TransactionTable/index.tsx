import React, { useEffect, useState } from "react"; // Adicione a importação do useState
import { Container } from "./styles";
import { api } from "../../services/api";

interface Transaction {
  id: number;
  title: string;
  category: string;
  createdAt: string; 
  amount: number;
  type: string;
}

export function TransactionsTable() {
  // Mostrando em tela;
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => {
      // Consertando o bug
      setTransactions(response.data.transactions);
    });
    // []  buscar API apenas uma vez
  }, []);

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
          {transactions.map((transaction: Transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}


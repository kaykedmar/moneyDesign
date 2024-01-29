import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "./services/api";


interface Transaction {
  id: number;
  title: string;
  category: string;
  createdAt: string;
  amount: number;
  type: string;
}

interface TransactionsProviderProps { 
  children: ReactNode; 
}


export const TransactionsContext = createContext<Transaction[]>([]); 

export function TransactionProvider({children}: TransactionsProviderProps)  { 
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
      <TransactionsContext.Provider value={transactions}>
        {children}
      </TransactionsContext.Provider>
    );
}
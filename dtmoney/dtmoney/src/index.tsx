import React from "react";
import ReactDOM from "react-dom/client";

// Mirage Server
import { Model, createServer } from "miragejs";

import { App } from "./App";
import { request } from "http";


// Criando o servidor MirageJS para simular uma API
createServer({

  models: {
    transaction: Model,
  },

  seeds(server) { 
    server.db.loadData({ 
      transactions: [
        {
          id: 1,
          title: "Entrada",
          type: 'deposit', 
          category: "Financeiro",
          amount: 6000,  
          createdAt: new Date('2023-12-12 09:00:00'),
        },
        {
          id: 2,
          title: "Aluguel",
          type: 'withdraw', 
          category: "Financeiro",
          amount: 1100,  
          createdAt: new Date('2023-13-12 09:00:00'),
        },
      ],
    })
  },



  routes() {
    // Definindo um namespace para todas as rotas simuladas
    this.namespace = "api";

    // Configurando uma rota para lidar com solicitações GET para '/transactions'
    this.get("/transactions", () => {
      
      // Retornando dados simulados como se fossem provenientes do servidor
      return  this.schema.all('transaction');
   
    });


    // Configurando uma rota para lidar com solicitações POST para '/transactions'
    // Rota que cria uma nova transaction;
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
});

// Criando a div root
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

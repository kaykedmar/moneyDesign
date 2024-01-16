import React from "react";
import ReactDOM from "react-dom/client";

// Mirage Server
import { createServer } from "miragejs";

import { App } from "./App";


// Criando o servidor MirageJS para simular uma API
createServer({
  routes() {
    // Definindo um namespace para todas as rotas simuladas
    this.namespace = "api";

    // Configurando uma rota para lidar com solicitações GET para '/transactions'
    this.get("/transactions", () => {
      
      // Retornando dados simulados como se fossem provenientes do servidor
      return [
        {
          id: 1,
          title: "Desenvolvimento de website",
          value: 12000,
          category: "Desenvolvimento",
          date: "20/02/2021",
        },
      ];
    });
  },
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

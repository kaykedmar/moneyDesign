// Importando dependências do React e estilos globais
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";

// Importando a biblioteca react-modal
import Modal from "react-modal";

// Configurando o elemento do aplicativo para acessibilidade
Modal.setAppElement("#root");

// Definindo o componente principal da aplicação
export function App() {

  // Estado para controlar a abertura e fechamento do modal iniciando como false / Fechado 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para abrir o modal
  function handleModalOpen() {
    setIsModalOpen(true);
  }

  // Função para fechar o modal
  function handleModalClose() {
    setIsModalOpen(false);
  }

  return (
    
   // Este é um Fragment do React. É usado para agrupar elementos sem adicionar um nó extra ao DOM 
    <>
      {/* onOpenModal chegou aqui vazia, e recebeu handleModalOpen como valor */}
      <Header onOpenModal={handleModalOpen} />
      
      {/* Componente Dashboard */}
      <Dashboard />

      {/* Componente Modal para exibir informações adicionais */}
      <NewTransactionModal
      // isOpen e um estado para abrir o modal
        isOpen={isModalOpen}

        // onRequestClose e um tipo de estado para fechar o modal  
        onRequestClose={handleModalClose}
      />


      {/* Estilos globais da aplicação */}
      <GlobalStyle />
    </>
  );
}

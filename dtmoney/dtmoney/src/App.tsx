// Importando dependências do React e estilos globais
import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

// Importando a biblioteca react-modal
import Modal from "react-modal";

// Configurando o elemento do aplicativo para acessibilidade
Modal.setAppElement("#root");

// Definindo o componente principal da aplicação
export function App() {
  // Estado para controlar a abertura e fechamento do modal
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
    <>
      {/* onOpenModal chegou aqui vazia, e recebeu handleModalOpen como valor */}
      <Header onOpenModal={handleModalOpen} />
      
      {/* Componente Dashboard */}
      <Dashboard />

      {/* Componente Modal para exibir informações adicionais */}
      <Modal
        isOpen={isModalOpen}          // Estado que controla a abertura e fechamento do modal
        onRequestClose={handleModalClose}  // Função para fechar o modal
      >
        <h2>Modal aberto</h2>
      </Modal>

      {/* Estilos globais da aplicação */}
      <GlobalStyle />
    </>
  );
}

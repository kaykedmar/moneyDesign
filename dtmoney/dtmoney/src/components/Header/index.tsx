// Importando imagem da logo
import logoimg from "../../assets/Logo.svg";

// Importando dependências do React e estilos
import { useState } from "react";
import { Container, Content } from "./styles";

// Importando a biblioteca react-modal
import Modal from "react-modal";

// Definindo propriedades esperadas pelo componente Header
interface HeaderProps {
  onOpenModal: () => void  // Função para abrir o modal passada como propriedade
}


//Levando a função onOpenModal vazia para ser passada pro header do app.tsx e ser atribuida um valor ; 
export function Header({ onOpenModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        {/* Logo da aplicação */}
        <img src={logoimg} alt="dt money" />

        {/* Botão para abrir o modal, usando a função passada como propriedade */}
        <button type="button" onClick={onOpenModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
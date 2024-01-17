import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    // Esse Container ja esta com "form" no styles dessa mesma pasta.
    <Container>
      <Modal
        isOpen={isOpen} // isOpen Estado que controla a abertura e fechamento do modal
        onRequestClose={onRequestClose} // onRequestClose Fechamento do modal/  Função para fechar o modal
        //estilazação do modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <h2>Cadastrar transaçoes</h2>

        <input 
        placeholder="Titulo" />

        <input 
        type="number"
         placeholder="Valor" />

        <input 
        placeholder="Categoria" />

        <button 
        type="submit">
          Cadastrar
          </button>
      </Modal>
    </Container>
  );
}

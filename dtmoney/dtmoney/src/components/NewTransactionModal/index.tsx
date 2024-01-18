import Modal from "react-modal";
import { useState } from "react";

// Estilos da paginas 
import { Container, Radiobox, TransactionTypeContainer } from "./styles";

import incomeImg from "../../assets/Entradas.svg";
import outcomeImg from "../../assets/Saídas.svg";

import closeImg from "../../assets/x.svg"


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose,}: NewTransactionModalProps) {

  // Armazenando uma informaçao atraves de um click ou input do usuario; 
  const [type, setType] = useState("deposit");
  


  return (
      <Modal

        isOpen={isOpen}
         // isOpen Estado que controla a abertura e fechamento do modal
        onRequestClose={onRequestClose} 
        // onRequestClose Fechamento do modal/  Função para fechar o modal

        //estilazação do modal
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >

        {/* Fechar modal quando clicar no X  */}
        <button
        type="button" 
        onClick={onRequestClose} //onRequestClose e o elemento que fecha o modal do react 
        className="react-modal-close"
        >

        <img src={closeImg} alt="Fechar modal" />
        </button>



         {/* Esse Container ja esta com "form" no styles dessa mesma pasta. */}
        <Container>
            
        <h2>Cadastrar transaçoes</h2>

        <input placeholder="Titulo" />

        <input 
        type="number" 
        placeholder="Valor" 
        />

        {/* Transaction e a parte do container com Grid */}
        <TransactionTypeContainer>

        {/* Radiobox e as modificaçoes dos botões */}
        <Radiobox
        type="button"
        onClick={() => {setType('deposit')}}

        // Diz se ta ativo ou nao; 
        isActive={type === 'deposit'}

        activeColor="green"  // Passando a propriedade activeColor aqui

        >
        
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
        </Radiobox>

        <Radiobox 
        type="button"
        onClick={() => {setType('withdraw')}}

        // Diz se ta ativo ou nao; 
        isActive={type === 'withdraw'}

        activeColor="red"
        >
        <img src={outcomeImg} alt="Saida" />
        <span>Saida</span>
        </Radiobox>
        
        </TransactionTypeContainer>


        <input 
        placeholder="Categoria" 
        />

        <button type="submit">Cadastrar</button>
        </Container>

      </Modal>
   
  );
}

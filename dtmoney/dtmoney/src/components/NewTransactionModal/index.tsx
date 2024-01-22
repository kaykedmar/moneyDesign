import Modal from "react-modal";

import { FormEvent, useState } from "react";
import { api } from "../../services/api";
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
  
  // Começa com String vazia
  const [title, setTitle] = useState('')

  // Começa com Number
  const [value, setValue] = useState(0)

  // Começa com String vazia
  const [caregory, setCaregory] = useState('')


  // Impedindo o envio do formulario;
  function handleCreateNewTransaction(event: FormEvent ) { 
    event.preventDefault();

    const data = 
      {
        title,
        value,
        type,
        caregory,
      }
    
      // Data sao todos os dados da variavel data, 
      api.post('/transactions', data)
  }  

  return (
      <Modal

      // isOpen Estado que controla a abertura e fechamento do modal
        isOpen={isOpen}

        // onRequestClose Fechamento do modal/  Função para fechar o modal
        onRequestClose={onRequestClose} 

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
         {/* Apos um envio do form, vai rodar essa função */}
        <Container onSubmit={handleCreateNewTransaction}>
            
        <h2>Cadastrar transaçoes</h2>

        <input placeholder="Titulo" 
        value={title}

        // Função que executa toda vez que o valor do input for alterado
        onChange={event => setTitle(event.target.value)}
        />

        <input 
        type="number" 
        placeholder="Valor" 
        value={value}

        //  transformando o valor do input em numero,
        onChange={event => setValue(Number(event.target.value))}
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
        value={caregory}

        // Função que executa toda vez que o valor do input for alterado
        onChange={event => setCaregory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
        </Container>

      </Modal>
   
  );
}

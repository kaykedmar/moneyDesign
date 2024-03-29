import styled from "styled-components";

// Biblioteca de cores,
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;

    /* & referencia ao elemento que ele esta dentro, no caso o input   */
    &::placeholder {
      color: var(--text-body);
    }

    /* Input que tiver um input antes dele, vai receber essas mudanças */
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      /* Diminuir a cor do botao */
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;

  /* 2 colunas do mesmo tamanho */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 0.5rem;
`;

// Passando o elemento pro Radiobox
interface RadioboxProps {
  isActive: boolean;

  /* Passando o elemento pro label */
  activeColor: "red" | "green";
}

// Cores dos botoes quando estao ativos;
const colors = {
  green: "#33cc95",
  red: "#e52e40",
};

export const Radiobox = styled.button<RadioboxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  /* ? Verifica se e True, transparentize, deixa a cor aplicada transparente */
  // Ajuste necessário para garantir que "props.activeColor" seja uma chave válida de "colors".
  background: ${(props) =>
    props.isActive ? transparentize(0.9, colors[props.activeColor as keyof typeof colors]) : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #aaa;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;

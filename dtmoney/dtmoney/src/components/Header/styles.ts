// Estilazacão do header
import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;
  
// Segunda div do header
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;

  //Espaço entre a logo e o botao; 
  justify-content: space-between;


  button { 
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    
    transition: filter 0.2s;

    //& e como se fosse o button
    &:hover { 
      filter: brightness(0.9);
    }

  }


`;

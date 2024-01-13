//Estilos Globais para toda a aplicação;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f2f8f5;
    --red: #e52e40;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  //font-size: 16px (desktop)

  html { 
    //Ate 1080px
    @media (max-width: 1080px) {
      font-size: 93.75%; /* 15px; */
    }

    //Ate 720px
    @media (max-width: 720px)  { 
      font-size: 87.5%; /* 14px; */
    }
  }

  body { 
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button { 
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  //Tags de negritos
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  

  button { 
    cursor: pointer;
  } 

  //Tudo que tiver desabilitado
  [disabled] { 
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Importando o styled
import styled from "styled-components";

// Estilização
const Title = styled.h1`
  color: red;
  font-size: 40px;
`;

export function App() {
  return (
    <div className="App">
      <Title>Hello world</Title>
    </div>
  );
}

//Importando a Logo
import logoimg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
   
        <img src={logoimg} alt="dt money" />
        <button type="button">Nova transacão</button>
      </Content>
    </Container>
  );
}

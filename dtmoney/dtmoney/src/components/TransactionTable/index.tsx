import { Container } from "./styles";

export function TransactionsTable() { 
  return (
    <Container> 
      <table> 
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">-R$59,00</td>
            <td>Alimentação</td>
            <td>10/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">-R$1.200,00</td>
            <td>Casa</td>
            <td>27/03/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="deposit">R$5.400,00</td>
            <td>Venda</td>
            <td>15/03/2021</td>
          </tr>
        </tbody>

      </table>
    </Container>
  )
}
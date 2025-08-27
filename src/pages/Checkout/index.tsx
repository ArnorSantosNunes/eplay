import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row } from './styles'

const Checkout = () => (
  <div className="container">
    <Card title="Dados de cobrança">
      <>
        <Row>
          <InputGroup>
            <label htmlFor="fullName">Nome Completo</label>
            <input id="fullName" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="text" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" />
          </InputGroup>
        </Row>
        <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input type="email" id="deliveryEmail" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmdeliveryEmail">Confirme o e-mail</label>
            <input type="email" id="confirmdeliveryEmail" />
          </InputGroup>
        </Row>
      </>
    </Card>
    <Card title="pagamento">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          nihil ea ullam omnis unde autem temporibus ipsam iure incidunt a
          molestias soluta, illo ad iusto corrupti! Enim atque nisi molestiae!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nisi
          minus sit, ipsum voluptatem asperiores distinctio ad tenetur impedit
          possimus dolores animi dolorem fugiat quaerat eos vero architecto
          veniam doloribus.
        </p>
      </div>
    </Card>
    <Button type="button" title="Clique aqui para finalizar a compra">
      Finalizar compra
    </Button>
  </div>
)

export default Checkout

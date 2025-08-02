import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nisi
      numquam nesciunt eveniet fugit quae quidem perferendis ratione modi.
      Aspernatur voluptatum accusantium doloribus debitis ab sint assumenda
      voluptatibus aliquid quam?
    </Descricao>
  </Card>
)

export default Product

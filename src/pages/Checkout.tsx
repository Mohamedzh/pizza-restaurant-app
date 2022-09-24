import { Row, Col, Container } from 'react-bootstrap'
import Cart from '../components/cart'
import { subTotal } from '../components/functions'
import CheckOutForm from '../components/checkoutForm'
import { useAppSelector } from '../App/hooks'

const Checkout = () => {
  const cart = useAppSelector((state) => state.cart)

  return (
    <div>
      <Row>
        <CheckOutForm />
        <Col className="d-inline-flex">
          <div className="vr mt-5">
          </div>
          <Container>
            <Cart />
            <h4 className="text-center mt-2 border-top pt-2">
              Subtotal = <strong>{subTotal(cart)}</strong>
            </h4>
          </Container>
        </Col>
      </Row>

    </div>
  )
}

export default Checkout
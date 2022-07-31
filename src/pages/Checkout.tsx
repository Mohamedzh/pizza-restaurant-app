import React from 'react'
import { Form, Row, Col, Button, Image, Badge, Card, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import pizzaCard from '../Assets/pizzaCard.png'
import { removeFromCart, setCart } from '../Actions/cart.actions'



const Checkout = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cartReducer)
  const menu = useSelector((state: any) => state.menuReducer)
  const navigate = useNavigate()

  // const removeFromCart = (id) => {
  //   let selectedItem = cart.find(item => item.id === id)
  //       dispatch(removeFromCart(selectedItem))
  // }

  return (
    <div>
      <Row>
        <Col className="m-5">
          <div>
            <Form>
              <Form.Group as={Row} className="mb-3 checkoutForm" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 checkoutForm" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Mobile
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 checkoutForm" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  Address
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3 checkoutForm" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  City
                </Form.Label>
                <Col sm="10">
                  <Form.Control plaintext />
                </Col>
              </Form.Group>
            </Form>
          </div>
          <Link to="/success"><Button className="me-5" variant="danger">Order Now</Button></Link>
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>Cancel</Button>
        </Col>
        <Col className="d-inline-flex">
          <div className="vr mt-5">
          </div>
          <div>
            {React.Children.toArray(cart.map(item =>
              <Container fluid className="d-inline-flex align-items-center justify-content-center">
                <Row xs={1} md={2} className="g-4">
                  {/* {Array.from({ length: 2 }).map((_, idx) => ( */}
                  <Col>
                    <Card className="m-3 flex-0" style={{ width: '21rem' }}>
                      <Card.Body className="d-flex justify-content-evenly">
                        <Row>
                          <Col>
                            <p><Image className="menu" src={pizzaCard}></Image></p>
                          </Col>
                          <Col>
                            <p>
                              <span>{item.itemName}</span>
                              <br></br>
                              <span>{item.ingredients}</span>
                              <br></br>
                              <span>{item.price} LE</span>
                              <br></br>
                              <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                <Badge bg="secondary">{item.orderQty}</Badge>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                </svg></span></p>
                            <Button variant="warning" onClick={
                              () => {
                                dispatch(removeFromCart(item));
                                dispatch(setCart(cart.filter(carts => carts.id !== item.id)));
                                console.log(cart);
                              }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                              </svg>
                            </Button>
                          </Col>

                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  {/* ))} */}
                </Row>
              </Container>
            ))}
          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Checkout
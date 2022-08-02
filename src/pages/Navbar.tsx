import { Navbar, Container, Nav, NavDropdown, Image, Button, Modal, Card, Badge, Form, Offcanvas, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cartPic from '../Assets/cart.png'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { Scroll } from '../components/Functions'
import pizzaCard from '../Assets/pizzaCard.png'
import fork from '../Assets/fork.png'
import { BiFoodMenu } from 'react-icons/bi'
import { BsTrashFill } from 'react-icons/bs'
import { subTotal } from '../components/Functions'
import { addToCart, setCart, removeFromCart, decrementCart } from '../Actions/cart.actions'


const Navibar = (): JSX.Element => {
    let location = useLocation();
    const dispatch = useDispatch()
    const menu = useSelector((state: any) => state.menuReducer);
    const cart = useSelector((state: any) => state.cartReducer);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addCart = (id) => {
        let selectedItem = menu.find(item => item.id === id)
        dispatch(addToCart(selectedItem))
    }

    const subCart = (id) => {
        let selectedItem = menu.find(item => item.id === id)
        dispatch(decrementCart(selectedItem))
    }

    const RemoveItem = (item) => {
        dispatch(removeFromCart(item));
        dispatch(setCart(cart.filter(carts => carts.id !== item.id)));
    }

    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/"><Navbar.Brand className="fw-bold fs-3" >Luisi's Pizza  <Image src={fork}></Image></Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    {location.pathname !== "/kitchen/pending" && location.pathname !== "/kitchen/completed" &&
                        <Nav>
                            <Nav.Link onClick={Scroll}><BiFoodMenu /> Menu</Nav.Link>
                            <Nav.Link onClick={Scroll}>
                                Most Popular
                            </Nav.Link>
                            <Nav.Link onClick={handleShow}><Image id="cart" src={cartPic}></Image><Badge bg="warning">{cart.length}</Badge></Nav.Link>
                            <Offcanvas show={show} onHide={handleClose} placement='end' >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className="text-center">Order Summary</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div>
                                        {React.Children.toArray(cart.map(food =>
                                            <Container fluid className="d-inline-flex align-items-center justify-content-center">
                                                <Card className="flex-0 border-0" style={{ width: '21rem' }}>
                                                    <Card.Body className="d-flex justify-content-evenly"><p><Image className="cartPic" src={food.imageUrl}></Image></p><p>
                                                        <h6>{food.name}</h6>
                                                        <span className="mx-2">LE {food.price}</span>
                                                        <span>
                                                            <Button size="sm" variant="light" onClick={() => addCart(food.id)}>+</Button>
                                                            <Badge className="mx-2" bg="secondary">{food.orderQty}</Badge>
                                                            <Button size="sm" variant="light" onClick={() => subCart(food.id)}>-</Button>
                                                        </span>
                                                        <div>
                                                            <span className="mx-2">Subtotal LE {food.price * food.orderQty}
                                                                <Button size="sm" variant="warning" className="ms-2" onClick={() => RemoveItem(food)}><BsTrashFill />
                                                                </Button>
                                                            </span></div>
                                                    </p></Card.Body>
                                                </Card>
                                            </Container>
                                        ))}
                                    </div>
                                </Offcanvas.Body>
                                <Row className="d-flex justify-content-center align-content-center p-2">
                                    <hr></hr>
                                    <Col>
                                        <h5 className="text-center mt-2">Subtotal = {subTotal(cart)}</h5>
                                    </Col>
                                    <Col>
                                        <Link className="me-auto" to="/checkout"><Button size="lg" variant="warning" onClick={handleClose}>
                                            Checkout
                                        </Button></Link>
                                    </Col>
                                </Row>
                            </Offcanvas>
                        </Nav>
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navibar
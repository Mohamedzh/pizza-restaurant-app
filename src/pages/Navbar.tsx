import { Navbar, Container, Nav, NavDropdown, Image, Button, Modal, Card, Badge, Form, Offcanvas, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import cartPic from '../Assets/cart.png'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { Scroll } from '../components/Functions'
import pizzaCard from '../Assets/pizzaCard.png'
import fork from '../Assets/fork.png'
import { BiFoodMenu } from 'react-icons/bi'
import { subTotal } from '../components/Functions'
import Cart from '../components/Cart'


const Navibar = (): JSX.Element => {
    let location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const menu = useSelector((state: any) => state.menuReducer);
    const cart = useSelector((state: any) => state.cartReducer);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Navbar sticky="top" id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
                                    <Cart/>
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
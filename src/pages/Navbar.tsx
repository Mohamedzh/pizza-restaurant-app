import { Navbar, Container, Nav, NavDropdown, Image, Button, Modal, Card, Badge, Form, Offcanvas, Row } from 'react-bootstrap'
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
import {subTotal} from '../components/Functions'

const Navibar = (): JSX.Element => {
    let location = useLocation();
    const menu = useSelector((state: any) => state.menuReducer);
    const cart = useSelector((state: any) => state.cartReducer);
    // useEffect(() =>{ console.log(cart)}, (cart))

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            {/* <Modal show={show} onHide={handleClose} scrollable={true}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Order Summary</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        {React.Children.toArray(cart.map(food =>
                                            <Container fluid className="d-inline-flex align-items-center justify-content-center">
                                                <Card className="m-3 flex-0" style={{ width: '21rem' }}>
                                                    <Card.Body className="d-flex justify-content-evenly"><p><Image className="menu" src={food.imageUrl}></Image></p><p>
                                                        <h5>{food.name}</h5><span>LE {food.price}</span><br></br>
                                                        <h6>Subtotal LE {food.price * food.orderQty}</h6>

                                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                        </svg><Badge bg="secondary">{food.orderQty}</Badge><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                                                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                            </svg></span>
                                                    </p></Card.Body>
                                                </Card>
                                            </Container>
                                        ))}
                                    </div>
                                    <hr></hr>
                                    <Form className="w-5">
                                        <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                            <Form.Label column sm="2">
                                                SUBTOTAL
                                            </Form.Label>
                                            <Form.Control plaintext readOnly defaultValue="total" />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>

                                    <div>
                                        <Link to="/checkout"><Button size="lg" variant="warning" onClick={handleClose}>
                                            Checkout
                                        </Button></Link>
                                    </div>
                                </Modal.Footer>
                            </Modal> */}
                            <Offcanvas show={show} onHide={handleClose} placement='end' >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Order Summary</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div>
                                        {React.Children.toArray(cart.map(food =>
                                            <Container fluid className="d-inline-flex align-items-center justify-content-center">
                                                <Card className="m-3 flex-0 border-0" style={{ width: '21rem' }}>
                                                    <Card.Body className="d-flex justify-content-evenly"><p><Image className="menu" src={food.imageUrl}></Image></p><p>
                                                        <h5>{food.name}</h5>
                                                        <p>LE {food.price}</p>
                                                        <h6>Subtotal LE {food.price * food.orderQty}</h6>
                                                        <span>
                                                            <Button size="sm" variant="light">+</Button>
                                                            <Badge className="mx-2" bg="secondary">{food.orderQty}</Badge>
                                                            <Button size="sm" variant="light">-</Button>
                                                        </span>
                                                        <Button size="sm" variant="warning" className="ms-2"><BsTrashFill /></Button>
                                                    </p></Card.Body>
                                                </Card>
                                            </Container>
                                        ))}
                                    </div>
                                </Offcanvas.Body>
                                <Row className=" justify-content-center align-content-center p-2 border-top">
                                    <h5 className="">Subtotal = {subTotal(cart)}</h5>
                                    <Link to="/checkout"><Button size="lg" variant="warning" onClick={handleClose}>
                                        Checkout
                                    </Button></Link>
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
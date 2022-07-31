import React from 'react'
import { Nav, Image, Card, Container, Badge, Col, Row, Button } from 'react-bootstrap'
import pizzaCard from '../Assets/pizzaCard.png'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { compose } from 'redux'
import { GiCakeSlice } from 'react-icons/gi'
import { GiFullPizza } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'
import { addToCart } from '../Actions/cart.actions'

const Home = (): JSX.Element => {
    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.cartReducer)
    const menu = useSelector((state: any) => state.menuReducer)
    console.log(menu)
    const [currentSelection, setCurrent] = useState(menu.filter(item => item.popular === true))
    console.log(currentSelection)

    const handleCurrent = (category) => {
        if (category === "pizza") { setCurrent(menu.filter(item => item.category === "pizza")) }
        else if (category === "drinks") { setCurrent(menu.filter(item => item.category === "drinks")) }
        else if (category === "desserts") { setCurrent(menu.filter(item => item.category === "burger")) }
        else { setCurrent(menu.filter(item => item.popular === true)) }
    }

    const addCart = (id) => {
        let selectedItem = menu.find(item => item.id === id)
        dispatch(addToCart(selectedItem))
        console.log(selectedItem)
        return (
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                <Badge bg="secondary">0</Badge>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg></span>
        )
    }

    return (
        <div>
            <div id="home" className="mb-3">
                <p style={{ paddingTop: '100px' }}>Luisi's Pizza<br></br>The best Pizza in town</p>
                {/* <Image id="heroImage" src={chef}></Image> */}
            </div>
            <Nav className="d-flex justify-content-center fw-bold" id="navHome" variant="pills" defaultActiveKey="link-0"
                onSelect={(selectedKey) => {
                    if (selectedKey === "link-1") { handleCurrent('pizza') }
                    else if (selectedKey === "link-2") { handleCurrent('drinks') }
                    else if (selectedKey === "link-3") { handleCurrent('desserts') } else { handleCurrent('popular') }
                }}>
                <Nav.Item>
                    <Nav.Link eventKey="link-0" id="navPopular"><BsStars /> Popular</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><GiFullPizza /> Pizza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><BiDrink /> Drinks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">
                        <GiCakeSlice /> Dessert</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                {React.Children.toArray(currentSelection.map(item =>
                    <Container fluid className="d-flex flex-row align-items-center justify-content-center">
                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 2 }).map((_, idx) => (
                                <Col>
                                    <Card className="m-3 flex-1" style={{ width: '21rem' }}>
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
                                                    </p>
                                                    <span><Button onClick={()=>addCart(item.id)}>Add to cart</Button></span>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                ))}
            </div>
        </div >
    )
}

export default Home
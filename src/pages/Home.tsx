import React from 'react'
import { Nav, Image, Card, Container, Badge, Col, Row, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { compose } from 'redux'
import { GiCakeSlice } from 'react-icons/gi'
import { GiFullPizza } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'
import { GiHamburger } from 'react-icons/gi'
import { addToCart } from '../Actions/cart.actions'
import {CartType, MenuReducerType, MenuType} from '../types'

const Home = (): JSX.Element => {
    const dispatch = useDispatch()
    const menu = useSelector((state: MenuReducerType) => state.menuReducer)

    useEffect(() => {setCurrent(menu.filter(item => item.popular === true))}, [menu])

    const [currentSelection, setCurrent] = useState(menu.filter(item => item.popular === true))



    const handleCurrent = (categoryId:number) => {
        if (categoryId === 1) { setCurrent(menu.filter(item => item.category!.id === 1)) }
        else if (categoryId === 6) { setCurrent(menu.filter(item => item.category!.id === 6)) }
        else if (categoryId === 7) { setCurrent(menu.filter(item => item.category!.id === 7)) }
        else if (categoryId === 8) { setCurrent(menu.filter(item => item.category!.id === 8)) }
        else { setCurrent(menu.filter(item => item.popular === true)) }
    }

    const addCart = (id:number) => {
        let selectedItem: MenuType = menu.find((item: MenuType) => item.id === id)
        dispatch(addToCart(selectedItem!))
        console.log(selectedItem)
        // return (
        //     <span>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
        //             <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        //         </svg>
        //         <Badge bg="secondary">0</Badge>
        //         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
        //             <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        //         </svg></span>
        // )
    }

    return (
        <div>
            <div id="home" className="mb-3">
                <p style={{ paddingTop: '100px' }}>Luisi's Pizza<br></br>The best Pizza in town</p>
            </div>
            <Nav className="d-flex justify-content-center fw-bold" id="navHome" variant="pills" defaultActiveKey="link-0"
                onSelect={(selectedKey) => {
                    if (selectedKey === "link-1") { handleCurrent(1) }
                    else if (selectedKey === "link-2") { handleCurrent(8) }
                    else if (selectedKey === "link-3") { handleCurrent(6) }
                    else if (selectedKey === "link-4") { handleCurrent(7) } else { handleCurrent(10) }
                }}>
                <Nav.Item>
                    <Nav.Link eventKey="link-0" id="navPopular"><BsStars /> Popular</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><GiFullPizza /> Pizza</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"><GiHamburger /> Sides</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3"><BiDrink /> Drinks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">
                        <GiCakeSlice /> Dessert</Nav.Link>
                </Nav.Item>
            </Nav>
            <div>
                <Container fluid className="d-flex flex-wrap justify-content-center">
                    {React.Children.toArray(currentSelection.map(item =>
                                <Card className="m-3 flex-1 border-0" style={{ width: '21rem' }}>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <p><Image className="menu" src={item.imageUrl}></Image></p>
                                            </Col>
                                            <Col>
                                                <p>
                                                    <h4>{item.name}</h4>
                                                    <p>{item.description}</p>
                                                    <h6>Price: {item.price} LE</h6>
                                                </p>
                                            </Col>
                                            <span><Button variant="success" onClick={() => addCart(item.id!)}>Add to cart</Button></span>
                                        </Row>
                                    </Card.Body>
                                </Card>
                    ))}
                </Container>

            </div>
        </div >
    )
}

export default Home
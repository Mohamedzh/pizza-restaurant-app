import React from 'react'
import { Image, Card, Container, Badge, Col, Row, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../App/hooks'
import { MenuType } from '../types'
import { addCart, increment, subCart } from '../lib/functions'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'


type Props = {
    currentSelection: MenuType[]
}

const Menu = ({ currentSelection }: Props) => {
    const dispatch = useDispatch()
    const menu = useAppSelector(state => state.menu)
    const cart = useAppSelector(state => state.cart)

    return (
        <div>
            <Container fluid className="d-flex flex-wrap justify-content-center">
                {currentSelection.map((item, idx) =>
                    <Card key={idx} className="m-3 flex-1 border-0" style={{ width: '21rem' }}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p><Image className="menu" src={item.imageUrl}></Image></p>
                                </Col>
                                <Col>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <h6>Price: {item.price} LE</h6>
                                    </div>
                                </Col>
                                {
                                    !cart.find(product => product.id === item.id)
                                        ?
                                        <span><Button variant="success" onClick={() => addCart(item.id!, dispatch, menu)}>Add to cart</Button></span>
                                        :
                                        <span>
                                            <Button size="sm" variant="light" onClick={() => increment(item.id!, dispatch, menu)}><AiOutlinePlus /></Button>
                                            <Badge className="mx-2" bg="secondary">{cart.find(product => product.id === item.id)!.orderQty}</Badge>
                                            <Button size="sm" variant="light" onClick={() => subCart(item.id!, dispatch, menu)}><AiOutlineMinus /></Button>
                                        </span>
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                )}
            </Container>
        </div>
    )
}

export default Menu
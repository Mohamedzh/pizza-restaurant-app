import React from 'react'
import { Nav, Image, Card, Container, Badge, Col, Row, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { GiCakeSlice } from 'react-icons/gi'
import { GiFullPizza } from 'react-icons/gi'
import { BiDrink } from 'react-icons/bi'
import { BsStars } from 'react-icons/bs'
import { GiHamburger } from 'react-icons/gi'
import { addToCart } from '../Actions/cart.actions'
import { useAppDispatch, useAppSelector } from '../App/hooks'
import { addToCart2, decrementCart2, incrementCart2 } from '../Redux/cart-slice'
import { MenuType } from '../types'


const Home = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const menu = useAppSelector((state) => state.menu)

    // const [isShown, setIsShown] = useState(false);
    // const increment=(id: number)=>{
    //     let selectedItem :any = menu.find((item) => item?.id === id)
    //     dispatch(incrementCart2(selectedItem))
    // }

    // const subCart = (id:number) => {
    //     let selectedItem :any = menu.find((item) => item.id === id)
    //     dispatch(decrementCart2(selectedItem))
    // }


    useEffect(() => { setCurrent(menu.filter(item => item.popular === true)) }, [menu])

    const [currentSelection, setCurrent] = useState(menu.filter(item => item.popular === true))



    const handleCurrent = (categoryId: number) => {
        if (categoryId === 1) { setCurrent(menu.filter(item => item.category!.id === 1)) }
        else if (categoryId === 6) { setCurrent(menu.filter(item => item.category!.id === 6)) }
        else if (categoryId === 7) { setCurrent(menu.filter(item => item.category!.id === 7)) }
        else if (categoryId === 8) { setCurrent(menu.filter(item => item.category!.id === 8)) }
        else { setCurrent(menu.filter(item => item.popular === true)) }
    }

    const addCart = (id: number) => {
        let selectedItem: any = menu.find((item: MenuType) => item.id === id)
        dispatch(addToCart2(selectedItem!))
        console.log(selectedItem)
        // setIsShown(true)
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
                                        <div>
                                            <h4>{item.name}</h4>
                                            <p>{item.description}</p>
                                            <h6>Price: {item.price} LE</h6>
                                        </div>
                                    </Col>
                                    <span><Button variant="success" onClick={() => addCart(item.id!)}>Add to cart</Button></span>
                                    {/* {isShown && <span>
                            <Button size="sm" variant="light" onClick={() => increment(item.id!)}>+</Button>
                            <Badge className="mx-2" bg="secondary">{item.orderQty}</Badge>
                            <Button size="sm" variant="light" onClick={() => subCart(item.id!)}>-</Button>
                        </span>} */}
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
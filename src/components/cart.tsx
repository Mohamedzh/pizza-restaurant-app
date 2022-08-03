import React, { useState, useEffect } from 'react'
import {Button, Container, Card, Image, Badge } from 'react-bootstrap'
import { useSelector, useDispatch} from 'react-redux';
import {BsTrashFill} from 'react-icons/bs'
import {addToCart, decrementCart, setCart, removeFromCart, incrementCart} from '../Actions/cart.actions'



const Cart = () => {
    const cart = useSelector((state: any) => state.cartReducer)
    const menu = useSelector((state: any) => state.menuReducer)
    const [currentCart, addToCurrent] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{console.log(cart)}, [cart])

    const addCart = (id) => {
        let selectedItem = menu.find(item => item.id === id)
        dispatch(addToCart(selectedItem))
        // dispatch(setCart(cart.filter(carts => carts.id !== item.id)));

    }

    const increment=(id)=>{
        let selectedItem = menu.find(item => item.id === id)
        dispatch(incrementCart(selectedItem))
    }

    const subCart = (id) => {
        let selectedItem = menu.find(item => item.id === id)
        dispatch(decrementCart(selectedItem))
        // dispatch(setCart(cart));

    }

    const RemoveItem = (item) => {
        dispatch(removeFromCart(item));
        dispatch(setCart(cart.filter(carts => carts.id !== item.id)));
    }


    
    return (
        <div>
        {React.Children.toArray(cart?.map(food =>
            <Container fluid className="d-inline-flex align-items-center justify-content-center">
                <Card className="flex-0 border-0" style={{ width: '21rem' }}>
                    <Card.Body className="d-flex justify-content-evenly"><p><Image className="cartPic" src={food.imageUrl}></Image></p><p>
                        <h6>{food.name}</h6>
                        <span className="mx-2">LE {food.price}</span>
                        <span>
                            <Button size="sm" variant="light" onClick={() => increment(food.id)}>+</Button>
                            <Badge className="mx-2" bg="secondary">{food.orderQty}</Badge>
                            <Button size="sm" variant="light" onClick={() => subCart(food.id)}>-</Button>
                        </span>
                        <div className="mt-1">
                            <span className="mx-2">Subtotal LE {food.price * food.orderQty}
                                <Button size="sm" variant="warning" className="ms-2" onClick={() => RemoveItem(food)}><BsTrashFill />
                                </Button>
                            </span></div>
                    </p></Card.Body>
                </Card>
            </Container>
        ))}
        </div>
    )
}

export default Cart
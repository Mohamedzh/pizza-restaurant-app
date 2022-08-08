import React, { useState, useEffect } from 'react'
import {Button, Container, Card, Image, Badge } from 'react-bootstrap'
import {BsTrashFill} from 'react-icons/bs'
import { MenuType } from '../types';
import emptyCart from '../Assets/emptyCart2.png'
import { useAppSelector, useAppDispatch } from '../App/hooks';
import { decrementCart2, incrementCart2, setCart2 } from '../Redux/cart-slice';



const Cart = () => {
    const cart = useAppSelector((state) => state.cart)
    const menu = useAppSelector((state) => state.menu)
    const [currentCart, addToCurrent] = useState([])
    const dispatch = useAppDispatch()

    useEffect(()=>{console.log(cart)}, [cart])

    const increment=(id: number)=>{
        let selectedItem :any = menu.find((item) => item?.id === id)
        dispatch(incrementCart2(selectedItem))
    }

    const subCart = (id:number) => {
        let selectedItem :any = menu.find((item) => item.id === id)
        dispatch(decrementCart2(selectedItem))
    }

    const RemoveItem = (item:MenuType) => {
        dispatch(setCart2(cart.filter((carts) => carts.id !== item.id)));
    }

    if (cart?.length ===0)
    {return (<div className="d-flex flex-column justify-content-center"><Image id="emptyCart" className="mx-5"src={emptyCart}></Image>
        <h3 id="emptyText" className="mt-3">Your cart is empty</h3></div>)}

    return (
        <div>
        {React.Children.toArray(cart?.map((food) =>
            <Container fluid className="d-inline-flex align-items-center justify-content-center">
                <Card className="flex-0 border-0" style={{ width: '21rem' }}>
                    <Card.Body className="d-flex justify-content-evenly"><p><Image className="cartPic" src={food.imageUrl}></Image></p><div>
                        <h6>{food.name}</h6>
                        <span className="mx-2">LE {food.price}</span>
                        <span>
                            <Button size="sm" variant="light" onClick={() => increment(food.id!)}>+</Button>
                            <Badge className="mx-2" bg="secondary">{food.orderQty}</Badge>
                            <Button size="sm" variant="light" onClick={() => subCart(food.id!)}>-</Button>
                        </span>
                        <div className="mt-1">
                            <span className="mx-2">Subtotal LE {food.price! * food.orderQty!}
                                <Button size="sm" variant="warning" className="ms-2" onClick={() => RemoveItem(food)}><BsTrashFill />
                                </Button>
                            </span></div>
                    </div></Card.Body>
                </Card>
            </Container>
        ))}
        </div>
    )
}

export default Cart
import React from 'react'
import { Button, Container, Card, Image } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/bs'
import emptyCart from '../Assets/emptyCart2.png'
import { useAppSelector, useAppDispatch } from '../App/hooks';
import { removeItem } from '../lib/functions';
import QtyButtons from './qtyButtons'



const Cart = () => {
    const cart = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    if (cart?.length === 0) {
        return (<div className="d-flex flex-column justify-content-center">
            <Image id="emptyCart" className="mx-5" src={emptyCart}></Image>
            <h3 id="emptyText" className="mt-3">Your cart is empty</h3>
        </div>)
    }

    return (
        <div>
            {cart?.map((food, idx) =>
                <Container
                    key={idx}
                    fluid
                    className="d-inline-flex align-items-center justify-content-center">
                    <Card className="flex-0 border-0" style={{ width: '21rem' }}>
                        <Card.Body className="d-flex justify-content-evenly">
                            <p>
                                <Image className="cartPic" src={food.imageUrl}>
                                </Image>
                            </p>
                            <div>
                                <h6>
                                    {food.name}
                                </h6>
                                <span className="mx-2">
                                    LE {food.price}
                                </span>
                                <QtyButtons food={food} />
                                <div className="mt-1">
                                    <span className="mx-2">
                                        Subtotal LE {food.price! * food.orderQty!}
                                        <Button
                                            size="sm"
                                            variant="warning"
                                            className="ms-2"
                                            onClick={() => removeItem(food, dispatch, cart)}>
                                            <BsTrashFill />
                                        </Button>
                                    </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            )}
        </div>
    )
}

export default Cart
import React, { useEffect, useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { addOrder } from '../Actions/order.actions'
import Clock from 'react-live-clock';
import { OrdersReducerType } from '../types'
import { getDate, closeOrder } from '../components/Functions'




const KitchenCards = () => {

    const dispatch = useDispatch()
    const orders = useSelector((state: OrdersReducerType) => state.orderReducer)

    const [pendingOrders, setPending] = useState(orders.filter(order => order.completed === false))
    useEffect(() => {
        axios.get(`http://localhost:5000/order`).then((response) => { dispatch(addOrder(response.data.orders)) });
    }, [])

    useEffect(() => { setPending(orders.filter(order => order.completed === false)) }, [orders])

    return (
        <Container style={{ maxHeight: "90vh", overflow: "auto" }} fluid className="d-flex flex-wrap flex-row">
            {React.Children.toArray(pendingOrders.map(order =>
                <Card
                    bg="light"
                    key="light"
                    text="dark"
                    style={{ width: '18rem' }}
                    className={"m-2 " + (getDate(order) < 30 ? 'pending' : getDate(order) < 60 ? 'late' : 'veryLate')}
                >
                    <Card.Header className="text-end">
                        <p>{order.id}</p>
                        <Clock
                            className="mx-2"
                            format={'HH:mm:ss'}
                            ticking={true}
                            timezone={'Africa/Cairo'}
                            date={(new Date(Date.now()).getTime() - new Date(order.createdAt).getTime() - 7200000)}
                        />
                    </Card.Header>
                    <Card.Body className="complete">
                        <Card.Text className="text-start">
                            {order.orderlines.map(line =>
                                <p>{line.product.name} Qty: {line.quantity}</p>

                            )}
                        </Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-end m-2"><Button variant="outline-danger" onClick={() => closeOrder(order.id)}> Order Ready</Button></div>
                </Card>
            ))}
        </Container>
    )
}

export default KitchenCards
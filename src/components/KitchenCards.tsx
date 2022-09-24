import React, { useEffect, useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import axios from 'axios'
import Clock from 'react-live-clock';
import { getDate, closeOrder } from './functions'
import { useAppDispatch, useAppSelector } from '../App/hooks'
import { addOrders2 } from '../Redux/orders-slice'

const KitchenCards = () => {

    const dispatch = useAppDispatch()
    const orders = useAppSelector((state) => state.orders)

    const [pendingOrders, setPending] = useState(orders.filter(order => order.completed === false))
    useEffect(() => {
        axios.get(`http://localhost:5000/order`).then((response) => { dispatch(addOrders2(response.data.orders)) });
    }, [])

    useEffect(() => { setPending(orders.filter(order => order.completed === false)) }, [orders])

    return (
        <Container style={{ maxHeight: "90vh", overflow: "auto" }} fluid className="d-flex flex-wrap flex-row">
            {(pendingOrders.map((order) =>
                <Card
                    key={order.id}
                    bg="light"
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
                            date={(new Date(Date.now()).getTime() - new Date(order.createdAt!).getTime() - 7200000)}
                        />
                    </Card.Header>
                    <Card.Body className="complete">
                        <Card.Text className="text-start" as="div">
                            {React.Children.toArray(order.orderlines!.map(line =>
                                <p>{line.product.name} Qty: {line.quantity}</p>
                            ))}
                        </Card.Text>
                    </Card.Body>
                    <div className="d-flex justify-content-end m-2"><Button variant="outline-danger" onClick={() => closeOrder(order.id!, dispatch)}> Order Ready</Button></div>
                </Card>
            ))}
        </Container>
    )
}

export default KitchenCards
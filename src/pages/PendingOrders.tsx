import React, { useEffect, useState } from 'react'
import { Row, Col, Tab, Nav, TabPane, TabContent, Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { addOrder } from '../Actions/order.actions'
import Clock from 'react-live-clock';
import { OrdersReducerType } from '../types'
import { getDate } from '../components/Functions'
import KitchenCards from '../components/KitchenCards'



const PendingOrders = () => {

  const dispatch = useDispatch()
  const orders = useSelector((state: OrdersReducerType) => state.orderReducer)

  const [pendingOrders, setPending] = useState(orders.filter(order => order.completed === false))
  useEffect(() => {
    axios.get(`http://localhost:5000/order`).then((response) => { dispatch(addOrder(response.data.orders)) });
  }, [])

  useEffect(() => { setPending(orders.filter(order => order.completed === false)) }, [orders])


  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">

        <Row className="me-0">
          <Col sm={2}>
            <Nav id="sideBar" variant="pills" className="flex-column">
              <p className="my-4 fs-2">
                DashBoard
              </p>
              <Nav.Item>
                <Nav.Link className="tabs fs-5" eventKey="first">Pending Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs fs-5" eventKey="second"><Link to="/kitchen/completed">Completed Orders</Link></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">

                <KitchenCards />

              </Tab.Pane>
              <Tab.Pane eventKey="second">
                Completed Orders
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default PendingOrders
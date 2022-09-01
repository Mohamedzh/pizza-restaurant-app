import React, { useEffect, useState } from 'react'
import { Row, Col, Tab, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import KitchenCards from '../components/KitchenCards'
import { useAppDispatch, useAppSelector } from '../App/hooks'
import { addOrders2 } from '../Redux/orders-slice'



const PendingOrders = () => {

  const dispatch = useAppDispatch()
  const orders = useAppSelector((state) => state.orders)

  const [pendingOrders, setPending] = useState(orders.filter(order => order.completed === false))
  useEffect(() => {
    axios.get(`http://localhost:5000/order`).then((response) => { dispatch(addOrders2(response.data.orders)) });
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
                <Nav.Link as="p" className="tabs fs-5" eventKey="second"><Link to="/kitchen/completed">Completed Orders</Link></Nav.Link>
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
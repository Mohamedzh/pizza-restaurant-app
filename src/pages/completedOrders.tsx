import React, { useEffect } from 'react'
import { Row, Col, Tab, Nav, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { OrderType } from '../types'
import { addOrders2 } from '../Redux/orders-slice'
import { useAppDispatch, useAppSelector } from '../App/hooks'

const CompletedOrders = () => {
  const dispatch = useAppDispatch()
  const orders = useAppSelector((state) => state.orders)
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/order`)
      .then((response) => { dispatch(addOrders2(response.data.orders)) });
  }, [])

  const completedOrders = orders.filter((order: OrderType) => order.completed === true)
  console.log(completedOrders)

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="second">

        <Row className="me-0">
          <Col sm={2}>
            <Nav id="sideBar" variant="pills" className="flex-column">
              <p className="my-4 fs-2">
                DashBoard
              </p>
              <Nav.Item>
                <Nav.Link as="p" className="tabs fs-5" eventKey="first"><Link to="/kitchen/pending">Pending Orders</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs fs-5" eventKey="second">Completed Orders</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Container fluid style={{ maxHeight: "90vh", overflow: "auto" }} className="d-flex flex-wrap flex-row">
                  {(completedOrders.map((order: OrderType) =>
                    <Card
                      bg="light"
                      key={order.id}
                      text="dark"
                      style={{ width: '18rem' }}
                      className="m-2 complete"
                    >
                      <Card.Header className="text-end">
                        <p>{moment(order.updatedAt).format('YYYY-MM-DD HH:mm:ss')}</p>
                      </Card.Header>
                      <Card.Body className="complete text-decoration-line-through" >
                        <Card.Text className="text-start" as="div">
                          {React.Children.toArray(order.orderlines!.map(line =>
                            <p>{line.product.name} Qty: {line.quantity}</p>

                          ))}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Container>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default CompletedOrders
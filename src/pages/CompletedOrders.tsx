import React, { useEffect } from 'react'
import { Row, Col, Tab, Nav, TabPane, TabContent, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import Clock from 'react-live-clock';
import { addOrder } from '../Actions/order.actions'
import moment from 'moment'

const CompletedOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state: any) => state.orderReducer)
  useEffect(() => {
    axios.get(`http://localhost:5000/order`).then((response) => { dispatch(addOrder(response.data.orders)) });
  }, [])

  const closeOrder = async (id) => {
    try {
      const newObj = { completed: true }
      const response = await axios.post(`http://localhost:5000/order/${id}`, newObj);
      console.log(response.data)
      axios.get(`http://localhost:5000/order`).then((response) => { dispatch(addOrder(response.data.orders)) })
    } catch (e) {
      console.log(e);
    };
  }

  const completedOrders = orders.filter(order => order.completed === true)
  console.log(completedOrders)

  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="second">

        <Row>
          <Col sm={3}>
            <Nav id="sideBar" variant="pills" className="flex-column">
              <p className="my-4">
                DashBoard
              </p>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="first"><Link to="/kitchen/pending">Pending Orders</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="second">Completed Orders</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Container fluid style={{maxHeight: "90vh", overflow: "auto"}} className="d-flex flex-wrap flex-row">
                  {React.Children.toArray(completedOrders.map(order =>
                    <Card
                      bg="light"
                      key="light"
                      text="dark"
                      style={{ width: '18rem' }}
                      className="m-2 complete"
                    >
                      <Card.Header className="text-end">
                        {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'Africa/Cairo'} date={(new Date(Date.now()).getTime() - new Date(order.createdAt).getTime() - 7200000)} />
                        <p>{Math.round((new Date(Date.now()).getTime() - new Date(order.createdAt).getTime()) / 60000)}</p> */}
                        <p>{moment(order.createdAt).fromNow()}</p>
                      </Card.Header>
                      <Card.Body className="complete text-decoration-line-through" >
                        <Card.Text className="text-start">
                          {order.orderlines.map(line =>
                            <p>{line.product.name} Qty: {line.quantity}</p>

                          )}
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
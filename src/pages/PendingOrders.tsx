import React, { useEffect } from 'react'
import { Row, Col, Tab, Nav, TabPane, TabContent, Card, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { addOrder } from '../Actions/order.actions'


const PendingOrders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state: any) => state.orderReducer)
  useEffect(()=>{  axios.get(`http://localhost:5000/order`).then((response) => {dispatch(addOrder(response.data.orders)) });
}, [])
  // console.log(orders)
  var startTime = new Date('2022/8/02 12:00'); 
  var endTime = new Date(Date.now())
  var difference = endTime.getTime() - startTime.getTime();
  var resultInMinutes = Math.round(difference / 60000);
  console.log(difference)
  console.log(resultInMinutes)

  const timestamp = moment().format()
  // const timestamp = moment().startOf('hour').fromNow();
  // const ts2= Date.now()
  // console.log(moment().diff(ts2, 'hour'))
  // console.log(moment().diff()
  /** */
  // {new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(Date.now())}

  // console.log(ts2)
  // console.log(timeStamp)
  // const options : any = {
  //   hour: 'numeric', minute: 'numeric', second: 'numeric',}
  // console.log(new Intl.DateTimeFormat('en-US', options ).format(ts2));


  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">

        <Row>
          <Col sm={3}>
            <Nav id="sideBar" variant="pills" className="flex-column">
              <p className="my-4">
                DashBoard
              </p>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="first">Pending Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tabs" eventKey="second"><Link to="/kitchen/completed">Completed Orders</Link></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <Container fluid className="d-flex flex-wrap flex-row">
                {React.Children.toArray(orders.map(order =>
                <Card
                  bg="light"
                  key="light"
                  text="dark"
                  style={{ width: '18rem' }}
                  className="m-2 pending"
                >
                  <Card.Header className="text-end">
                    <p>{Math.round((new Date(Date.now()).getTime()-new Date(order.createdAt).getTime())/60000)}</p>
                    <p>{moment(order.createdAt).fromNow()}</p>
                  </Card.Header>
                  <Card.Body >
                    <Card.Text className="text-start">
                      {order.orderlines.map(line=> 
                      <p>{line.product.name} Qty: {line.quantity}</p>
                      
                      )} 
                    </Card.Text>
                  </Card.Body>
                  <div className="d-flex justify-content-end m-2"><Button variant="outline-danger"> Order Ready</Button></div>
                </Card>
                 ))}
                 </Container>
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
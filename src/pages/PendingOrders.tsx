import React from 'react'
import { Row, Col, Tab, Nav, TabPane, TabContent, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { timeStamp } from 'console'



const PendingOrders = () => {

  const timestamp = moment().startOf('hour').fromNow();
  // const ts2= Date.now()
  // console.log(moment().diff(ts2, 'hour'))
  // console.log(moment().diff()

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
                <Card
                  bg="light"
                  key="light"
                  text="dark"
                  style={{ width: '18rem' }}
                  className="m-4 pending"
                >
                  <Card.Header>{timestamp}</Card.Header>
                  <Card.Body>
                    <Card.Title>Order </Card.Title>
                    <Card.Text>
                     Order details
                    </Card.Text>
                  </Card.Body>
                </Card>
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
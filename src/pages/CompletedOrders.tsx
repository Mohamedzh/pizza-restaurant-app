import React from 'react'
import {Row,Col, Tab, Nav, TabPane, TabContent, Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'

const CompletedOrders = () => {
  const timestamp = moment().startOf('hour').fromNow();

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
              <Nav.Link  className="tabs" eventKey="second">Completed Orders</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
</Tab.Pane>
            <Tab.Pane eventKey="second">
            <Card
                  bg="light"
                  key="light"
                  text="dark"
                  style={{ width: '18rem' }}
                  className="m-4"
                >
                  <Card.Header>{timestamp}</Card.Header>
                  <Card.Body>
                    <Card.Title>"light" Card Title </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default CompletedOrders
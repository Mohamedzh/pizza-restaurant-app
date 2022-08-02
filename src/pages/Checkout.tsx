import React from 'react'
import { Form, Row, Col, Button, Image, Badge, Card, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeFromCart, setCart } from '../Actions/cart.actions'
import { BsTrashFill } from 'react-icons/bs'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import { addOrder } from '../Actions/order.actions'





const Checkout = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cartReducer)
  const orders = useSelector((state: any) => state.orderReducer)
  const navigate = useNavigate()

  const RemoveItem = (item) => {
    dispatch(removeFromCart(item));
    dispatch(setCart(cart.filter(carts => carts.id !== item.id)));
  }

  const formik = useFormik({
    initialValues: {
      Name: "",
      Mobile: "",
      Address: "",
      City: "",
    },
    onSubmit: (values) => {
      let products = {}
      for (let i = 0; i < cart.length; i++) {
        products[cart[i].id] = cart[i].orderQty
      }
      const newOrder = { name: values.Name, mobile: values.Mobile, address: values.Address, city: values.City, productIds: products }
      console.log(newOrder)

      const postData = async () => {
        try {
          const response = await axios.post(`http://localhost:5000/order`, newOrder);
          console.log(response.data.newOrder.orderNo)
          console.log(response.data.newOrder.id)
          const orderNo = response.data.newOrder.orderNo
          const orderId = response.data.newOrder.id
          const creationTime = response.data.newOrder.createdAt
          // axios.get(`http://localhost:5000/order/${id}`).then((response) => { console.log(response)});
          dispatch(addOrder({id: orderId, content: cart, createdAt:creationTime}))
          dispatch(clearCart(cart))
          console.log(orders)
          console.log(cart)

        } catch (e) {
          console.log(e);
        };
      }
      postData();
      // navigate('/success')
      formik.resetForm()
    },
    validationSchema:
      Yup.object({
        Name: Yup.string().required("Please enter your name").max(20, "Name is limited to 20 characters"),
        Mobile: Yup.string().required("Please enter your mobile phone number").max(11, "Mobile number can be 11 numbers only"),
        Address: Yup.string().required("Please enter your Address"),
        City: Yup.string().required("Please specify your city")
      }),
  });


  return (
    <div>
      <Row>
        <Col className="m-5">
          <div className="mb-3">
            <Form >

              <Form.Group>
                <Form.Control onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                  plaintext type="text" placeholder="Name" name="Name" className="mb-3 checkoutForm" />
                {formik.touched.Name && formik.errors.Name ? (
                  <div>{formik.errors.Name}</div>
                ) : null}
              </Form.Group>


              <Form.Group>
                <Form.Control onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Mobile}
                  plaintext type="text" placeholder="Mobile" name="Mobile" className="mb-3 checkoutForm" />
                {formik.touched.Mobile && formik.errors.Mobile ? (
                  <div>{formik.errors.Mobile}</div>
                ) : null}
              </Form.Group>


              <Form.Group>
                <Form.Control onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Address}
                  plaintext type="text" placeholder="Address" name="Address" className="mb-3 checkoutForm" />
                {formik.touched.Address && formik.errors.Address ? (
                  <div>{formik.errors.Address}</div>
                ) : null}
              </Form.Group>


              <Form.Group>
                <Form.Control onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.City}
                  plaintext type="text" placeholder="City" name="City" className="mb-3 checkoutForm" />
              </Form.Group>
            </Form>
            {formik.touched.City && formik.errors.City ? (
              <div>{formik.errors.City}</div>
            ) : null}

          </div>
          <Button className="me-5" variant="danger" onClick={() => formik.handleSubmit()}>Order Now</Button>
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>Cancel</Button>
        </Col>
        <Col className="d-inline-flex">
          <div className="vr mt-5">
          </div>
          <div>
            <Container fluid className="d-flex flex-column align-items-center justify-content-center">

              {React.Children.toArray(cart.map(item =>
                <Card className="m-3 flex-0 border-0" style={{ width: '30rem' }}>
                  <Card.Body className="d-flex justify-content-evenly">
                    <Row>
                      <Col>
                        <p><Image className="cartPic" src={item.imageUrl}></Image></p>
                      </Col>
                      <Col>
                        <h6>{item.name}</h6>
                        <div className="d-flex flex-row">
                          <h6>Qty: {item.orderQty}</h6>
                          <Button size="sm" variant="light">+</Button>
                          <Badge className="mx-2" bg="secondary">{item.orderQty}</Badge>
                          <Button size="sm" variant="light">-</Button>
                        </div>
                        <div className="d-flex m-1">
                          <h6>Total LE {item.price * item.orderQty}</h6>
                          <Button className="mx-2" variant="warning" size="sm" onClick={() => RemoveItem(item)}>
                            <BsTrashFill />
                          </Button>
                        </div>
                      </Col>

                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </Container>

          </div>
        </Col>
      </Row>

    </div>
  )
}

export default Checkout
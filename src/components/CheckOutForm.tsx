import { Form, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart, } from '../Actions/cart.actions'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import axios from 'axios'
import {addNewOrder} from '../Actions/newOrder.actions'
import { CartReducerType, CheckoutObjectType } from '../types'





const CheckoutForm = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: CartReducerType) => state.cartReducer)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      Name: "",
      Mobile: "",
      Address: "",
      City: "",
    },
    onSubmit: (values) => {
      let products  = {}
      for (let i = 0; i < cart.length; i++) {
        let j = cart[i].id
        let k = cart[i].orderQty
        products[j] = k
      }
      const newOrder = { name: values.Name, mobile: values.Mobile, address: values.Address, city: values.City, productIds: products }
      console.log(newOrder)

      const postData = async () => {
        try {
          const response = await axios.post(`http://localhost:5000/order`, newOrder);
          console.log(response.data.newOrder.orderNo)
          console.log(response.data.newOrder.id)
          // axios.get(`http://localhost:5000/order/${id}`).then((response) => { console.log(response)});
          dispatch(addNewOrder(response.data.newOrder))
          dispatch(clearCart(cart))
        } catch (e) {
          console.log(e);
        };
      }
      postData();
      navigate('/success');
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
        <Col className="m-5">
          <div className="mb-3">
            <Form >

              <Form.Group>
                <Form.Control onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Name}
                  plaintext type="text" placeholder="Name" name="Name" className="mb-3 checkoutForm" />
                {formik.touched.Name && formik.errors.Name ? (
                  <span className="errorText">{formik.errors.Name}</span>
                ) : null}
              </Form.Group>


              <Form.Group>
                <Form.Control onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Mobile}
                  plaintext type="text" placeholder="Mobile" name="Mobile" className="mb-3 checkoutForm" />
                {formik.touched.Mobile && formik.errors.Mobile ? (
                  <span className="errorText">{formik.errors.Mobile}</span>
                ) : null}
              </Form.Group>


              <Form.Group>
                <Form.Control onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Address}
                  plaintext type="text" placeholder="Address" name="Address" className="mb-3 checkoutForm" />
                {formik.touched.Address && formik.errors.Address ? (
                  <span className="errorText">{formik.errors.Address}</span>
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
              <span className="errorText">{formik.errors.City}</span>
            ) : null}

          </div>
          <Button className="me-5" variant="danger" onClick={() => formik.handleSubmit()}>Order Now</Button>
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>Cancel</Button>
        </Col>
  )
}

export default CheckoutForm
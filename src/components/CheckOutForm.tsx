import React from 'react'
import { Form, Row, Col, Button, Image, Badge, Card, Container } from 'react-bootstrap'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'


const CheckOutForm = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            Name: "",
            Mobile: "",
            Address: "",
            City: "",
        },
        onSubmit: (values) => {
            //Post method here

        },
        validationSchema: Yup.object({
            Name: Yup.string().required("Please enter your name").max(20, "Name is limited to 20 characters"),
            Mobile: Yup.string().required("Please enter your mobile phone number").max(11, "Mobile number can be 11 numbers only"),
            Address: Yup.string().required("Please enter your Address"),
            City: Yup.string().required("Please specify your city")
        }),
    });
    return (
        <Col className="m-5">
            <div className="mb-3">
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Control onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Name}
                        plaintext type="text" placeholder="Name" name="Name" className="mb-3 checkoutForm" />
                    {formik.touched.Name && formik.errors.Name ? (
                        <div>{formik.errors.Name}</div>
                    ) : null}
                    <Form.Control onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Mobile}
                        plaintext type="text" placeholder="Mobile" name="Mobile" className="mb-3 checkoutForm" />
                    {formik.touched.Mobile && formik.errors.Mobile ? (
                        <div>{formik.errors.Mobile}</div>
                    ) : null}
                    <Form.Control onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Address}
                        plaintext type="text" placeholder="Address" name="Address" className="mb-3 checkoutForm" />
                    {formik.touched.Address && formik.errors.Address ? (
                        <div>{formik.errors.Address}</div>
                    ) : null}
                    <Form.Control onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.City}
                        plaintext type="text" placeholder="City" name="City" className="mb-3 checkoutForm" />
                </Form>
                {formik.touched.City && formik.errors.City ? (
                    <div>{formik.errors.City}</div>
                ) : null}
            </div>
            <Link to="/success"><Button className="me-5" variant="danger">Order Now</Button></Link>
            <Button variant="outline-secondary" onClick={() => navigate(-1)}>Cancel</Button>
        </Col>
    )
}

export default CheckOutForm
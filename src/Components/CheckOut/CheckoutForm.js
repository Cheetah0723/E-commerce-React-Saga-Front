import React from 'react';
import { Form } from 'formik';
import { withFormik } from 'formik';
import { Button } from '@material-ui/core';
import { Row, Col } from 'reactstrap';
import { CustomTextField, CustomSelectField } from "../Form/CustomFileds"

const MyCheckoutForm = props => {
    const {
        values,
        handleChange,
        handleSubmit
    } = props

    const countryMenuItems = [{ value: "AU", label: "Australia" }, { value: "US", label: "United States" }]
    const stateMenuItems = [{ value: "VIC", label: "Victoria" }, { value: "NSW", label: "Victoria" }, { value: "QLD", label: "Queensland" },
    { value: "NT", label: "North Territory" }, { value: "PE", label: "Perth" }, { value: "TAS", label: "Tasmania" }]

    return (<Form onSubmit={handleSubmit}>
        <Row>
            <Col sm={6} md={6}>
                <CustomTextField name="fName" handleChange={handleChange} value={values.fName} inputLabel="First Name" />
            </Col>
            <Col sm={6} md={6}>
                <CustomTextField name="lName" handleChange={handleChange} value={values.lName} inputLabel="Last Name" />
            </Col>
        </Row>
        <CustomSelectField name="country" handleChange={handleChange} value={values.country} menuItems={countryMenuItems} inputLabel="Country" />
        <CustomTextField name="streetAddress" handleChange={handleChange} value={values.streetAddress} inputLabel="Street Address" />
        <CustomTextField name="suburb" handleChange={handleChange} value={values.suburb} inputLabel="Suburb" />
        <Row>
            <Col sm={6} md={6}>
                <CustomSelectField name="state" handleChange={handleChange} value={values.state} menuItems={stateMenuItems} inputLabel="State" />
            </Col>
            <Col sm={6} md={6}>
                <CustomTextField name="postcode" handleChange={handleChange} value={values.postcode} inputLabel="Post Code" />
            </Col>
        </Row>
        <CustomTextField name="phone" handleChange={handleChange} value={values.phone} inputLabel="Contact Phone Number" type="number" />
        <CustomTextField name="email" handleChange={handleChange} value={values.email} inputLabel="Email" />
        <Button
            className="submit-btn"
            onClick={handleSubmit}
        >CONTINUE</Button>
    </Form>
    )
}

const CheckoutForm = withFormik({
    mapPropsToValues: () => ({
        fName: "",
        lName: "",
        country: "AU",
        streetAddress: "",
        suburb: "",
        state: "VIC",
        postcode: "",
        phone: "",
        email: '',
        rememberMe: true,
    }),

    // Custom sync validation
    validate: values => {
        const errors = {}
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!values.fName) {
            errors.fName = 'Required';
        }
        if (values.fName.length > 30 || !/^[A-Za-z]/i.test(values.fName)) {
            errors.fName = 'Please enter a valid name';
        }
        if (!values.lName) {
            errors.lName = 'Required';
        }
        if (values.lName.length > 30 || !/^[A-Za-z]/i.test(values.lName)) {
            errors.lName = 'Please enter a valid name';
        }
        if (!values.streetAddress) {
            errors.streetAddress = 'Required';
        }
        if (values.streetAddress.length > 50 || !/^[A-Za-z0-9]/i.test(values.lName)) {
            errors.streetAddress = 'Please enter a valid street address';
        }
        if (!values.suburb) {
            errors.suburb = 'Required';
        }
        if (!values.postcode) {
            errors.postcode = 'Required';
        }
        return errors;
    },
    handleSubmit: (values, { 'props': { onContinue } }) => {
        onContinue(values);
    },

    displayName: 'BasicForm',
})(MyCheckoutForm);

export default CheckoutForm
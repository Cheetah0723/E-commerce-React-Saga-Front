import React from 'react';
import { Form, Field } from 'formik';
import { withFormik } from 'formik';
import { Button, MenuItem, InputLabel } from '@material-ui/core';
import { TextField, Select, } from 'formik-material-ui';
import { Row, Col } from 'reactstrap';

const NewCheckoutForm = props => {
    const {
        values,
        handleChange,
        handleSubmit
    } = props

    return (<Form onSubmit={handleSubmit}>
        <Row>
            <Col sm={6} md={6}>
                <InputLabel id="fName">First Name</InputLabel>
                <Field
                    className="field"
                    component={TextField}
                    name="fName"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    value={values.fName}
                />
            </Col>
            <Col sm={6} md={6}>
                <InputLabel id="lName">Last Name</InputLabel>
                <Field
                    className="field"
                    component={TextField}
                    name="lName"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    value={values.lName}
                />
            </Col>
        </Row>
        <InputLabel id="country">Country</InputLabel>
        <Field
            component={Select}
            className="field"
            variant="outlined"
            labelId="country"
            name="country"
            onChange={handleChange}
            value={values.country}
        >
            <MenuItem value="AU">Australia</MenuItem>
            <MenuItem value="US">United States</MenuItem>
        </Field>
        <InputLabel id="streetAddress">Street Address</InputLabel>
        <Field
            className="field"
            component={TextField}
            name="streetAddress"
            type="text"
            margin="normal"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={values.streetAddress}
        />
        <InputLabel id="suburb">Suburb</InputLabel>
        <Field
            className="field"
            component={TextField}
            name="suburb"
            type="text"
            margin="normal"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={values.suburb}
        />
        <Row>
            <Col sm={6} md={6}>
                <InputLabel id="state">State</InputLabel>
                <Field
                    className="field"
                    component={Select}
                    name="state"
                    variant="outlined"
                    onChange={handleChange}
                    value={values.state}
                >
                    <MenuItem value="VIC">Victoria</MenuItem>
                    <MenuItem value="NSW">United States</MenuItem>
                    <MenuItem value="QLD">Queensland</MenuItem>
                    <MenuItem value="NT">North Territory</MenuItem>
                    <MenuItem value="PE">Perth</MenuItem>
                    <MenuItem value="TAS">Tasmania</MenuItem>
                </Field>
            </Col>
            <Col sm={6} md={6}>
                <InputLabel id="postcode">Post Code</InputLabel>
                <Field
                    className="field"
                    component={TextField}
                    name="postcode"
                    type="number"
                    margin="normal"
                    variant="outlined"
                    size="small"
                    onChange={handleChange}
                    value={values.postcode}
                />
            </Col>
        </Row>
        <InputLabel id="phone">Contact Phone Number</InputLabel>
        <Field
            className="field"
            component={TextField}
            name="phone"
            type="number"
            margin="normal"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={values.phone}
        />
        <InputLabel id="email">Email</InputLabel>
        <Field
            className="field"
            component={TextField}
            name="email"
            type="email"
            margin="normal"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={values.email}
        />
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
})(NewCheckoutForm);

export default CheckoutForm
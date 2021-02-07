import React from 'react';
import { Form, Field } from 'formik';
import { withFormik } from 'formik';

import {
    Button,
    MenuItem,
    InputLabel,
} from '@material-ui/core';
import {
    TextField,
    Select,
} from 'formik-material-ui';
import Box from '@material-ui/core/Box';
import "./Checkout.css"

const NewCheckoutForm = props => {
    const {
        values,
        handleChange,
        handleSubmit,
    } = props

    return <div className="check-out-form">
        <Form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-left">
                    <InputLabel className="col" id="state">First Name</InputLabel>
                    <Field
                        className="col"
                        component={TextField}
                        name="fName"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        value={values.fName}
                    />
                </div>
                <div className="col-right">
                    <InputLabel className="col" id="state">Last Name</InputLabel>
                    <Field
                        className="col"
                        component={TextField}
                        name="lName"
                        type="text"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        value={values.lName}
                    />
                </div>
            </div>
            <InputLabel id="country" className="row">Country</InputLabel>
            <Field component={Select} className="row select"
                variant="outlined"
                labelId="country" id="select" name="country"
                onChange={handleChange}
                value={values.country}
            >
                <MenuItem value="AUD">Australia</MenuItem>
                <MenuItem value="USD">United States</MenuItem>
            </Field>
            <InputLabel className="col" id="state">Street Address</InputLabel>
            <Field
                className="row"
                component={TextField}
                name="streetAddress"
                type="text"
                margin="normal"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.streetAddress}
            />
            <InputLabel className="col" id="state">Suburb</InputLabel>
            <Field
                className="row"
                component={TextField}
                name="suburb"
                type="text"
                margin="normal"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.suburb}
            />
            <div className="row">
                <div className="col-left">
                    <InputLabel className="col" id="state">State</InputLabel>
                    <Field
                        className="col select-half select"
                        component={Select}
                        labelId="state" id="select" name="state"
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
                </div>
                <div className="col-right">
                    <InputLabel className="col" id="state">Post Code</InputLabel>
                    <Field
                        className="col"
                        component={TextField}
                        name="postcode"
                        type="number"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        onChange={handleChange}
                        value={values.postcode}
                    />
                </div>
            </div>
            <InputLabel className="col" id="state">Contact Phone Number</InputLabel>
            <Field
                className="row"
                component={TextField}
                name="phone"
                type="number"
                margin="normal"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.phone}
            />
            <InputLabel className="col" id="state">Email</InputLabel>
            <Field
                className="row"
                component={TextField}
                name="email"
                type="email"
                margin="normal"
                variant="outlined"
                size="small"
                onChange={handleChange}
                value={values.email}
            />
            <Box margin={1}>
                <Button
                    className="row submit-btn"
                    onClick={handleSubmit}
                >CONTINUE</Button>
            </Box>
        </Form>
    </div>
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
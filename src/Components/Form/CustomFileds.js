import React, { Fragment } from 'react';
import { Field } from 'formik';
import { TextField, Select} from 'formik-material-ui';
import { MenuItem, InputLabel } from '@material-ui/core';

export const CustomTextField = ({ name = "", handleChange, value = "", inputLabel = "", type = "text" }) => (
    <Fragment>
        <InputLabel id={name}>{inputLabel}</InputLabel>
        <Field
            className="field"
            component={TextField}
            name={name}
            type={type}
            margin="normal"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={value}
        />
    </Fragment>
)

export const CustomSelectField = ({ name = "", handleChange, value = "", menuItems = [], inputLabel = "" }) => (
    <Fragment>
        <InputLabel id={name}>{inputLabel}</InputLabel>
        <Field
            component={Select}
            className="field"
            variant="outlined"
            labelId="country"
            name={name}
            onChange={handleChange}
            value={value}
        >
            {menuItems.map(each => (<MenuItem value={each.value}>{each.label}</MenuItem>))}
        </Field>
    </Fragment>
)


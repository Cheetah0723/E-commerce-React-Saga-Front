import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

export default function CheckoutReview({ shippingFee, onBack, buyerInfo }) {

    return (
        <div className="check-out-shipping-payment">
            <Grid container
                spacing={3}
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item key="contact-confirm">
                    <Grid container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Grid item key="label">Contact</Grid>
                        <Grid item key="value">

                            <Grid container
                                spacing={2}
                                direction="column"
                                justify="center"
                                alignItems="flex-start"
                                pr={10}
                            >
                                <Grid item key="email-confirmation">
                                    First Name: {buyerInfo !== undefined ? buyerInfo.fName : ""}
                                </Grid>
                                <Grid item key="email-confirmation">
                                    Last Name: {buyerInfo !== undefined ? buyerInfo.lName : ""}
                                </Grid>
                                <Grid item key="email-confirmation">
                                    Contact Number: {buyerInfo !== undefined ? buyerInfo.phone : ""}
                                </Grid>
                                <Grid item key="email-confirmation">
                                    Email: {buyerInfo !== undefined ? buyerInfo.email : ""}
                                </Grid>
                            </Grid>
                            <Grid item key="streetAddress-confirmation">
                                Street Address:{buyerInfo !== undefined ? buyerInfo.streetAddress : ""}
                            </Grid>
                            <Grid item key="suburb-confirmation">
                                Suburb:{buyerInfo !== undefined ? buyerInfo.suburb : ""}
                            </Grid>
                            <Grid item key="state-confirmation">
                                State:{buyerInfo !== undefined ? buyerInfo.state : ""}
                            </Grid>
                            <Grid item key="postcode-confirmation">
                                Postcode:{buyerInfo !== undefined ? buyerInfo.postcode : ""}
                            </Grid>
                            <Grid item key="country-confirmation">
                                Country:{buyerInfo !== undefined ? buyerInfo.country : ""}
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid item key="change-button">
                        <Button onClick={onBack}>Change</Button></Grid>
                </Grid>
            </Grid>
            <Grid item key="address-confirm">
                <Grid item key="label">

                    
                </Grid>
                <Grid item key="value"></Grid>
                <Grid item key="change-button"></Grid>
            </Grid>
            <Grid item key="shipping-confirm">
                <Grid item key="label">Method</Grid>
                <Grid item key="value">Shipping・${shippingFee}.00</Grid>
            </Grid>
      
        </div>
    );
}

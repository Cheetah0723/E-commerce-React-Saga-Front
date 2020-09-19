import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SNSIcons from './SNSIcons';
import CreditCardIcons from './CreditCardIcons';
import FooterSignUp from './FooterSignUp';
import Currency from "../Currency/Currency"

//import PropTypes from 'prop-types'

const Footer = () => {

    return (
        <div className="Footer">
            <FooterSignUp />
            <div className="row logo">Title</div>
            <div className="footer-menu">
                <Grid container
                    direction="row"
                    justify="center"
                    style={{ alignItems: "center" }}
                    className="footer-items"
                >
                    <Grid className="footer-item-1" item className="col-1">
                        <p>FAQ</p>
                        <p>DELIVERY</p>
                        <p>RETURN</p>
                        <p>SIZE GUIDES</p>
                    </Grid>
                    <Grid className="footer-item-2" item className="col-2">
                        <p>SHOP ALL</p>
                        <p>SALES</p>
                        <p>SHOP INSTA</p>
                    </Grid>
                    <Grid className="footer-item-3" item className="sns-icons">
                        <SNSIcons />
                        <Grid item></Grid>
                    </Grid>
                </Grid>
                <Divider style={{ marginTop: "40px" }} />
                <div className="row center-align"> <Currency /></div>
                <div className="row center-align"><CreditCardIcons /> </div>
            </div>
        </div>
    );

}

export default Footer;
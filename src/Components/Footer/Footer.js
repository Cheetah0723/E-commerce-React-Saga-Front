import React from 'react';
import Divider from '@material-ui/core/Divider';
import SNSIcons from './SNSIcons';
import CreditCardIcons from './CreditCardIcons';
import FooterSignUp from './FooterSignUp';
import Currency from '../Currency/Currency';
import { Row, col } from 'react-bootstrap';
//import PropTypes from 'prop-types'

const Footer = () => {

    return (
        <div className="Footer">
            <FooterSignUp />
            <div className="row logo">Title</div>
            <div className="footer-menu">
                <Row>
                    <col xs lg="2">FAQ</col>
                    <col xs lg="2">SHOP ALL</col>
                </Row>
                <Row>
                    <col xs lg="2">DELIVERY</col>
                    <col xs lg="2">SALES</col>
                </Row>
                <Row>
                    <col xs lg="2">RETURN</col>
                    <col xs lg="2">SIZE GUIDES</col>
                </Row>
                <SNSIcons />
                <Divider style={{ marginTop: "40px" }} />
                 <Currency />
                <div className="row center-align"><CreditCardIcons /> </div>
            </div>
        </div>
    );

}

export default Footer;
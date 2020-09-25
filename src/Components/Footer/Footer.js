import React from 'react';
import Divider from '@material-ui/core/Divider';
import SNSIcons from './SNSIcons';
import CreditCardIcons from '../Header/specs/CreditCardIcons';
import FooterSignUp from './FooterSignUp';
import Currency from '../Currency/Currency';
import { Row, Col, Container } from 'react-bootstrap';
//import PropTypes from 'prop-types'

const Footer = () => {

    return (
        <div className="Footer">
            <FooterSignUp />
            <div className="row logo">Title</div>
            <Container>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={2}>FAQ</Col>
                    <Col xs={2}>SHOP ALL</Col>
                    <Col xs={4}></Col>
                </Row>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={2}>DELIVERY</Col>
                    <Col xs={2}>SALES</Col>
                    <Col xs={4}></Col>
                </Row>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={2}>RETURN</Col>
                    <Col xs={2}>SIZE GUIDES</Col>
                    <Col xs={4}></Col>
                </Row>
                <Row>
                    <Col xs={5}></Col>
                    <SNSIcons />
                    <Col xs={5}></Col>
                </Row>
                <Divider style={{ marginTop: "40px" }} />
                <Row>
                    <Col xm={4}></Col>
                    <Currency />
                    <Col xm={4}></Col>
                </Row>
                <Row>
                    <Col xs={5}></Col>
                    <CreditCardIcons />
                    <Col xs={5}></Col>
                </Row>
            </Container>
        </div>
    );

}

export default Footer;
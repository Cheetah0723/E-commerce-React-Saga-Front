import React from 'react';
import Divider from '@material-ui/core/Divider';
import FooterSignUp from './FooterSignUp';
import Currency from '../Currency/Currency';
import { Row, Col, Container } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Footer = () => {

    return (
        <div className="Footer">
            <FooterSignUp />
     
                <p style={{textAlign:"center"}}>LOGO</p>
              
            <Container>
                <Row>
                    <Col xs={4}></Col>
                    <Col xs={2}>FAQ</Col>
                    <Col xs={2}>SHOP</Col>
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
                    <Col xs={2}>SIZE</Col>
                    <Col xs={4}></Col>
                </Row>
                <Row>
                    <Col xs={3} md={5}></Col>
                    <Icon style={{ marginRight: "20px" }} name='facebook f' size='large' />
                    <Icon style={{ marginRight: "20px" }} name='twitter' size='large' />
                    <Icon style={{ marginRight: "20px" }} name='instagram' size='large' />
                    <Icon style={{ marginRight: "20px" }} name='youtube play' size='large' />
                    <Col xs={3} md={5}></Col>
                </Row>
                <Divider style={{ marginTop: "40px" }} />
                <Row>
                    <Col xm={4}></Col>
                    <Currency />
                    <Col xm={4}></Col>
                </Row>
                <Row>
                    <Col xs={2} md={5}></Col>
                    <Icon style={{ marginRight: "20px" }} name='cc visa' size='big' />
                    <Icon style={{ marginRight: "20px" }} name='cc mastercard' size='big' />
                    <Icon style={{ marginRight: "20px" }} name='cc jcb' size='big' />
                    <Icon style={{ marginRight: "20px" }} name='cc amex' size='big' />
                    <Icon style={{ marginRight: "20px" }} name='cc paypal' size='big' />
                    <Col xs={2} md={5}></Col>
                </Row>
            </Container>
        </div>
    );

}

export default Footer;
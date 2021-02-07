import React from 'react';
import Divider from '@material-ui/core/Divider';
import FooterSignUp from './FooterSignUp';
import CurrencyHOC from '../Currency/CurrencyHOC';
import { Row, Col, Container } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Footer = () => (
    <div className="Footer">
        <FooterSignUp />
            <Row>
                <Col xs={3} md={5}></Col>
                <Icon style={{ marginRight: "20px" }} name='facebook f' size='large' />
                <Icon style={{ marginRight: "20px" }} name='twitter' size='large' />
                <Icon style={{ marginRight: "20px" }} name='instagram' size='large' />
                <Icon style={{ marginRight: "20px" }} name='youtube play' size='large' />
                <Col xs={3} md={5}></Col>
            </Row>
            <Divider style={{ marginTop: "40px" }} />
    </div>
);



export default Footer;
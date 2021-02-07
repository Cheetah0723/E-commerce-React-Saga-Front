import React from 'react';
import Divider from '@material-ui/core/Divider';
import FooterSignUp from './FooterSignUp';
import { Row, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => (
    <div className="Footer">
        <FooterSignUp />
        <Row className="sns-icon-group">
            <Col className="ml-auto"></Col>
            <FacebookIcon className="sns-icon" />
            <TwitterIcon className="sns-icon" />
            <InstagramIcon className="sns-icon" />
            <YouTubeIcon className="sns-icon" />
            <Col className="ml-auto"></Col>
        </Row>
        <Divider style={{ marginTop: "40px" }} />
    </div>
);



export default Footer;
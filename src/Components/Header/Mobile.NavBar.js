import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col } from 'react-bootstrap';
import Cart from "../Cart/CartIcon";

const MobileNavBar = ({ openDrawer, closeDrawer }) => (
    <div className="mobile-nav-bar">
        <Navbar bg="light" variant="light">
            <Col xs={2}>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
            </Col>
            <Col xs={7}>
                <Nav className="nav-bar-links" className="ml-auto">
                    <Nav.Link href="/all">Shop All</Nav.Link>
                    <Nav.Link href="/sales">Shop Sales</Nav.Link>
                </Nav>
            </Col>
            <Col xs={3}>
                <Cart className="float-right" onClick={openDrawer} close={closeDrawer} className="mr-sm-2" />
            </Col>
        </Navbar>
    </div>
);

export default MobileNavBar;
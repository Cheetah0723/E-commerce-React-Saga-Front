import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col } from 'react-bootstrap';
import Cart from "../Cart/CartIcon";

const MobileNavBar = ({ openDrawer, closeDrawer }) => (
    <div className="nav-bar">
        <Navbar bg="light" variant="light">
            <Col xs={1}>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
            </Col>
            <Col xs={7}>
                <Nav className="nav-bar-links" className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/all">Shop All</Nav.Link>
                    <Nav.Link href="/sales">Shop Sales</Nav.Link>
                </Nav>
            </Col>
            <Col xs={2}>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Col>
            <Col xs={2}>
                <Cart className="float-right" onClick={openDrawer} close={closeDrawer} className="mr-sm-2" />
            </Col>
        </Navbar>
    </div>
);

export default MobileNavBar;
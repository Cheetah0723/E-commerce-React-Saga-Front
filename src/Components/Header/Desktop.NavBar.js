import React from 'react';
import { Navbar, Nav, Form, FormControl, Button,Col } from 'react-bootstrap';
import Cart from "../Cart/CartIcon";

const DesktopNavBar = ({ openDrawer, closeDrawer }) => (
    <div className="nav-bar">
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Col xs={5}>
            <Nav className="nav-bar-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/all">Shop All</Nav.Link>
                <Nav.Link href="/sales">Shop Sales</Nav.Link>
            </Nav>
            </Col>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
            </Form>
            <Col xs={2}>
            <Cart onClick={openDrawer} close={closeDrawer} className="mr-sm-2"/>
            </Col>
        </Navbar>
    </div>
);

export default DesktopNavBar;
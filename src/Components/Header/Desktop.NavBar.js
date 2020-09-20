import React from 'react';
import { Navbar, Nav, Form, FormControl, Button,Col } from 'react-bootstrap';
import Cart from "../Cart/CartIcon";

const DesktopNavBar = ({ openDrawer, closeDrawer }) => (
    <div className="nav-bar">
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Col xs={8}>
            <Nav className="nav-bar-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/all">Shop All</Nav.Link>
                <Nav.Link href="/sales">Shop Sales</Nav.Link>
            </Nav>
            </Col>
            <Col xs={4}>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                <Cart onClick={openDrawer} close={closeDrawer} />
            </Form>
            </Col>
        </Navbar>
    </div>
);

export default DesktopNavBar;
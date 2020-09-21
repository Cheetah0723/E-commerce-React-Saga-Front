import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col } from 'react-bootstrap';
import Cart from "../Cart/CartIcon";

const MobileNavBar = ({ openDrawer, closeDrawer }) => (
    <div className="mobile-nav-bar">
        <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Nav className="nav-bar-links" className="ml-auto">
                    <Nav.Link href="/all">Shop</Nav.Link>
                    <Nav.Link href="/sales">Sales</Nav.Link>
                </Nav>
                <Cart className="float-right" onClick={openDrawer} close={closeDrawer} className="mr-sm-2" />
        </Navbar>
    </div>
);

export default MobileNavBar;
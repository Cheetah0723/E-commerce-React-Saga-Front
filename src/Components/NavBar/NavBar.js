import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CurrencyHOC from "../Currency/CurrencyHOC"

const NavBar = ({ openDrawer }) => (
    <Navbar className="nav-bar" bg="light" variant="light">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Nav className="nav-bar-links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/all">Shop</Nav.Link>
            <Nav.Link href="/sales">Sales</Nav.Link>
        </Nav>
        <Form inline className="ml-auto">
            <CurrencyHOC />
            <div className="cart-icon  mr-sm-3" onClick={openDrawer} >
                <ShoppingCartIcon />
                <p>My Cart</p>
            </div>
        </Form>
        <div className="mobile-menu">
            
        </div>
    </Navbar>
);

export default NavBar;

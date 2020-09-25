import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MobileNavBar = ({ openDrawer, closeDrawer }) => (
    <div className="mobile-nav-bar">
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="nav-bar-links" className="ml-auto">
                <Nav.Link href="/all">Shop</Nav.Link>
                <Nav.Link href="/sales">Sales</Nav.Link>
            </Nav>
            <div className="cart-icon mr-sm-2" onClick={openDrawer} >
                <ShoppingCartIcon />
                <p>My Cart</p>
            </div>
        </Navbar>
    </div>
);

export default MobileNavBar;
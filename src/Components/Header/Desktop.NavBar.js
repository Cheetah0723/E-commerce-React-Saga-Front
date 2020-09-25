import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Col } from 'react-bootstrap';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchBox from "./SearchBox"

const DesktopNavBar = ({ openDrawer, closeDrawer, search }) => (
    <div className="nav-bar">
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Nav className="nav-bar-links">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/all">Shop</Nav.Link>
                <Nav.Link href="/sales">Sales</Nav.Link>
            </Nav>
            <Form inline className="ml-auto">
                <SearchBox className="mr-sm-3" onClick={search}/>
                <div className="cart-icon  mr-sm-3" onClick={openDrawer} >
                    <ShoppingCartIcon />
                    <p>My Cart</p>
                </div>
            </Form>
        </Navbar>
    </div>
);

export default DesktopNavBar;
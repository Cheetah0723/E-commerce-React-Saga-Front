import React from 'react';
import { Navbar, Nav, NavLink, Form } from 'reactstrap';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import history from "../../history"
import CurrencyHOC from "../Currency/CurrencyHOC"
import CartIcon from "./CartIcon"

const navLinks = [{ href: "/", label: "Home" }, { href: "/all", label: "Shop" }, { href: "/sales", label: "Sales" }]

const NavBar = ({ openDrawer }) => {

    return (
        <Navbar className="nav-bar" bg="light" variant="light">
            <MobileMenu handleClick={openDrawer} />
            <Nav className="nav-bar-links">
                {navLinks.map(each => (<NavLink key={each.label} href={each.href}>{each.label}</NavLink>))}
            </Nav>
            <Form inline className="ml-auto desktop">
                <CurrencyHOC />
                <CartIcon handleClick={openDrawer} />
            </Form>
            <div className="ml-auto mobile-menu"><CartIcon handleClick={openDrawer} /></div>
        </Navbar>
    )
}

const MobileMenu = () => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div id="mobile-menu-logo">
            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <MenuIcon />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList style={{ zIndex: 10, backgroundColor: "white"}} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {navLinks.map(each => (<MenuItem onClick={() => history.push(each.href)}>{each.label}</MenuItem>))}
                                    <MenuItem><CurrencyHOC /></MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default NavBar;
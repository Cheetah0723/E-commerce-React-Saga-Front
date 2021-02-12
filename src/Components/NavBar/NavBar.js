import React from 'react';
import { Navbar, Nav, NavbarBrand, NavLink, Form } from 'reactstrap';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import history from "../../history"
import CurrencyHOC from "../Currency/CurrencyHOC"
import Cart from "./CartIcon"

const NavBar = ({ openDrawer }) => (
    <Navbar className="nav-bar" bg="light" variant="light">
        <MobileMenu handleClick={openDrawer} />
        <NavbarBrand className="logo" href="/">Logo</NavbarBrand>
        <Nav className="nav-bar-links">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/all">Shop</NavLink>
            <NavLink href="/sales">Sales</NavLink>
        </Nav>
        <Form inline className="ml-auto desktop">
            <CurrencyHOC />
            <Cart handleClick={openDrawer} />
        </Form>
        <div className="ml-auto mobile-menu"><Cart handleClick={openDrawer} /></div>
    </Navbar>
);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

const MobileMenu = () => {
    const classes = useStyles();
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
        <div className={classes.root} id="mobile-menu-logo">
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
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={() => history.push("/")}>Home</MenuItem>
                                    <MenuItem onClick={() => history.push("/all")}>Shop</MenuItem>
                                    <MenuItem onClick={() => history.push("/sales")}>Sales</MenuItem>
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
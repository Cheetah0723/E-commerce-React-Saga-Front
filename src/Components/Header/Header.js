import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartDrawer from "../Cart/CartDrawer";
import Divider from '@material-ui/core/Divider';
import NavBar from "./NavBar"

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
        marginRight: theme.spacing(2),
    },
    control: {
        padding: theme.spacing(2),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: "white"
    },
    shiftTextLeft: {
        marginRight: '330px',
        backgroundColor: "white"
    },
    shiftTextRight: {
        marginRight: '0px',
        backgroundColor: "white"
    }
}));

export default function HeaderContainer() {
    const classes = useStyles();

    const [openCartDrawer, setOpenCartDrawer] = useState(false);

    return (
        <div className={openCartDrawer ? classes.shiftTextLeft : classes.shiftTextRight}>
            <main >
                <NavBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />
                <Divider />
                <p className="Promo">FREE SHIPPING FOR ORDERS OVER $99</p>
                <Divider />
            </main>
            <CartDrawer openStatus={openCartDrawer} open={() => { setOpenCartDrawer(true) }}
                close={() => { setOpenCartDrawer(false) }} key="cart-drawer" />
        </div>
    )
}

//Deprecated Search function
/**
 *  {invalidSearch && <Grid item><b>No results.</b><br />
                    Try checking your spelling or use more general terms.</Grid>}
 */
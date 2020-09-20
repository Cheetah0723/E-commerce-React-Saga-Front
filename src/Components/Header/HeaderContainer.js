import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Promo from './Promo';
import CartDrawer from "../Cart/CartDrawerContainer";
import Divider from '@material-ui/core/Divider';
import DesktopNavBar from "./Desktop.NavBar"
import MobileNavBar from "./Mobile.NavBar"
import { selectProductsInCart } from '../Selectors';

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

export default function HeaderContainer(props) {
    const classes = useStyles();

    const [openCartDrawer, setOpenCartDrawer] = useState(false);
    const [invalidSearch, setInvalidSearch] = useState(false);


    //  const itemsInCart = useSelector(selectProductsInCart)

    // <ToolBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />
    // <MobileToolBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />

    return (
        <div className={openCartDrawer ? classes.shiftTextLeft : classes.shiftTextRight}>
            <main >
                <DesktopNavBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />
                <MobileNavBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />
                <div className={classes.root}>

                </div>
                <Divider />
                {invalidSearch && <Grid item><b>No results.</b><br />
                    Try checking your spelling or use more general terms.</Grid>}
                <Grid item xs={12}>
                    <Promo style={{ marginTop: "50px" }} />
                </Grid>
                <Divider />
            </main>
            <CartDrawer openStatus={openCartDrawer} open={() => { setOpenCartDrawer(true) }}
                close={() => { setOpenCartDrawer(false) }} key="cart-drawer" />
        </div>
    )
}
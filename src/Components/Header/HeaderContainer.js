import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

    const search = () => {

    }

    //  const itemsInCart = useSelector(selectProductsInCart)


    return (
        <div className={openCartDrawer ? classes.shiftTextLeft : classes.shiftTextRight}>
            <main >
                <DesktopNavBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} search={search} />
                <MobileNavBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />
                <Divider />
                {invalidSearch && <Grid item><b>No results.</b><br />
                    Try checking your spelling or use more general terms.</Grid>}
                <p className="Promo">FREE SHIPPING FOR ORDERS OVER $99</p>
                <Divider />
            </main>
            <CartDrawer openStatus={openCartDrawer} open={() => { setOpenCartDrawer(true) }}
                close={() => { setOpenCartDrawer(false) }} key="cart-drawer" />
        </div>
    )
}
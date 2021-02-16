import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Button } from '@material-ui/core';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import Cart from './Cart';

const drawerWidth = 330;

const useStyles = makeStyles(theme => ({
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,  // この幅の横に、mainがレイアウトされる。
            flexShrink: 0,   // !!! これが無いと main が Drawer の下に入り込んでしまう
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}));

export default function CartDrawerContainer({ openStatus, close }) {
    const classes = useStyles();

    return (
        <Drawer
            key="drawer"
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={openStatus}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <CloseSharpIcon className="close-cart-icon" onClick={close} />
            <p className="cart-title" pl={1} >YOUR BAG</p>
            <Cart showButton={true} id="cart" />
            <Button onClick={close} id="cart-btn"  >CONTINUE SHOPPING</Button>
            <br />
        </Drawer>
    );
}






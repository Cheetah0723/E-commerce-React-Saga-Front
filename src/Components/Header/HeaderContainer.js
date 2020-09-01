import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Promo from './Promo';
import ToolBar from './ToolBar';
import CartDrawer from "../Cart/CartDrawerContainer";
import clsx from 'clsx';
import { useStore } from 'react-redux'
import Divider from '@material-ui/core/Divider';
import MobileToolBar from './MobileToolBar';

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

    const store = useStore();

    function select(state) {
        //TODO we want to access the addedItems here.
        return state.CartReducer.addedItems; //TODO very strange hereZZZZZZZ
    }

    let itemsInStore = []

    function handleChange() {
        if (store.state !== undefined && select(store.state) !== [] && select(store.state) !== undefined) {
            itemsInStore = select(store.getState());
            //TODO pass this to the search method if no error is detected
        }
    }

    let headerMounted = false;
    useEffect(() => {
        headerMounted = true;
        if (headerMounted) {
            store.subscribe(handleChange);
            return () => headerMounted = false;
        }
    }, [select(store.getState())])

    return (
        <div className={openCartDrawer ? classes.shiftTextLeft : classes.shiftTextRight}>
            <main className={clsx(classes.content, {
                [classes.contentShift]: openCartDrawer,
            })}>
                <div className={classes.root}>
                    <ToolBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />
                    <MobileToolBar openDrawer={() => { setOpenCartDrawer(true) }} closeDrawer={() => setOpenCartDrawer(false)} />
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
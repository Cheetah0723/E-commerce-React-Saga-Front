import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ProductList from '../Components/ProductList/ProductList';
import InstaController from '../Components/InstagramTile/InstaController';
import { Button } from '@material-ui/core';
import HeaderContainer from '../Components/Header/HeaderContainer';
import HomepageController from "./HomepageController"
import './Homepage.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        width: "100%",
    },
}));

export default function Homepage() {

    const classes = useStyles();
    const {viewAll, displayData} = HomepageController()

    return (
        <div className="Homepage">
            <HeaderContainer />
            <div className="hp-promotion-image" style={{ position: "relative" }}>
                <div className="centered-title" ><b>BUILD YOUR LEGACY</b></div>
                <div className="centered-text" >Lift like the legends in authentic bodybuilding cuts.</div>
                <Button className="view-all-btn" onClick={viewAll}
                    style={{
                        position: "absolute",
                        top: "58%",
                        left: "10%",
                        color: "white",
                        fontSize: "16px",
                        backgroundColor: "black",
                        width: "120px",
                        marginLeft: "10px",
                        borderRadius: "25px",
                        fontFamily: "'Montserrat', sans-serif",
                    }}><b>SHOP</b></Button>
                <img className="sub-image" src={require('../product-photos/hp-photo-3.jpeg')} alt="hp-top" />
                <img className="mobile-sub-image" src={require('../product-photos/hp-photo-3-mobile.jpeg')} alt="hp-top" />

            </div>
            <div className="hp-new-release" style={{ marginTop: "60px", }}>
                <Grid container
                    className={classes.root}
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    <Grid item xs={4}>
                        <b className="womens"> WOMENS</b>
                        <br />
                        <b className="new-release">NEW RELEASES</b>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={2}><p className="view-all-link" onClick={viewAll}>View All</p></Grid>
                </Grid>
                <div className="hp-new-releases">
                    <ProductList style={{ marginLeft: "60px", marginRight: "60px" }} display={displayData} numEachRow={4} />
                </div>
            </div>
            <div className="hp-insta-slider" style={{ marginTop: "60px" }}>
                <div style={{ textAlign: "center", }}>
                    <p style={{ fontSize: "25px" }} >AS SEEN ON INSTAGRAM</p>
                    <p style={{ fontSize: "16px" }}>Shop our favourite looks here</p></div>
                <InstaController style={{ width: "100%" }} />
            </div>
        </div>
    );
}
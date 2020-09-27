import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProductList from '../Components/Product/ProductList';
import InstaController from '../Components/InstagramTile/InstaController';
import { Button } from '@material-ui/core';
import { findNewReleases } from '../Actions/search.action';
import history from '../history';

export default function Homepage() {
    const displayData = findNewReleases()

    return (
        <div className="Homepage">
            <div className="hp-promotion-image">
                <div className="centered-title" ><b>BUILD YOUR LEGACY</b></div>
                <div className="centered-text" >Lift like the legends in authentic bodybuilding cuts.</div>
                <Button className="view-all-btn" onClick={() => history.push("/all")}
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
                <img className="sub-image" src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/hp-photo-3.jpeg" alt="hp-top" />
                <img className="mobile-sub-image" src="https://my-ec-react.s3-ap-southeast-2.amazonaws.com/product-photos/hp-photo-3-mobile.jpeg" alt="hp-top" />
            </div>
            <div className="hp-new-release">
                <Grid container
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
                    <Grid item xs={2}><p className="view-all-link" onClick={() => history.push("/all")}>View All</p></Grid>
                </Grid>
                <div className="hp-list">
                    <ProductList display={displayData} />
                </div>
                <div className="hp-insta-slider" style={{ marginTop: "60px" }}>
                    <div style={{ textAlign: "center", }}>
                        <p style={{ fontSize: "25px" }} >AS SEEN ON INSTAGRAM</p>
                        <p style={{ fontSize: "16px" }}>Shop our favourite looks here</p></div>
                    <InstaController style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    );
}


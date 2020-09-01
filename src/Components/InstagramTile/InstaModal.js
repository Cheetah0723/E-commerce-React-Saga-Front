import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import ProductContainer from '../Product/ProductContainer';
import AddToCartButton from '../ProductDetail/AddToCartButton';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "800px",
        maxHeight: "800px",

    },

    img: {
        marginLeft: "30%",
    },

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    description: {
        textAlign: "center",
        fontSize: "14px",
        fontFamily: "roboto",
        marginTop: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        marginButtom: "20px",

    },
    sns: {
        marginTop: "20px",
        marginButtom: "20px",
    }
}));

const containerSize = {
    width: '160px',
    height: '160px',
    alignItems: "center",
};

const buttonStyle = {
    paddingTop: 10, marginTop: 10, borderRadius: "25px", width: "100%", alignItems: "center",
    color: "white", backgroundColor: "black", fontFamily: "'Montserrat', sans-serif",
};

export default function InstaModal({ openStatus, handleClose, instaImg, product, description, handleAddToCart }) {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openStatus}
            onClose={handleClose}
        >
            <div className={classes.paper}>
                <Grid container
                    direction="row"
                    justify="center"
                    className={classes.root}
                >
                    <Grid item xs={6} key="left"
                    >
                        <img className="sub-image" src={require('../../' + instaImg)} alt="insta-left"
                            style={{
                                width: '100%',
                            }} />
                    </Grid>
                    <Grid item xs={6} key="right">
                        <Grid item xs={6} className={classes.img}>
                            <ProductContainer className={classes.img} key={0} containerSize={containerSize} props={product} />
                            <AddToCartButton onAddToCart={handleAddToCart} style={buttonStyle} />
                        </Grid>
                        <div className={classes.description}>
                            {description}<br /></div>

                    </Grid>
                </Grid>
            </div>
        </Modal>
    );
}

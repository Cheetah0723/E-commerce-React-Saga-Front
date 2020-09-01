

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ReviewForm from "./ReviewForm"
import "./ReviewModal.css"

const useStyles = makeStyles((theme) => ({
    modal: {
        backgroundColor: theme.palette.background.paper,
        paddingTop:"80px",
        maxWidth: "1400px",
        overflow: "scroll",
        alignItems: 'center',
        justifyContent: 'center',
        width:"600px",
        marginLeft:"30%"
    },
}));

export default function ReviewModal({ productName, openStatus, handleClose, productId }) {
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
                <ReviewForm productName={productName} productId={productId}
                    initialState=""
                />
            </div>
        </Modal>
    );
}





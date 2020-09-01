import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({


    modal: {
        width: "40%",
        maxHeight: "800px",
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
    button: {
        paddingTop: 10, marginTop: 10, borderRadius: "25px", width: "100%", alignItems: "center",
        color: "white", backgroundColor: "black", fontFamily: "'Montserrat', sans-serif",
    },
}));


export default function SignUpModal(props) {
    const classes = useStyles();


const signupInfo = ""
const change=()=>{}

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={props.openStatus}
            onClose={props.handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.openStatus}>
                <div className={classes.paper}>
                    <Grid container
                        direction="column"
                        justify="center"
                        className={classes.root}
                    >
                        <Grid item key="title"
                        >
                            <p>GET NEWS AND OFFERS FROM TITLE</p>
                        </Grid>
                        <Grid item key="description">
                            <p> Sign up for emails to get special news and offers<br /> from the Nike family of brands.</p>
                        </Grid>
                        <form key="checkout-info-form" >
                            <Grid item key="email-grid"   >
                                <TextField
                                    error={signupInfo!==undefined && signupInfo.emailError !== "" ? true : false}
                                    id="email"
                                    name="email"
                                    label="Email*"
                                    onChange={e => change(e)}
                                    helperText={signupInfo.emailError}
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item key="dob-and-preference">
                                <Grid container
                                    direction="row"
                                    justify="center"
                                    className={classes.root}
                                >
                                    <Grid item xs={6} key="dob">


                                    </Grid>
                                    <Grid item xs={6} key="preference">
                                        bottom group
                                    </Grid>
                                </Grid>
                                <Button className={classes.button}>Signup</Button>

                            </Grid>

                        </form>


                    </Grid>
                </div>
            </Fade>
        </Modal>
    );
}


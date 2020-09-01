import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function PromoCode() {
    const classes = useStyles();

    return (
        <Grid container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="flex-start"
        >
            <Grid item>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="filled-basic" label="Discount Code" variant="filled" />
                    <Button>APPLY</Button>
                </form>
            </Grid>
        </Grid>
    );
}
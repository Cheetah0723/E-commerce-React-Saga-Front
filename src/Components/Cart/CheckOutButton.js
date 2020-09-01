import React from 'react';
import Button from '@material-ui/core/Button';

function CheckOutButton({ onCheckOut }) {

    return (
        <Button style={{ width: 260 }} onClick={onCheckOut}>Check Out→</Button>
    );


}

export default CheckOutButton;
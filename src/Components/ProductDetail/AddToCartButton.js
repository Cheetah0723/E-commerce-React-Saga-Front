import React from 'react';
import Button from '@material-ui/core/Button';

const style = {
    paddingTop: 10, height: "4rem",
    marginTop: 10, borderRadius: "25px", color: "white", backgroundColor: "#007db5"
};
const AddToCartButton = ({ onAddToCart }) => {
    return <Button variant="outlined"
        onClick={onAddToCart}
        style={style}><b>Add to Cart</b></Button>
}

export default AddToCartButton;
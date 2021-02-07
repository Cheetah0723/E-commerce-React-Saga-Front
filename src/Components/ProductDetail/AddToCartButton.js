import React from 'react';
import Button from '@material-ui/core/Button';

const AddToCartButton = ({ onAddToCart }) => (
    <Button variant="outlined" id="add-to-cart-btn" onClick={onAddToCart}><b>Add to Cart</b> </Button>
)

export default AddToCartButton;
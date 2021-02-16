import React, { Fragment } from 'react';
import { useSelector } from "react-redux"
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { selectTotalQuantity } from "../Selectors"

export const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const Cart = ({ handleClick }) => {
    const totalItemQuantity = useSelector(selectTotalQuantity)

    return (<div className="cart-icon  mr-sm-3" onClick={handleClick} >
        {
            totalItemQuantity > 0 ? (
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={totalItemQuantity} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>)
                : <Fragment>
                    <ShoppingCartIcon />
                    <p>My Cart</p>
                </Fragment>
        }
    </div>)
}

export default Cart 
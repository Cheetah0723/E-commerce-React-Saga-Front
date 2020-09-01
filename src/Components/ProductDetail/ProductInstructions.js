import React from 'react';
import List from '@material-ui/core/List';
import EachProductInstruction from "./EachProductInstruction";
import { Divider } from '@material-ui/core';

const Detail = {
    title: "Detail",
    body: " Combining our signature seamless knit with superior, sculpting design.• Figure - enhancing contours• Elasticated jacquard waistband• DRY technology• 56 % Nylon, 41 % Polyester, 3 % Elastane• Model is 5'5"
};


const Care = {
    title: "Care",
    body: "Machine wash or hand wash with cold water. Do not dry clean it."
}

const Delivery = {
    title: "Delivery",
    body: "Free shipping for orders over 99AUD. Internatonal shipping available."
}

const ProductInstruction = () => {
    return (
        <List
            style={{ textAlign: "center", alignItems: "center" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <Divider />
            <EachProductInstruction props={Detail} />
            <Divider />
            <EachProductInstruction props={Care} />
            <Divider />
            <EachProductInstruction props={Delivery} />
            <Divider/>
        </List>
    )

}

export default ProductInstruction;
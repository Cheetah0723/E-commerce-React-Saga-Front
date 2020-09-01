import React from 'react';
import ProductInstructions from "../ProductInstructions"
import renderer from 'react-test-renderer';


it.skip('renders correctly', () => {
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
    const component = renderer.create(<ProductInstructions />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
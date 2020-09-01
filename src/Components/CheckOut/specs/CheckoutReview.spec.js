import React from 'react';
import renderer from 'react-test-renderer';
//import CheckoutReview from "../CheckoutReview"

it('renders correctly', () => {
    const buyerInfo = {
        email: "test email",
        fName: "test fName",
        lName: "test lName",
        streetAddress: "test street address",
        suburb: "test suburb",
        postcode: "test postcode",
        state: "test state",
        country: "test country"
    }

    const test = (arg) => { console.log(arg) }

 //   const component = renderer.create(<CheckoutReview shippingFee={10}
   //     onBack={test} buyerInfo={buyerInfo} />);
//    let tree = component.toJSON();
 //   expect(tree).toMatchSnapshot();
});

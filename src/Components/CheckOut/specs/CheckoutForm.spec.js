import React from 'react';
import CheckoutForm from "../CheckoutForm"
import renderer from 'react-test-renderer';

describe.skip("CheckoutForm", () => {
    it('renders correctly', () => {
        const test = (arg) => { console.log(arg) }
        const component = renderer.create(<CheckoutForm submit={test}
            register={test} handleSubmit={test} errors={[]}
        />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
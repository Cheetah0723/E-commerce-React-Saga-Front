import PaymentForm from "../PaymentForm"
import React from 'react';
import renderer from 'react-test-renderer';

describe.skip("PaymentForm", () => {
it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<PaymentForm handleChange={test} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
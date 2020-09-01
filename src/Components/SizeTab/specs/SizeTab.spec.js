import React from 'react';
import SizeTab from "../SizeTab"
import renderer from 'react-test-renderer';

describe.skip("CheckoutForm", () => {
it('renders correctly', () => {
    const component = renderer.create(<SizeTab/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
import React from 'react';
import CreditCardIcons from "../CreditCardIcons"
import renderer from 'react-test-renderer';

describe.skip("CreditCardIcons", () => {
it('renders correctly', () => {
    const component = renderer.create(<CreditCardIcons />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
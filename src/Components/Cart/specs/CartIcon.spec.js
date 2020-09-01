import React from 'react';
import CartIcon from "../CartIcon"
import renderer from 'react-test-renderer';

describe.skip("CartIcon", () => {
    it('renders correctly', () => {
        const test = (arg) => { console.log(arg) }
        const component = renderer.create(<CartIcon onClick={test} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})

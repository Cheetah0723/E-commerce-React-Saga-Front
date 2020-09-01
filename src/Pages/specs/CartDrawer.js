import CartDrawer from "../CartDrawer"
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<CartDrawer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

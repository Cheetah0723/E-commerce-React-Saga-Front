import React from 'react';
import AddToCartButton from "../AddToCartButton"
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<AddToCartButton onAddToCart={test} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})


//TODO failed
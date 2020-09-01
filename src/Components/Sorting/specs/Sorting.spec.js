import React from 'react'
import Sorting from "../Sorting"
import renderer from 'react-test-renderer'

describe.skip("CheckoutForm", () => {
it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<Sorting onSort={test} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
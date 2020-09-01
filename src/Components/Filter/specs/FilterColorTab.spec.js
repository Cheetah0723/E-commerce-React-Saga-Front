import React from 'react'
import FilterColorTab from "../FilterColorTab"
import renderer from 'react-test-renderer'

describe.skip("CheckoutForm", () => {
it('renders correctly', () => {
    const test = (arg) => {console.log(arg) }
    const component = renderer.create(<FilterColorTab onSelect={test} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
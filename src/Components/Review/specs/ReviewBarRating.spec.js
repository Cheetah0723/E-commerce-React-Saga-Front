import React from 'react'
import ReviewBarRating from "../ReviewBarRating"
import renderer from 'react-test-renderer'

describe.skip("CheckoutForm", () => {
it('renders correctly', () => {
    const test = (arg) => {console.log(arg) }
    const component = renderer.create(<ReviewBarRating  handleClick={test} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
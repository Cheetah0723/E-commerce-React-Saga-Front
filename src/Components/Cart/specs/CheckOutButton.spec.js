import React from 'react';
import CheckOutButton from "../CheckOutButton"
import renderer from 'react-test-renderer';

describe.skip("CheckOutButton", () => {
it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<CheckOutButton onCheckOut={test} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
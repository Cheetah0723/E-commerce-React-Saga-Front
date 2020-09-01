import React from 'react';
import InstaTileView from "../InstaTileView"
import renderer from 'react-test-renderer';

describe.skip("InstaTileView", () => {
it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<InstaTileView handleClick={test}
    />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})


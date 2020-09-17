import React from 'react';
import FilterView from "../container.filter"
import renderer from 'react-test-renderer';

describe.skip("FilterView", () => {
it('renders correctly', () => {
    const test = (arg) => {console.log(arg) }
    const component = renderer.create(<FilterView handleFilter={test} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
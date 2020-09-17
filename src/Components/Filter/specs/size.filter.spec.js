import React from 'react';
import FilterSizeTab from "../size.filter"
import renderer from 'react-test-renderer';

describe.skip("FilterSizeTab", () => {
    it('renders correctly', () => {
        const test = (arg) => { console.log(arg) }
        const component = renderer.create(<FilterSizeTab onSelect={test} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
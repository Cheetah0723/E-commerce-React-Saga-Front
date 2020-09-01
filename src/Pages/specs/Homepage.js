import React from 'react';
import Homepage from "../Homepage"
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const test = (arg) => { console.log(arg) }
    const component = renderer.create(<Homepage viewAll={test} displayData={[]}/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
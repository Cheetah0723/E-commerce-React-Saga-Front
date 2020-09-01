import React from 'react';
import FooterSignUp from "../FooterSignUp"
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const component = renderer.create(<FooterSignUp/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
import React from 'react';
import SNSIcons from "../SNSIcons"
import renderer from 'react-test-renderer';

describe.skip("SNSICons", () => {
it('renders correctly', () => {
    const component = renderer.create(<SNSIcons/>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
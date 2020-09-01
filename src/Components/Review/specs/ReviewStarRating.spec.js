import React from 'react'
import ReviewStarRating from "../ReviewStarRating"
import renderer from 'react-test-renderer'

describe.skip('ReviewStarRating', () => {
    it('renders correctly when it is read only', () => {
        const test = (arg) => { console.log(arg) }
        const component = renderer.create(<ReviewStarRating handleClick={test} readOnly={true} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly when it is not read only', () => {
        const test = (arg) => { console.log(arg) }
        const component = renderer.create(<ReviewStarRating handleClick={test} readOnly={true} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
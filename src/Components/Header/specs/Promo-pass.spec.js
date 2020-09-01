import React from 'react';
import Promo from "../Promo"
import renderer from 'react-test-renderer';

describe.skip("Promo", () => {
    it('renders correctly', () => {
        const component = renderer.create(<Promo />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
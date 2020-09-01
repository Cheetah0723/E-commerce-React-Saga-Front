import React from 'react'
import ReviewModal from "../ReviewModal"
import renderer from 'react-test-renderer'

describe("ReviewModal", () => {

    it('renders correctly', () => {
        const test = (arg) => { console.log(arg) }
        const component = renderer.create(<ReviewModal productName="test"
            openStatus={false} handleClose={test} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
})
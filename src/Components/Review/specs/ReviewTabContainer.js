import ReviewTabContainer from "../ReviewTabContainer"
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { shallow, mount } from "enzyme";
//TODO needs to mock useStore => useReviewForm


configure({ adapter: new Adapter() });

describe("ReviewTabContainer", () => {
    it("renders", () => {
        shallow(<ReviewTabContainer productName="test name" productId="1" />);
    });

    it("displays the initial link to update the modal open status", () => {
        const wrapper = mount(<ReviewTabContainer productName="test name" productId="1" />);
        wrapper.find(".create-review-link").simulate('click')
        expect(wrapper.find("ReivewModal").prop('openStatus')).toBe(true);
    });


})
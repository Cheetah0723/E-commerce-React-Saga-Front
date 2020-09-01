import React from 'react';
import Stepper from "../CheckoutStepper"
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe.skip("CheckoutStepper", () => {
    it('renders correctly', () => {
        const test = (arg) => { console.log(arg) }
        const steps = ['Shipping Address', 'Secure Payment', 'Review Order', 'Order Complete']
        const container = shallow(<Stepper activeStep={1} steps={steps}
            handleNext={test} handleBack={test} />);
        expect(container.html()).toMatchSnapshot();
    });
})
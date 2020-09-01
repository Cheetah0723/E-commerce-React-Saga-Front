import { useStep } from "../CustomHooks"
import React from 'react';

describe("useStep", () => {
    const Elements = () => {
        const props = useStep()
        return <div {...props} />;
    }; // since hooks can only be used inside a function component we wrap it inside one
  
    //const { activeStep, handleNext, handleBack, goToCart } = useStep()
    it('should have the default state of activeStep', () => {
      //  expect(container.prop(activeStep)).toBe(0)
    });

    it('should increase the activeStep by 1 when handleNext is called', () => {

        //simulate the handleNext 
        // expect(activeStep).toBe(1);
    });

    it('should decrease the activeStep by 1 when handleBack is called', () => {
        // expect(useStep.activeStep).toBe(0);
    });

})


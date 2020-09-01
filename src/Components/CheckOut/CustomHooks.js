import { useState } from "react"


export function useStep() {
    const [activeStep, setActiveStep] = useState(0);

    //TODO save customer info to the store??? 
    //Retrieve items in cart from the store???
    // Save order to  the store??? -> middle ware creates the order

    const handleNext = () => {
        setActiveStep((activeStep) => activeStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((activeStep) => activeStep - 1);
    };

    const goToCart = () => {
        //TODO swipe to the cart page
        //history.push()

    }
    return { activeStep, handleNext, handleBack, goToCart }
}




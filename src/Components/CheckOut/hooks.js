import { useState } from "react"


export function useStep() {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((activeStep) => activeStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((activeStep) => activeStep - 1);
    };

    return { activeStep, handleNext, handleBack }
}




import { useState } from "react";

const MultiStepForm = () => {
    const [step, setStep] = useState(1); // Track current step
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Next Step
    const nextStep = () => setStep(step + 1);
    // Previous Step
    const prevStep = () => setStep(step - 1);
    // Submit Form
    const handleSubmit = () => {
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
            {step === 1 && (
                <StepOne formData={formData} handleChange={handleChange} nextStep={nextStep} />
            )}
            {step === 2 && (
                <StepTwo formData={formData} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
            )}
            {step === 3 && (
                <StepThree formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
            )}
        </div>
    );
};

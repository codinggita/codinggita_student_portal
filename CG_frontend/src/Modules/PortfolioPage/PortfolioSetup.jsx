import React from "react";
import { usePortfolioStore } from "../../Stores/store.js";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo"; // You'll create this next
import StepThree from "./StepThree"; // You'll create this next
import StepFour from "./StepFour"; // You'll create this next

const MultiStepForm = () => {
  const { step } = usePortfolioStore();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
      {step === 4 && <StepFour />}
    </div>
  );
};

export default MultiStepForm;

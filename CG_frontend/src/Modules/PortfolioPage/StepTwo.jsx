const StepTwo = ({ formData, handleChange, nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Step 2: Address Details</h2>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={nextStep} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo

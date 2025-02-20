const StepThree = ({ formData, prevStep, handleSubmit }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Step 3: Review & Submit</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>City:</strong> {formData.city}</p>
      
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};


export default StepThree
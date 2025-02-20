import React from "react";
import { usePortfolioStore } from "../../Stores/store.js";
import { Button } from "@/components/ui/button";

const StepFour = () => {
  const { formData, updateFormData, nextStep } = usePortfolioStore();

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Step 4: xyz</h2>

      {/* Profile Image Upload */}
      <div className="mb-4">
        <label className="block text-sm">Profile Image</label>
        <input
          type="file"
          className="mt-1 block w-full bg-gray-800 text-white p-2 rounded"
          onChange={(e) => updateFormData("profileImage", e.target.files[0])}
        />
      </div>

      {/* Name Input */}
      <div className="mb-4">
        <label className="block text-sm">Name</label>
        <input
          type="text"
          value={formData.name}
          className="mt-1 block w-full bg-gray-800 text-white p-2 rounded"
          onChange={(e) => updateFormData("name", e.target.value)}
        />
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label className="block text-sm">Email</label>
        <input
          type="email"
          value={formData.email}
          className="mt-1 block w-full bg-gray-800 text-white p-2 rounded"
          onChange={(e) => updateFormData("email", e.target.value)}
        />
      </div>

      {/* Location Input */}
      <div className="mb-4">
        <label className="block text-sm">Location</label>
        <input
          type="text"
          value={formData.location}
          className="mt-1 block w-full bg-gray-800 text-white p-2 rounded"
          onChange={(e) => updateFormData("location", e.target.value)}
        />
      </div>

      {/* Social Media Links */}
      <div className="mb-4">
        <label className="block text-sm">GitHub</label>
        <input
          type="text"
          value={formData.socials?.github}
          className="mt-1 block w-full bg-gray-800 text-white p-2 rounded"
          onChange={(e) =>
            updateFormData("socials", { ...formData.socials, github: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">LinkedIn</label>
        <input
          type="text"
          value={formData.socials?.linkedin}
          className="mt-1 block w-full bg-gray-800 text-white p-2 rounded"
          onChange={(e) =>
            updateFormData("socials", { ...formData.socials, linkedin: e.target.value })
          }
        />
      </div>

      <div className="flex justify-end">
        <Button onClick={nextStep} className="bg-purple-600 hover:bg-purple-700">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default StepFour;

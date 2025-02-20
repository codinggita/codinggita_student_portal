import React, { useState } from "react";
import { Github, Linkedin, Globe, Mail, X } from "lucide-react";

const HeroPortfolio = ({ data, onClose, onSave }) => {
    const [formData, setFormData] = useState(data);

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSocialChange = (platform, value) => {
        setFormData((prev) => ({
            ...prev,
            Socials: {
                ...prev.Socials,
                [platform]: value
            }
        }));
    };

    const handleSkillChange = (index, field, value) => {
        const newSkills = [...formData.Skills];
        newSkills[index] = { ...newSkills[index], [field]: value };
        setFormData((prev) => ({ ...prev, Skills: newSkills }));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-white">Edit Portfolio</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <X />
                    </button>
                </div>

                {/* Basic Info */}
                <div className="space-y-4 mb-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Name</label>
                        <input
                            type="text"
                            value={formData.Name}
                            onChange={(e) => handleChange("Name", e.target.value)}
                            className="w-full bg-gray-700 rounded p-2 text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            value={formData.Email}
                            onChange={(e) => handleChange("Email", e.target.value)}
                            className="w-full bg-gray-700 rounded p-2 text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Location</label>
                        <input
                            type="text"
                            value={formData.Location}
                            onChange={(e) => handleChange("Location", e.target.value)}
                            className="w-full bg-gray-700 rounded p-2 text-white"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">About Me</label>
                        <textarea
                            value={formData.Aboutme}
                            onChange={(e) => handleChange("Aboutme", e.target.value)}
                            className="w-full bg-gray-700 rounded p-2 text-white"
                            rows="3"
                        />
                    </div>
                </div>

                {/* Social Links */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Social Links</h3>
                    <div className="space-y-2">
                        {Object.entries(formData.Socials).map(([platform, url]) => (
                            <div key={platform}>
                                <label className="block text-sm text-gray-400 mb-1 capitalize">
                                    {platform}
                                </label>
                                <input
                                    type="url"
                                    value={url}
                                    onChange={(e) => handleSocialChange(platform, e.target.value)}
                                    className="w-full bg-gray-700 rounded p-2 text-white"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Skills</h3>
                    {formData.Skills.map((skill, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={skill.Skill}
                                onChange={(e) => handleSkillChange(index, "Skill", e.target.value)}
                                className="flex-1 bg-gray-700 rounded p-2 text-white"
                                placeholder="Skill name"
                            />
                            <input
                                type="text"
                                value={skill.Rating}
                                onChange={(e) => handleSkillChange(index, "Rating", e.target.value)}
                                className="w-24 bg-gray-700 rounded p-2 text-white"
                                placeholder="Rating"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(formData)}
                        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};


export default HeroPortfolio;
import React, { useState } from "react";

const Portfolio = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    ProfileImage: "",
    Socials: {},
    Location: "",
    Aboutme: "",
    Skills: [{ Skill: "", Rating: "" }],
    Education: [{ nameofInstitiute: "", course: "", year: "" }],
    Internships: [{ Company: "", Role: "", year: "", Description: "" }],
    Certificates: [],
    Projects: [{ Title: "", Github: "", Figma: "", Documentation: "", Description: "", Images: [] }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (e, index, key, field) => {
    const updatedArray = [...formData[key]];
    updatedArray[index][field] = e.target.value;
    setFormData({ ...formData, [key]: updatedArray });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };


  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-45">
      <h2 className="text-2xl font-bold mb-4 text-center">Portfolio Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input type="text" name="Name" value={formData.Name} onChange={handleChange} required className="input-field" />
          </div>
          <div>
            <label className="block font-semibold">Email</label>
            <input type="email" name="Email" value={formData.Email} onChange={handleChange} required className="input-field" />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Profile Image URL</label>
          <input type="text" name="ProfileImage" value={formData.ProfileImage} onChange={handleChange} className="input-field" />
        </div>

        <div>
          <label className="block font-semibold">Location</label>
          <input type="text" name="Location" value={formData.Location} onChange={handleChange} className="input-field" />
        </div>

        <div>
          <label className="block font-semibold">About Me</label>
          <textarea name="Aboutme" value={formData.Aboutme} onChange={handleChange} className="input-field h-24" />
        </div>

        {/* Skills */}
        <div>
          <label className="block font-semibold">Skills</label>
          {formData.Skills.map((skill, index) => (
            <div key={index} className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Skill" value={skill.Skill} onChange={(e) => handleArrayChange(e, index, "Skills", "Skill")} required className="input-field" />
              <input type="number" placeholder="Rating (1-10)" value={skill.Rating} onChange={(e) => handleArrayChange(e, index, "Skills", "Rating")} required className="input-field" />
            </div>
          ))}
        </div>

        {/* Education */}
        <div>
          <label className="block font-semibold">Education</label>
          {formData.Education.map((edu, index) => (
            <div key={index} className="space-y-2">
              <input type="text" placeholder="Institute Name" value={edu.nameofInstitiute} onChange={(e) => handleArrayChange(e, index, "Education", "nameofInstitiute")} required className="input-field" />
              <input type="text" placeholder="Course" value={edu.course} onChange={(e) => handleArrayChange(e, index, "Education", "course")} required className="input-field" />
              <input type="text" placeholder="Year" value={edu.year} onChange={(e) => handleArrayChange(e, index, "Education", "year")} required className="input-field" />
            </div>
          ))}
        </div>

        {/* Projects */}
        <div>
          <label className="block font-semibold">Projects</label>
          {formData.Projects.map((proj, index) => (
            <div key={index} className="space-y-2">
              <input type="text" placeholder="Title" value={proj.Title} onChange={(e) => handleArrayChange(e, index, "Projects", "Title")} required className="input-field" />
              <input type="text" placeholder="GitHub" value={proj.Github} onChange={(e) => handleArrayChange(e, index, "Projects", "Github")} required className="input-field" />
              <input type="text" placeholder="Figma" value={proj.Figma} onChange={(e) => handleArrayChange(e, index, "Projects", "Figma")} required className="input-field" />
              <textarea placeholder="Description" value={proj.Description} onChange={(e) => handleArrayChange(e, index, "Projects", "Description")} className="input-field h-24" />
            </div>
          ))}
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Portfolio;

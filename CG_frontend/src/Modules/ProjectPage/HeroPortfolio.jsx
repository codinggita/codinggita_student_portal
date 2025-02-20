import React from "react";
import { Github, Linkedin, Globe, Mail } from "lucide-react";

const portfolioData = {
  Name: "John Doe",
  Email: "johndoe@example.com",
  ProfileImage: "https://via.placeholder.com/150",
  Socials: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    website: "https://johndoe.dev",
  },
  Location: "New York, USA",
  Aboutme: "Full-stack developer passionate about building scalable web applications.",
  Skills: [
    { Skill: "JavaScript", Rating: "⭐⭐⭐⭐" },
    { Skill: "React", Rating: "⭐⭐⭐⭐⭐" },
    { Skill: "Node.js", Rating: "⭐⭐⭐⭐" },
  ],
  Education: [
    { nameofInstitiute: "XYZ University", course: "B.Sc. Computer Science", year: "2020" },
  ],
  Internships: [
    {
      Company: "TechCorp",
      Role: "Software Engineer Intern",
      year: "2021",
      Description: "Worked on building microservices and frontend components.",
    },
  ],
  Certificates: ["AWS Certified Developer", "Google Cloud Professional"],
  Projects: [
    {
      Title: "Portfolio Website",
      Github: "https://github.com/johndoe/portfolio",
      Figma: "https://figma.com/johndoe",
      Documentation: "https://docs.johndoe.dev",
      Description: "A fully interactive portfolio website built with React and TailwindCSS.",
      Images: ["https://via.placeholder.com/200"],
    },
  ],
};

const HeroPortfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 ml-[288px] w-full pt-12">
      {/* Profile Section */}
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 shadow-lg rounded-lg text-center">
        <img
          src={portfolioData.ProfileImage}
          alt="Profile"
          className="w-32 h-32 mx-auto rounded-full shadow-md"
        />
        <h1 className="text-2xl font-bold mt-4">{portfolioData.Name}</h1>
        <p className="text-gray-400">{portfolioData.Location}</p>
        <p className="mt-2">{portfolioData.Aboutme}</p>
        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          <a href={portfolioData.Socials.github} className="text-gray-300 hover:text-white"><Github /></a>
          <a href={portfolioData.Socials.linkedin} className="text-blue-400 hover:text-white"><Linkedin /></a>
          <a href={portfolioData.Socials.website} className="text-green-400 hover:text-white"><Globe /></a>
        </div>
      </div>
      
      {/* Skills */}
      <section className="max-w-3xl mx-auto mt-6 bg-gray-800 p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-3">Skills</h2>
        {portfolioData.Skills.map((skill, index) => (
          <p key={index}>{skill.Skill}: {skill.Rating}</p>
        ))}
      </section>

      {/* Education, Internships, and Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
        <section className="bg-gray-800 p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-3">Education</h2>
          {portfolioData.Education.map((edu, index) => (
            <p key={index}>{edu.nameofInstitiute} - {edu.course} ({edu.year})</p>
          ))}
        </section>

        <section className="bg-gray-800 p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold mb-3">Internships</h2>
          {portfolioData.Internships.map((intern, index) => (
            <p key={index}>{intern.Company} - {intern.Role} ({intern.year})</p>
          ))}
        </section>
      </div>

      {/* Projects */}
      <section className="max-w-3xl mx-auto mt-6 bg-gray-800 p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-3">Projects</h2>
        {portfolioData.Projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{project.Title}</h3>
            <p>{project.Description}</p>
            <div className="flex gap-4 mt-2">
              <a href={project.Github} className="text-gray-300 hover:text-white">GitHub</a>
              <a href={project.Figma} className="text-gray-300 hover:text-white">Figma</a>
              <a href={project.Documentation} className="text-gray-300 hover:text-white">Docs</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HeroPortfolio;

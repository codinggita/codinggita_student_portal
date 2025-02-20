import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

export const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#10141E] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-[#7e22ce]">{project.title}</h3>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <Code2 size={16} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-500">{project.category}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-blue-100 text-[#7e22ce] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

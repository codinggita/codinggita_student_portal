import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-gray-700"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex items-center gap-2 mb-4">
          <Code2 size={16} className="text-gray-500" />
          <span className="text-sm font-medium text-gray-400">{project.category}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-700 text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

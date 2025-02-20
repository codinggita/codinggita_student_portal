import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Code2, ExternalLink, Github } from 'lucide-react';

export function ProjectDetails() {
    const { id } = useParams();
    const projects = [{
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "Real-time weather tracking application with detailed forecasts",
        category: "API Integration",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
        technologies: ["React", "OpenWeather API", "ChartJS"],
        link: "https://github.com"
    },
    {
        id: 3,
        title: "Task Management System",
        description: "Collaborative project management tool with real-time updates",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
        technologies: ["React", "Firebase", "Material-UI"],
        link: "https://github.com"
    },
    {
        id: 4,
        title: "AI Image Generator",
        description: "Machine learning-powered image generation tool",
        category: "AI/ML",
        image: "https://images.unsplash.com/photo-1677442136019-21c1edcd845e?auto=format&fit=crop&q=80&w=800",
        technologies: ["Python", "TensorFlow", "React"],
        link: "https://github.com"
    }]
    const project = projects.find(p => p.id === Number(id));


    if (!project) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Project not found</h2>
                    <Link to="/project" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                        <ArrowLeft size={20} />
                        Back to projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 ml-[288px] w-full">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-2">
                        <Link to="/project" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                            <ArrowLeft size={20} />
                            Back to projects
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700">
                    {/* Project Image */}
                    <div className="h-96 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-3xl font-bold text-white">{project.title}</h1>
                            <div className="flex items-center gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                >
                                    <Github size={24} />
                                    <span>View Source</span>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
                                >
                                    <ExternalLink size={24} />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-6">
                            <Code2 size={20} className="text-gray-500" />
                            <span className="text-lg font-medium text-gray-400">{project.category}</span>
                        </div>

                        <div className="prose max-w-none mb-8">
                            <p className="text-lg text-gray-300">{project.description}</p>

                            {/* Additional project details */}
                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Project Overview</h2>
                            <p className="text-gray-300">
                                This project showcases the implementation of modern web development practices and technologies.
                                It demonstrates the ability to create scalable and maintainable applications while providing
                                an excellent user experience.
                            </p>

                            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Features</h2>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>Responsive design for all screen sizes</li>
                                <li>Modern user interface with smooth interactions</li>
                                <li>Efficient data management and state handling</li>
                                <li>Performance optimized for production use</li>
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 text-sm bg-gray-700 text-blue-300 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
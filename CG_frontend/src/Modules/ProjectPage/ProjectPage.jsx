import React, { useState } from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

function ProjectPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');

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
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
        technologies: ["Python", "TensorFlow", "React"],
        link: "https://github.com"
    }]

    const categories = ['All', ...new Set(projects.map(project => project.category))];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-900 ml-[288px] w-full">

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-white mb-4">CG Projects</h2>
                    {/* <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore my latest work across various technologies and domains
                    </p> */}
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ProjectPage;

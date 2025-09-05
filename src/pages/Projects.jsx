import { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import LoadingSpinner from '../components/LoadingSpinner';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setLoading(true);
    fetch('/src/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setProjects([]);
        setLoading(false);
      });
  }, []);

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.tech.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
  );

  const techStack = ['all', 'react', 'javascript', 'security', 'node', 'python'];

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-cyberorange mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my work in cybersecurity, web development, and open source projects.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {techStack.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === tech
                  ? 'bg-cyberorange text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tech === 'all' ? 'All Projects' : tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;



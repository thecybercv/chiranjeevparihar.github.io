import { FaGithub, FaExternalLinkAlt, FaLock, FaCode } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="group bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden flex flex-col border border-cyberorange/30 hover:border-cyberorange/60 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-cyberorange/20 to-orange-500/20 flex items-center justify-center">
            <FaCode className="text-6xl text-cyberorange/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-black/50 rounded-full text-white hover:bg-cyberorange hover:text-black transition-colors"
              >
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-black/50 rounded-full text-white hover:bg-cyberorange hover:text-black transition-colors"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-cyberorange transition-colors">
            {project.title}
          </h3>
          {project.security && (
            <FaLock className="text-cyberorange text-sm" title="Security-focused project" />
          )}
        </div>
        
        <p className="text-gray-300 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((tech, index) => (
            <span 
              key={tech} 
              className="bg-cyberorange/10 text-cyberorange px-3 py-1 rounded-full text-xs font-mono border border-cyberorange/30 hover:bg-cyberorange/20 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gray-800 text-gray-300 rounded-lg hover:bg-cyberorange hover:text-black transition-all duration-300 font-semibold"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-cyberorange text-black rounded-lg hover:bg-orange-500 transition-all duration-300 font-semibold"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;



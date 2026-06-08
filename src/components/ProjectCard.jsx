import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { ProjectIcon } from '../utils/icons';

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group bg-ctp-surface0 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105 border border-ctp-surface1"
    >
      {/* Image/Icon */}
      <div className="h-40 bg-gradient-to-br from-ctp-mauve to-ctp-lavender flex items-center justify-center text-ctp-base">
        <ProjectIcon name={project.image} size={80} />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-ctp-text group-hover:text-ctp-mauve transition">
          {project.title}
        </h3>
        <p className="text-ctp-subtext1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-ctp-surface1 text-ctp-lavender text-sm rounded-full border border-ctp-overlay0"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.preventDefault()}
            className="flex-1 text-center px-4 py-2 bg-ctp-mauve text-ctp-base rounded-lg hover:bg-ctp-lavender transition text-sm font-medium inline-flex items-center justify-center gap-2"
          >
            <FiExternalLink size={16} /> Live
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.preventDefault()}
            className="flex-1 text-center px-4 py-2 border-2 border-ctp-mauve text-ctp-mauve rounded-lg hover:bg-ctp-surface1 transition text-sm font-medium inline-flex items-center justify-center gap-2"
          >
            <FiGithub size={16} /> Code
          </a>
        </div>
      </div>
    </Link>
  );
}

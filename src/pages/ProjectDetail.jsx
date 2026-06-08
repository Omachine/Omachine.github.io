import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { ProjectIcon } from '../utils/icons';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen bg-ctp-base flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ctp-text mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-ctp-mauve text-ctp-base rounded-lg hover:bg-ctp-lavender transition"
          >
            <FiArrowLeft /> Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-ctp-base min-h-screen">
      {/* Back Button */}
      <div className="bg-ctp-mantle border-b border-ctp-surface1 sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-ctp-mauve hover:text-ctp-lavender transition"
          >
            <FiArrowLeft /> Back to Projects
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-ctp-mauve/10 to-ctp-lavender/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <div className="text-7xl">{project.image}</div>
          </div>
          <h1 className="text-5xl font-bold text-ctp-text mb-4 text-center">
            {project.title}
          </h1>
          <p className="text-xl text-ctp-subtext1 text-center max-w-3xl mx-auto mb-8">
            {project.description}
          </p>
          
          {/* Project Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ctp-mauve text-ctp-base rounded-lg hover:bg-ctp-lavender transition"
            >
              <FiExternalLink /> View Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-ctp-mauve text-ctp-mauve rounded-lg hover:bg-ctp-surface0 transition"
            >
              <FiGithub /> View Source
            </a>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-ctp-surface0 text-ctp-lavender rounded-full border border-ctp-surface1 hover:border-ctp-mauve transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-ctp-text mb-6">Project Overview</h2>
              <div className="bg-ctp-surface0 p-8 rounded-lg border border-ctp-surface1">
                <h3 className="text-xl font-semibold text-ctp-mauve mb-4">Description</h3>
                <p className="text-ctp-subtext1 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-ctp-subtext1 leading-relaxed">
                  This project showcases my expertise in modern web development, demonstrating proficiency with the latest technologies and best practices in the industry.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h2 className="text-3xl font-bold text-ctp-text mb-6">Tech Stack</h2>
              <div className="bg-ctp-surface0 p-8 rounded-lg border border-ctp-surface1">
                <h3 className="text-xl font-semibold text-ctp-mauve mb-4">Technologies Used</h3>
                <div className="space-y-3">
                  {project.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-3 text-ctp-subtext1">
                      <div className="w-2 h-2 bg-ctp-mauve rounded-full"></div>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-ctp-surface0 p-8 rounded-lg border border-ctp-surface1 mb-16">
            <h2 className="text-3xl font-bold text-ctp-text mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-ctp-mauve mb-3">Feature 1</h3>
                <p className="text-ctp-subtext1">
                  Responsive design that works seamlessly across all devices and screen sizes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ctp-mauve mb-3">Feature 2</h3>
                <p className="text-ctp-subtext1">
                  Modern UI/UX with smooth animations and intuitive user interactions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ctp-mauve mb-3">Feature 3</h3>
                <p className="text-ctp-subtext1">
                  Optimized performance with fast load times and efficient code.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ctp-mauve mb-3">Feature 4</h3>
                <p className="text-ctp-subtext1">
                  Built with best practices and clean, maintainable code structure.
                </p>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div>
            <h2 className="text-3xl font-bold text-ctp-text mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter(p => p.id !== id)
                .slice(0, 2)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    to={`/project/${relatedProject.id}`}
                    className="group p-6 bg-ctp-surface0 rounded-lg border border-ctp-surface1 hover:border-ctp-mauve transition hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{relatedProject.image}</div>
                      <div>
                        <h3 className="text-xl font-bold text-ctp-text group-hover:text-ctp-mauve transition">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-ctp-subtext1">
                          {relatedProject.tags.slice(0, 2).join(', ')}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

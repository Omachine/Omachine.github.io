import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects }) {
  return (
    <section id="projects" className="py-20 px-4 bg-ctp-base">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-ctp-text">
          Featured Projects
        </h2>
        <p className="text-xl text-ctp-subtext1 text-center  mb-12 max-w-2xl mx-auto">
          Showcase of my recent work and personal projects built with modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

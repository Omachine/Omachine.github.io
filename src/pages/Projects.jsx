import ProjectsGrid from '../components/ProjectsGrid';
import { projects, skills } from '../data/projects';

export default function Projects() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-ctp-mauve to-ctp-lavender text-ctp-base">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-ctp-base/80">
            A collection of projects showcasing my skills and experience in web development.
          </p>
        </div>
      </section>

      {/* Projects */}
      <ProjectsGrid projects={projects} />

      {/* Skills Section */}
      <section className="py-20 px-4 bg-ctp-mantle">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-ctp-text">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 bg-ctp-surface0 text-ctp-mauve rounded-lg text-center font-medium hover:shadow-lg transition border border-ctp-surface1 hover:border-ctp-mauve"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import { projects } from '../data/projects';

export default function Home() {
  return (
    <div>
      <Hero />
      <ProjectsGrid projects={projects.slice(0, 6)} />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-ctp-mauve to-ctp-lavender">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-ctp-base mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-ctp-base/80 mb-8">
            Have a project in mind? Let's create something amazing together.
          </p>
          <button className="px-8 py-3 bg-ctp-base text-ctp-mauve rounded-lg hover:bg-ctp-surface0 transition font-bold">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
}

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
        </div>
      </section>
    </div>
  );
}

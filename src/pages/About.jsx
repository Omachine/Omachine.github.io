import { experience } from '../data/projects';

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-ctp-mauve to-ctp-lavender text-ctp-base">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-ctp-base/80">
            Learn more about my journey and experience in web development.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 px-4 bg-ctp-base">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-ctp-text">
                My Story
              </h2>
              <p className="text-lg text-ctp-subtext1 mb-4 leading-relaxed">
                I'm a passionate full-stack developer with a love for creating beautiful and functional web applications. With a strong foundation in modern web technologies, I'm committed to delivering high-quality solutions that exceed expectations.
              </p>
              <p className="text-lg text-ctp-subtext1 mb-4 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, and it has evolved into a career focused on solving complex problems and building scalable applications.
              </p>
              <p className="text-lg text-ctp-subtext1 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-ctp-surface0 rounded-lg text-center border border-ctp-surface1">
                <h3 className="text-3xl font-bold text-ctp-mauve">50+</h3>
                <p className="text-ctp-subtext0">Projects Completed</p>
              </div>
              <div className="p-6 bg-ctp-surface0 rounded-lg text-center border border-ctp-surface1">
                <h3 className="text-3xl font-bold text-ctp-mauve">5+</h3>
                <p className="text-ctp-subtext0">Years Experience</p>
              </div>
              <div className="p-6 bg-ctp-surface0 rounded-lg text-center border border-ctp-surface1">
                <h3 className="text-3xl font-bold text-ctp-mauve">30+</h3>
                <p className="text-ctp-subtext0">Happy Clients</p>
              </div>
              <div className="p-6 bg-ctp-surface0 rounded-lg text-center border border-ctp-surface1">
                <h3 className="text-3xl font-bold text-ctp-mauve">12</h3>
                <p className="text-ctp-subtext0">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 px-4 bg-ctp-mantle">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-ctp-text">
            Work Experience
          </h2>

          <div className="space-y-8">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="p-6 bg-ctp-surface0 rounded-lg shadow-md border-l-4 border-ctp-mauve"
              >
                <h3 className="text-2xl font-bold text-ctp-text">
                  {exp.title}
                </h3>
                <p className="text-ctp-mauve font-semibold mb-2">
                  {exp.company} • {exp.period}
                </p>
                <p className="text-ctp-subtext1">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

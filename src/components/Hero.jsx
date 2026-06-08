import AnimatedTitle from './AnimatedTitle';

const titles = ['Game Developer', 'Full-Stack Software Developer'];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile Photo */}
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-ctp-mauve bg-gradient-to-br from-ctp-mauve to-ctp-lavender flex items-center justify-center">
                <img
                  src="https://via.placeholder.com/320x320?text=Your+Photo"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Circle */}
              <div className="absolute -inset-4 border-2 border-ctp-lavender rounded-2xl opacity-50"></div>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-ctp-text">
              Hi, I'm <span className="text-ctp-mauve">Omachine</span>
            </h1>

            {/* Animated Titles */}
            <AnimatedTitle titles={titles} />

            <p className="text-lg md:text-xl text-ctp-subtext1 mb-8 mt-8 leading-relaxed">
              Passionate about creating immersive game experiences and building scalable web solutions. Let's bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-ctp-mauve text-ctp-base rounded-lg hover:bg-ctp-lavender transition transform hover:scale-105 font-semibold text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-ctp-mauve text-ctp-mauve rounded-lg hover:bg-ctp-surface1 transition font-semibold text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

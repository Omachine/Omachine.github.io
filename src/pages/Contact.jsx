import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMessageCircle, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-ctp-mauve to-ctp-lavender text-ctp-base">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-ctp-base/80">
            Connect with me through the platforms below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 bg-ctp-base">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-ctp-text">
              Let's Connect
            </h2>
            <p className="text-lg text-ctp-subtext1">
              Feel free to reach out through any of these channels. I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="p-8 bg-ctp-surface0 rounded-lg shadow-lg text-center hover:shadow-xl transition border border-ctp-surface1">
              <div className="text-5xl mb-4 flex justify-center text-ctp-mauve">
                <FiMail size={50} />
              </div>
              <h3 className="text-xl font-semibold text-ctp-text mb-2">
                Email
              </h3>
              <a
                href="mailto:your@email.com"
                className="text-ctp-mauve hover:text-ctp-lavender hover:underline text-lg font-medium"
              >
                your@email.com
              </a>
            </div>

            {/* GitHub */}
            <div className="p-8 bg-ctp-surface0 rounded-lg shadow-lg text-center hover:shadow-xl transition border border-ctp-surface1">
              <div className="text-5xl mb-4 flex justify-center text-ctp-mauve">
                <FiGithub size={50} />
              </div>
              <h3 className="text-xl font-semibold text-ctp-text mb-2">
                GitHub
              </h3>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ctp-mauve hover:text-ctp-lavender hover:underline text-lg font-medium"
              >
                github.com/yourprofile
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-8 bg-ctp-surface0 rounded-lg shadow-lg text-center hover:shadow-xl transition border border-ctp-surface1">
              <div className="text-5xl mb-4 flex justify-center text-ctp-mauve">
                <FiLinkedin size={50} />
              </div>
              <h3 className="text-xl font-semibold text-ctp-text mb-2">
                LinkedIn
              </h3>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ctp-mauve hover:text-ctp-lavender hover:underline text-lg font-medium"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="mt-16 p-8 bg-gradient-to-r from-ctp-mauve/20 to-ctp-lavender/20 rounded-lg text-center border border-ctp-surface1">
            <h3 className="text-2xl font-bold text-ctp-text mb-4">
              More Ways to Connect
            </h3>
            <div className="space-y-4">
              <p className="text-ctp-subtext0 flex items-center justify-center gap-3">
                <FiTwitter size={20} className="text-ctp-mauve" />
                <strong>Twitter:</strong>{' '}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-ctp-mauve hover:text-ctp-lavender hover:underline">
                  @yourhandle
                </a>
              </p>
              <p className="text-ctp-subtext0 flex items-center justify-center gap-3">
                <FiMessageCircle size={20} className="text-ctp-mauve" />
                <strong>Discord:</strong> YourUsername#1234
              </p>
              <p className="text-ctp-subtext0 flex items-center justify-center gap-3">
                <FiMapPin size={20} className="text-ctp-mauve" />
                <strong>Location:</strong> Your City, Country
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

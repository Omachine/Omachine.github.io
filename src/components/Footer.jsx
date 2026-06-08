export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ctp-crust text-ctp-text py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-ctp-mauve">Omachine</h3>
            <p className="text-ctp-subtext0">
              Full-stack developer passionate about creating beautiful and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-ctp-mauve">Quick Links</h4>
            <ul className="space-y-2 text-ctp-subtext0">
              <li><a href="#" className="hover:text-ctp-mauve transition">Home</a></li>
              <li><a href="#" className="hover:text-ctp-mauve transition">Projects</a></li>
              <li><a href="#" className="hover:text-ctp-mauve transition">About</a></li>
              <li><a href="#" className="hover:text-ctp-mauve transition">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-ctp-mauve">Follow</h4>
            <ul className="space-y-2 text-ctp-subtext0">
              <li><a href="#" className="hover:text-ctp-mauve transition">GitHub</a></li>
              <li><a href="#" className="hover:text-ctp-mauve transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-ctp-mauve transition">Twitter</a></li>
              <li><a href="#" className="hover:text-ctp-mauve transition">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ctp-surface1 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-ctp-subtext0">
            <p>&copy; {currentYear} Omachine. All rights reserved.</p>
            <p>Built with React, Vite, and Tailwind CSS | Catppuccino Macchiato</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

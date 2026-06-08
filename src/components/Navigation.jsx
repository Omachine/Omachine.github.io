import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/',        label: 'Home'     },
    { to: '/projects', label: 'Projects' },
    { to: '/about',   label: 'About'    },
    { to: '/contact', label: 'Contact'  },
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 border-b
      ${scrolled
        ? 'bg-ctp-mantle/95 backdrop-blur-sm border-ctp-surface1 shadow-md shadow-black/20'
        : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-2xl text-ctp-mauve hover:text-ctp-lavender transition"
          >
            Omachine
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`transition text-sm font-medium relative group
                  ${location.pathname === to
                    ? 'text-ctp-lavender'
                    : 'text-ctp-subtext1 hover:text-ctp-lavender'
                  }`}
              >
                {label}
                {/* Active underline indicator */}
                <span className={`absolute -bottom-1 left-0 h-px bg-ctp-lavender transition-all duration-300
                  ${location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ctp-subtext1 hover:text-ctp-lavender transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-64 pb-4' : 'max-h-0'}`}
        >
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block py-2 text-sm transition
                ${location.pathname === to
                  ? 'text-ctp-lavender font-medium'
                  : 'text-ctp-subtext1 hover:text-ctp-lavender'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
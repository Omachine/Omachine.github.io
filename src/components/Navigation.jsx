import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-ctp-mantle/95 backdrop-blur-sm border-b border-ctp-surface1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl text-ctp-mauve hover:text-ctp-lavender transition">
            Omachine
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="text-ctp-subtext1 hover:text-ctp-lavender transition">
              Home
            </Link>
            <Link to="/projects" className="text-ctp-subtext1 hover:text-ctp-lavender transition">
              Projects
            </Link>
            <Link to="/about" className="text-ctp-subtext1 hover:text-ctp-lavender transition">
              About
            </Link>
            <Link to="/contact" className="text-ctp-subtext1 hover:text-ctp-lavender transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-ctp-subtext1 hover:text-ctp-lavender">
              Home
            </Link>
            <Link to="/projects" className="block py-2 text-ctp-subtext1 hover:text-ctp-lavender">
              Projects
            </Link>
            <Link to="/about" className="block py-2 text-ctp-subtext1 hover:text-ctp-lavender">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-ctp-subtext1 hover:text-ctp-lavender">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

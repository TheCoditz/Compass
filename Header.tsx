import React from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrollToQuiz: () => void;
}

export default function Header({ scrollToQuiz }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Career Compass AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How it Works</NavLink>
            <NavLink href="#testimonials">Success Stories</NavLink>
            <button 
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
              onClick={scrollToQuiz}
            >
              Start Quiz
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <MobileNavLink href="#features">Features</MobileNavLink>
              <MobileNavLink href="#how-it-works">How it Works</MobileNavLink>
              <MobileNavLink href="#testimonials">Success Stories</MobileNavLink>
              <button 
                className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors w-full"
                onClick={scrollToQuiz}
              >
                Start Quiz
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-indigo-600 transition-colors font-medium block w-full text-center"
  >
    {children}
  </a>
);
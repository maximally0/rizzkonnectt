
import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = '/#' + sectionId;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-neon-pink/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-2 cursor-pointer group">
              <Heart className="w-8 h-8 text-neon-pink fill-neon-pink group-hover:animate-pulse" />
              <span className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">
                RizzKonnect
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/rizz-coaches">
              <button className="text-white hover:text-neon-pink transition-colors font-medium">
                Rizz Coaches
              </button>
            </Link>
            <Link to="/become-a-mentor">
              <button className="text-white hover:text-neon-pink transition-colors font-medium">
                Become a Mentor
              </button>
            </Link>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-white hover:text-neon-pink transition-colors font-medium"
            >
              How It Works
            </button>
            <Button 
              onClick={() => scrollToSection('hero')}
              className="neon-button"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-neon-pink transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-neon-pink/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/rizz-coaches">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-neon-pink transition-colors font-medium block w-full text-left"
                >
                  Rizz Coaches
                </button>
              </Link>
              <Link to="/become-a-mentor">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-neon-pink transition-colors font-medium block w-full text-left"
                >
                  Become a Mentor
                </button>
              </Link>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-white hover:text-neon-pink transition-colors font-medium block w-full text-left"
              >
                How It Works
              </button>
              <Button 
                onClick={() => scrollToSection('hero')}
                className="neon-button w-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

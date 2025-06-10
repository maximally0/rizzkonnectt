
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const Header = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative">
            <Heart className="w-8 h-8 text-neon-pink fill-neon-pink" />
            <span className="absolute -top-1 -right-1 text-xs font-bold text-white">R</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
            RizzKonnect
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/rizz-coaches"
            className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
          >
            Rizz Coaches
          </Link>
          <Link 
            to="/become-a-mentor"
            className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
          >
            Become a Mentor
          </Link>
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
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
        <button className="md:hidden text-neon-pink">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-neon-pink"></div>
            <div className="w-full h-0.5 bg-neon-pink"></div>
            <div className="w-full h-0.5 bg-neon-pink"></div>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;

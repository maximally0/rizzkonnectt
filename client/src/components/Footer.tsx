
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
                RizzKonnect
              </span>
            </div>
            <p className="text-text-secondary text-sm">
              Mentorship for the emotionally chaotic.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <a 
              href="/rizz-coaches"
              className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
            >
              Rizz Coaches
            </a>
            <a 
              href="/become-a-mentor"
              className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
            >
              Become a Mentor
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a 
              href="#" 
              className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="#" 
              className="text-text-secondary hover:text-neon-pink transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <a 
              href="mailto:contact@rizzkonnect.com"
              className="text-neon-pink hover:text-neon-pink-light transition-colors duration-200"
            >
              contact@rizzkonnect.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2025 RizzKonnect — Mentorship for the emotionally chaotic.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

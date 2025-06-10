
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToMentors = () => {
    const element = document.getElementById('mentors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-neon-pink-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-neon-pink/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Level Up Your{' '}
          <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
            Dating Game
          </span>
          <br />
          with RizzKonnect
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Book 1:1 sessions with wild, real-life dating coaches who get you.
        </p>

        <Button 
          onClick={scrollToMentors}
          className="neon-button text-lg px-8 py-4 neon-glow animate-pulse hover:animate-none"
        >
          Get Rizzed Up Now 🔥
        </Button>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neon-pink rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-neon-pink-light rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-neon-pink rounded-full animate-ping delay-500"></div>
      </div>
    </section>
  );
};

export default HeroSection;

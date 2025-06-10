
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BecomeAMentor = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Floating hearts and sparkles background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Hearts */}
        <div className="absolute top-20 left-10 text-neon-pink text-2xl animate-bounce animation-delay-1000">💘</div>
        <div className="absolute top-40 right-20 text-neon-pink text-xl animate-bounce animation-delay-2000">💕</div>
        <div className="absolute bottom-40 left-20 text-neon-pink text-lg animate-bounce animation-delay-3000">💖</div>
        <div className="absolute top-60 left-1/3 text-neon-pink text-sm animate-bounce animation-delay-4000">💘</div>
        <div className="absolute bottom-60 right-1/3 text-neon-pink text-xl animate-bounce animation-delay-5000">💕</div>
        
        {/* Sparkles */}
        <div className="absolute top-32 right-10 text-yellow-300 text-lg animate-pulse animation-delay-1500">✨</div>
        <div className="absolute top-80 left-1/4 text-yellow-300 text-sm animate-pulse animation-delay-2500">✨</div>
        <div className="absolute bottom-32 right-1/4 text-yellow-300 text-xl animate-pulse animation-delay-3500">✨</div>
        <div className="absolute top-96 right-1/3 text-yellow-300 text-xs animate-pulse animation-delay-4500">✨</div>
        <div className="absolute bottom-80 left-10 text-yellow-300 text-lg animate-pulse animation-delay-5500">✨</div>
      </div>

      <Header />
      
      <main className="pt-20 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Join the{' '}
                <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
                  Rizz Squad
                </span>
                .
                <br />
                Become a{' '}
                <span className="bg-gradient-to-r from-neon-pink to-purple-400 bg-clip-text text-transparent">
                  Mentor
                </span>
                .
              </h1>
            </div>

            {/* Subtext */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                If you've survived a toxic arc and come out funnier, wiser, and emotionally scarred — we want you.
              </p>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Fill out the form. Share your story. Get on the roster.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                asChild
                className="neon-button text-white font-bold py-4 px-8 text-lg md:text-xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl hover:shadow-neon-pink/50"
              >
                <a 
                  href="https://forms.google.com/your-form-url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Apply Now 💘
                </a>
              </Button>
            </div>

            {/* Additional decorative elements */}
            <div className="pt-16 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-dark-card/50 to-purple-900/20 rounded-2xl p-6 border border-gray-700/50">
                  <div className="text-3xl mb-4">🔥</div>
                  <h3 className="text-lg font-bold text-white mb-2">Survived the Drama</h3>
                  <p className="text-text-secondary text-sm">You've been through the trenches and lived to tell the tale</p>
                </div>
                
                <div className="bg-gradient-to-br from-dark-card/50 to-purple-900/20 rounded-2xl p-6 border border-gray-700/50">
                  <div className="text-3xl mb-4">💡</div>
                  <h3 className="text-lg font-bold text-white mb-2">Got the Wisdom</h3>
                  <p className="text-text-secondary text-sm">Your mistakes became lessons that could save others</p>
                </div>
                
                <div className="bg-gradient-to-br from-dark-card/50 to-purple-900/20 rounded-2xl p-6 border border-gray-700/50">
                  <div className="text-3xl mb-4">😈</div>
                  <h3 className="text-lg font-bold text-white mb-2">Kept the Humor</h3>
                  <p className="text-text-secondary text-sm">You can laugh about it now (therapy helped)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeAMentor;

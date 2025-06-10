
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const BecomeAMentor = () => {
  const [floatingElements, setFloatingElements] = useState<Array<{
    id: number;
    type: 'heart' | 'sparkle';
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate floating hearts and sparkles
    const elements = [];
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        type: i % 2 === 0 ? 'heart' : 'sparkle',
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4
      });
    }
    setFloatingElements(elements);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      <Header />
      
      {/* Floating Hearts and Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`
            }}
          >
            {element.type === 'heart' ? (
              <Heart className="w-6 h-6 text-neon-pink fill-neon-pink" />
            ) : (
              <Sparkles className="w-5 h-5 text-purple-400" />
            )}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <main className="pt-20 pb-16 relative z-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center min-h-[80vh] flex flex-col justify-center items-center">
            <div className="max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                Join the{' '}
                <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent animate-pulse">
                  Rizz Squad
                </span>
                .
                <br />
                <span className="text-white">
                  Become a Mentor.
                </span>
              </h1>

              {/* Subtext */}
              <div className="space-y-6 mb-12">
                <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                  If you've survived a toxic arc and come out funnier, wiser, and emotionally scarred — we want you.
                </p>
                <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
                  Fill out the form. Share your story. Get on the roster.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="neon-button text-xl md:text-2xl px-12 py-6 md:px-16 md:py-8 rounded-2xl font-bold transform hover:scale-110 transition-all duration-300 bg-gradient-to-r from-neon-pink to-purple-600 hover:from-purple-600 hover:to-neon-pink shadow-2xl hover:shadow-neon-pink/50"
                >
                  <a 
                    href="https://forms.google.com/your-form-url-here" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    Apply Now 💘
                  </a>
                </Button>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-6xl mx-auto">
                <div className="mentor-card text-center p-8">
                  <div className="text-4xl mb-4">💔</div>
                  <h3 className="text-xl font-bold text-white mb-2">Survived Chaos</h3>
                  <p className="text-text-secondary">
                    You've been through the dating wars and lived to tell the tale
                  </p>
                </div>
                
                <div className="mentor-card text-center p-8">
                  <div className="text-4xl mb-4">🧠</div>
                  <h3 className="text-xl font-bold text-white mb-2">Gained Wisdom</h3>
                  <p className="text-text-secondary">
                    Every heartbreak taught you something valuable about love and life
                  </p>
                </div>
                
                <div className="mentor-card text-center p-8">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to Help</h3>
                  <p className="text-text-secondary">
                    Now you want to guide others through their emotional chaos
                  </p>
                </div>
              </div>

              {/* What We're Looking For */}
              <div className="mt-20 text-left max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  What We're Looking For
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-neon-pink">✅ Green Flags We Love</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• Survived at least one major toxic relationship</li>
                      <li>• Can laugh about your past dating disasters</li>
                      <li>• Actually learned from your mistakes</li>
                      <li>• Good at reading red flags now</li>
                      <li>• Emotionally available (finally)</li>
                      <li>• Can give tough love when needed</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-red-400">🚩 Red Flags We Avoid</h3>
                    <ul className="space-y-2 text-text-secondary">
                      <li>• Still bitter about your ex</li>
                      <li>• Projecting your trauma onto others</li>
                      <li>• Can't maintain boundaries</li>
                      <li>• Giving advice just to feel superior</li>
                      <li>• Haven't done your own healing work</li>
                      <li>• Think you have all the answers</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="mt-20 text-center">
                <p className="text-lg text-text-secondary mb-6">
                  Ready to turn your emotional scars into someone else's roadmap?
                </p>
                <Button 
                  asChild
                  className="neon-button text-lg px-8 py-4 rounded-xl font-bold"
                >
                  <a 
                    href="https://forms.google.com/your-form-url-here" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start Your Application 💘
                  </a>
                </Button>
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

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { Heart, Flame, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [, setLocation] = useLocation();
  const [rizzLevel, setRizzLevel] = useState(42);
  const [floatingHearts, setFloatingHearts] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
    size: number;
    type: 'heart' | 'sparkle' | 'kiss';
  }>>([]);

  useEffect(() => {
    // Generate floating romantic elements
    const elements = [];
    for (let i = 0; i < 25; i++) {
      const types = ['heart', 'sparkle', 'kiss'] as const;
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        size: 15 + Math.random() * 25,
        type: types[Math.floor(Math.random() * types.length)]
      });
    }
    setFloatingHearts(elements);

    // Animate rizz level
    const interval = setInterval(() => {
      setRizzLevel(prev => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-neon-pink-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-neon-pink/5 rounded-full blur-3xl"></div>

        {/* Large heart-shaped glow behind headline */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-neon-pink/20 to-red-500/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Floating Romantic Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingHearts.map((element) => (
          <div
            key={element.id}
            className="absolute animate-float opacity-20 hover:opacity-40 transition-opacity duration-500"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${3 + Math.random() * 6}s`
            }}
          >
            {element.type === 'heart' && (
              <Heart 
                className="text-neon-pink fill-neon-pink animate-pulse" 
                size={element.size}
              />
            )}
            {element.type === 'sparkle' && (
              <Sparkles 
                className="text-purple-400 animate-sparkle" 
                size={element.size}
              />
            )}
            {element.type === 'kiss' && (
              <div 
                className="text-pink-300 animate-bounce"
                style={{ fontSize: `${element.size}px` }}
              >
                💋
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Cupid's Arrows */}
      <div className="absolute top-20 left-10 animate-bounce opacity-30">
        <div className="text-4xl rotate-45">💘</div>
      </div>
      <div className="absolute top-40 right-20 animate-pulse opacity-25">
        <div className="text-3xl -rotate-12">🏹</div>
      </div>

      {/* Love Confetti */}
      <div className="absolute top-1/4 left-1/4 animate-spin opacity-20" style={{ animationDuration: '8s' }}>
        <div className="text-2xl">💕</div>
      </div>
      <div className="absolute top-1/3 right-1/3 animate-spin opacity-15" style={{ animationDuration: '10s' }}>
        <div className="text-xl">💖</div>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <div className="animate-scroll whitespace-nowrap text-neon-pink/60 text-sm">
          <span className="inline-block px-4">Ghosted 👻</span>
          <span className="inline-block px-4">Soft Launch 💅</span>
          <span className="inline-block px-4">Swipe Right 💕</span>
          <span className="inline-block px-4">Left on Read 📱</span>
          <span className="inline-block px-4">Rizz Legend 🔥</span>
          <span className="inline-block px-4">Dry Texter 💀</span>
          <span className="inline-block px-4">Soft Boy 🥺</span>
          <span className="inline-block px-4">Simp Energy 😭</span>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 py-20">
        {/* Improved headline with better spacing and typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-center relative">
              <span className="block mb-4">
                From '<span className="text-gray-400 italic">left on read</span>' 
              </span>
              <span className="block relative">
                to '<span className="text-neon-pink animate-pulse font-extrabold">
                  get in my bed
                </span>' 
                <div className="inline-flex items-center ml-4 space-x-2">
                  <Heart className="w-12 h-12 md:w-16 md:h-16 text-neon-pink fill-neon-pink animate-heartbeat" />
                  <div className="text-4xl md:text-6xl animate-bounce">💕</div>
                  <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 animate-sparkle" />
                </div>
              </span>

              {/* Romantic decorative elements around the text */}
              <div className="absolute -top-8 left-1/4 text-2xl opacity-60 animate-float">💘</div>
              <div className="absolute -bottom-4 right-1/4 text-xl opacity-50 animate-bounce">💖</div>
              <div className="absolute top-1/2 -left-12 text-lg opacity-40 animate-pulse">😍</div>
              <div className="absolute top-1/3 -right-16 text-2xl opacity-45 animate-spin" style={{ animationDuration: '6s' }}>💗</div>
            </h1>

        {/* Improved subheadline with better spacing and typography */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed relative">
              <span className="inline-flex items-center gap-2 flex-wrap justify-center">
                Book 1:1 sessions with wild, real-life dating coaches who get you
                <span className="inline-flex items-center gap-1 animate-pulse">
                  💕 💘 💖
                </span>
              </span>
              <br />
              <span className="text-lg text-pink-300 italic mt-2 block">
                Turn your dating disasters into love stories ✨
              </span>
            </p>

        {/* Enhanced CTA button with proper spacing */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={() => setLocation('/rizz-coaches')}
                className="neon-button text-xl px-10 py-5 text-white font-bold relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Rizzed Up Now 
                  <span className="animate-bounce">💕</span>
                  <span className="animate-pulse">✨</span>
                  <span className="animate-spin" style={{ animationDuration: '3s' }}>💫</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>

              <div className="flex items-center space-x-4 bg-gradient-to-r from-gray-900/60 to-pink-900/20 rounded-full px-6 py-3 backdrop-blur border border-pink-500/20">
                <span className="text-sm text-gray-300 flex items-center gap-1">
                  <Heart className="w-4 h-4 text-neon-pink fill-neon-pink animate-pulse" />
                  Love Potential:
                </span>
                <Progress value={rizzLevel} className="w-24 h-2" />
                <span className="text-sm font-bold text-neon-pink flex items-center gap-1">
                  {rizzLevel}% 
                  <span className="text-xs">💖</span>
                </span>
              </div>
            </div>

        {/* Redesigned Toxicity Meter with improved spacing */}
        <div className="mb-20 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-8 text-white">
            How toxic is your DM game? 💀
          </h3>
          <div className="relative mb-6">
            {/* Custom progress bar with gradient */}
            <div className="w-full h-4 bg-gray-800 rounded-lg overflow-hidden shadow-inner">
              <div 
                className="h-full rounded-lg transition-all duration-500 ease-out shadow-lg"
                style={{ 
                  width: `${45}%`,
                  background: `linear-gradient(to right, #4CAF50 0%, #FFC107 50%, #F44336 100%)`,
                  filter: 'drop-shadow(0 0 8px rgba(255, 59, 92, 0.3))'
                }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={45}
              onChange={(e) => {}}
              className="absolute top-0 w-full h-4 opacity-0 cursor-pointer"
            />
          </div>
          {/* Better aligned and styled labels */}
          <div className="flex justify-between items-center text-sm max-w-md mx-auto px-1">
            <span className="text-green-400 font-medium">💚 Green Flag</span>
            <span className="text-red-400 font-medium">🚩 Red Flag</span>
          </div>
        </div>

        {/* Rizz Resume Badges with improved spacing and uniformity */}
        <div className="flex flex-wrap justify-center gap-6 mb-20 max-w-2xl mx-auto">
          <div className="bg-gray-800/50 rounded-full px-8 py-4 border border-gray-700 backdrop-blur-sm flex-shrink-0 min-w-[140px]">
            <span className="text-sm text-gray-400 font-medium">💀 Dry Texter</span>
          </div>
          <div className="bg-neon-pink/20 rounded-full px-8 py-4 border border-neon-pink/50 backdrop-blur-sm flex-shrink-0 min-w-[140px]">
            <span className="text-sm text-neon-pink font-medium">🥺 Soft Boy</span>
          </div>
          <div className="bg-gradient-to-r from-neon-pink/20 to-red-500/20 rounded-full px-8 py-4 border border-red-500/50 backdrop-blur-sm flex-shrink-0 min-w-[140px]">
            <span className="text-sm text-red-400 font-medium">🔥 Rizz Legend</span>
          </div>
        </div>

        {/* Confetti effect */}
        <div className="absolute inset-0 pointer-events-none z-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              >
                {['💖', '✨', '🔥', '💕', '❤️'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
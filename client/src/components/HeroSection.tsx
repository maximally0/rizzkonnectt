
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { Heart, Flame, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [, setLocation] = useLocation();
  const [toxicityLevel, setToxicityLevel] = useState(45);
  const [confettiActive, setConfettiActive] = useState(false);

  const goToCoaches = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 1000);
    setLocation('/rizz-coaches');
  };

  // Floating hearts animation - positioned to avoid text overlap
  const FloatingHeart = ({ delay, size, left }: { delay: number; size: string; left: string }) => (
    <div 
      className={`absolute ${size} text-neon-pink animate-bounce opacity-30 pointer-events-none z-0`}
      style={{ 
        left, 
        animationDelay: `${delay}s`,
        animationDuration: '4s',
        top: `${Math.random() * 40 + 60}%`, // Push hearts lower to avoid text overlap
      }}
    >
      ❤️
    </div>
  );

  // Sparkle animation - positioned to avoid text overlap
  const FloatingSparkle = ({ delay, left }: { delay: number; left: string }) => (
    <div 
      className="absolute text-xs animate-ping opacity-15 pointer-events-none z-0"
      style={{ 
        left, 
        animationDelay: `${delay}s`,
        top: `${Math.random() * 30 + 70}%`, // Push sparkles lower to avoid text overlap
      }}
    >
      ✨
    </div>
  );

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

      {/* Floating hearts - positioned to avoid text overlap */}
      <FloatingHeart delay={0} size="text-2xl" left="8%" />
      <FloatingHeart delay={1} size="text-lg" left="88%" />
      <FloatingHeart delay={2} size="text-xl" left="12%" />
      <FloatingHeart delay={0.5} size="text-lg" left="85%" />
      <FloatingHeart delay={1.5} size="text-2xl" left="92%" />

      {/* Floating sparkles - positioned to avoid text overlap */}
      <FloatingSparkle delay={0} left="15%" />
      <FloatingSparkle delay={1} left="85%" />
      <FloatingSparkle delay={2} left="18%" />
      <FloatingSparkle delay={0.8} left="82%" />
      <FloatingSparkle delay={1.8} left="90%" />

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
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight max-w-2xl mx-auto" style={{ lineHeight: '1.2' }}>
          From{' '}
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            'left on read'
          </span>
          <br className="mb-4" />
          to{' '}
          <span className="bg-gradient-to-r from-neon-pink to-red-500 bg-clip-text text-transparent animate-pulse">
            'get in my bed.'
          </span>
          <div className="inline-block ml-2 animate-bounce">❤️</div>
          <div className="inline-block ml-1 animate-pulse">✨</div>
        </h1>
        
        {/* Improved subheadline with better spacing and typography */}
        <p className="text-lg md:text-xl text-text-secondary mb-16 max-w-lg mx-auto" style={{ lineHeight: '1.6' }}>
          Book 1:1 sessions with wild, real-life dating coaches who get you. 💕
        </p>

        {/* Enhanced CTA button with proper spacing */}
        <div className="relative mb-20">
          <Button 
            onClick={goToCoaches}
            className="neon-button text-xl px-16 py-8 neon-glow animate-heartbeat hover:animate-none bg-gradient-to-r from-neon-pink to-red-500 hover:from-red-500 hover:to-neon-pink transition-all duration-300 rounded-full shadow-lg shadow-neon-pink/50"
          >
            Get Rizzed Up Now 🔥💖
          </Button>
          
          {/* Hovering hearts around button */}
          <Heart className="absolute -top-3 -left-3 w-6 h-6 text-neon-pink animate-bounce opacity-60" fill="currentColor" />
          <Heart className="absolute -top-3 -right-3 w-4 h-4 text-red-500 animate-pulse opacity-60" fill="currentColor" />
          <Sparkles className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-5 h-5 text-neon-pink-light animate-ping opacity-60" />
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
                  width: `${toxicityLevel}%`,
                  background: `linear-gradient(to right, #4CAF50 0%, #FFC107 50%, #F44336 100%)`,
                  filter: 'drop-shadow(0 0 8px rgba(255, 59, 92, 0.3))'
                }}
              ></div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={toxicityLevel}
              onChange={(e) => setToxicityLevel(Number(e.target.value))}
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
        {confettiActive && (
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
        )}
      </div>
    </section>
  );
};

export default HeroSection;

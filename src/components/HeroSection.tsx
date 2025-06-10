
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Heart, Flame, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();
  const [toxicityLevel, setToxicityLevel] = useState(45);
  const [confettiActive, setConfettiActive] = useState(false);

  const goToCoaches = () => {
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 1000);
    navigate('/rizz-coaches');
  };

  // Floating hearts animation
  const FloatingHeart = ({ delay, size, left }: { delay: number; size: string; left: string }) => (
    <div 
      className={`absolute ${size} text-neon-pink animate-bounce opacity-60`}
      style={{ 
        left, 
        animationDelay: `${delay}s`,
        animationDuration: '3s',
        top: `${Math.random() * 80 + 10}%`
      }}
    >
      ❤️
    </div>
  );

  // Sparkle animation
  const FloatingSparkle = ({ delay, left }: { delay: number; left: string }) => (
    <div 
      className="absolute text-xs animate-ping opacity-40"
      style={{ 
        left, 
        animationDelay: `${delay}s`,
        top: `${Math.random() * 70 + 15}%`
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

      {/* Floating hearts */}
      <FloatingHeart delay={0} size="text-2xl" left="10%" />
      <FloatingHeart delay={1} size="text-lg" left="85%" />
      <FloatingHeart delay={2} size="text-xl" left="20%" />
      <FloatingHeart delay={0.5} size="text-lg" left="75%" />
      <FloatingHeart delay={1.5} size="text-2xl" left="90%" />

      {/* Floating sparkles */}
      <FloatingSparkle delay={0} left="15%" />
      <FloatingSparkle delay={1} left="80%" />
      <FloatingSparkle delay={2} left="25%" />
      <FloatingSparkle delay={0.8} left="70%" />
      <FloatingSparkle delay={1.8} left="95%" />

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

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* New playful headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          From{' '}
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            'left on read'
          </span>
          <br />
          to{' '}
          <span className="bg-gradient-to-r from-neon-pink to-red-500 bg-clip-text text-transparent animate-pulse">
            'get in my bed.'
          </span>
          <div className="inline-block ml-2 animate-bounce">❤️</div>
          <div className="inline-block ml-1 animate-pulse">✨</div>
        </h1>
        
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
          Book 1:1 sessions with wild, real-life dating coaches who get you. 💕
        </p>

        {/* Enhanced CTA button */}
        <div className="relative mb-8">
          <Button 
            onClick={goToCoaches}
            className="neon-button text-xl px-12 py-6 neon-glow animate-heartbeat hover:animate-none bg-gradient-to-r from-neon-pink to-red-500 hover:from-red-500 hover:to-neon-pink transition-all duration-300 rounded-full shadow-lg shadow-neon-pink/50"
          >
            Get Rizzed Up Now 🔥💖
          </Button>
          
          {/* Hovering hearts around button */}
          <Heart className="absolute -top-2 -left-2 w-6 h-6 text-neon-pink animate-bounce opacity-60" fill="currentColor" />
          <Heart className="absolute -top-2 -right-2 w-4 h-4 text-red-500 animate-pulse opacity-60" fill="currentColor" />
          <Sparkles className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 text-neon-pink-light animate-ping opacity-60" />
        </div>

        {/* Toxicity Meter */}
        <div className="mb-8 max-w-md mx-auto">
          <h3 className="text-lg font-semibold mb-3 text-white">
            How toxic is your DM game? 💀
          </h3>
          <div className="relative">
            <Progress 
              value={toxicityLevel} 
              className="h-4 bg-gray-800 rounded-full overflow-hidden"
            />
            <div 
              className="absolute top-0 h-4 rounded-full bg-gradient-to-r from-green-400 via-neon-pink to-red-500 transition-all duration-300"
              style={{ width: `${toxicityLevel}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max="100"
              value={toxicityLevel}
              onChange={(e) => setToxicityLevel(Number(e.target.value))}
              className="absolute top-0 w-full h-4 opacity-0 cursor-pointer"
            />
          </div>
          <div className="flex justify-between text-xs text-text-secondary mt-2">
            <span>Green Flag 💚</span>
            <span>Red Flag 🚩</span>
          </div>
        </div>

        {/* Rizz Resume Badges */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700 backdrop-blur-sm">
            <span className="text-sm text-gray-400">💀 Dry Texter</span>
          </div>
          <div className="bg-neon-pink/20 rounded-full px-4 py-2 border border-neon-pink/50 backdrop-blur-sm">
            <span className="text-sm text-neon-pink">🥺 Soft Boy</span>
          </div>
          <div className="bg-gradient-to-r from-neon-pink/20 to-red-500/20 rounded-full px-4 py-2 border border-red-500/50 backdrop-blur-sm">
            <span className="text-sm text-red-400">🔥 Rizz Legend</span>
          </div>
        </div>

        {/* Confetti effect */}
        {confettiActive && (
          <div className="absolute inset-0 pointer-events-none">
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

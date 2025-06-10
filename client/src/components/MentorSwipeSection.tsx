
import { useState } from 'react';
import { X, Star, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MentorCard from './MentorCard';
import { toast } from '@/hooks/use-toast';

interface Mentor {
  id: number;
  name: string;
  age: number;
  tagline: string;
  bio: string;
  image: string;
  expertise: string[];
}

const mockMentors: Mentor[] = [
  {
    id: 1,
    name: "Tanu",
    age: 24,
    tagline: "Confidence Coach & Social Queen",
    bio: "Ex-shy girl turned social butterfly. I'll teach you how to own any room and have authentic conversations that actually matter. Specializing in building genuine confidence from the inside out.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=500",
    expertise: ["Confidence Building", "Social Skills", "First Dates", "Text Game"]
  },
  {
    id: 2,
    name: "Jake",
    age: 27,
    tagline: "Authenticity & Connection Expert",
    bio: "Former tech bro who learned that being genuine beats any pickup line. I help guys develop real connections by being their authentic selves. No fake personas, just real results.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=500",
    expertise: ["Authentic Connection", "Emotional Intelligence", "Long-term Relationships", "Communication"]
  },
  {
    id: 3,
    name: "Zara",
    age: 26,
    tagline: "Body Language & Flirting Guru",
    bio: "Dance background meets psychology degree. I decode the unspoken language of attraction and teach you how to read and send the right signals without saying a word.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=500",
    expertise: ["Body Language", "Flirting", "Non-verbal Communication", "Energy Reading"]
  },
  {
    id: 4,
    name: "Marcus",
    age: 29,
    tagline: "Digital Dating Strategist",
    bio: "Cracked the code on dating apps after 200+ matches and countless successful dates. I'll optimize your profile, perfect your opener game, and get you quality matches consistently.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=500",
    expertise: ["Dating Apps", "Profile Optimization", "Text Strategy", "Online Presence"]
  },
  {
    id: 5,
    name: "Luna",
    age: 23,
    tagline: "Vulnerability & Intimacy Coach",
    bio: "Believes that real attraction comes from emotional depth. I teach how to be vulnerable in a way that draws people in and creates meaningful connections that last.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=500",
    expertise: ["Emotional Intimacy", "Vulnerability", "Deep Conversations", "Relationship Building"]
  }
];

const MentorSwipeSection = () => {
  const [mentors, setMentors] = useState(mockMentors);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<string | null>(null);

  const handleSwipe = (direction: 'left' | 'right' | 'super', mentor: Mentor) => {
    setSwipeDirection(direction);
    
    // Show toast feedback
    if (direction === 'right') {
      toast({
        title: `Liked ${mentor.name}! 💕`,
        description: "Great choice! They'll be notified.",
      });
    } else if (direction === 'super') {
      toast({
        title: `Super-liked ${mentor.name}! ⭐`,
        description: "You're at the top of their list now!",
      });
    } else {
      toast({
        title: `Passed on ${mentor.name}`,
        description: "No worries, plenty more mentors to discover!",
      });
    }

    // Animate and move to next card
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setSwipeDirection(null);
    }, 300);
  };

  const currentMentor = mentors[currentIndex];
  const nextMentor = mentors[currentIndex + 1];

  if (currentIndex >= mentors.length) {
    return (
      <section id="mentors" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
              No More Mentors
            </span>
          </h2>
          <p className="text-text-secondary mb-8">
            You've seen all our amazing mentors! More are joining every day.
          </p>
          <Button 
            onClick={() => {
              setCurrentIndex(0);
              setMentors([...mockMentors]);
            }}
            className="neon-button"
          >
            Start Over
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="mentors" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Your{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
              Potential Mentors
            </span>
          </h2>
          <p className="text-text-secondary">
            Swipe right to connect, left to pass, or tap to learn more
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          {/* Card Stack */}
          <div className="relative h-96 card-stack mb-8">
            {nextMentor && (
              <MentorCard
                mentor={nextMentor}
                onSwipe={handleSwipe}
                isTop={false}
              />
            )}
            {currentMentor && (
              <div className={swipeDirection ? `animate-swipe-${swipeDirection}` : ''}>
                <MentorCard
                  mentor={currentMentor}
                  onSwipe={handleSwipe}
                  isTop={true}
                />
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => handleSwipe('left', currentMentor)}
              size="lg"
              variant="outline"
              className="w-16 h-16 rounded-full border-red-500 text-red-500 hover:bg-red-500/10"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <Button
              onClick={() => handleSwipe('super', currentMentor)}
              size="lg"
              className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600"
            >
              <Star className="w-6 h-6 text-white" />
            </Button>
            
            <Button
              onClick={() => handleSwipe('right', currentMentor)}
              size="lg"
              className="w-16 h-16 rounded-full neon-button"
            >
              <Heart className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSwipeSection;

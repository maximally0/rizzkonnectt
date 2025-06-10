
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface Mentor {
  id: number;
  name: string;
  age: number;
  tagline: string;
  bio: string;
  image: string;
  expertise: string[];
}

interface MentorCardProps {
  mentor: Mentor;
  onSwipe: (direction: 'left' | 'right' | 'super', mentor: Mentor) => void;
  isTop: boolean;
}

const MentorCard = ({ mentor, onSwipe, isTop }: MentorCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (isTop) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div 
        className={`mentor-card absolute inset-0 ${!isTop ? 'pointer-events-none' : ''}`}
        onClick={handleCardClick}
        style={{ 
          zIndex: isTop ? 10 : 5,
          transform: isTop ? 'scale(1)' : 'scale(0.95) translateY(10px)',
          opacity: isTop ? 1 : 0.7
        }}
      >
        <div className="h-full flex flex-col">
          <div 
            className="h-64 bg-cover bg-center rounded-t-2xl"
            style={{ backgroundImage: `url(${mentor.image})` }}
          >
            <div className="h-full bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl flex items-end p-4">
              <div className="text-white">
                <h3 className="text-xl font-bold">{mentor.name}, {mentor.age}</h3>
                <p className="text-sm text-gray-200">{mentor.tagline}</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 flex-1">
            <p className="text-text-secondary text-sm mb-4 line-clamp-3">
              {mentor.bio}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.slice(0, 3).map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-neon-pink/20 text-neon-pink text-xs rounded-lg"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dark-card rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div 
              className="h-64 bg-cover bg-center rounded-t-2xl"
              style={{ backgroundImage: `url(${mentor.image})` }}
            >
              <div className="h-full bg-gradient-to-t from-black/80 to-transparent rounded-t-2xl flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold">{mentor.name}, {mentor.age}</h3>
                  <p className="text-gray-200">{mentor.tagline}</p>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-text-secondary mb-4">{mentor.bio}</p>
              
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-neon-pink/20 text-neon-pink text-sm rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={() => setIsModalOpen(false)}
                  variant="outline"
                  className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  Close
                </Button>
                <Button 
                  onClick={() => {
                    setIsModalOpen(false);
                    onSwipe('right', mentor);
                  }}
                  className="flex-1 neon-button"
                >
                  Book Session
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MentorCard;

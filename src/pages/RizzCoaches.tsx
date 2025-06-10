
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Coach {
  id: number;
  name: string;
  nickname: string;
  bio: string;
  image: string;
  expertise: string[];
}

const coaches: Coach[] = [
  {
    id: 1,
    name: "Tanu",
    nickname: "Toxic Baddie",
    bio: "Ex-shy girl turned social butterfly. I'll teach you how to own any room and have authentic conversations that actually matter.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=500",
    expertise: ["Confidence Building", "Social Skills", "First Dates"]
  },
  {
    id: 2,
    name: "Jake",
    nickname: "The Authenticity King",
    bio: "Former tech bro who learned that being genuine beats any pickup line. No fake personas, just real results.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=500",
    expertise: ["Authentic Connection", "Emotional Intelligence", "Long-term Relationships"]
  },
  {
    id: 3,
    name: "Zara",
    nickname: "Body Language Queen",
    bio: "Dance background meets psychology degree. I decode the unspoken language of attraction.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=500",
    expertise: ["Body Language", "Flirting", "Non-verbal Communication"]
  },
  {
    id: 4,
    name: "Marcus",
    nickname: "Digital Dating Master",
    bio: "Cracked the code on dating apps after 200+ matches. I'll optimize your profile and get you quality matches.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=500",
    expertise: ["Dating Apps", "Profile Optimization", "Text Strategy"]
  },
  {
    id: 5,
    name: "Luna",
    nickname: "Vulnerability Goddess",
    bio: "Real attraction comes from emotional depth. I teach how to be vulnerable in a way that draws people in.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=400&h=500",
    expertise: ["Emotional Intimacy", "Vulnerability", "Deep Conversations"]
  },
  {
    id: 6,
    name: "Alex",
    nickname: "Confidence Coach",
    bio: "Transform your inner game and become magnetic. Build unshakeable confidence that attracts naturally.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=500",
    expertise: ["Self-Confidence", "Mindset", "Personal Development"]
  }
];

const RizzCoaches = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your{' '}
              <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
                Rizz Coaches
              </span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Our handpicked coaches are real people with real experience. 
              They've been where you are and know how to get you where you want to be.
            </p>
          </div>

          {/* Coaches Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach) => (
              <div 
                key={coach.id} 
                className="bg-dark-card rounded-2xl overflow-hidden border border-gray-800 hover:border-neon-pink/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/10"
              >
                {/* Coach Image */}
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${coach.image})` }}
                >
                  <div className="h-full bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{coach.name}</h3>
                      <p className="text-neon-pink-light text-sm">"{coach.nickname}"</p>
                    </div>
                  </div>
                </div>

                {/* Coach Info */}
                <div className="p-6">
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                    {coach.bio}
                  </p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {coach.expertise.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-neon-pink/20 text-neon-pink text-xs rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Book Session Button */}
                  <Button className="w-full neon-button">
                    Book Session
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RizzCoaches;

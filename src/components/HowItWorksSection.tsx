
import { Heart, MessageCircle, Flame } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Heart,
      title: "Find Your Coach",
      description: "Browse through our curated list of dating mentors and find the perfect match for your vibe and goals."
    },
    {
      icon: MessageCircle,
      title: "Book Your Session", 
      description: "Schedule a 1:1 session that fits your schedule. Video call, phone, or even text coaching available."
    },
    {
      icon: Flame,
      title: "Get Rizzing",
      description: "Apply what you learn with personalized guidance, practice scenarios, and ongoing support from your mentor."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-dark-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Get personalized dating guidance in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-pink to-neon-pink-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-pink rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">
                {step.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

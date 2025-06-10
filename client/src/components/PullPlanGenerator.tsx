
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const PullPlanGenerator = () => {
  const [dreamTarget, setDreamTarget] = useState('');

  const handleGeneratePlan = () => {
    if (!dreamTarget.trim()) {
      toast({
        title: "Hold up! 🤔",
        description: "Tell us about your dream target first!",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Plan Generated! 🎯",
      description: "Your personalized rizz strategy is being crafted by our mentors!",
    });

    // Reset input
    setDreamTarget('');
  };

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your{' '}
            <span className="bg-gradient-to-r from-neon-pink to-neon-pink-light bg-clip-text text-transparent">
              Personalized Pull Plan
            </span>
          </h2>
          
          <p className="text-text-secondary mb-8">
            Describe your dream target and we'll generate a custom strategy just for you
          </p>

          <div className="bg-dark-card rounded-2xl p-8 border border-gray-800 hover:border-neon-pink/30 transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                value={dreamTarget}
                onChange={(e) => setDreamTarget(e.target.value)}
                placeholder="Type your dream target... (e.g., 'Creative artist who loves indie music and coffee shops')"
                className="flex-1 bg-dark-bg border-gray-700 text-white placeholder:text-gray-500 focus:border-neon-pink"
                onKeyPress={(e) => e.key === 'Enter' && handleGeneratePlan()}
              />
              
              <Button 
                onClick={handleGeneratePlan}
                className="neon-button whitespace-nowrap"
              >
                Generate Your Plan ✨
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Our AI will analyze your target and create a personalized approach strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PullPlanGenerator;

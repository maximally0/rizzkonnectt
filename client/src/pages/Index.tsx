
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PullPlanGenerator from '@/components/PullPlanGenerator';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <PullPlanGenerator />
      <Footer />
    </div>
  );
};

export default Index;

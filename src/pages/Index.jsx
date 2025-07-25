import HeroSection from '@/components/HeroSection';
import Navbar from '../components/Navbar';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import MissionStatement from '../components/MissionStatement';
import TestimonialsSection from '../components/TestimonialsSection';
import DiseasePreview from '../components/DiseasePreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MissionStatement />
      <DiseasePreview />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
import HeroSection from '../components/sections/HeroSection';
import CTAButtons from '../components/sections/CTAButtons';
import AstrologerSection from '../components/sections/AstrologerSection';
import VideoSection from '../components/sections/VideoSection';
import AboutSection from '../components/sections/AboutSection';
import { StatsSection, TestimonialsSlider, ScrollReveal } from '../components/Animations';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection onShopNow={() => navigate('/shop')} />
      <CTAButtons />
      <StatsSection />
      <AstrologerSection />
      <VideoSection />
      <TestimonialsSlider />
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
    </>
  );
}

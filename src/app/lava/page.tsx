import BeforeAfterSection from '../lavaSections/BeforeAfterSection';
import FinalCTASection from '../lavaSections/FinalCtaSection';
import Footer from '../lavaSections/Footer1';
import Header from '../lavaSections/Header';
import HeroSection from '../lavaSections/HeroSection1';
import IntroductionSection from '../lavaSections/IntroductionSection';
import MethodSection from '../lavaSections/MethodSection';
import OfferingQuestSection from '../lavaSections/OfferingQuestSection';
import ProblemSection from '../lavaSections/ProblemSection';
import TestimonialsSection from '../lavaSections/TestimonialsSection';
import TransformationSection from '../lavaSections/TransformationSection';
import VipOfferingSection from '../lavaSections/VipOfferingSection';

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section - Moved up for better context */}
      <IntroductionSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Transformation Section */}
      <TransformationSection />

      {/* Method Section */}
      <MethodSection />

      {/* Before & After Transformation */}
      <BeforeAfterSection />

      {/* VIP Offering Section */}
      <VipOfferingSection />

      {/* Quest Offering Section */}
      <OfferingQuestSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <FinalCTASection id="final-cta" />

      {/* Footer */}
      <Footer />
    </main>
  );
}

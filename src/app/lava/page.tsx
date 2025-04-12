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
import OfferingVipSection from '../lavaSections/VipOfferingSection';

export default function Home() {
  return (
    <main>
      <Header />
      {/* Hero Section */}
      <HeroSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Transformation Section */}
      <TransformationSection />

      {/* Method Section */}
      <MethodSection />

      {/* VIP Offering Section */}
      <OfferingQuestSection />

      {/* Quest Offering Section */}
      <OfferingVipSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Before & After Transformation */}
      <BeforeAfterSection />

      {/* Final CTA Section */}
      <FinalCTASection id="final-cta" />

      {/* Introduction Section */}
      <IntroductionSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

import BeforeAfterSection from '../lavaSections/BeforeAfterSection';
import FaqSection from '../lavaSections/FaqSection';
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

      {/* Introduction Section */}
      <IntroductionSection />

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

      {/* FAQ Section */}
      <FaqSection />

      {/* Final CTA Section */}
      <FinalCTASection id="final-cta" />

      {/* Footer */}
      <Footer />
    </main>
  );
}

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ProphecySection from './sections/ProphecySection';
import VisualsSection from './sections/VisualsSection';
import PodcastSection from './sections/PodcastSection';
import BooksSection from './sections/BooksSection';
import ShivaSection from './sections/ShivaSection';
import MusicSection from './sections/MusicSection';
import ContactSection from './sections/ContactSection';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ProphecySection />
      <ShivaSection />
      <VisualsSection />
      <PodcastSection />
      <BooksSection />
      <MusicSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

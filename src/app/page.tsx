import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Teachers from '@/components/sections/Teachers';
import MiniContact from '@/components/sections/MiniContact';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import ExternalLinks from '@/components/sections/ExternalLinks';
import Reviews from '@/components/sections/Reviews';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import DocumentsRoadmap from '@/components/sections/DocumentsRoadmap';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        <Teachers />
        <MiniContact />       
        <About />
        <DocumentsRoadmap />
        <Services />
        <ExternalLinks />        
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import Teachers from '@/components/sections/Teachers';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Reviews from '@/components/sections/Reviews';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Teachers />
        <About />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

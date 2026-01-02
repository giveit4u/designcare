import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Category from './components/home/Category';
import Features from './components/home/Features';
import CTA from './components/home/CTA';
import Comparison from './components/home/Comparison';
import Benefits from './components/home/Benefits';
import ServiceGallery from './components/home/ServiceGallery';
import ImageGallery from './components/home/ImageGallery';
import Pricing from './components/home/Pricing';
import Process from './components/home/Process';
import FAQ from './components/home/FAQ';
import Contact from './components/home/Contact';
import Logos from './components/home/Logos';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-wrapper">
        <Hero />
        <Category />
        <Features />
        <CTA />
        <Comparison />
        <Benefits />
        <ServiceGallery />
        <ImageGallery />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
        <Logos />
      </main>
      <Footer />
    </>
  );
}

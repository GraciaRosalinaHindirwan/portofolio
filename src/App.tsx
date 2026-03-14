import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { DesignProcess } from './components/DesignProcess';
import { UIGallery } from './components/UIGallery';
import { Tools } from './components/Tools';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <DesignProcess />
      <UIGallery />
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

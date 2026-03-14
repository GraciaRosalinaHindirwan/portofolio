import { Button } from './Button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center pt-20">
        <div className="inline-block px-4 py-2 bg-primary/5 rounded-full text-sm font-medium text-primary mb-8">
          UI/UX Designer
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 tracking-tight">
          Gracia Rosalina H
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 max-w-3xl mx-auto mb-12 leading-relaxed">
          Turning complex problems into simple, user-friendly digital experiences.        
        </p>
        <br />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" onClick={scrollToWork} className="bg-[#6D5BA6] hover:bg-[#DBD4F2] hover:scale-105 hover:text-[#2B2D42] transition-all duration-300 text-[#F6F7FB]">
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown size={32} className="mx-auto text-primary/40" />
        </div>
      </div>
    </section>
  );
}

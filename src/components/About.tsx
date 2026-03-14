import { CheckCircle2 } from 'lucide-react';

export function About() {
  const skills = [
    'UI Design',
    'UX Research',
    'Wireframing',
    'Prototyping',
    'Usability Testing',
    'Design Systems',
    'Figma'
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Me
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
            I’m a UI/UX designer who loves turning complex problems into simple, 
            intuitive digital experiences that balance user needs and business goals.
            </p>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              I design with empathy, iterate through prototypes, and use data to guide decisions. 
              I believe great design is invisible—it simply works.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-lg text-foreground/80">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Search, Target, Lightbulb, Layout, Smartphone, TestTube } from 'lucide-react';

export function DesignProcess() {
  const processSteps = [
    {
      icon: Search,
      title: 'Research',
      description: 'Understanding users, market, and context'
    },
    {
      icon: Target,
      title: 'Define',
      description: 'Identifying problems and opportunities'
    },
    {
      icon: Lightbulb,
      title: 'Ideate',
      description: 'Brainstorming creative solutions'
    },
    {
      icon: Layout,
      title: 'Wireframe',
      description: 'Mapping out structure and flow'
    },
    {
      icon: Smartphone,
      title: 'Prototype',
      description: 'Building interactive mockups'
    },
    {
      icon: TestTube,
      title: 'Test',
      description: 'Validating with real users'
    }
  ];

  return (
    <section id="process" className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            My Design Process
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A user-centered approach to creating meaningful experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon size={32} className="text-primary-foreground" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-primary/20">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary/40 rounded-full" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-foreground/60">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

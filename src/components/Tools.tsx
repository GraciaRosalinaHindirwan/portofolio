import React from 'react';
import { Figma, Box, Pen, Grid, FileText } from 'lucide-react';

export function Tools() {
  const tools = [
    { name: 'Figma', icon: Figma, color: 'bg-purple-100 text-purple-600' },
    { name: 'FigJam', icon: Grid, color: 'bg-pink-100 text-pink-600' },
    // { name: 'Adobe XD', icon: Box, color: 'bg-blue-100 text-blue-600' },
    // { name: 'Miro', icon: Pen, color: 'bg-yellow-100 text-yellow-600' },
    // { name: 'Notion', icon: FileText, color: 'bg-gray-100 text-gray-600' }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Tools & Technologies
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            My toolkit for creating exceptional design experiences
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="flex flex-col items-center justify-center w-40 h-40 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-xl ${tool.color} flex items-center justify-center mb-4`}>
                  <Icon size={32} />
                </div>
                <span className="font-semibold text-primary">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Linkedin, Dribbble, Mail } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:alex.rivera@email.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Dribbble, label: 'Dribbble', href: 'https://dribbble.com' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Gracia Rosalina</p>
            <p className="text-primary-foreground/70 mt-1">
              UI/UX Designer crafting meaningful digital experiences
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Gracia Rosalina H. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

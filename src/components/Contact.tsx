import React from 'react';
import { Mail, Linkedin, Dribbble, Globe, Instagram } from 'lucide-react';
import { Button } from './Button';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'rosalinagracia331@email.com',
      href: 'mailto:rosalinagracia331@email.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/GraciaRosalinaHindirwan',
      href: 'www.linkedin.com/in/gracia-rosalina-hindirwan-0ab110335'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '/grc290',
      href: 'https://www.instagram.com/grc290?igsh=MTR0MzQybWJ3aTJyYw=='
    },
    {
      icon: Globe,
      label: 'Tiktok',
      value: '/apah.ajah10',
      href: 'https://www.tiktok.com/@apah.ajah10?_r=1&_t=ZS-94fgm8t3uWQ'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground/60 mb-1">{contact.label}</p>
                  <p className="font-semibold text-primary truncate">{contact.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <a href="mailto:alex.rivera@email.com">
            <Button variant="primary" size="lg">
              <Mail size={20} className="mr-2" />
              Send Me an Email
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

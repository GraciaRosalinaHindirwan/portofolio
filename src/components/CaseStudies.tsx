import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudy {
  id: number;
  title: string;
  problem: string;
  tags: string[];
  image: string;
  link: string;
}

export function CaseStudies() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: 'Whooshh App',
      problem: 'Desain ini merupakan aplikasi mobile untuk pemesanan tiket kereta yang dirancang dengan pendekatan user-centered design. Aplikasi ini memudahkan pengguna dalam mencari jadwal, memilih kursi, melakukan pembayaran, hingga mendapatkan tiket digital dengan proses yang cepat dan sederhana.',
      tags: ['Mobile App', 'UI Design', 'UX Design', 'Prototyping'],
      image: 'img/whoosh.png',
      link: 'https://www.figma.com/proto/s3JIY2WVI70kWWGpZWf6om/tiket-kereta?node-id=106-77&p=f&t=ls44yZxUnrTjHoWi-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=309%3A166'
    },
    {
      id: 2,
      title: 'Redesign Info Kuliner',
      problem: 'Proyek ini merupakan redesign website Info Kuliner yang bertujuan meningkatkan pengalaman pengguna dalam menemukan tempat makan dan rekomendasi kuliner. Proses desain dimulai dari analisis website sebelumnya, kemudian dilanjutkan dengan pembuatan design system untuk menjaga konsistensi visual dan komponen UI. Redesign ini menghasilkan tampilan yang lebih modern, navigasi yang lebih jelas, serta struktur informasi yang lebih mudah dipahami oleh pengguna.',
      tags: ['Website', 'Design System', 'User Research', 'UI Design'],
      image: 'img/infoKuliner.png',
      link: 'https://www.linkedin.com/posts/gracia-rosalina-hindirwan-0ab110335_portofolio-redesign-info-kuliner-web-ugcPost-7300821815298322433-vOxL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFQzLYMBY6ZYjauzsfYvwWrSPU3zRu4sosc'
    },
    {
      id: 3,
      title: 'Website Himasisfo',
      problem: 'Website HIMASISFO dirancang sebagai media informasi bagi mahasiswa Sistem Informasi untuk mengakses berita, kegiatan, dan informasi organisasi dengan tampilan yang sederhana dan mudah digunakan.',
      tags: ['Website', 'Mobile App', 'Wireframe', 'prototype'],
      image: '',
      link:''
    },
     {
      id: 4,
      title: 'Uwang',
      problem: 'Proyek ini merupakan desain aplikasi mobile payroll yang membantu perusahaan dalam mengelola proses penggajian karyawan secara lebih efisien. Aplikasi ini mencakup fitur absensi, pengajuan cuti, reimburse, hingga pengelolaan data penggajian dalam satu platform yang terintegrasi.',
      tags: ['UI Design', 'UX Design', 'Mobile App'],
      image: 'img/payroll.png',
      link:'https://www.figma.com/proto/cEUCiUJw6zNHTyeC4pFP5l/RKPL_payroll?node-id=283-5961&t=r6RvUziZogiWDtWG-1&scaling=scale-down&content-scaling=fixed&page-id=78%3A2462&starting-point-node-id=283%3A5961&show-proto-sidebar=1'
    },
      {
      id: 5,
      title: 'PortoFlow',
      problem: 'Portoflow merupakan desain platform pembelajaran digital berbasis web dan mobile yang membantu pengguna mempelajari keterampilan baru melalui roadmap belajar yang terstruktur. Platform ini menyediakan alur pembelajaran yang jelas, sehingga pengguna dapat mengikuti materi secara bertahap dengan panduan yang terarah seperti proses mentoring.',
      tags: ['UI Design', 'UX Design', 'Mobile App'],
      image: 'img/portoflow.png',
      link:'https://www.figma.com/proto/9eRzsygltstVwLAIWT3ad5/PortoFlow?node-id=2344-13858&t=gkypQWHaqCJOP2Jh-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=946%3A1150&show-proto-sidebar=1'
    }
  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Case Studies
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-center">
            Explore my recent projects and the design thinking behind them
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/5 text-primary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-3xl font-bold text-primary mb-4">
                    {study.title}
                  </h3>

                  <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                    {study.problem}
                  </p>

                  <div>
                  <Button
                    variant="primary"
                    onClick={() => window.open(study.link, "_blank")}
                  >
                    View Case Study <ArrowRight size={18} className="ml-2" />
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

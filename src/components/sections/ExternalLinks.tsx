'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, CreditCard, Stethoscope, IdCard, FileText } from 'lucide-react';

const ExternalLinks = () => {
  const links = [
    {
      title: 'E-Sınav Harcı Ödemesi',
      href: 'https://odeme.meb.gov.tr/',
      desc: 'MEB e-Sınav ücretinizi güvenle online ödeyin.',
      icon: CreditCard,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Sağlık Raporu Ödemesi',
      href: 'https://sbos.saglik.gov.tr/oauthlogin?returnUrl=%2F',
      desc: 'Sağlık raporu ödeme ve işlem adımları.',
      icon: Stethoscope,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Nüfus Ehliyet Randevu',
      href: 'https://randevu.nvi.gov.tr/',
      desc: 'Nüfus müdürlüğünden ehliyet başvuru randevusu alın.',
      icon: IdCard,
      color: 'from-orange-500 to-rose-600'
    },
    {
      title: 'Kişisel Sağlık Bilgi Formu',
      href: 'https://www.turkiye.gov.tr/saglik-surucu-raporu-beyan-basvurusu',
      desc: 'e-Devlet üzerinden sağlık beyan formu girişiniz.',
      icon: FileText,
      color: 'from-purple-500 to-fuchsia-600'
    }
  ];

  return (
    <section id="external-links" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Resmi işlemler için hızlı erişim kartları</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">Gerekli işlemleri hızlıca yapabilirsiniz.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className={`bg-white rounded-2xl p-6 shadow-lg border border-secondary/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center shadow-md mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{item.desc}</p>
                  <div className="inline-flex items-center text-primary font-semibold text-sm">
                    Siteye Git
                    <ExternalLink className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExternalLinks;



'use client';

import { motion } from 'framer-motion';
import { CheckCircle, FileText, IdCard, Image as ImageIcon, Stethoscope } from 'lucide-react';

const DocumentsRoadmap = () => {
  const steps = [
    { icon: IdCard, title: 'Kimlik Kartı Fotokopisi', desc: 'T.C. kimlik kartınızın fotokopisi' },
    { icon: FileText, title: 'Öğrenim Belgesi', desc: 'Diploma veya öğrenim durum belgesi' },
    { icon: Stethoscope, title: 'Ehliyet Almak için Sağlık Raporu', desc: 'Yetkili kurumlardan sürücü olur raporu' },
    { icon: ImageIcon, title: '3 Adet Biyometrik Fotoğraf', desc: 'Son 6 ay içinde çekilmiş' },
    { icon: FileText, title: 'Adli Sicil Kaydı', desc: 'E-Devlet’ten alınmış güncel belge' }
  ];

  return (
    <section id="belgeler-roadmap" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Gerekli Belgeler
          </h3>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Türkiye’de ehliyet başvurusu için temel belgeleri küçük bir yol haritasında özetledik.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 hidden md:block" />
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center`}
              >
                <div className="flex-shrink-0 relative md:mx-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-lg">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                  <div className="bg-white rounded-xl p-5 shadow-md border border-secondary/10">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-primary">{step.title}</h4>
                        <p className="text-sm text-foreground/70 mt-1">{step.desc}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsRoadmap;



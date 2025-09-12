'use client';

import { motion } from 'framer-motion';
import { Trophy, Car, Calendar, Wallet, Rocket, PhoneCall } from 'lucide-react';

const Advantages = () => {
  const items = [
    { icon: Trophy, title: 'Yüksek Başarı Oranı', desc: '%95+ sınav başarı ortalamasıyla güven veren eğitim.' },
    { icon: Car, title: 'Birebir Direksiyon', desc: 'Kişiye özel rota ve araçla yoğun pratik imkânı.' },
    { icon: Calendar, title: 'Esnek Ders Saatleri', desc: 'İşe/okula uygun hafta içi–hafta sonu programları.' },
    { icon: Wallet, title: 'Uygun Fiyat & Taksit', desc: 'Bütçenize uygun ödeme alternatifleri ve taksit seçenekleri.' },
    { icon: Rocket, title: 'Hızlandırılmış Program', desc: 'Sınava yakın hızlandırılmış derslerle hızlı ilerleme.' },
    { icon: PhoneCall, title: 'Kayıt & Danışmanlık', desc: 'Ücretsiz danışma ve kayıt desteği: 0 (232) 264 40 03.' }
  ];

  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-accent via-white to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Avantajlarımız</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">Sürücü kursu seçiminde fark yaratan ve kayıt olmayı kolaylaştıran güçlü yönlerimiz.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-secondary/10"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary text-white flex items-center justify-center shadow-md mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
              <p className="text-sm text-foreground/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;



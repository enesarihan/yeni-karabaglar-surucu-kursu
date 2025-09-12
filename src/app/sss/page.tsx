'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const faqs = [
  {
    q: 'Ehliyet almak için minimum yaş kaçtır?',
    a: 'B sınıfı için 18 yaş gerekir. 17 yaşında kursa başlayabilir, 18 olduktan sonra sınavlara girebilirsiniz.'
  },
  {
    q: 'Kayıt için gerekli belgeler nelerdir?',
    a: 'Kimlik kartı fotokopisi, öğrenim belgesi, sürücü olur sağlık raporu, 3 adet biyometrik fotoğraf ve adli sicil kaydı.'
  },
  {
    q: 'Sağlık raporunu nereden alabilirim ve geçerlilik süresi nedir?',
    a: 'Yetkili sağlık kuruluşlarından alınır ve genellikle 6 ay geçerlidir. Rapor süreniz dolmadan işlemleri tamamlamanız önerilir.'
  },
  {
    q: 'Ehliyet kursu ve resmi ücretler toplamda ne kadar tutar?',
    a: 'Kurs ücretleri ve resmi harçlar dönemsel olarak değişir. Güncel bilgi için kursumuzla iletişime geçin; taksit seçenekleri mevcuttur.'
  },
  {
    q: 'Süreç toplamda ne kadar sürer?',
    a: 'Yoğunluğa bağlı olarak ortalama 4–8 hafta sürer. Teorik eğitim, sınav, direksiyon dersleri ve pratik sınav aşamalarını içerir.'
  },
  {
    q: 'Teorik sınav barajı kaçtır ve kaç soru vardır?',
    a: '50 soruluk test uygulanır. En az 35 doğru (%70) başarı şartı aranır.'
  },
  {
    q: 'Direksiyon sınavında neler sorulur?',
    a: 'Araç kontrolü, park manevraları, kalkış-duruş, şerit ve kavşak kuralları ile genel sürüş güvenliği değerlendirilir.'
  },
  {
    q: 'Sınavlarda kalırsam kaç kez tekrar girebilirim?',
    a: 'Yönetmeliklere göre belirlenmiş tekrar hakları vardır. Her deneme için ilgili sınav ücretleri yeniden ödenir.'
  },
  {
    q: 'Sınav ücretlerini nereden öderim?',
    a: 'MEB’in resmi sistemleri üzerinden çevrim içi ödeme yapılabilir. Kursumuz ödeme adımlarında sizi yönlendirir.'
  },
  {
    q: 'Ehliyetim ne zaman teslim edilir?',
    a: 'Pratik sınavı başarıyla geçtikten sonra başvuru ve basım süreci tamamlanınca ortalama birkaç iş günü içinde teslim edilir.'
  },
  {
    q: 'Yabancı ehliyetimi Türkiye ehliyetine çevirebilir miyim?',
    a: 'Evet, ülkeler arası anlaşmalara göre değişen evrak ve süreçlerle dönüşüm yapılabilir. Detaylar için kurs danışmanımızla görüşün.'
  },
  {
    q: 'Ehliyetimi kaybedersem ne yapmalıyım?',
    a: 'Nüfus müdürlüğünden randevu alarak yeniden düzenleme başvurusu yapılır. Gerekli evrak ve ücret bilgisi için resmi kaynaklara bakınız.'
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-accent via-white to-secondary/10 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Türkiye’de ehliyet alma sürecine dair en çok sorulan konuları sizin için derledik.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="bg-white rounded-xl shadow-lg border border-secondary/10"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-primary font-semibold">{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-foreground/60 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0 text-foreground/80 leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Sorunuz mu var? Hemen iletişime geçin!</h2>
            <p className="text-white/90 mb-6">Uzman ekibimiz kayıt ve süreç hakkında dakikalar içinde dönüş sağlar.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/#contact" className="px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-colors">Formu Doldur</Link>
              <a href="tel:+902322644003" className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors">Ara: 0 (232) 264 40 03</a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}



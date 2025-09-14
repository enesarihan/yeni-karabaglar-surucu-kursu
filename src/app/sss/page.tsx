"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const faqs = [
  {
    q: "Ehliyet almak için yaş şartı nedir? Kaç yaşında ehliyet alabilirim?",
    a: "B sınıfı ehliyet için 18 yaşını doldurmuş olmanız gerekir. 17 yaş 6 ayını dolduranlar sürücü kursuna kayıt yaptırabilir ancak direksiyon ve teorik sınavlara 18 yaşından sonra girebilirler.",
  },
  {
    q: "Sürücü kursu kayıt işlemleri için hangi belgeler gerekli?",
    a: 'Kayıt için gereken temel belgeler şunlardır: Kimlik kartı, öğrenim belgesi (en az ilkokul mezunu), sağlık raporu (yetkili sağlık kuruluşlarından alınmış, "sürücü olur" ibareli), 3 adet biyometrik fotoğraf ve adli sicil kaydı belgesi (E-Devlet üzerinden alınabilir).',
  },
  {
    q: "2024 ehliyet harçları ve sürücü kursu ücretleri ne kadar? Taksit imkanı var mı?",
    a: "Sürücü kursu ücretleri ve resmi harçlar her yıl MEB ve Hazine ve Maliye Bakanlığı tarafından güncellenir. Güncel ücret bilgisi ve size özel taksit seçenekleri için kursumuzla iletişime geçebilirsiniz. Resmi harçlar ise kurs ücretinden ayrı olarak devlete ödenir.",
  },
  {
    q: "Ehliyet alma süreci toplamda ne kadar sürer?",
    a: "Süreç, teorik eğitim ve direksiyon derslerinin tamamlanmasıyla birlikte sınav tarihlerine bağlı olarak değişir. Ortalama olarak 1,5 - 2 ay içinde tüm aşamalar tamamlanabilir. Yoğunluğa göre bu süre 1 ay kısalabilir veya uzayabilir.",
  },
  {
    q: "Teorik sınavda başarılı olmak için kaç doğru yapmak gerekir?",
    a: "Teorik sınavda toplam 50 soru bulunur. Sınavdan başarılı sayılmanız için en az 35 doğru yapmanız (70 puan) gerekmektedir. Yanlış cevaplar doğru cevapları götürmez.",
  },
  {
    q: "Direksiyon sınavında nelere dikkat etmeliyim ve sınavda ne sorulur?",
    a: "Direksiyon sınavı yaklaşık 35 dakika sürer ve iki aşamadan oluşur. İlk 5 dakikada araç bilgisi (motor, lastik, far vb.) sorulur. Sonrasında ise kalkış, park etme (L ve paralel), ani fren, geri geri gitme gibi manevralar ve trafikteki genel sürüş kurallarınız değerlendirilir.",
  },
  {
    q: "Sınavlarda başarısız olursam ne olur? Tekrar hakkım var mı?",
    a: "Hem teorik hem de direksiyon sınavı için 4’er tekrar hakkınız bulunur. Her başarısız sınavdan sonra ek ders alarak bir sonraki sınava daha iyi hazırlanabilirsiniz. Tekrar sınavına giriş için ilgili sınav harcını yeniden yatırmanız gerekir.",
  },
  {
    q: "Ehliyetim ne zaman ve nasıl elime ulaşır?",
    a: "Teorik ve direksiyon sınavlarından başarılı olduktan sonra Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü'ne başvurunuzu yaparsınız. Başvurudan sonra ehliyetiniz basılır ve PTT aracılığıyla ortalama 1-2 hafta içinde adresinize teslim edilir.",
  },
  {
    q: "Sağlık raporunu nereden alabilirim ve geçerlilik süresi ne kadardır?",
    a: "Sağlık raporunuzu yetkilendirilmiş aile hekimlikleri veya özel hastanelerden alabilirsiniz. Raporun geçerlilik süresi genellikle 6 aydır.",
  },
  {
    q: "Yabancı ehliyetimi Türk ehliyetine nasıl çevirebilirim?",
    a: "Ülkeler arası anlaşmalara göre farklılık gösteren bir süreçtir. Gerekli evraklar (pasaport, ikamet izni, tercüme edilmiş ehliyet vb.) ile Nüfus Müdürlüğü'ne başvurmanız gerekir. Detaylı bilgi için kurumumuzdan destek alabilirsiniz.",
  },
  {
    q: "Ehliyetimi kaybedersem ne yapmalıyım?",
    a: "Nüfus müdürlüğünden randevu alarak yeniden düzenleme başvurusu yapılır. Gerekli evrak ve ücret bilgisi için resmi kaynaklara bakınız.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ehliyet Alma Süreci Hakkında Merak Edilenler
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Ehliyet alma süreci, sınavlar, gerekli belgeler ve ücretler hakkında
            en çok sorulan soruların cevaplarını bulun. Hızlı ve güvenli bir
            şekilde ehliyet almak için tüm merak ettikleriniz burada!
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
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Sorunuz mu var? Hemen iletişime geçin!
            </h2>
            <p className="text-white/90 mb-6">
              Uzman ekibimiz kayıt ve süreç hakkında dakikalar içinde dönüş
              sağlar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/#contact"
                className="px-6 py-3 bg-white text-primary rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Formu Doldur
              </Link>
              <a
                href="tel:+902322644003"
                className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Ara: 0 (232) 264 40 03
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
}

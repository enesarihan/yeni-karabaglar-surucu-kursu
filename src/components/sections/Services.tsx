"use client";

import { motion } from "framer-motion";
import {
  Car,
  GraduationCap,
  Clock,
  Shield,
  Users,
  CheckCircle,
  Bike,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "B Sınıfı Ehliyet Paketi",
      description:
        "İzmir'de trafiğe güvenle çıkmanız için gereken her şey bu pakette! Uzman eğitmenlerle güncel müfredata uygun teorik dersler ve birebir direksiyon eğitimleri sizi bekliyor.",
      features: [
        "Milli Eğitim Bakanlığı onaylı teorik dersler",
        "Birebir direksiyon eğitimi (14 ders saati)",
        "Son model, klimalı ve konforlu eğitim araçları",
      ],
      icon: Car,
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "A2 Sınıfı Motosiklet Ehliyeti",
      description:
        "Motosiklet tutkunları için özel olarak tasarlanmış eğitim programı. İzmir Karabağlar'daki pistimizde temel hakimiyet ve şehir içi sürüş tekniklerini öğrenin.",
      features: [
        "Her seviyeye uygun başlangıç eğitimi",
        "Güvenlik ekipmanları (kask, mont vb.) temini",
        "Modern ve bakımlı eğitim motosikletleri",
      ],
      icon: Bike,
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      title: "İleri ve Güvenli Sürüş Teknikleri",
      description:
        "Ehliyetiniz var ancak trafiğe çıkmaktan çekiniyor musunuz? Veya sürüş becerilerinizi en üst seviyeye mi taşımak istiyorsunuz? Bu eğitim tam size göre.",
      features: [
        "Zorlu hava ve yol koşullarında araç kontrolü",
        "Acil durum fren ve manevra çalışmaları",
        "Park etme teknikleri (paralel, dikey, L park)",
      ],
      icon: Shield,
      color: "from-red-500 to-red-700",
    },
    {
      id: 4,
      title: "Esnek Ders Programları",
      description:
        "Yoğun iş veya okul temponuza tam uyum sağlayan kişiselleştirilmiş ders planlaması. Ehliyet alma sürecinizi ertelemeyin, zamanı siz yönetin.",
      features: [
        "Hafta içi ve cumartesi günleri ders imkanı",
        "Sabah, öğle ve akşam seansları",
        "Kaçırdığınız dersler için telafi programı",
      ],
      icon: Clock,
      color: "from-orange-500 to-orange-700",
    },
    {
      id: 5,
      title: "Sınav Başarı Paketi",
      description:
        "Teorik e-sınav ve direksiyon sınavına %100 hazır olun. Sınav heyecanını yenmeniz ve ilk denemede başarılı olmanız için özel olarak tasarlandı.",
      features: [
        "Gerçek sınav formatında deneme e-sınavları",
        "Direksiyon sınav parkuru ön hazırlık dersleri",
        "Sınavda dikkat edilmesi gereken püf noktaları",
        "Eksiklerinize yönelik birebir ek ders imkanı",
      ],
      icon: GraduationCap,
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 6,
      title: "Kurumsal Sürücü Eğitimleri",
      description:
        "Şirket personelinize yönelik özel filo ve grup eğitimleri. Hem çalışanlarınızın sürüş güvenliğini artırın hem de kurumsal avantajlardan yararlanın.",
      features: [
        "Şirketlere özel grup indirimleri",
        "Personelinize özel esnek ders saatleri",
        "Güvenli ve ekonomik sürüş seminerleri",
        "Detaylı raporlama ve sertifikalandırma",
      ],
      icon: Users,
      color: "from-teal-500 to-teal-700",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            İzmir'de Ehliyet Almanın En Kolay Yolu: Yeni Karabağlar Sürücü Kursu
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Direksiyon başına geçme korkunuza son veriyoruz! İzmir'deki modern
            sürücü kursumuzda, sabırlı ve profesyonel kadromuzla B ve A2 sınıfı
            ehliyet eğitimleri sunuyoruz. Kişiye özel ders programlarımızla
            kendinize olan güveninizi artırın ve özgürlüğe ilk adımı atın.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Service Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Service CTA */}
              <motion.div
                className="mt-auto pt-6 border-t border-gray-100"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#contact"
                  className="block w-full text-center bg-primary/10 text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Bilgi Al
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Hemen Başlayın!
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Profesyonel eğitim kadromuz ve modern imkanlarımızla ehliyet alma
              sürecinizi kolaylaştırıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                İletişime Geç
              </motion.a>
              <motion.a
                href="tel:02322644003"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
              >
                Hemen Ara
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

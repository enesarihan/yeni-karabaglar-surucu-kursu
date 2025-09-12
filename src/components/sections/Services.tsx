'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Car, 
  GraduationCap, 
  Clock, 
  Shield, 
  Users,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'B Sınıfı Ehliyet Teorik Eğitimi',
      description: 'İzmir\'de B sınıfı ehliyet için trafik kuralları, işaretler ve güvenli sürüş teknikleri hakkında kapsamlı teorik eğitim.',
      features: [
        'Güncel trafik kuralları ve mevzuat',
        'İnteraktif ders materyalleri',
        'E-sınav deneme testleri',
        'MTSK lisanslı uzman eğitmenler'
      ],
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      duration: '4 Hafta'
    },
    {
      id: 2,
      title: 'A2 Sınıfı Ehliyet Direksiyon Dersleri',
      description: 'İzmir Karabağlar\'da A2 sınıfı ehliyet için deneyimli eğitmenlerimizle birebir pratik sürüş dersleri.',
      features: [
        'Birebir direksiyon eğitimi',
        'Modern motosiklet filosu',
        'Parkur ve şehir trafiği eğitimi',
        'Güvenli sürüş teknikleri'
      ],
      icon: Car,
      color: 'from-green-500 to-green-600',
      duration: '6-8 Hafta'
    },
    {
      id: 3,
      title: 'Ehliyet Sınav Hazırlığı',
      description: 'İzmir ehliyet sınavlarına özel hazırlık programları, deneme sınavları ve başarı garantisi.',
      features: [
        'Teorik deneme sınavları',
        'Pratik sınav simülasyonu',
        'Sınav stratejileri',
        'Bireysel değerlendirme'
      ],
      icon: GraduationCap,
      color: 'from-purple-500 to-purple-600',
      duration: '2 Hafta'
    },
    {
      id: 4,
      title: 'Esnek Ehliyet Ders Saatleri',
      description: 'İzmir\'de iş ve okul hayatınıza uygun esnek ehliyet ders saatleri ve hafta sonu eğitim imkanı.',
      features: [
        'Hafta içi ve hafta sonu dersler',
        'Sabah-öğle-akşam seçenekleri',
        'Bireysel ehliyet programı',
        'Telafi direksiyon dersleri'
      ],
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
      duration: 'Esnek'
    },
    {
      id: 5,
      title: 'Güvenli Sürüş Eğitimi',
      description: 'İzmir trafiğinde savunma sürüşü teknikleri ve acil durum yönetimi eğitimi.',
      features: [
        'Savunma sürüşü teknikleri',
        'Acil fren ve manevra teknikleri',
        'Kötü hava koşullarında sürüş',
        'Trafik risk yönetimi'
      ],
      icon: Shield,
      color: 'from-red-500 to-red-600',
      duration: '1 Hafta'
    },
    {
      id: 6,
      title: 'Kurumsal Ehliyet Eğitimleri',
      description: 'İzmir\'de kurumsal ehliyet eğitimleri ve grup halinde özel sürücü kursu programları.',
      features: [
        'Kurumsal ehliyet anlaşmaları',
        'Grup sürücü kursu indirimleri',
        'Özel ehliyet programları',
        'Toplu kayıt avantajları'
      ],
      icon: Users,
      color: 'from-teal-500 to-teal-600',
      duration: 'Özel'
    }
  ];


  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            İzmir'de Ehliyet Hizmetlerimiz
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            B sınıfı ve A2 sınıfı ehliyet alma sürecinizde ihtiyacınız olan tüm hizmetleri 
            İzmir'de en deneyimli ekibimizle sunuyoruz.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {service.duration}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Service CTA */}
              <motion.div
                className="mt-6 pt-6 border-t border-gray-100"
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
              Profesyonel eğitim kadromuz ve modern imkanlarımızla 
              ehliyet alma sürecinizi kolaylaştırıyoruz.
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

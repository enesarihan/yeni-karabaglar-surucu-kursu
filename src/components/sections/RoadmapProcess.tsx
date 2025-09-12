'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  UserCheck,
  BookOpen,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  AlertCircle,
  ChevronRight,
  Calendar,
  Users
} from 'lucide-react';
import Link from 'next/link';

const RoadmapProcess = () => {

  const roadmapSteps = [
    {
      id: 1,
      title: 'Belge Hazırlığı',
      subtitle: 'Gerekli Evrakları Toplayın',
      icon: FileText,
      duration: '1-2 Gün',
      color: 'from-blue-500 to-blue-600',
      description: 'Ehliyet başvurusu için gerekli tüm belgeleri hazırlayın.',
      details: [
        'T.C. Kimlik Kartı (Asıl ve fotokopi)',
        'Nüfus cüzdanı fotokopisi',
        'İkametgah belgesi (6 aydan yeni)',
        'İlkokul diploması veya okuma yazma belgesi',
        'Biyometrik fotoğraf (4 adet)',
        'Askerlik durumu belgesi (Erkekler için)'
      ],
      tips: [
        'Belgelerin hepsinin güncel olduğundan emin olun',
        'Fotokopiler net ve okunabilir olmalı',
        'Biyometrik fotoğraflar son 6 ay içinde çekilmiş olmalı'
      ]
    },
    {
      id: 2,
      title: 'Sağlık Kontrolleri',
      subtitle: 'Sağlık ve Psikoteknik Raporu',
      icon: UserCheck,
      duration: '1 Gün',
      color: 'from-green-500 to-green-600',
      description: 'Sürücü belgesi için gerekli sağlık muayenelerini yaptırın.',
      details: [
        'Devlet hastanesinden sağlık raporu',
        'Yetkili kurumdan psikoteknik rapor',
        'Göz doktoru muayenesi',
        'Genel sağlık değerlendirmesi',
        'Refleks ve koordinasyon testleri'
      ],
      tips: [
        'Randevu alarak gidip bekleme süresini azaltın',
        'Gözlük kullanıyorsanız yanınızda götürün',
        'Sağlık raporları 6 ay geçerlidir'
      ]
    },
    {
      id: 3,
      title: 'Kursa Kayıt',
      subtitle: 'Sürücü Kursuna Başvuru',
      icon: BookOpen,
      duration: '1 Gün',
      color: 'from-purple-500 to-purple-600',
      description: 'Seçtiğiniz sürücü kursuna kayıt olun ve eğitime başlayın.',
      details: [
        'Kurs seçimi ve kayıt işlemleri',
        'Ders programı belirleme',
        'Teorik eğitim başlangıcı',
        'Eğitim materyallerinin teslim alınması',
        'Kurs ücretinin ödenmesi'
      ],
      tips: [
        'Kursu seçerken başarı oranlarını araştırın',
        'Ders saatlerinin size uygun olduğundan emin olun',
        'Kurs ücretini peşin ödeyerek indirim alabilirsiniz'
      ]
    },
    {
      id: 4,
      title: 'Teorik Eğitim',
      subtitle: 'Trafik Kuralları Dersleri',
      icon: BookOpen,
      duration: '2-3 Hafta',
      color: 'from-orange-500 to-orange-600',
      description: 'Trafik kuralları ve işaretleri hakkında teorik eğitim alın.',
      details: [
        '30 saat teorik ders (B sınıfı için)',
        'Trafik kuralları ve işaretleri',
        'İlk yardım eğitimi',
        'Motor ve araç bilgisi',
        'Çevre bilinci ve yakıt tasarrufu',
        'Deneme sınavları'
      ],
      tips: [
        'Derslere düzenli katılım sağlayın',
        'Ders notlarınızı düzenli olarak tekrar edin',
        'Deneme sınavlarını ciddiye alın'
      ]
    },
    {
      id: 5,
      title: 'Teorik Sınav',
      subtitle: 'Bilgisayarlı Test Sınavı',
      icon: CheckCircle,
      duration: '1 Gün',
      color: 'from-red-500 to-red-600',
      description: 'Emniyet Müdürlüğü\'nde teorik sınavınıza girin.',
      details: [
        '50 soruluk çoktan seçmeli test',
        'En az 35 doğru cevap gerekli (%70)',
        'Sınav süresi 45 dakika',
        'Bilgisayar ortamında yapılır',
        'Sonuç anında açıklanır'
      ],
      tips: [
        'Sınavdan önce bol bol deneme testi çözün',
        'Erken giderek stres yapmayın',
        'Sorulari dikkatli okuyun, acele etmeyin'
      ]
    },
    {
      id: 6,
      title: 'Pratik Eğitim',
      subtitle: 'Direksiyon Dersleri',
      icon: Car,
      duration: '2-4 Hafta',
      color: 'from-teal-500 to-teal-600',
      description: 'Eğitmenle birlikte araç kullanmayı öğrenin.',
      details: [
        '12 saat pratik ders (B sınıfı için)',
        'Araç kontrol ve kullanımı',
        'Park etme teknikleri',
        'Trafik içinde sürüş',
        'Savunmalı sürüş teknikleri',
        'Acil durumlar'
      ],
      tips: [
        'Eğitmeninizin talimatlarını dikkatle dinleyin',
        'Sabırlı olun, herkes farklı hızda öğrenir',
        'Ek ders almaktan çekinmeyin'
      ]
    },
    {
      id: 7,
      title: 'Pratik Sınav',
      subtitle: 'Direksiyon Sınavı',
      icon: Car,
      duration: '1 Gün',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Sınav memuru eşliğinde direksiyon sınavınıza girin.',
      details: [
        'Araç kontrol bilgisi sınavı',
        'Kapalı alan manevra sınavı',
        'Trafik içi sürüş sınavı',
        'Park etme ve geri gitme',
        'Genel sürüş değerlendirmesi'
      ],
      tips: [
        'Sakin kalın ve kendinize güvenin',
        'Trafik kurallarına kesinlikle uyun',
        'Sınav aracına önceden alışmaya çalışın'
      ]
    },
    {
      id: 8,
      title: 'Ehliyet Teslimi',
      subtitle: 'Sürücü Belgenizi Alın',
      icon: CheckCircle,
      duration: '1-7 Gün',
      color: 'from-green-600 to-green-700',
      description: 'Başarılı olduktan sonra ehliyetinizi teslim alın.',
      details: [
        'Sınav sonucu açıklanması',
        'Geçici ehliyet belgesi',
        'Asıl ehliyet için başvuru',
        'Ehliyet ücretinin ödenmesi',
        'Ehliyet teslim alma'
      ],
      tips: [
        'Geçici belge ile araç kullanabilirsiniz',
        'Asıl ehliyet 1 hafta içinde hazır olur',
        'Ehliyet ücretini peşin ödeyebilirsiniz'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ehliyet Alma Süreci
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ehliyet almak için izlemeniz gereken adımları bir yol haritası şeklinde hazırladık. 
            Her adımda ne yapmanız gerektiğini detaylıca öğrenin.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-0.5"></div>

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-full text-xs font-bold text-gray-600 border border-gray-200">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${
                  index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {step.subtitle}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Yapılacaklar
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <AlertCircle className="w-5 h-5 text-orange-500 mr-2" />
                          İpuçları
                        </h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <ChevronRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ehliyet Alma Yolculuğunuza Başlayın!
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Yeni Karabağlar Sürücü Kursu ile güvenli ve hızlı bir şekilde ehliyetinizi alın. 
              Deneyimli eğitmenlerimiz her adımda yanınızda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Hemen Kayıt Ol
              </Link>
              <Link
                href="tel:02322644003"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-teal-600 transition-colors duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Randevu Al
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '8', label: 'Adım', icon: MapPin },
            { number: '4-8', label: 'Hafta Süre', icon: Clock },
            { number: '%95', label: 'Başarı Oranı', icon: CheckCircle },
            { number: '500+', label: 'Mezun Öğrenci', icon: Users }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapProcess;

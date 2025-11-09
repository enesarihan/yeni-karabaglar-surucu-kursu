"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  DocumentTextIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const DriverLicenseProcess = () => {
  const [activeTab, setActiveTab] = useState("belgeler");

  const tabs = [
    { id: "belgeler", label: "Gerekli Belgeler", icon: DocumentTextIcon },
    { id: "surecler", label: "Sınav Süreçleri", icon: AcademicCapIcon },
    { id: "ucretler", label: "Ücretler", icon: CurrencyDollarIcon },
    { id: "sss", label: "S.S.S.", icon: ExclamationTriangleIcon },
  ];

  const requiredDocuments = [
    {
      title: "Kimlik Belgeleri",
      items: [
        "T.C. Kimlik Kartı (Asıl ve fotokopi)",
        "Nüfus cüzdanı fotokopisi",
        "İkametgah belgesi (6 aydan yeni)",
      ],
    },
    {
      title: "Sağlık Belgeleri",
      items: [
        "Sürücü belgesi sağlık raporu (Devlet hastanesi)",
        "Psikoteknik rapor (Yetkili kurumlardan)",
        "Göz raporu (Göz doktoru muayenesi)",
      ],
    },
    {
      title: "Eğitim Belgeleri",
      items: [
        "İlkokul diploması (En az)",
        "Okuma yazma belgesi (İlkokul mezunu olmayanlar için)",
        "Askerlik durumu belgesi (Erkekler için)",
      ],
    },
    {
      title: "Diğer Belgeler",
      items: [
        "Biyometrik fotoğraf (4 adet)",
        "Kurs kayıt belgesi",
        "Trafik cezası borcu olmadığına dair belge",
      ],
    },
  ];

  const examProcesses = [
    {
      step: 1,
      title: "Kursa Kayıt",
      description:
        "Sürücü kursuna kayıt olun ve gerekli belgeleri teslim edin.",
      duration: "1 gün",
      details: [
        "Belgelerinizi tamamlayın",
        "Kurs ücretini ödeyin",
        "Ders programınızı belirleyin",
      ],
    },
    {
      step: 2,
      title: "Teorik Eğitim",
      description:
        "Trafik kuralları ve işaretleri hakkında teorik eğitim alın.",
      duration: "2-3 hafta",
      details: [
        "15 saat teorik ders",
        "Trafik kuralları",
        "İşaretler ve levhalar",
        "İlk yardım eğitimi",
      ],
    },
    {
      step: 3,
      title: "Teorik Sınav",
      description: "Emniyet Müdürlüğü'nde bilgisayarlı teorik sınava girin.",
      duration: "45 dakika",
      details: [
        "50 soru (70 puan baraj)",
        "Çoktan seçmeli sorular",
        "Trafik kuralları ve işaretler",
        "Sınırsız deneme hakkı",
      ],
    },
    {
      step: 4,
      title: "Pratik Eğitim",
      description: "Direksiyon dersleri ile pratik sürüş eğitimi alın.",
      duration: "3-4 hafta",
      details: [
        "24 saat direksiyon dersi",
        "Araç kullanımı",
        "Trafik kuralları uygulaması",
        "Park etme teknikleri",
      ],
    },
    {
      step: 5,
      title: "Pratik Sınav",
      description: "Direksiyon sınavına girerek sürüş becerinizi gösterin.",
      duration: "15-20 dakika",
      details: [
        "Araç muayenesi",
        "Şehir içi sürüş",
        "Park etme",
        "Trafik kurallarına uyum",
      ],
    },
    {
      step: 6,
      title: "Ehliyet Alma",
      description: "Sınavları geçtikten sonra ehliyetinizi teslim alın.",
      duration: "1-2 gün",
      details: [
        "Sınav sonuçlarının onaylanması",
        "Ehliyet üretimi",
        "Teslim alma işlemi",
      ],
    },
  ];

  const fees = [
    {
      category: "Kurs Ücretleri",
      items: [
        { name: "B Sınıfı Ehliyet Kursu", price: "2.500 - 3.500 TL" },
        { name: "A2 Sınıfı Ehliyet Kursu", price: "2.000 - 3.000 TL" },
        { name: "Ek Direksiyon Dersi", price: "150 - 200 TL/saat" },
      ],
    },
    {
      category: "Resmi Ücretler",
      items: [
        { name: "Teorik Sınav Ücreti", price: "50 TL" },
        { name: "Pratik Sınav Ücreti", price: "100 TL" },
        { name: "Ehliyet Basım Ücreti", price: "200 TL" },
      ],
    },
    {
      category: "Sağlık Raporu Ücretleri",
      items: [
        { name: "Sürücü Sağlık Raporu", price: "300 - 500 TL" },
        { name: "Psikoteknik Rapor", price: "200 - 300 TL" },
        { name: "Göz Raporu", price: "100 - 150 TL" },
      ],
    },
  ];

  const faqs = [
    {
      question: "Ehliyet almak için minimum yaş kaç?",
      answer:
        "B sınıfı ehliyet için 18 yaş, A2 sınıfı ehliyet için 18 yaş şartı vardır. 17 yaşında kursa başlayabilir, 18 yaşını doldurduktan sonra sınava girebilirsiniz.",
    },
    {
      question: "Sınavlarda kaç kez deneme hakkım var?",
      answer:
        "Teorik sınav için sınırsız deneme hakkınız vardır. Pratik sınav için de sınırsız deneme hakkınız bulunmaktadır, ancak her sınav için ücret ödemeniz gerekir.",
    },
    {
      question: "Sağlık raporu ne kadar süre geçerli?",
      answer:
        "Sürücü belgesi sağlık raporu 6 ay süreyle geçerlidir. Bu süre içinde sınavlarınızı tamamlamanız gerekmektedir.",
    },
    {
      question: "Direksiyon dersi saatleri nasıl belirlenir?",
      answer:
        "Minimum 24 saat direksiyon dersi zorunludur. Ders saatlerinizi eğitmeninizle ve kendi programınıza uygun şekilde planlayabilirsiniz.",
    },
    {
      question: "Ehliyet ne kadar sürede hazır olur?",
      answer:
        "Sınavları başarıyla geçtikten sonra ehliyetiniz 1-2 iş günü içinde hazır olur ve teslim alabilirsiniz.",
    },
    {
      question: "Başka şehirde aldığım kursu burada devam ettirebilir miyim?",
      answer:
        "Evet, nakil işlemi yaparak kurs eğitiminizi başka bir şehirde devam ettirebilirsiniz. Bunun için gerekli evrakları tamamlamanız gerekir.",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "belgeler":
        return (
          <div className="grid md:grid-cols-2 gap-8">
            {requiredDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                  <DocumentTextIcon className="w-6 h-6 mr-2" />
                  {doc.title}
                </h3>
                <ul className="space-y-3">
                  {doc.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        );

      case "surecler":
        return (
          <div className="space-y-8">
            {examProcesses.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold text-primary">
                        {process.title}
                      </h3>
                      <div className="flex items-center text-secondary font-medium">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {process.duration}
                      </div>
                    </div>
                    <p className="text-foreground/80 mb-4">
                      {process.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {process.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-foreground/70">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "ucretler":
        return (
          <div className="grid md:grid-cols-3 gap-8">
            {fees.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                  <CurrencyDollarIcon className="w-6 h-6 mr-2" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between items-start"
                    >
                      <span className="text-foreground/80 text-sm flex-1 mr-2">
                        {item.name}
                      </span>
                      <span className="font-semibold text-primary text-sm">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "sss":
        return (
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-primary mb-3 flex items-start">
                  <ExclamationTriangleIcon className="w-5 h-5 mr-2 mt-0.5 text-secondary" />
                  {faq.question}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-white to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Türkiye'de Ehliyet Alma Süreci
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Ehliyet almak için gerekli tüm bilgiler, belgeler, sınav süreçleri
            ve ücretler hakkında detaylı rehber.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-foreground hover:bg-primary/10 shadow-md"
              }`}
              aria-label={`${tab.label} sekmesini aç`}
              aria-pressed={activeTab === tab.id}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          {renderTabContent()}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ehliyet Alma Sürecinize Başlamaya Hazır Mısınız?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Deneyimli eğitmenlerimiz ve kapsamlı eğitim programımızla ehliyet
            alma sürecinizde size yardımcı olalım. Hemen iletişime geçin!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              Hemen Kayıt Ol
            </Link>
            <Link
              href="tel:+902322644003"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Bilgi Al: 0 (232) 264 40 03
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DriverLicenseProcess;

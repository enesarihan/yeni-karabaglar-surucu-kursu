"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  TruckIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Bike, Car, Truck, Bus, Tractor, Construction } from "lucide-react";
import Link from "next/link";

const LicenseClasses = () => {
  const [selectedClass, setSelectedClass] = useState("B");

  const licenseClasses = [
    {
      class: "A1",
      name: "Hafif Motosiklet",
      minAge: 16,
      vehicles: ["125cc'ye kadar motosiklet", "Üç tekerlekli hafif araç"],
      icon: Bike,
      color: "bg-blue-500",
      description:
        "Hafif motosiklet (125cc ve altı) ve üç tekerlekli araçlar için ehliyet sınıfı.",
      requirements: [
        "16 yaşını doldurmuş olmak",
        "Sağlık raporu",
        "Psikoteknik raporu (gerekli durumlarda)",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "10 yıl",
      canDrive: [
        "Motor gücü 11 kW'ı (15 hp) ve motor hacmi 125 cm³'ü geçmeyen motosikletler",
        "Güç/ağırlık oranı 0.1 kW/kg'ı geçmeyen motosikletler",
        "Üç tekerlekli hafif araçlar (15 kW'a kadar)",
      ],
    },
    {
      class: "A2",
      name: "Orta Motosiklet",
      minAge: 18,
      vehicles: [
        "35kW'a kadar motosiklet",
        "Güç/ağırlık oranı 0.2kW/kg'ı geçmeyen",
      ],
      icon: Bike,
      color: "bg-green-500",
      description:
        "Güç/ağırlık oranı belirli bir sınırı geçmeyen orta güçteki motosikletler için ehliyet sınıfı.",
      requirements: [
        "18 yaşını doldurmuş olmak",
        "Sağlık raporu",
        "Psikoteknik raporu (gerekli durumlarda)",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "10 yıl",
      canDrive: [
        "Motor gücü 35 kW'ı (47 hp) geçmeyen motosikletler",
        "Güç/ağırlık oranı 0.2 kW/kg'ı geçmeyen motosikletler",
        "A1 sınıfı ehliyetin sürdüğü araçlar",
      ],
    },
    {
      class: "A",
      name: "Ağır Motosiklet",
      minAge: 24,
      vehicles: ["Tüm motosikletler", "Üç tekerlekli motorlu araçlar"],
      icon: Bike,
      color: "bg-red-500",
      description:
        "Tüm motosiklet ve 15kW üzeri güce sahip üç tekerlekli motorlu araçlar için ehliyet sınıfı.",
      requirements: [
        "24 yaşını doldurmuş olmak (direkt başvuru için)",
        "2 yıl A2 ehliyetine sahip olmak (yaş 20 ve üzeri)",
        "Sağlık raporu",
        "Psikoteknik raporu (gerekli durumlarda)",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "10 yıl",
      canDrive: [
        "Motor gücü 35 kW'ın üzerindeki tüm motosikletler",
        "Motor gücü 15 kW'ı geçen üç tekerlekli motorlu araçlar",
        "A1 ve A2 sınıfı ehliyetlerin sürdüğü araçlar",
      ],
    },
    {
      class: "B",
      name: "Otomobil",
      minAge: 18,
      vehicles: ["Otomobil", "Hafif ticari araç", "750kg'a kadar römork"],
      icon: Car,
      color: "bg-primary",
      description:
        "En yaygın kullanılan ehliyet sınıfıdır. Otomobil ve hafif ticari araçları kullanma yetkisi verir.",
      requirements: [
        "18 yaşını doldurmuş olmak",
        "En az ilkokul mezunu olmak",
        "Sağlık raporu",
        "Psikoteknik raporu (gerekli durumlarda)",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "10 yıl",
      canDrive: [
        "Azami ağırlığı 3.500 kg'ı geçmeyen otomobil ve kamyonetler",
        "Maksimum 8+1 koltuklu araçlar",
        "750 kg'a kadar olan römorklar",
      ],
    },
    {
      class: "BE",
      name: "Otomobil + Ağır Römork",
      minAge: 18,
      vehicles: ["B sınıfı araç + 750kg üzeri römork"],
      icon: Truck,
      color: "bg-blue-600",
      description:
        "B sınıfı araçlara takılan 750 kg'dan ağır römork veya yarı römorkları kullanmak için gerekli ehliyet sınıfı.",
      requirements: [
        "B sınıfı ehliyete sahip olmak",
        "18 yaşını doldurmuş olmak",
        "Sağlık raporu",
        "Sadece pratik sınav (teorik sınav yoktur)",
      ],
      validityPeriod: "10 yıl",
      canDrive: [
        "B sınıfı ehliyetin sürdüğü tüm araçlar",
        "750 kg'ı aşan römork veya yarı römorklar",
      ],
    },
    {
      class: "C1",
      name: "Orta Kamyon",
      minAge: 18,
      vehicles: ["3500-7500kg arası kamyon", "750kg'a kadar römork"],
      icon: Truck,
      color: "bg-orange-500",
      description:
        "Azami yüklü ağırlığı 3.500 kg ile 7.500 kg arasında olan kamyon ve çekicileri kullanmak için gerekli ehliyet sınıfı.",
      requirements: [
        "B sınıfı ehliyete sahip olmak",
        "18 yaşını doldurmuş olmak",
        "Özel sağlık raporu",
        "Psikoteknik raporu",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "5 yıl",
      canDrive: [
        "Azami ağırlığı 3.500 kg ile 7.500 kg arasında olan kamyonlar",
        "750 kg'a kadar römork",
        "B sınıfı ehliyetin sürdüğü tüm araçlar",
      ],
    },
    {
      class: "C",
      name: "Ağır Kamyon",
      minAge: 21,
      vehicles: ["7500kg üzeri kamyon", "750kg'a kadar römork"],
      icon: Truck,
      color: "bg-red-600",
      description:
        "Azami yüklü ağırlığı 7.500 kg'ın üzerinde olan kamyon ve çekicileri kullanmak için gerekli ehliyet sınıfı.",
      requirements: [
        "B sınıfı ehliyete sahip olmak",
        "21 yaşını doldurmuş olmak",
        "Özel sağlık raporu",
        "Psikoteknik raporu",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "5 yıl",
      canDrive: [
        "Azami ağırlığı 7.500 kg'ın üzerinde olan kamyon ve çekiciler",
        "C1 ve B sınıfı ehliyetlerin sürdüğü tüm araçlar",
      ],
    },
    {
      class: "D1",
      name: "Orta Otobüs",
      minAge: 21,
      vehicles: ["9-16 kişi arası otobüs", "750kg'a kadar römork"],
      icon: Bus,
      color: "bg-purple-500",
      description:
        "16+1 kişiye kadar yolcu taşıyabilen minibüsleri ve otobüsleri kullanmak için gerekli ehliyet sınıfı.",
      requirements: [
        "B sınıfı ehliyete sahip olmak",
        "21 yaşını doldurmuş olmak",
        "Özel sağlık raporu",
        "Psikoteknik raporu",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "5 yıl",
      canDrive: [
        "Maksimum 16+1 koltuklu minibüsler",
        "750 kg'a kadar römork",
        "B sınıfı ehliyetin sürdüğü tüm araçlar",
      ],
    },
    {
      class: "D",
      name: "Ağır Otobüs",
      minAge: 24,
      vehicles: ["16+ kişi otobüs", "750kg'a kadar römork"],
      icon: Bus,
      color: "bg-indigo-600",
      description:
        "16+1'den fazla yolcu taşıyabilen otobüsleri ve minibüsleri kullanmak için gerekli ehliyet sınıfı.",
      requirements: [
        "B sınıfı ehliyete sahip olmak",
        "24 yaşını doldurmuş olmak",
        "Özel sağlık raporu",
        "Psikoteknik raporu",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "5 yıl",
      canDrive: [
        "16+1 koltuktan fazla otobüsler",
        "D1 ve B sınıfı ehliyetlerin sürdüğü tüm araçlar",
      ],
    },
    {
      class: "F",
      name: "Traktör",
      minAge: 16,
      vehicles: ["Traktör", "Tarım araçları"],
      icon: Tractor,
      color: "bg-green-600",
      description:
        "Lastik tekerlekli traktörleri kullanmak için verilen ehliyet sınıfı.",
      requirements: [
        "16 yaşını doldurmuş olmak",
        "Sağlık raporu",
        "Teorik ve pratik sınav",
      ],
      validityPeriod: "10 yıl",
      canDrive: [
        "Lastik tekerlekli traktörler",
        "Bu araçlara takılan römork ve yarı römorklar",
      ],
    },
    {
      class: "G",
      name: "İş Makinesi",
      minAge: 18,
      vehicles: ["Paletli iş makinesi", "Vinç", "Greyder"],
      icon: Construction,
      color: "bg-yellow-600",
      description:
        "Motorlu bisikletler, otomobil ve kamyon dışında kalan iş makineleri ve vinçleri kullanmak için gerekli ehliyet sınıfı.",
      requirements: [
        "18 yaşını doldurmuş olmak",
        "Sağlık raporu",
        "Pratik sınav (teorik ders ve sınavı yoktur)",
        'Özel kurslardan alınan "İş Makinesi Operatörlük Belgesi"',
      ],
      validityPeriod: "10 yıl",
      canDrive: ["Forklift, vinç, ekskavatör, beko loder gibi iş makineleri"],
    },
  ];

  const selectedLicense = licenseClasses.find(
    (license) => license.class === selectedClass
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-white to-secondary/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ehliyet Sınıfları Rehberi: Hangi Ehliyet Hangi Aracı Sürer?
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Hangi ehliyeti almanız gerektiğini öğrenin. A, B, C, D sınıfları
            dahil olmak üzere tüm ehliyet tipleri, yaş şartları, gerekli
            belgeler ve ehliyet kursu ücretleri hakkında detaylı bilgi alın.
          </p>
        </motion.div>
        {/* License Class Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Ehliyet Sınıfını Seçin
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {licenseClasses.map((license) => (
              <button
                key={license.class}
                onClick={() => setSelectedClass(license.class)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedClass === license.class
                    ? `${license.color} text-white border-transparent shadow-lg`
                    : "bg-white text-foreground border-gray-300 hover:border-primary/50"
                }`}
              >
                <div className="mb-2 flex justify-center">
                  <license.icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-lg">{license.class}</div>
                <div className="text-xs">{license.name}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected License Details */}
        {selectedLicense && (
          <motion.div
            key={selectedClass}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`${selectedLicense.color} text-white p-4 rounded-xl flex items-center justify-center`}
                  >
                    <selectedLicense.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary">
                      {selectedLicense.class} Sınıfı Ehliyet
                    </h3>
                    <p className="text-lg text-foreground/70">
                      {selectedLicense.name}
                    </p>
                  </div>
                </div>

                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {selectedLicense.description}
                </p>

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-accent rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <UserIcon className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">
                        Minimum Yaş
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {selectedLicense.minAge} yaş
                    </p>
                  </div>
                  <div className="bg-accent rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <ClockIcon className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-secondary">
                        Geçerlilik
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {selectedLicense.validityPeriod}
                    </p>
                  </div>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
                    Gerekli Şartlar
                  </h4>
                  <div className="space-y-2">
                    {selectedLicense.requirements.map((req, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div>
                {/* Can Drive */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                    <TruckIcon className="w-6 h-6 mr-2" />
                    Sürülebilecek Araçlar
                  </h4>
                  <div className="space-y-3">
                    {selectedLicense.canDrive.map((vehicle, index) => (
                      <div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded-lg p-3"
                      >
                        <div className="flex items-start space-x-2">
                          <CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground font-medium">
                            {vehicle}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Important Notes */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h5 className="font-bold text-blue-800 mb-3 flex items-center">
                    <InformationCircleIcon className="w-5 h-5 mr-2" />
                    Önemli Notlar
                  </h5>
                  <div className="text-sm text-blue-700 space-y-2">
                    {selectedLicense.class === "B" && (
                      <>
                        <p>• En yaygın kullanılan ehliyet sınıfıdır.</p>
                        <p>
                          • Otomatik vites araçlar için ayrı belirtim gerekir.
                        </p>
                        <p>• İlk 2 yıl stajyer (deneme) süresi uygulanır.</p>
                      </>
                    )}
                    {selectedLicense.class.includes("A") && (
                      <>
                        <p>• Kask takma zorunluluğu vardır.</p>
                        <p>• Motosiklet eğitimleri zorunludur.</p>
                        <p>• Hava koşullarına dikkat edilmelidir.</p>
                      </>
                    )}
                    {(selectedLicense.class === "C" ||
                      selectedLicense.class === "D") && (
                      <>
                        <p>
                          • Ticari araç kullanım belgesi (SRC) ve psikoteknik
                          belgesi zorunludur.
                        </p>
                        <p>
                          • Düzenli sağlık kontrolü ve raporu yenilemesi
                          gerekir.
                        </p>
                      </>
                    )}
                    {(selectedLicense.class === "F" ||
                      selectedLicense.class === "G") && (
                      <>
                        <p>
                          • İş güvenliği eğitimi ve ilgili operatörlük belgesi
                          gereklidir.
                        </p>
                        <p>• Çalışma alanlarına göre ek izinler gerekebilir.</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* All Classes Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Tüm Ehliyet Sınıfları Özet
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenseClasses.map((license) => (
              <motion.div
                key={license.class}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedClass(license.class)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`${license.color} text-white p-3 rounded-lg flex items-center justify-center`}
                  >
                    <license.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">
                      {license.class} Sınıfı
                    </h4>
                    <p className="text-sm text-foreground/70">{license.name}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Minimum Yaş:</span>
                    <span className="font-medium">{license.minAge} yaş</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Geçerlilik:</span>
                    <span className="font-medium">
                      {license.validityPeriod}
                    </span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-foreground/60">
                    {license.vehicles.join(", ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Hangi Ehliyet Sınıfını Almak İstiyorsunuz?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Deneyimli eğitmenlerimizle tüm ehliyet sınıfları için eğitim
            veriyoruz. Detaylı bilgi almak ve kayıt olmak için hemen iletişime
            geçin.
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

export default LicenseClasses;

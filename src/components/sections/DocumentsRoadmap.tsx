"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  IdCard,
  Image as ImageIcon,
  Stethoscope,
  BookOpen,
  Car,
  Award,
  UserCheck,
  ClipboardCheck,
  GraduationCap,
  Clock,
} from "lucide-react";

const DocumentsRoadmap = () => {
  const documents = [
    {
      icon: IdCard,
      title: "Kimlik Kartı Fotokopisi",
      desc: "T.C. kimlik kartınızın fotokopisi",
    },
    {
      icon: FileText,
      title: "Öğrenim Belgesi",
      desc: "Diploma veya öğrenim durum belgesi",
    },
    {
      icon: Stethoscope,
      title: "Ehliyet Almak için Sağlık Raporu",
      desc: "Yetkili kurumlardan sürücü olur raporu",
    },
    {
      icon: ImageIcon,
      title: "3 Adet Biyometrik Fotoğraf",
      desc: "Son 6 ay içinde çekilmiş",
    },
    {
      icon: FileText,
      title: "Adli Sicil Kaydı",
      desc: "E-Devlet’ten alınmış güncel belge",
    },
  ];

  const processSteps = [
    {
      icon: UserCheck,
      title: "Kayıt ve Başvuru",
      desc: "Sürücü kursuna kayıt olun ve gerekli evrakları teslim edin",
      duration: "1 Gün",
      step: 1,
    },
    {
      icon: BookOpen,
      title: "Teorik Eğitim",
      desc: "15 saat teorik ders ve trafik kuralları eğitimi",
      duration: "2-3 Hafta",
      step: 2,
    },
    {
      icon: ClipboardCheck,
      title: "Teorik Sınav",
      desc: "50 soruluk teorik sınav (en az 35 doğru gerekli)",
      duration: "1 Gün",
      step: 3,
    },
    {
      icon: Car,
      title: "Direksiyon Eğitimi",
      desc: "14 saat uygulamalı direksiyon dersi",
      duration: "3-4 Hafta",
      step: 4,
    },
    {
      icon: GraduationCap,
      title: "Direksiyon Sınavı",
      desc: "Trafik polisi eşliğinde uygulamalı sınav",
      duration: "1 Gün",
      step: 5,
    },
    {
      icon: Award,
      title: "Ehliyet Alma",
      desc: "Sınavları geçtikten sonra ehliyetinizi teslim alın",
      duration: "3-5 Gün",
      step: 6,
    },
  ];

  return (
    <section
      id="belgeler-roadmap"
      className="py-16 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Ehliyet Alma Süreci & Gerekli Evraklar
          </h3>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Sürücü belgesi almak için gereken evraklar ve adım adım takip
            etmeniz gereken süreç aşağıda detaylarıyla açıklanmıştır.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Gerekli Evraklar Bölümü */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl mr-3 shadow-lg">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Gerekli Evraklar
                </h4>
              </div>

              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <doc.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">
                        {doc.title}
                      </h5>
                      <p className="text-sm text-gray-600">{doc.desc}</p>
                    </div>
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 group-hover:text-emerald-600 transition-colors" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl border-2 border-emerald-300 shadow-sm">
                <p className="text-sm text-emerald-800 font-medium">
                  💡 <strong className="text-green-700">İpucu:</strong> Tüm
                  evrakları önceden hazırlamak süreci hızlandırır ve sorun
                  yaşamanızı önler.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ehliyet Alma Süreci Bölümü */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="p-2 bg-gradient-to-br from-secondary to-primary rounded-xl mr-3 shadow-lg">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Ehliyet Alma Süreci
                </h4>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary/60 via-primary/80 to-secondary rounded-full shadow-sm" />

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative flex items-start"
                    >
                      <div className="flex-shrink-0 relative z-10 group">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary via-primary to-secondary text-white flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-transform duration-300">
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                          {step.step}
                        </div>
                      </div>

                      <div className="ml-4 flex-1">
                        <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-4 border border-secondary/20 hover:border-secondary/40 hover:shadow-md transition-all duration-300">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">
                              {step.title}
                            </h5>
                            <div className="flex items-center text-xs text-white bg-gradient-to-r from-blue-700 to-blue-800 px-3 py-1 rounded-full shadow-sm">
                              <Clock className="w-3 h-3 mr-1" />
                              {step.duration}
                            </div>
                          </div>
                          <p className="text-sm text-gray-700">{step.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl border-2 border-emerald-300 shadow-sm">
                <p className="text-sm text-emerald-800 font-medium">
                  🎯 <strong className="text-green-700">Toplam Süre:</strong>{" "}
                  Ortalama 6-8 hafta içinde ehliyetinizi alabilirsiniz.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsRoadmap;

"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  AcademicCapIcon,
  ClockIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  HeartIcon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  GraduationCap,
  Calendar,
  Trophy,
  Phone,
  Target,
  Lightbulb,
  Handshake,
} from "lucide-react";

const About = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: "MTSK Lisanslı Eğitim",
      description:
        "Motorlu Taşıt Sürücü Kursu lisansı ile resmi ehliyet eğitimi veriyoruz.",
      color: "text-green-500",
    },
    {
      icon: AcademicCapIcon,
      title: "30+ Yıllık Deneyimli Kadro",
      description:
        "İzmir'de en deneyimli, MTSK lisanslı eğitmenlerle kaliteli sürücü kursu eğitimi.",
      color: "text-blue-500",
    },
    {
      icon: ClockIcon,
      title: "Esnek Ders Saatleri",
      description:
        "Ehliyet için size uygun zamanlarda, esnek ders programları.",
      color: "text-purple-500",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Karabağlar'da En Uygun Fiyat",
      description:
        "İzmir sürücü kursu fiyatları arasında en uygun ehliyet kursu ücretleri.",
      color: "text-yellow-500",
    },
    {
      icon: TrophyIcon,
      title: "İzmir'de En Yüksek Başarı",
      description:
        "%99 memnuniyet oranıyla Karabağlar'da en başarılı sürücü kursu.",
      color: "text-orange-500",
    },
    {
      icon: HeartIcon,
      title: "Sabırlı ve Anlayışlı Yaklaşım",
      description:
        "Her öğrenciye özel ilgi göstererek sabırla eğitim veriyoruz.",
      color: "text-red-500",
    },
    {
      icon: TruckIcon,
      title: "Modern Eğitim Araçları",
      description: "Ehliyet için güncel ve bakımlı araçlarla güvenli eğitim.",
      color: "text-indigo-500",
    },
    {
      icon: UserGroupIcon,
      title: "Birebir Takip ve Destek",
      description:
        "Her öğrencinin ehliyet sürecini yakından takip ediyor, başarıya ulaştırıyoruz.",
      color: "text-pink-500",
    },
  ];

  const stats = [
    { number: "15000+", label: "Ehliyet Alan Öğrenci", icon: GraduationCap },
    { number: "30+", label: "Yıllık Deneyim", icon: Calendar },
    { number: "%99", label: "Memnuniyet Oranı", icon: Trophy },
    { number: "24/7", label: "Destek Hattı", icon: Phone },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-accent via-white to-secondary/10"
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
            Rakamlarla Kanıtlanmış Başarı: İzmir'in En Köklü Sürücü Kursu
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Karabağlar'da 30 yılı aşkın süredir direksiyon başındayız. Bu
            süreçte 15.000'den fazla kursiyerimizi ehliyet hayallerine
            kavuşturduk. İzmir'deki en yüksek memnuniyet oranımız, tecrübemizin
            ve her öğrencimize gösterdiğimiz özel ilginin en net kanıtıdır.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full min-h-[160px] flex flex-col justify-center items-center">
                <div className="mb-3 flex justify-center">
                  <stat.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 font-medium text-center leading-tight">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-secondary/10 h-full">
                <div
                  className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Misyonumuz</h3>
          <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Karabağlar ve çevresindeki tüm sürücü adaylarına, en kaliteli
            eğitimi en uygun koşullarda sunarak, trafikte güvenli ve bilinçli
            sürücüler yetiştirmektir. Her öğrencimizin başarısı, bizim en büyük
            gururumuzdur.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Hedefimiz</h4>
              <p className="text-white/80">
                %100 öğrenci memnuniyeti ve başarısı
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Lightbulb className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Vizyonumuz</h4>
              <p className="text-white/80">
                Bölgenin en güvenilir sürücü kursu olmak
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Handshake className="w-12 h-12 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Değerlerimiz</h4>
              <p className="text-white/80">
                Güven, kalite, sabır ve başarı odaklılık
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

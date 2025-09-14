"use client";

import { motion } from "framer-motion";
import { AcademicCapIcon, ClockIcon } from "@heroicons/react/24/solid";
import { User, UserCheck, Briefcase } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Mehmet Yılmaz",
      title: "Baş Eğitmen",
      experience: "20 yıl",
      speciality: "Direksiyon Eğitimi",
      icon: UserCheck,
      description:
        "Sabırlı ve deneyimli yaklaşımıyla öğrencilerini başarıya ulaştırır.",
      achievements: [
        "500+ Başarılı Öğrenci",
        "Emniyet Müdürlüğü Sertifikası",
        "Pedagoji Eğitimi",
      ],
    },
    {
      id: 2,
      name: "Ayşe Kaya",
      title: "Trafik Eğitmeni",
      experience: "15 yıl",
      speciality: "Trafik Kuralları",
      icon: User,
      description: "Trafik kurallarını etkili öğretim yöntemleriyle aktarır.",
      achievements: [
        "300+ Başarılı Öğrenci",
        "Trafik Eğitimi Sertifikası",
        "İlk Yardım Eğitimi",
      ],
    },
    {
      id: 3,
      name: "Ali Demir",
      title: "Sürüş Eğitmeni",
      experience: "12 yıl",
      speciality: "Pratik Sürüş",
      icon: Briefcase,
      description: "Güvenli sürüş tekniklerini pratik uygulamalarla öğretir.",
      achievements: [
        "400+ Başarılı Öğrenci",
        "Savunma Sürüşü Sertifikası",
        "Motor Eğitimi",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="teachers" className="py-20 bg-white">
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
            Deneyimli Eğitmenlerimiz
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Lisanslı ve deneyimli eğitmenlerimiz, güvenli sürüş için gerekli tüm
            bilgi ve becerileri size aktaracak.
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gradient-to-br from-accent to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-secondary/20">
                {/* Teacher Avatar */}
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <teacher.icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {teacher.name}
                  </h3>
                  <p className="text-secondary font-medium mb-2">
                    {teacher.title}
                  </p>
                </div>

                {/* Teacher Info */}
                <div className="space-y-4">
                  {/* Experience & Specialty */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {teacher.experience}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AcademicCapIcon className="w-5 h-5 text-secondary" />
                      <span className="text-sm font-medium text-foreground">
                        {teacher.speciality}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {teacher.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">
                      Başarıları:
                    </h4>
                    <div className="space-y-1">
                      {teacher.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-xs text-foreground/70">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Teachers;

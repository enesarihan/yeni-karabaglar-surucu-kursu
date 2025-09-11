'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1630406144797-821be1f35d75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Modern araç ile sürücü kursu eğitimi",
      title: "Modern Araçlarla Eğitim",
      subtitle: "Güvenli ve konforlu öğrenme deneyimi",
      badge: "Yeni Teknoloji"
    },
    {
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Direksiyon dersi alan öğrenci",
      title: "Birebir Eğitim",
      subtitle: "Deneyimli eğitmenlerle özel dersler",
      badge: "Kişisel Eğitim"
    },
    {
      src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Trafik işaretleri ve güvenli sürüş",
      title: "Trafik Kuralları",
      subtitle: "Kapsamlı teorik ve pratik eğitim",
      badge: "Tam Kapsamlı"
    },
    {
      src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Park etme dersi",
      title: "Park Etme Teknikleri",
      subtitle: "Her türlü park senaryosu için hazırlık",
      badge: "Pratik Eğitim"
    }
  ];

  const features = [
    'Deneyimli ve lisanslı eğitmenler',
    'Yüksek sınav başarı oranı',
    'Esnek ders saatleri',
    'Uygun fiyat garantisi'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Clean White Background with Subtle Elements */}
      <div className="absolute inset-0">
        {/* Subtle Geometric Shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30"></div>
        </div>
        
        {/* Light Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Fashion Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-teal-400/30"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-slate-800 tracking-wider uppercase">
                Premium Sürücü Kursu
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 text-teal-500" />
                ))}
              </div>
            </motion.div>

            {/* Fashion-Style Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight pt-2"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{
                    background: 'linear-gradient(90deg, #1e293b, #22d3ee, #06b6d4, #1e293b)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  İZMİR'İN
                </motion.h1>
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-700 tracking-wide leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  EN İYİ SÜRÜCÜ KURSU
                </motion.h2>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 0.7, duration: 1 }}
                />
              </div>
              
              <motion.p 
                className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-teal-600 font-semibold">Yeni Karabağlar</span>'da 15+ yıllık deneyimimizle, 
                modern ve güvenli sürüş eğitimi. 
                <span className="block mt-3 text-lg text-slate-500">
                  Ehliyet almanın en profesyonel yolu.
                </span>
              </motion.p>
            </motion.div>

            {/* Fashion Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="group flex items-center space-x-4 bg-slate-50/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200 hover:border-teal-400/50 hover:bg-teal-50/50 transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-slate-700 font-light text-sm md:text-base tracking-wide group-hover:text-teal-700 transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Fashion CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 pt-4"
            >
              <Link
                href="#contact"
                className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white px-12 py-5 rounded-none font-light text-lg tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/30"
              >
                <span className="relative z-10 flex items-center justify-center space-x-3">
                  <span>Şimdi Kayıt Ol</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
              
              <Link
                href="tel:+902322644003"
                className="group border-2 border-slate-300 text-slate-700 px-12 py-5 rounded-none font-light text-lg tracking-wider uppercase hover:border-teal-400 hover:bg-teal-50 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center space-x-3">
                  <span>📞</span>
                  <span>İletişim</span>
                </span>
              </Link>
            </motion.div>

            {/* Fashion Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-200"
            >
              {[
                { number: '500+', label: 'Başarılı Öğrenci', suffix: '' },
                { number: '15', label: 'Yıllık Deneyim', suffix: '+' },
                { number: '95', label: 'Başarı Oranı', suffix: '%' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-thin tracking-wider text-slate-800 mb-2"
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(20, 184, 166, 0.3)',
                        '0 0 20px rgba(20, 184, 166, 0.5)',
                        '0 0 10px rgba(20, 184, 166, 0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.number}<span className="text-teal-500">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-xs font-light text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-2"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Fashion Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Fashion Slider Container */}
            <div className="relative bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-slate-800/50 backdrop-blur-xl rounded-none shadow-2xl overflow-hidden hover:shadow-teal-500/20 hover:shadow-3xl transition-all duration-500">
              <div className="relative overflow-hidden h-[500px] md:h-[600px]">
                {/* Image Slides */}
                {heroImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.2, rotateY: 15 }}
                    animate={{ 
                      opacity: index === currentSlide ? 1 : 0,
                      scale: index === currentSlide ? 1 : 1.1,
                      rotateY: index === currentSlide ? 0 : 15,
                      x: index === currentSlide ? 0 : (index > currentSlide ? 100 : -100)
                    }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -15 }}
                    transition={{ 
                      duration: 1.2, 
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.8 },
                      scale: { duration: 1.2 },
                      rotateY: { duration: 1.0 },
                      x: { duration: 0.8 }
                    }}
                    className="absolute inset-0"
                    style={{ perspective: '1000px' }}
                  >
                    <motion.div
                      animate={{
                        scale: index === currentSlide ? [1, 1.02, 1] : 1
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-full h-full"
                    >
                      <Image
                        src={image.src}
                        alt={`${image.alt} - Yeni Karabağlar Sürücü Kursu`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                        quality={90}
                      />
                    </motion.div>
                    
                    {/* Enhanced Premium Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                      animate={{
                        background: index === currentSlide 
                          ? "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)"
                          : "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)"
                      }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    {/* Animated Badge */}
                    <motion.div 
                      initial={{ opacity: 0, y: -30, scale: 0.8 }}
                      animate={{ 
                        opacity: index === currentSlide ? 1 : 0, 
                        y: index === currentSlide ? 0 : -30,
                        scale: index === currentSlide ? 1 : 0.8,
                        rotate: index === currentSlide ? [0, 2, 0] : 0
                      }}
                      transition={{ 
                        delay: 0.4, 
                        duration: 0.8,
                        rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="absolute top-6 left-6"
                    >
                      <motion.span 
                        className="bg-gradient-to-r from-teal-600/80 to-cyan-600/80 backdrop-blur-xl text-white px-6 py-3 rounded-none text-xs font-light tracking-widest uppercase"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.9)" }}
                      >
                        {image.badge}
                      </motion.span>
                    </motion.div>
                    
                    {/* Enhanced Content Overlay */}
                    <motion.div 
                      initial={{ opacity: 0, y: 50, x: -30 }}
                      animate={{ 
                        opacity: index === currentSlide ? 1 : 0, 
                        y: index === currentSlide ? 0 : 50,
                        x: index === currentSlide ? 0 : -30
                      }}
                      transition={{ 
                        delay: 0.6, 
                        duration: 1.0,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      className="absolute bottom-8 left-8 right-8 text-white"
                    >
                      <motion.h3 
                        className="text-3xl md:text-4xl font-black mb-4 leading-tight"
                        animate={{
                          textShadow: [
                            "0 2px 10px rgba(0,0,0,0.8)",
                            "0 4px 20px rgba(0,0,0,0.9)",
                            "0 2px 10px rgba(0,0,0,0.8)"
                          ]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        {image.title}
                      </motion.h3>
                      <motion.p 
                        className="text-white/95 text-lg md:text-xl leading-relaxed max-w-md font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentSlide ? 1 : 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        style={{
                          textShadow: "0 2px 8px rgba(0,0,0,0.7)"
                        }}
                      >
                        {image.subtitle}
                      </motion.p>
                      
                      {/* Progress Bar */}
                      <motion.div
                        className="mt-6 w-20 h-1 bg-white/30 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: index === currentSlide ? 80 : 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full"
                          animate={{
                            x: index === currentSlide ? ["-100%", "0%"] : "-100%"
                          }}
                          transition={{ delay: 1.2, duration: 4, ease: "linear" }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Particle Effects */}
                    {index === currentSlide && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/40 rounded-full"
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + (i % 2) * 40}%`,
                            }}
                            animate={{
                              y: [-10, -30, -10],
                              opacity: [0, 1, 0],
                              scale: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Enhanced Navigation Controls */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <motion.button
                    onClick={prevSlide}
                    className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center pointer-events-auto group border border-white/40 shadow-2xl"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255,255,255,0.4)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(255,255,255,0.1)",
                        "0 15px 40px rgba(255,255,255,0.2)",
                        "0 10px 30px rgba(255,255,255,0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ x: [-2, 2, -2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronLeftIcon className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
                    </motion.div>
                  </motion.button>
                  
                  <motion.button
                    onClick={nextSlide}
                    className="w-16 h-16 bg-gradient-to-l from-white/20 to-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center pointer-events-auto group border border-white/40 shadow-2xl"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(255,255,255,0.4)",
                      boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(255,255,255,0.1)",
                        "0 15px 40px rgba(255,255,255,0.2)",
                        "0 10px 30px rgba(255,255,255,0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  >
                    <motion.div
                      animate={{ x: [2, -2, 2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ChevronRightIcon className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Enhanced Progress Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  {heroImages.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`relative h-3 transition-all duration-500 backdrop-blur-sm overflow-hidden ${
                        index === currentSlide 
                          ? 'w-16 bg-white/20 shadow-2xl' 
                          : 'w-10 bg-white/10 hover:bg-white/20'
                      }`}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: "0 8px 25px rgba(255,255,255,0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: index === currentSlide 
                          ? [
                              "0 4px 15px rgba(59, 130, 246, 0.4)",
                              "0 8px 25px rgba(59, 130, 246, 0.6)",
                              "0 4px 15px rgba(59, 130, 246, 0.4)"
                            ]
                          : "0 2px 8px rgba(255,255,255,0.1)"
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: index === currentSlide ? Infinity : 0 
                      }}
                    >
                      {/* Background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10"
                        animate={{
                          opacity: index === currentSlide ? [0.3, 0.6, 0.3] : 0.1
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Active indicator */}
                      {index === currentSlide && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-indigo-600"
                          layoutId="activeSlideIndicator"
                          transition={{ 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 30,
                            duration: 0.6
                          }}
                          animate={{
                            background: [
                              "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)",
                              "linear-gradient(90deg, #6366f1, #8b5cf6, #3b82f6)",
                              "linear-gradient(90deg, #8b5cf6, #3b82f6, #6366f1)",
                              "linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6)"
                            ],
                            transition: { duration: 4, repeat: Infinity }
                          }}
                        />
                      )}
                      
                      {/* Progress fill */}
                      {index === currentSlide && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          key={currentSlide} // Reset animation when slide changes
                        />
                      )}
                      
                      {/* Sparkle effect */}
                      {index === currentSlide && (
                        <motion.div
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white"
                          animate={{
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Fashion Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-32 h-2 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 blur-sm"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-2 h-32 bg-gradient-to-b from-teal-400/20 to-blue-400/20 blur-sm"></div>
            <div className="absolute -z-10 top-1/2 right-5 w-px h-20 bg-gradient-to-b from-transparent via-teal-400/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

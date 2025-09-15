"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Phone, MapPin } from "lucide-react";
import { blogPosts } from "@/app/blog/data";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Slider görsellerini bloglardan türet: en yeni 6 yazı
  const heroImages = blogPosts.slice(-6).map((p) => ({
    src: p.image,
    alt: p.title,
    title: p.title,
    subtitle: p.excerpt,
    badge: p.category,
    href: `/blog/${p.id}`,
  }));

  const features = [
    "30+ yıllık deneyimli ve lisanslı eğitmenler",
    "İzmir'de en yüksek memnuniyet oranı",
    "14 saatlik direksiyon dersi",
    "İzmir'de en uygun sürücü kursu fiyatları",
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
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const deltaX = touchStartX - touchEndX;
    const threshold = 40; // px
    if (deltaX > threshold) {
      nextSlide();
    } else if (deltaX < -threshold) {
      prevSlide();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden pt-12 pb-24 sm:pb-16">
      {/* Clean White Background with Subtle Elements */}
      <div className="absolute inset-0">
        {/* Subtle Geometric Shapes */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-16 left-16 w-[28rem] h-[28rem] bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-16 right-16 w-[26rem] h-[26rem] bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full blur-[80px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-[70px] opacity-60"></div>
        </div>

        {/* Light Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full bg-[linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(180deg,#000_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        </div>

        {/* Soft top-to-bottom overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/70 via-transparent to-slate-300/70 pointer-events-none"></div>

        {/* Diagonal subtle stripes */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div className="w-full h-full bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.6)_0,rgba(0,0,0,0.6)_1px,transparent_1px,transparent_16px)]"></div>
        </div>

        {/* Corner accents */}
        <div className="pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-secondary/20 to-transparent"></div>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.08)_100%)] pointer-events-none"></div>
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
                İzmir'in En İyi Sürücü Kursu • 4.9/5
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3 h-3 text-yellow-400" />
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
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  style={{
                    background:
                      "linear-gradient(90deg, #1e293b, #22d3ee, #06b6d4, #1e293b)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  YENİ KARABAĞLAR
                </motion.h1>
                <motion.h2
                  className="text-2xl sm:text-3xl md:text-5xl font-light text-slate-700 tracking-wide leading-tight"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  SÜRÜCÜ KURSU
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
                <span className="text-teal-600 font-semibold">
                  İzmir Karabağlar Sürücü Kursu
                </span>
                'nda 30+ yıllık deneyimimizle, ehliyet için güvenli ve başarı
                odaklı sürüş eğitimi.
                <span className="block mt-3 text-lg text-slate-500">
                  MTSK lisanslı deneyimli eğitmen kadromuzla İzmir'de en yüksek
                  memnuniyet oranı.
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
              className="space-y-6 pt-4"
            >
              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-6">
                <Link
                  href="#contact"
                  className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white px-12 py-5 rounded-none font-light text-lg tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/30 flex-1 sm:flex-none"
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
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Link>

                <Link
                  href="tel:+902322644003"
                  className="group min-w-[265px] border-2 border-slate-300 text-slate-700 px-12 py-5 rounded-none font-light text-lg tracking-wider uppercase hover:border-teal-400 hover:bg-teal-50 transition-all duration-300 backdrop-blur-sm flex-1 sm:flex-none"
                >
                  <span className="flex items-center justify-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span>İletişim</span>
                  </span>
                </Link>
              </div>

              {/* Secondary CTA - Yol Tarifi */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex justify-center"
              >
                <Link
                  href="https://www.google.com/maps/dir//Kestelli+Park%C4%B1n%C4%B1n+Kar%C5%9F%C4%B1s%C4%B1,+G%C3%BClyaka,+3011.+Sk.+No:6%2FA,+35110+Karaba%C4%9Flar%2F%C4%B0zmir/@38.3907474,27.0404317,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x14bbdf2f7ce592ab:0x70dc51c5b26bbdac!2m2!1d27.1228155!2d38.3907677?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-8 py-4 font-medium text-base tracking-wide hover:from-slate-200 hover:to-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-300/50 hover:border-teal-400/50"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MapPin className="w-5 h-5 text-red-500" />
                    </motion.div>
                    <span className="group-hover:text-slate-800 transition-colors duration-300">
                      Yol Tarifi Al
                    </span>
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-teal-500 group-hover:text-teal-600 transition-colors duration-300"
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Blog Slider and Stats */}
          <div className="space-y-6 -mt-8">
            {/* Fashion Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Fashion Slider Container */}
              <div
                className="relative bg-gradient-to-br from-slate-900/50 via-teal-900/30 to-slate-800/50 backdrop-blur-xl rounded-none shadow-2xl overflow-hidden hover:shadow-teal-500/20 hover:shadow-3xl transition-all duration-500"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="relative overflow-hidden h-[480px] md:h-[600px]">
                  {/* Image Slides */}
                  {heroImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.02,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.22, 0.61, 0.36, 1],
                        opacity: { duration: 0.6 },
                        scale: { duration: 0.6 },
                      }}
                      className={`absolute inset-0 ${
                        index === currentSlide
                          ? "pointer-events-auto"
                          : "pointer-events-none"
                      }`}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <motion.div className="w-full h-full">
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
                          background:
                            index === currentSlide
                              ? "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)"
                              : "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)",
                        }}
                        transition={{ duration: 0.8 }}
                      />

                      {/* Animated Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{
                          opacity: index === currentSlide ? 1 : 0,
                          y: index === currentSlide ? 0 : -20,
                        }}
                        transition={{
                          delay: 0.2,
                          duration: 0.5,
                        }}
                        className="absolute top-6 left-6"
                      >
                        <motion.span
                          className="bg-gradient-to-r from-teal-600/80 to-cyan-600/80 backdrop-blur-xl text-white px-6 py-3 rounded-none text-xs font-light tracking-widest uppercase"
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(20, 184, 166, 0.9)",
                          }}
                        >
                          {image.badge}
                        </motion.span>
                      </motion.div>

                      {/* Enhanced Content Overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{
                          opacity: index === currentSlide ? 1 : 0,
                          y: index === currentSlide ? 0 : 30,
                        }}
                        transition={{
                          delay: 0.3,
                          duration: 0.6,
                        }}
                        className="absolute left-4 right-4 bottom-32 md:bottom-16 text-white z-20 pointer-events-none"
                      >
                        <h3
                          className="text-2xl md:text-3xl font-extrabold mb-3 leading-tight"
                          style={{
                            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                          }}
                        >
                          {image.title}
                        </h3>
                        <p
                          className="text-white/90 text-base md:text-lg leading-relaxed max-w-md"
                          style={{
                            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
                          }}
                        >
                          {image.subtitle}
                        </p>

                        <div className="mt-4 relative z-30">
                          <Link
                            href={image.href}
                            className="relative z-30 inline-block px-6 py-4 bg-white/90 text-slate-900 rounded-md text-sm font-medium hover:bg-white transition-colors pointer-events-auto"
                          >
                            Devamını Oku
                          </Link>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Enhanced Navigation Controls */}
                  <div className="absolute inset-0 md:flex hidden items-center justify-between px-4 pointer-events-none z-10">
                    <motion.button
                      onClick={prevSlide}
                      className="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center pointer-events-auto group border border-white/40 shadow-2xl hover:scale-105 transition-transform duration-200"
                    >
                      <ChevronLeftIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
                    </motion.button>

                    <motion.button
                      onClick={nextSlide}
                      className="w-16 h-16 bg-gradient-to-l from-white/20 to-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center pointer-events-auto group border border-white/40 shadow-2xl hover:scale-105 transition-transform duration-200"
                    >
                      <ChevronRightIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
                    </motion.button>
                  </div>

                  {/* Enhanced Progress Indicators */}
                  <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-10">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative h-1.5 md:h-2 transition-all duration-300 backdrop-blur-sm overflow-hidden hover:scale-105 ${
                          index === currentSlide
                            ? "w-12 bg-primary/30 shadow-lg"
                            : "w-8 bg-primary/20 hover:bg-primary/30"
                        }`}
                      >
                        {/* Background gradient */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/30 transition-opacity duration-300 ${
                            index === currentSlide ? "opacity-60" : "opacity-20"
                          }`}
                        />

                        {/* Active indicator */}
                        {index === currentSlide && (
                          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fashion Decorative Elements */}
              <div className="absolute -z-10 top-10 right-10 w-32 h-2 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 blur-sm"></div>
              <div className="absolute -z-10 bottom-10 left-10 w-2 h-32 bg-gradient-to-b from-teal-400/20 to-blue-400/20 blur-sm"></div>
              <div className="absolute -z-10 top-1/2 right-5 w-px h-20 bg-gradient-to-b from-transparent via-teal-400/30 to-transparent"></div>
            </motion.div>

            {/* Fashion Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200"
            >
              {[
                { number: "15000", label: "Ehliyet Alan Öğrenci", suffix: "+" },
                { number: "30", label: "Yıllık Deneyim", suffix: "+" },
                { number: "99", label: "Memnuniyet Oranı", suffix: "%" },
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
                        "0 0 10px rgba(20, 184, 166, 0.3)",
                        "0 0 20px rgba(20, 184, 166, 0.5)",
                        "0 0 10px rgba(20, 184, 166, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {stat.number}
                    <span className="text-teal-500">{stat.suffix}</span>
                  </motion.div>
                  <div className="text-xs font-light text-slate-500 uppercase tracking-widest">
                    {stat.label}
                  </div>
                  <motion.div
                    className="w-8 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto mt-2"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

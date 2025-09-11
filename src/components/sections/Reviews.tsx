'use client';

import { motion } from 'framer-motion';
import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { User, UserCheck, Users, Briefcase } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Elif Yılmaz',
      age: 22,
      icon: User,
      rating: 5,
      text: 'Yeni Karabağlar Sürücü Kursu\'nda aldığım eğitim mükemmeldi. Mehmet hocam çok sabırlı ve anlayışlıydı. İlk seferde sınavı geçtim!',
      course: 'B Sınıfı Ehliyet',
      date: '2024-08-15'
    },
    {
      id: 2,
      name: 'Ahmet Demir',
      age: 28,
      icon: UserCheck,
      rating: 5,
      text: 'Çok profesyonel bir ekip. Araçlar temiz ve bakımlı, eğitmenler deneyimli. Herkese tavsiye ederim.',
      course: 'B Sınıfı Ehliyet',
      date: '2024-07-22'
    },
    {
      id: 3,
      name: 'Zeynep Kaya',
      age: 25,
      icon: Users,
      rating: 5,
      text: 'Ayşe hocamın trafik kuralları dersleri çok faydalıydı. Teorik sınavı rahatça geçtim. Teşekkürler!',
      course: 'B Sınıfı Ehliyet',
      date: '2024-09-01'
    },
    {
      id: 4,
      name: 'Mustafa Özkan',
      age: 35,
      icon: Briefcase,
      rating: 5,
      text: 'İş saatlerim nedeniyle esnek ders programına ihtiyacım vardı. Bu konuda çok yardımcı oldular.',
      course: 'B Sınıfı Ehliyet',
      date: '2024-06-10'
    },
    {
      id: 5,
      name: 'Fatma Şen',
      age: 30,
      icon: User,
      rating: 5,
      text: 'Ali hocayla aldığım direksiyon dersleri harika geçti. Güvenli sürüş tekniklerini çok iyi öğretti.',
      course: 'B Sınıfı Ehliyet',
      date: '2024-08-28'
    },
    {
      id: 6,
      name: 'Oğuz Çelik',
      age: 24,
      icon: UserCheck,
      rating: 5,
      text: 'Fiyatlar çok uygun ve kalite mükemmel. Arkadaşlarıma da tavsiye ettim, onlar da çok memnun kaldı.',
      course: 'B Sınıfı Ehliyet',
      date: '2024-07-05'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent">
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
            Öğrencilerimizin Yorumları
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Bizimle ehliyet alan öğrencilerimizin deneyimlerini okuyun ve 
            neden bizi tercih ettiklerini keşfedin.
          </p>
        </motion.div>

        {/* Main Review Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-secondary/20">
              <ChatBubbleLeftRightIcon className="w-16 h-16" />
            </div>

            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                {(() => {
                  const IconComponent = reviews[currentReview].icon;
                  return <IconComponent className="w-10 h-10 text-white" />;
                })()}
              </div>

              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${
                      i < reviews[currentReview].rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-foreground/80 italic mb-8 leading-relaxed">
                "{reviews[currentReview].text}"
              </blockquote>

              {/* Reviewer Info */}
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-primary">
                  {reviews[currentReview].name}
                </h4>
                <p className="text-foreground/60">
                  {reviews[currentReview].age} yaş • {reviews[currentReview].course}
                </p>
                <p className="text-sm text-foreground/50">
                  {new Date(reviews[currentReview].date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Review Dots */}
        <div className="flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToReview(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentReview
                  ? 'bg-primary'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

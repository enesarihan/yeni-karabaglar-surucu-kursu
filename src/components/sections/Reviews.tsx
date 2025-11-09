'use client';

import { motion } from 'framer-motion';
import { StarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
// Avatar olarak isim baş harfleri kullanılacak; ekstra ikonlara gerek yok

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Aziz',
     
      rating: 5,
      text: 'Kesinlikle öneriyorum; sürecin başından sonuna kadar çok ilgililerdi. Özellikle Ali hocama teşekkür ederim. Sıfırdan araba sürmeyi öğrendim ve ilk sınavda geçtim. 🙂',
     
      date: '2025-08-10'
    },
    {
      id: 2,
      name: 'Gonca Yavaş',
      
      rating: 5,
      text: 'Ali hocama çok teşekkür ediyorum. Sıcak kanlı yaklaşımı, hatalarımda yapıcı ve anlayışlı şekilde yardımcı olması, samimiyetiyle gerçekten 5 yıldızı hak ediyor. Başarılarının devamını diliyorum.',
      
      date: '2025-02-01'
    },
    {
      id: 3,
      name: 'Berfin Dağ',
      
      rating: 5,
      text: 'Başvuru yapmadan önce yorumları inceleyip geldim. Hayatımda hiç araç kullanmadığım için çok heyecanlıydım; Ali hocamın sakin ve sabırlı tavırlarıyla bu heyecanımı yendim. Derslerimiz keyifliydi, zaman nasıl geçti anlamadım. Ali hocam ilk seferde geçeceğime hep inandırdı ve bugün direksiyon sınavımı tekte geçtim. Başta Ali hocam olmak üzere emeği geçen herkese teşekkür eder, şiddetle tavsiye ederim.',
      
      date: '2025-05-15'
    },
    {
      id: 4,
      name: 'Alperen Okumuş',
     
      rating: 5,
      text: 'Yazılı sınavdan direksiyon sınavına kadar her aşamada ilgilendiler. Direksiyon hocam Ali hocama ayrıca teşekkür ederim. Ehliyet almak için kesinlikle doğru adres.',
      
      date: '2025-04-01'
    },
    {
      id: 5,
      name: 'Melek İsa Altahle',
     
      rating: 5,
      text: 'Kurumdan ileri derecede memnunum. Bugün son dersimdi; pazar günü sınavım var. Bu süreci Serpil hocam ve Nüket hocam sayesinde çok keyifli ve verimli geçirdim. Destekleriniz için teşekkür ederim. Önce eğitim, ama Serpil hocamla kurduğumuz gönül bağı da benim için çok değerli.',
      
      date: '2025-05-20'
    },
    {
      id: 6,
      name: 'Gonca Yavaş',
      
      rating: 5,
      text: 'Yazılı ve direksiyon dersleri için doğru adres. Güler yüzlü ekip ve anlayışlı hocalar... Serpil hocam sayesinde direksiyon sınavını tek seferde geçtim. İyi ki varsınız, sevgiler. 🚘',
      
      date: '2024-12-01'
    },
    // Yeni eklenen yorumlar
    {
      id: 7,
      name: 'Sümeyye Akkuş',
      
      rating: 5,
      text: 'Yeni Karabağlar Sürücü Kursu\'na çok teşekkür ederim; yazılı ve direksiyon sınavını tek seferde geçtim. Değerli Serpil hocama ayrıca teşekkür ederim; emeği, sabrı ve güler yüzüyle hayran bıraktı. Gözünüz kapalı Serpil hocaya güvenebilirsiniz. ❤️💪',
      
      date: '2025-03-01'
    },
    {
      id: 8,
      name: 'Fırat Güven',
      
      rating: 5,
      text: 'Yazılı derslerini veren hocalara çok teşekkür ederim; verdikleri bilgiler çok aydınlatıcı ve yararlıydı, yazılıyı tekte geçtim. Özellikle direksiyon dersi veren Ali hocam sabrı ve azmiyle harika bir insandır; dersler sayesinde direksiyon sınavını da tekte geçtim. Ehliyet almak istiyorsanız doğru adres: Yeni Karabağlar Sürücü Kursu. 😊🙏',
     
      date: '2025-02-10'
    },
    {
      id: 9,
      name: 'Ahmet Bayezid Cebeci',
      
      rating: 5,
      text: 'Hem yazılı hem de direksiyon sınavını ilk seferde geçmek istiyorsanız gönül rahatlığıyla tercih edebilirsiniz. Ali hocam sakin ve hoşgörülü yaklaşımıyla hataları tek tek açıklıyor; sadece sınavı geçmeyi değil, gerçekten araba kullanmayı öğretiyor.',
   
      date: '2024-11-01'
    },
    {
      id: 10,
      name: 'Nehir Erbaş',
     
      rating: 5,
      text: 'Ali hocama çok teşekkür ediyorum; ilgisi, sabrı ve sakinliğiyle derslerimiz çok güzel geçti. Kesinlikle öğrenmek isteyen herkes Ali hocayla tanışmalı.',
    
      date: '2025-06-01'
    },
    {
      id: 11,
      name: 'Berna Ertürk',
   
      rating: 5,
      text: 'Güzel bir deneyim, doğru bir tercih oldu. Bir şey öğrenecekseniz en büyük şansınız öğretmeninizdir. Sevgili Serpil hocam, iyi ki yollarımız kesişti. Öğrettiklerinize, sabrınıza ve azminize minnettarım. Başlamadan önce pes edebilirdim; buna asla izin vermediğiniz için teşekkür ederim. 💕🌸',
    
      date: '2024-10-01'
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
             
                <h4 className="text-xl font-bold text-primary">
                  {reviews[currentReview].name}
                </h4>
              {/* Rating */}
              <div className="flex justify-center space-x-1 my-5">
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

              <p className="text-sm text-foreground/50">
                  {new Date(reviews[currentReview].date).toLocaleDateString('tr-TR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label="Önceki yorum"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label="Sonraki yorum"
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
              aria-label={`${index + 1}. yoruma git`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

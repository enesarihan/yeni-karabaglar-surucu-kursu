'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Eğitmenlerimiz', href: '#teachers' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Yorumlar', href: '#reviews' },
    { name: 'İletişim', href: '#contact' }
  ];

  const services = [
    { name: 'B Sınıfı Ehliyet', href: '#' },
    { name: 'A2 Sınıfı Ehliyet', href: '#' },
    { name: 'Ehliyet Süreçleri', href: '/ehliyet-surecleri' },
    { name: 'Ehliyet Sınıfları', href: '/ehliyet-siniflari' },
    { name: 'Direksiyon Dersleri', href: '#' }
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: Instagram, color: 'text-pink-500 hover:text-pink-600' },
    { name: 'WhatsApp', href: 'https://wa.me/902321234567', icon: MessageCircle, color: 'text-green-500 hover:text-green-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-200 via-teal-100 to-primary text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
             <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center">
              <span className="sr-only">Yeni Karabağlar Sürücü Kursu</span>
              <Image
                src="/logo.png"
                alt="Yeni Karabağlar Sürücü Kursu Logosu"
                width={2048}
                height={2048}
                className="h-64 w-auto mt-2"
                quality={100}
                sizes="(max-width: 1024px) 160px, 200px"
                priority
              />
            </Link>
          </motion.div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                30 yılı aşkın deneyimimizle Karabağlar ve çevresinde güvenli sürüş 
                eğitimi veriyoruz. Deneyimli eğitmenlerimiz ve modern araçlarımızla 
                ehliyet alma sürecinizde yanınızdayız.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-4 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                    <Phone className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="font-medium text-gray-700">0 (232) 264 40 03</span>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-4 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300 mt-0.5">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-700 leading-relaxed">
                    Kestelli Parkının Karşısı, Gülyaka, 3011. Sk. No:6/A, Karabağlar/İzmir
                  </span>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="font-medium text-gray-700">Pazartesi - Cumartesi: 08:00 - 18:00</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold mb-6">Hızlı Linkler</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold mb-6">Hizmetlerimiz</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.href}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-200 hover:underline"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-lg font-semibold mb-4">Bizi Takip Edin</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={social.href}
                          className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 group"
                          title={social.name}
                        >
                          <IconComponent className={`w-6 h-6 ${social.color} transition-colors duration-300`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-700 text-base font-medium">
              © 2025 Yeni Karabağlar Sürücü Kursu. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                Kullanım Şartları
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                KVKK
              </Link>
            </div>
          </div>
          
          {/* Comply Software Credit */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-center">
              <Link 
                href="https://www.complysoftware.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-950 transition-all duration-300 text-sm font-medium group"
              >
                <span>©</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                  Comply Software
                </span>
                <span className="text-xs  transition-opacity ">
                  Was Here.
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

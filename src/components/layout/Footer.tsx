'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

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
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'WhatsApp', href: 'https://wa.me/902321234567', icon: '💬' },
    { name: 'YouTube', href: '#', icon: '📺' }
  ];

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-white">
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
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/logo.png"
                  alt="Yeni Karabağlar Sürücü Kursu Logosu"
                  width={1080}
                  height={1080}
                  className="h-48 w-auto bg-white rounded-lg p-1"
                  quality={100}
                  sizes="(max-width: 1024px) 160px, 200px"
                  priority
                />
                <div>
                  <h3 className="text-2xl font-bold">Yeni Karabağlar</h3>
                  <p className="text-white/80">Sürücü Kursu</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                15 yılı aşkın deneyimimizle Karabağlar ve çevresinde güvenli sürüş 
                eğitimi veriyoruz. Deneyimli eğitmenlerimiz ve modern araçlarımızla 
                ehliyet alma sürecinizde yanınızdayız.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-white/60" />
                  <span>0 (232) 264 40 03</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPinIcon className="w-5 h-5 text-white/60" />
                  <span>Kestelli Parkının Karşısı, Gülyaka, 3011. Sk. No:6/A, Karabağlar/İzmir</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-5 h-5 text-white/60" />
                  <span>Pazartesi - Cumartesi: 08:00 - 18:00</span>
                </div>
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
                      className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
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
                      className="text-white/80 hover:text-white transition-colors duration-200 hover:underline"
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
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 text-xl"
                      title={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/20 py-8"
        >
          <div className="text-center">
            <h4 className="text-xl font-bold mb-4">Güncel Kalın</h4>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Sürücü kursu haberlerini, trafik kuralları güncellemelerini ve 
              özel fırsatlarımızı kaçırmamak için bültenimize abone olun.
            </p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-l-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-r-lg font-semibold hover:bg-accent transition-colors duration-200">
                Abone Ol
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Yeni Karabağlar Sürücü Kursu. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                Kullanım Şartları
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors duration-200">
                KVKK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

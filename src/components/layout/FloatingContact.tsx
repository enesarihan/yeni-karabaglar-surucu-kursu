'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon
} from '@heroicons/react/24/solid';
import {FaWhatsapp} from 'react-icons/fa'

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: PhoneIcon,
      label: 'Telefon',
      href: 'tel:+902322644003',
      color: 'bg-green-500 hover:bg-green-600',
      text: 'Hemen Ara'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/902322644003?text=Merhaba, sürücü kursu hakkında bilgi almak istiyorum.',
      color: 'bg-green-600 hover:bg-green-700',
      text: 'WhatsApp'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.href}
                target={option.href.startsWith('http') ? '_blank' : undefined}
                rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center space-x-3 ${option.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group`}
              >
                <option.icon className="w-5 h-5" />
                <span className="font-medium whitespace-nowrap pr-2">
                  {option.text}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-primary hover:bg-primary/90'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <PlusIcon className="w-6 h-6" />
        ) : (
          <div className="relative">
            <ChatBubbleLeftRightIcon className="w-6 h-6" />
            {/* Notification Dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
            />
          </div>
        )}
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-foreground text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
          >
            Hemen İletişime Geçin!
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse Animation */}
      {!isOpen && (
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-primary rounded-full -z-10"
        />
      )}
    </div>
  );
};

export default FloatingContact;

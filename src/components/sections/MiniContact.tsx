"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const MiniContact = () => {
  return (
    <section id="mini-contact" className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 md:p-8 text-white"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">
                Hemen İletişime Geçin
              </h3>
              <p className="text-white/90">
                Soru ve kayıt için dakikalar içinde dönüş sağlayalım.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Formu Doldur
              </Link>
              <Link
                href="tel:+905324328695"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ara: +90 0232 264 40 03
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MiniContact;

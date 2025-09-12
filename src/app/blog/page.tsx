'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { blogPosts as postsData } from './data';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-white to-secondary/10">
      {/* Header */}
      <Navbar />
      <section className="pt-24 mt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Yeni Karabağlar Sürücü Kursu Blog
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
              Türkiye'de ehliyet alma süreci, trafik kuralları ve güvenli sürüş hakkında 
              kapsamlı rehberler ve güncel bilgiler.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsData.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">
                      {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-1 text-primary font-semibold hover:text-secondary transition-colors"
                    >
                      <span>Devamını Oku</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ehliyet Almaya Hazır Mısınız?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Blog yazılarımızı okuduktan sonra, ehliyet alma sürecinize başlamak için 
              bizimle iletişime geçin. Deneyimli eğitmenlerimiz size yardımcı olacak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                <FileText className="w-5 h-5 mr-2" />
                Hemen Kayıt Ol
              </Link>
              <Link
                href="tel:+902322644003"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-300"
              >
                <Users className="w-5 h-5 mr-2" />
                Bilgi Al: 0 (232) 264 40 03
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

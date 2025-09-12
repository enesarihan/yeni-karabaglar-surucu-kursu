'use client';

import { notFound } from 'next/navigation';
import { useMemo, use } from 'react';
import { blogPosts } from '../data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  params: Promise<{ id: string }>;
};

export default function BlogDetailPage({ params }: Props) {
  const resolvedParams = use(params);
  const postId = Number(resolvedParams.id);
  const post = useMemo(() => blogPosts.find(p => p.id === postId), [postId]);

  if (!post) return notFound();

  const related = blogPosts.filter(p => p.id !== post.id).slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-white to-secondary/10">
      <Navbar />
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Content */}
            <article className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image src={post.image} alt={post.title} width={1200} height={500} className="w-full h-72 object-cover" />
              <div className="p-6 md:p-8">
                <div className="mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">{post.category}</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{post.title}</h1>
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">{post.content}</p>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-primary mb-4">Diğer Yazılar</h3>
                <div className="space-y-4">
                  {related.map(r => (
                    <Link key={r.id} href={`/blog/${r.id}`} className="group block">
                      <div className="flex items-center space-x-3">
                        <Image src={r.image} alt={r.title} width={64} height={64} className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                          <div className="text-sm font-semibold text-primary group-hover:text-secondary line-clamp-2">{r.title}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Ehliyet İçin Hazır mısınız?</h4>
                <p className="text-white/90 mb-4">Hemen iletişime geçin, size en uygun programı birlikte planlayalım.</p>
                <div className="flex flex-col gap-2">
                  <Link href="/#contact" className="px-4 py-3 bg-white text-primary rounded-xl font-semibold text-center">Formu Doldur</Link>
                  <Link href="tel:+902322644003" className="px-4 py-3 border-2 border-white text-white rounded-xl font-semibold text-center">Ara: 0 (232) 264 40 03</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}



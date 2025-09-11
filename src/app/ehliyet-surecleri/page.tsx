import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import RoadmapProcess from '@/components/sections/RoadmapProcess';

export const metadata: Metadata = {
  title: "Türkiye'de Ehliyet Alma Süreci ve Gerekli Belgeler | Yeni Karabağlar Sürücü Kursu",
  description: "Türkiye'de ehliyet almak için gerekli belgeler, sınav süreçleri ve tüm detaylar. Adım adım ehliyet alma roadmap rehberi.",
  keywords: "ehliyet alma süreci, ehliyet belgeleri, sürücü kursu sınavları, roadmap, Türkiye ehliyet",
  openGraph: {
    title: "Türkiye'de Ehliyet Alma Süreci ve Gerekli Belgeler",
    description: "Ehliyet almak için gerekli tüm bilgiler, belgeler ve süreçler hakkında roadmap rehberi.",
    type: "article",
    locale: "tr_TR",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function EhliyetSurecleriPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <RoadmapProcess />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

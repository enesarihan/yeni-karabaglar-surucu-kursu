import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import LicenseClasses from '@/components/sections/LicenseClasses';

export const metadata: Metadata = {
  title: "Türkiye'deki Ehliyet Sınıfları ve Özellikleri | Yeni Karabağlar Sürücü Kursu",
  description: "Türkiye'de geçerli tüm ehliyet sınıfları, yaş şartları, sürülebilecek araçlar ve özellikler hakkında detaylı bilgi alın.",
  keywords: "ehliyet sınıfları, B sınıfı ehliyet, A sınıfı ehliyet, C sınıfı ehliyet, D sınıfı ehliyet, Türkiye ehliyet türleri",
  openGraph: {
    title: "Türkiye'deki Ehliyet Sınıfları ve Özellikleri",
    description: "Tüm ehliyet sınıfları, yaş şartları ve sürülebilecek araçlar hakkında kapsamlı rehber.",
    type: "article",
    locale: "tr_TR",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function EhliyetSiniflariPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <LicenseClasses />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

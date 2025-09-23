import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.karabaglarsurucukursu.com"),
  title: "Yeni Karabağlar Sürücü Kursu | İzmir'de Yüksek Puanlı Ehliyet Kursu",
  description:
    "İzmir Karabağlar'da 30+ yıllık deneyimle yüksek puanlı ehliyet için sürücü kursu. Uygun fiyat, başarı garantisi, deneyimli eğitmenler. Hemen kayıt ol!",
  keywords:
    "izmir sürücü kursu, karabağlar sürücü kursu, ehliyet kursu izmir, b sınıfı ehliyet, a2 sınıfı ehliyet, direksiyon dersleri, sürücü kursu karabağlar, ehliyet sınavı, mtsk, sürücü belgesi, motorlu taşıt sürücü kursu, izmir ehliyet, karabağlar ehliyet, sürüş eğitimi, ehliyet fiyatları, ehliyet süreçleri, ehliyet sınıfları, sürücü kursu fiyatları, ehliyet randevu, e-sınav, sağlık raporu, biyometrik fotoğraf, adli sicil kaydı",
  authors: [{ name: "Yeni Karabağlar Sürücü Kursu" }],
  creator: "Yeni Karabağlar Sürücü Kursu",
  publisher: "Yeni Karabağlar Sürücü Kursu",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.karabaglarsurucukursu.com",
  },
  openGraph: {
    title: "Yeni Karabağlar Sürücü Kursu | İzmir'de Yüksek Puanlı Ehliyet Kursu",
    description:
      "İzmir Karabağlar'da 30+ yıllık deneyimle yüksek puanlı ehliyet için sürücü kursu. Uygun fiyat, başarı garantisi, deneyimli eğitmenler.",
    type: "website",
    locale: "tr_TR",
    url: "https://www.karabaglarsurucukursu.com",
    siteName: "Yeni Karabağlar Sürücü Kursu",
    images: [
      {
        url: "https://www.karabaglarsurucukursu.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Yeni Karabağlar Sürücü Kursu Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yeni Karabağlar Sürücü Kursu | İzmir'de En İyi Ehliyet Kursu",
    description:
      "İzmir Karabağlar'da 30+ yıllık deneyimle B sınıfı ehliyet, A2 sınıfı ehliyet kursu. Uygun fiyat, başarı garantisi.",
    images: ["https://www.karabaglarsurucukursu.com/logo.png"],
  },
  category: "education",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/logo.png"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6D48RG9C8H"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-6D48RG9C8H');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

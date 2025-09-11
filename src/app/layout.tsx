import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yeni Karabağlar Sürücü Kursu | İzmir'de Ehliyet Kursu",
  description: "Karabağlar'da güvenilir sürücü kursu. Deneyimli eğitmenler, uygun fiyatlar ve başarı garantisi ile ehliyet alın. Hemen iletişime geçin!",
  keywords: "Karabağlar sürücü kursu, İzmir ehliyet kursu, sürücü kursu, ehliyet, sürüş dersleri",
  authors: [{ name: "Yeni Karabağlar Sürücü Kursu" }],
  robots: "index, follow",
  openGraph: {
    title: "Yeni Karabağlar Sürücü Kursu | İzmir'de Ehliyet Kursu",
    description: "Karabağlar'da güvenilir sürücü kursu. Deneyimli eğitmenler, uygun fiyatlar ve başarı garantisi ile ehliyet alın.",
    type: "website",
    locale: "tr_TR",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

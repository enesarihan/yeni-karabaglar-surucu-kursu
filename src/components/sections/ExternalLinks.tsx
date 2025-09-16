"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  CreditCard,
  Stethoscope,
  IdCard,
  FileText,
  GraduationCap,
  Gauge,
  RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ExternalLinks = () => {
  type LinkItem = {
    title: string;
    href: string;
    desc: string;
    icon: LucideIcon;
    color: string;
    featured?: boolean;
  };

  const links: LinkItem[] = [
    {
      title: "E‑Sınav Yap",
      href: "https://www.esinavyap.com/esinav",
      desc: "Ehliyet e‑Sınav giriş ve başlatma: MEB e‑Sınav sistemiyle online teorik sınavınıza hemen başlayın veya kaldığınız yerden devam edin — güvenli ve hızlı erişim.",
      icon: GraduationCap,
      color: "from-amber-500 to-rose-600",
      featured: true as const,
    },
    {
      title: "E-Sınav Harcı Ödemesi",
      href: "https://odeme.meb.gov.tr/",
      desc: "MEB e-Sınav ücretinizi güvenle online ödeyin.",
      icon: CreditCard,
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Sağlık Raporu Ödemesi",
      href: "https://sbos.saglik.gov.tr/oauthlogin?returnUrl=%2F",
      desc: "Sağlık raporu ödeme ve işlem adımları.",
      icon: Stethoscope,
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Nüfus Ehliyet Randevu",
      href: "https://randevu.nvi.gov.tr/",
      desc: "Nüfus müdürlüğünden ehliyet başvuru randevusu alın.",
      icon: IdCard,
      color: "from-orange-500 to-rose-600",
    },
    {
      title: "Kişisel Sağlık Bilgi Formu",
      href: "https://www.turkiye.gov.tr/saglik-surucu-raporu-beyan-basvurusu",
      desc: "e-Devlet üzerinden sağlık beyan formu girişiniz.",
      icon: FileText,
      color: "from-purple-500 to-fuchsia-600",
    },
    {
      title: "Ehliyet Ceza Puanı Sorgulama",
      href: "https://www.turkiye.gov.tr/emniyet-surucu-belgesi-ve-sahislara-yazilan-ceza-sorgulama",
      desc: "Ceza puanınızı e‑Devlet üzerinden hızlıca öğrenin.",
      icon: Gauge,
      color: "from-red-500 to-amber-600",
    },
    {
      title: "Ehliyet Yenileme İşlemleri",
      href: "https://randevu.nvi.gov.tr/",
      desc: "Yenileme şartları ve başvuru adımlarını görüntüleyin.",
      icon: RefreshCw,
      color: "from-cyan-500 to-emerald-600",
    },
  ];

  return (
    <section
      id="external-links"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 sm:mb-3 px-2">
            Resmi işlemler için hızlı erişim kartları
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 max-w-3xl mx-auto px-4">
            Gerekli işlemleri hızlıca yapabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr grid-flow-dense gap-3 sm:gap-4 lg:gap-6 items-stretch justify-items-stretch">
          {links.map((item: LinkItem, index) => {
            const isFeatured = item.featured === true;
            return (
              <motion.div
                key={`${item.title}-${item.href}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={[
                  "h-full w-full",
                  isFeatured
                    ? "col-span-1 sm:col-span-2 lg:col-span-2 xl:col-span-2 xl:col-start-2"
                    : "col-span-1",
                ].join(" ")}
              >
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group h-full"
                >
                  <div
                    className={[
                      "rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 h-full min-h-48 sm:min-h-52 md:min-h-56 lg:min-h-60 flex flex-col justify-between transition-all duration-300",
                      "hover:-translate-y-1 active:scale-95",
                      isFeatured
                        ? "bg-white shadow-2xl border border-amber-300/60 ring-2 ring-amber-400/50"
                        : "bg-white shadow-lg border border-secondary/10 hover:shadow-2xl",
                    ].join(" ")}
                  >
                    <div>
                      <div
                        className={[
                          "rounded-lg sm:rounded-xl bg-gradient-to-r text-white flex items-center justify-center shadow-md mb-3 sm:mb-4",
                          isFeatured
                            ? "w-12 h-12 sm:w-14 sm:h-14 animate-pulse"
                            : "w-10 h-10 sm:w-12 sm:h-12",
                          item.color,
                        ].join(" ")}
                      >
                        <item.icon
                          className={
                            isFeatured
                              ? "w-6 h-6 sm:w-7 sm:h-7"
                              : "w-5 h-5 sm:w-6 sm:h-6"
                          }
                        />
                      </div>
                      <h3
                        className={
                          isFeatured
                            ? "text-lg sm:text-xl lg:text-2xl font-extrabold text-primary mb-1 sm:mb-2 leading-tight"
                            : "text-base sm:text-lg font-bold text-primary mb-1 leading-tight"
                        }
                      >
                        {item.title}
                      </h3>
                      <p
                        className={
                          isFeatured
                            ? "text-sm sm:text-base text-foreground/80 mb-3 sm:mb-4 lg:mb-5 leading-relaxed"
                            : "text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4 leading-relaxed"
                        }
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div
                      className={
                        isFeatured
                          ? "inline-flex items-center gap-1 sm:gap-2 self-start bg-amber-500 text-white font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2 rounded-md sm:rounded-lg shadow hover:bg-amber-600 transition-colors"
                          : "inline-flex items-center text-primary font-semibold text-xs sm:text-sm"
                      }
                    >
                      <span className="truncate">
                        {isFeatured ? "Hemen Başla" : "Siteye Git"}
                      </span>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5 flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExternalLinks;

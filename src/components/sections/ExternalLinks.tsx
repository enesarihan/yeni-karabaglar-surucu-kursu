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
      href: "https://www.turkiye.gov.tr/emniyet-surucu-belgesi-ceza-puani-sorgulama",
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
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            Resmi işlemler için hızlı erişim kartları
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Gerekli işlemleri hızlıca yapabilirsiniz.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr grid-flow-dense gap-6 items-stretch justify-items-stretch">
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
                  "h-full",
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2 lg:col-start-2"
                    : "",
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
                      "rounded-2xl p-6 h-full min-h-56 md:min-h-60 flex flex-col justify-between transition-all duration-300",
                      "hover:-translate-y-1",
                      isFeatured
                        ? "bg-white shadow-2xl border border-amber-300/60 ring-2 ring-amber-400/50"
                        : "bg-white shadow-lg border border-secondary/10 hover:shadow-2xl",
                    ].join(" ")}
                  >
                    <div>
                      <div
                        className={[
                          "rounded-xl bg-gradient-to-r text-white flex items-center justify-center shadow-md mb-4",
                          isFeatured ? "w-14 h-14 animate-pulse" : "w-12 h-12",
                          item.color,
                        ].join(" ")}
                      >
                        <item.icon
                          className={isFeatured ? "w-7 h-7" : "w-6 h-6"}
                        />
                      </div>
                      <h3
                        className={
                          isFeatured
                            ? "text-2xl font-extrabold text-primary mb-2"
                            : "text-lg font-bold text-primary mb-1"
                        }
                      >
                        {item.title}
                      </h3>
                      <p
                        className={
                          isFeatured
                            ? "text-base text-foreground/80 mb-5"
                            : "text-sm text-foreground/70 mb-4"
                        }
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div
                      className={
                        isFeatured
                          ? "inline-flex items-center gap-2 self-start bg-amber-500 text-white font-semibold text-sm px-3 py-2 rounded-lg shadow hover:bg-amber-600"
                          : "inline-flex items-center text-primary font-semibold text-sm"
                      }
                    >
                      {isFeatured ? "Hemen Başla" : "Siteye Git"}
                      <ExternalLink className="w-4 h-4 ml-0.5 transition-transform duration-200 group-hover:translate-x-0.5" />
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

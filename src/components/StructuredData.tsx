"use client";

import Script from "next/script";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Yeni Karabağlar Sürücü Kursu",
    alternateName: "İzmir Karabağlar Sürücü Kursu",
    description:
      "İzmir Karabağlar'da 30+ yıllık deneyimle ehliyet eğitimi veren MTSK lisanslı sürücü kursu.",
    url: "https://www.karabaglarsurucukursu.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.karabaglarsurucukursu.com/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://www.karabaglarsurucukursu.com/logo.png",
    telephone: "+902322644003",
    email: "info@yenikarabaglar.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kestelli Parkının Karşısı, Gülyaka, 3011. Sk. No:6/A",
      addressLocality: "Karabağlar",
      addressRegion: "İzmir",
      postalCode: "35050",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.4000",
      longitude: "27.2000",
    },
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "$$",
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      {
        "@type": "City",
        name: "İzmir",
      },
      {
        "@type": "City",
        name: "Karabağlar",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ehliyet Eğitim Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "B Sınıfı Ehliyet Eğitimi",
            description: "Otomobil kullanımı için B sınıfı ehliyet eğitimi",
            provider: {
              "@type": "EducationalOrganization",
              name: "Yeni Karabağlar Sürücü Kursu",
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "A2 Sınıfı Ehliyet Eğitimi",
            description: "Motosiklet kullanımı için A2 sınıfı ehliyet eğitimi",
            provider: {
              "@type": "EducationalOrganization",
              name: "Yeni Karabağlar Sürücü Kursu",
            },
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "15000",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://www.instagram.com/yenikarabaglar",
      "https://wa.me/902321234567",
    ],
    foundingDate: "1994",
    numberOfEmployees: "10-20",
    slogan: "İzmir'de En İyi Sürücü Kursu",
    keywords:
      "izmir sürücü kursu, karabağlar sürücü kursu, ehliyet kursu izmir, b sınıfı ehliyet, a2 sınıfı ehliyet, direksiyon dersleri, sürücü kursu karabağlar, ehliyet sınavı, mtsk, sürücü belgesi, motorlu taşıt sürücü kursu, izmir ehliyet, karabağlar ehliyet, sürüş eğitimi, ehliyet fiyatları, ehliyet süreçleri, ehliyet sınıfları, sürücü kursu fiyatları, ehliyet randevu, e-sınav, sağlık raporu, biyometrik fotoğraf, adli sicil kaydı",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.karabaglarsurucukursu.com/#organization",
    name: "Yeni Karabağlar Sürücü Kursu",
    description:
      "İzmir Karabağlar'da 30+ yıllık deneyimle ehliyet eğitimi veren MTSK lisanslı sürücü kursu.",
    url: "https://www.karabaglarsurucukursu.com",
    telephone: "+902322644003",
    email: "info@yenikarabaglar.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kestelli Parkının Karşısı, Gülyaka, 3011. Sk. No:6/A",
      addressLocality: "Karabağlar",
      addressRegion: "İzmir",
      postalCode: "35050",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "38.4000",
      longitude: "27.2000",
    },
    openingHours: "Mo-Sa 08:00-18:00",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: "İzmir, Karabağlar",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "38.4000",
        longitude: "27.2000",
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Ehliyet Eğitim Hizmetleri",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "B Sınıfı Ehliyet Eğitimi",
            description: "Otomobil kullanımı için B sınıfı ehliyet eğitimi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "A2 Sınıfı Ehliyet Eğitimi",
            description: "Motosiklet kullanımı için A2 sınıfı ehliyet eğitimi",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "15000",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://www.karabaglarsurucukursu.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmetlerimiz",
        item: "https://www.karabaglarsurucukursu.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Blog",
        item: "https://www.karabaglarsurucukursu.com/blog",
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://www.karabaglarsurucukursu.com",
    name: "Yeni Karabağlar Sürücü Kursu",
    publisher: {
      "@type": "Organization",
      name: "Yeni Karabağlar Sürücü Kursu",
      logo: {
        "@type": "ImageObject",
        url: "https://www.karabaglarsurucukursu.com/logo.png",
        width: 512,
        height: 512,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.karabaglarsurucukursu.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
    </>
  );
};

export default StructuredData;

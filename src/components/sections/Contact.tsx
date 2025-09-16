"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    courseType: "B Sınıfı Ehliyet",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    message?: string;
  }>({});

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    // Telefon için sadece rakam ve TR formatına uygun uzunluk kısıtlaması uygula
    if (name === "phone") {
      let digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length > 11) digitsOnly = digitsOnly.slice(0, 11);
      setFormData((prev) => ({
        ...prev,
        phone: digitsOnly,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Alan düzenlenirken hata mesajını temizle
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basit istemci doğrulaması
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Ad Soyad zorunludur";
    if (!formData.phone.trim()) newErrors.phone = "Telefon zorunludur";
    else {
      const isTRPhone = /^0\d{10}$/.test(formData.phone);
      if (!isTRPhone) {
        newErrors.phone = "Geçerli bir Türkiye telefonu girin (0xxxxxxxxxx)";
      }
    }
    if (!formData.email.trim()) newErrors.email = "E-posta zorunludur";
    if (!formData.message.trim()) newErrors.message = "Mesaj zorunludur";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        // 3 sn sonra formu sıfırla ve butonu normale döndür
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            email: "",
            message: "",
            courseType: "B Sınıfı Ehliyet",
          });
        }, 3000);
      } else {
        // Sunucu dönen genel hatayı göster ve gerekli alanları işaretle
        const genericError = result.error || "Mesaj gönderilirken bir hata oluştu";
        const serverErrors: typeof errors = { ...errors };
        if (!formData.name.trim()) serverErrors.name = "Ad Soyad zorunludur";
        if (!formData.phone.trim()) serverErrors.phone = "Telefon zorunludur";
        if (!formData.email.trim()) serverErrors.email = "E-posta zorunludur";
        if (!formData.message.trim()) serverErrors.message = "Mesaj zorunludur";
        setErrors(serverErrors);
        alert(genericError);
      }
    } catch (error) {
      console.error("Form gönderme hatası:", error);
      alert("Mesaj gönderilirken bir hata oluştu");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Telefon",
      info: "+90 232 264 40 03",
      href: "tel:+902322644003",
      color: "text-green-500",
    },
    {
      icon: MapPinIcon,
      title: "Adres",
      info: "Kestelli Parkının Karşısı",
      subInfo: "Gülyaka, 3011. Sk. No:6/A, 35110 Karabağlar/İzmir",
      href: "https://www.google.com/maps/place/Kestelli+Park%C4%B1n%C4%B1n+Kar%C5%9F%C4%B1s%C4%B1,+G%C3%BClyaka,+3011.+Sk.+No:6/A,+35110+Karaba%C4%9Flar/%C4%B0zmir",
      color: "text-red-500",
    },
  ];

  const workingHours = [
    { day: "Pazartesi", hours: "08:00 - 20:00" },
    { day: "Salı", hours: "08:00 - 20:00" },
    { day: "Çarşamba", hours: "08:00 - 20:00" },
    { day: "Perşembe", hours: "08:00 - 20:00" },
    { day: "Cuma", hours: "08:00 - 20:00" },
    { day: "Cumartesi", hours: "09:00 - 18:30" },
    { day: "Pazar", hours: "Kapalı" },
  ];

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Yeni Karabağlar Sürücü Kursu",
            description:
              "Karabağlar'da güvenilir sürücü kursu. Deneyimli eğitmenler, uygun fiyatlar ve başarı garantisi ile ehliyet alın.",
            url: "https://yenikarabaglarsurucu.com",
            telephone: "+902322644003",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Kestelli Parkının Karşısı, Gülyaka, 3011. Sk. No:6/A",
              addressLocality: "Karabağlar",
              addressRegion: "İzmir",
              postalCode: "35110",
              addressCountry: "TR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "38.39078037643703",
              longitude: "27.1202577763527",
            },
            openingHours: ["Mo-Fr 08:00-20:00", "Sa 09:00-18:30"],
            priceRange: "₺₺",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "150",
            },
            sameAs: [
              "https://www.facebook.com/yenikarabaglarsurucu",
              "https://www.instagram.com/yenikarabaglarsurucu",
            ],
          }),
        }}
      />

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-accent via-white to-secondary/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Bize Ulaşın
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Sorularınız için bize ulaşabilir, randevu alabilir veya
              kurslarımız hakkında detaylı bilgi alabilirsiniz.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Hemen İletişime Geçin
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={isSubmitting || isSubmitted}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Adınız ve soyadınız"
                        />
                        {errors.name && (
                          <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={isSubmitting || isSubmitted}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="0532 123 45 67"
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting || isSubmitted}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="ornek@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="courseType"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Kurs Türü
                      </label>
                      <select
                        id="courseType"
                        name="courseType"
                        value={formData.courseType}
                        onChange={handleInputChange}
                        disabled={isSubmitting || isSubmitted}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        <option value="B Sınıfı Ehliyet">
                          B Sınıfı Ehliyet
                        </option>
                        <option value="A2 Sınıfı Ehliyet">
                          A2 Sınıfı Ehliyet
                        </option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting || isSubmitted}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none ${
                          errors.message ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Sorularınızı veya özel isteklerinizi yazabilirsiniz..."
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                        isSubmitted
                          ? "bg-green-600 hover:bg-green-600/90"
                          : "bg-primary hover:bg-primary/90"
                      }`}
                    >
                      {isSubmitting ? (
                        "Gönderiliyor..."
                      ) : isSubmitted ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <CheckCircleIcon className="w-5 h-5 text-white" />
                          Gönderildi
                        </span>
                      ) : (
                        "Mesaj Gönder"
                      )}
                    </button>
                  </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`${item.color} bg-gray-50 p-3 rounded-lg`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">
                          {item.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {item.info}
                        </p>
                        <p className="text-foreground/60 text-sm">
                          {item.subInfo}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Working Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white"
              >
                <h4 className="font-bold text-xl mb-4">Çalışma Saatlerimiz</h4>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{schedule.day}</span>
                      <span
                        className={
                          schedule.hours === "Kapalı"
                            ? "text-red-200"
                            : "text-white/90"
                        }
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Google Maps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.1932579056247!2d27.1202577763527!3d38.39078037643703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdf2f7ce592ab%3A0x70dc51c5b26bbdac!2zWWVuaSBLYXJhYmHEn2xhciBTw7xyw7xjw7wgS3Vyc3U!5e0!3m2!1str!2str!4v1757596581862!5m2!1str!2str"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Yeni Karabağlar Sürücü Kursu - Gerçek Konum"
                  ></iframe>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-primary">
                    <MapPinIcon className="w-5 h-5" />
                    <div>
                      <p className="font-medium">Kestelli Parkının Karşısı</p>
                      <p className="text-sm text-foreground/70">
                        Gülyaka, 3011. Sk. No:6/A, 35110 Karabağlar/İzmir
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

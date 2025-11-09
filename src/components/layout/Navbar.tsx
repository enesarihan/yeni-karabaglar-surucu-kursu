"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Car,
  Map,
  MessageCircle,
  Home,
  Settings,
  Building2,
  CircleHelp,
  BookOpen,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEhliyetDropdownOpen, setIsEhliyetDropdownOpen] = useState(false);
  const [isKurumsalDropdownOpen, setIsKurumsalDropdownOpen] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "/#hero", icon: Home },
    { name: "Yorumlar", href: "/#reviews", icon: MessageCircle },
  ];

  const ehliyetPages = [
    {
      name: "Ehliyet Süreçleri",
      href: "/ehliyet-surecleri",
      description: "Ehliyet alma süreçleri hakkında detaylı bilgi",
      icon: Map,
    },
    {
      name: "Ehliyet Sınıfları",
      href: "/ehliyet-siniflari",
      description: "Tüm ehliyet sınıfları ve gereksinimleri",
      icon: Car,
    },
  ];

  const kurumsalPages = [
    {
      name: "Hakkımızda",
      href: "/#about",
      description: "Kurumumuz hakkında bilgiler",
      icon: Building2,
    },
    {
      name: "Hizmetlerimiz",
      href: "/#services",
      description: "Sunduğumuz tüm hizmetler",
      icon: Settings,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href="/" className="flex items-center">
              <span className="sr-only">Yeni Karabağlar Sürücü Kursu</span>
              <Image
                src="/logo.png"
                alt="Yeni Karabağlar Sürücü Kursu Logosu"
                width={2048}
                height={2048}
                className="h-52 w-auto mt-2"
                quality={100}
                sizes="(max-width: 1024px) 160px, 200px"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Ana Sayfa */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#hero"
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 group"
              >
                <Home className="w-4 h-4" />
                <span>Ana Sayfa</span>
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            {/* Kurumsal Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsKurumsalDropdownOpen(true)}
              onMouseLeave={() => setIsKurumsalDropdownOpen(false)}
            >
              <div className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 cursor-pointer">
                <Building2 className="w-4 h-4" />
                <span>Kurumsal</span>
                <motion.div
                  animate={{ rotate: isKurumsalDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-700" />
                </motion.div>
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isKurumsalDropdownOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <AnimatePresence>
                {isKurumsalDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {kurumsalPages.map((page, index) => (
                      <motion.div
                        key={page.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={page.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-teal-50 transition-all duration-300 group rounded-xl mx-2"
                        >
                          <page.icon className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {page.description}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Yorumlar */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#reviews"
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Yorumlar</span>
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            {/* Ehliyet Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsEhliyetDropdownOpen(true)}
              onMouseLeave={() => setIsEhliyetDropdownOpen(false)}
            >
              <div className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 cursor-pointer">
                <Car className="w-4 h-4" />
                <span>Ehliyet</span>
                <motion.div
                  animate={{ rotate: isEhliyetDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-gray-700" />
                </motion.div>
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isEhliyetDropdownOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <AnimatePresence>
                {isEhliyetDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {ehliyetPages.map((page, index) => (
                      <motion.div
                        key={page.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={page.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-teal-50 transition-all duration-300 group rounded-xl mx-2"
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              index === 0 ? "bg-teal-500" : "bg-blue-500"
                            }`}
                          />
                          <div>
                            <div className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                              {page.name}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {page.description}
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* S.S.S. - Ehliyet'ten sonra */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/sss"
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 group"
              >
                <CircleHelp className="w-4 h-4" />
                <span>S.S.S.</span>
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            {/* Blog */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/blog"
                className="relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 group"
              >
                <BookOpen className="w-4 h-4" />
                <span>Blog</span>
                <motion.div
                  className="absolute bottom-1 left-4 right-4 h-0.5 bg-teal-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/#contact"
                className="flex items-center space-x-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>İletişim</span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-colors duration-300"
            aria-label={isMobileMenuOpen ? "Mobil menüyü kapat" : "Mobil menüyü aç"}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-white rounded-2xl mt-4 border border-gray-100 shadow-lg">
                <div className="px-4 py-6 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-300 font-medium"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Ehliyet Pages */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-sm font-semibold text-gray-500 px-4 mb-2">
                      Ehliyet
                    </div>
                    {ehliyetPages.map((page, index) => (
                      <motion.div
                        key={page.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (navItems.length + index) * 0.1 }}
                      >
                        <Link
                          href={page.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-300 font-medium"
                        >
                          <page.icon className="w-5 h-5" />
                          <span>{page.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* S.S.S. - Ehliyet'ten sonra (mobil) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (navItems.length + ehliyetPages.length) * 0.1,
                    }}
                  >
                    <Link
                      href="/sss"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-300 font-medium"
                    >
                      <CircleHelp className="w-5 h-5" />
                      <span>S.S.S.</span>
                    </Link>
                  </motion.div>

                  {/* Blog - S.S.S.'ten sonra (mobil) */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (navItems.length + ehliyetPages.length + 1) * 0.1,
                    }}
                  >
                    <Link
                      href="/blog"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-300 font-medium"
                    >
                      <BookOpen className="w-5 h-5" />
                      <span>Blog</span>
                    </Link>
                  </motion.div>

                  {/* Kurumsal Pages */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="text-sm font-semibold text-gray-500 px-4 mb-2">
                      Kurumsal
                    </div>
                    {kurumsalPages.map((page, index) => (
                      <motion.div
                        key={page.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay:
                            (navItems.length + ehliyetPages.length + index) *
                            0.1,
                        }}
                      >
                        <Link
                          href={page.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-300 font-medium"
                        >
                          <page.icon className="w-5 h-5" />
                          <span>{page.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (navItems.length + ehliyetPages.length) * 0.1,
                    }}
                    className="pt-4 border-t border-gray-200"
                  >
                    <Link
                      href="/#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg"
                    >
                      <Phone className="w-4 h-4" />
                      <span>İletişim</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

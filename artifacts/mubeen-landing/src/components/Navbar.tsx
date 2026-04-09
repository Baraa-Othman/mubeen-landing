import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, toggleLanguage, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.gamification, href: "#gamification" },
    { label: t.nav.download, href: "#download" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#670320]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#670320] flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <img
                src="/logo.png"
                alt="Mubeen Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              className="text-xl font-bold text-[#670320]"
              style={{ fontFamily: language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
            >
              {language === "ar" ? "مُبيَّن" : "Mubeen"}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#670320] transition-colors duration-200 relative group"
                style={{ fontFamily: language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c2a05e] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-full border border-[#670320]/30 text-[#670320] text-sm font-medium hover:bg-[#670320]/5 transition-all duration-200"
              style={{ fontFamily: language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
            >
              {t.nav.toggleLang}
            </button>
            <a
              href="/mubeen-beta.apk"
              download="Mubeen-Beta.apk"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#670320] text-white rounded-full text-sm font-semibold hover:bg-[#7a0328] transition-all duration-200 shadow-md hover:shadow-lg"
              style={{ fontFamily: language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
            >
              <Download size={15} />
              {t.nav.download}
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-[#670320]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 hover:text-[#670320] font-medium py-1 transition-colors"
                  style={{ fontFamily: language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 px-4 py-2 rounded-full border border-[#670320]/30 text-[#670320] text-sm font-medium"
                  style={{ fontFamily: language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
                >
                  {t.nav.toggleLang}
                </button>
                <a
                  href="/mubeen-beta.apk"
                  download="Mubeen-Beta.apk"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#670320] text-white rounded-full text-sm font-semibold"
                  style={{ fontFamily: language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif" }}
                >
                  <Download size={14} />
                  {t.nav.download}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

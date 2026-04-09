import { motion } from "framer-motion";
import { Mail, Heart, Twitter, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const fontFamily = language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.gamification, href: "#gamification" },
    { label: t.nav.download, href: "#download" },
  ];

  return (
    <footer className="bg-[#1a0a0f] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c2a05e]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#670320]/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 border border-[#c2a05e]/30 flex items-center justify-center">
                <img src="/logo.png" alt="Mubeen" className="w-full h-full object-contain" />
              </div>
              <span
                className="text-xl font-extrabold text-[#c2a05e]"
                style={{ fontFamily }}
              >
                {t.footer.appName}
              </span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm" style={{ fontFamily }}>
              {t.footer.tagline}
            </p>

            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, color: "#c2a05e" }}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#c2a05e] hover:border-[#c2a05e]/40 transition-colors duration-200"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily }}>
              {t.footer.links}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-[#c2a05e] text-sm transition-colors duration-200 flex items-center gap-2 group"
                    style={{ fontFamily }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c2a05e]/40 group-hover:bg-[#c2a05e] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider" style={{ fontFamily }}>
              {t.footer.contact}
            </h4>
            <a
              href={`mailto:${t.footer.email}`}
              className="inline-flex items-center gap-2 text-white/55 hover:text-[#c2a05e] text-sm transition-colors duration-200 group"
              style={{ fontFamily }}
            >
              <Mail size={15} className="group-hover:text-[#c2a05e] transition-colors" />
              {t.footer.email}
            </a>
          </div>
        </div>

        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs" style={{ fontFamily }}>
            © {currentYear} {t.footer.appName}. {t.footer.rights}.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1.5" style={{ fontFamily }}>
            Made with <Heart size={12} className="text-[#c2a05e] fill-[#c2a05e]" /> for Arabic learners
          </p>
        </div>
      </div>
    </footer>
  );
}

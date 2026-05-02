import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t, language } = useLanguage();
  const fontFamily = language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-24 relative overflow-hidden" id="download">
      <div className="absolute inset-0 bg-gradient-to-br from-[#670320] via-[#7a0328] to-[#4a0118]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />

      <motion.div
        className="absolute top-8 right-20 w-40 h-40 rounded-full bg-[#c2a05e]/20 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-8 left-20 w-56 h-56 rounded-full bg-white/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 w-fit"
        >
          <img src="/logo-new.png" alt="Mubeen" className="h-16 w-auto object-contain drop-shadow-2xl" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight"
          style={{ fontFamily }}
        >
          {t.cta.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ fontFamily }}
        >
          {t.cta.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <motion.a
            href={`${import.meta.env.BASE_URL}mubeen-beta.apk`}
            download="Mubeen-Beta.apk"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#c2a05e] text-[#1a0a0f] rounded-full font-bold text-xl shadow-2xl hover:bg-[#d4b472] transition-all duration-200"
            style={{ fontFamily }}
          >
            <Download size={22} />
            {t.cta.downloadBtn}
          </motion.a>

          <div className="flex items-center gap-2 text-white/50 text-sm" style={{ fontFamily }}>
            <Shield size={14} />
            {t.cta.betaNote}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

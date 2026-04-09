import { motion } from "framer-motion";
import { Download, ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const arabicLetters = ["م", "ب", "ي", "ن"];

export default function Hero() {
  const { t, language } = useLanguage();

  const fontFamily = language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f9f6f0]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#670320]/5 via-transparent to-[#c2a05e]/10" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c2a05e]/40 to-transparent" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {arabicLetters.map((letter, i) => (
          <motion.div
            key={i}
            className="absolute text-[#670320]/6 font-bold select-none"
            style={{
              fontSize: `${140 + i * 30}px`,
              top: `${15 + i * 18}%`,
              left: i % 2 === 0 ? `${5 + i * 8}%` : undefined,
              right: i % 2 !== 0 ? `${5 + i * 8}%` : undefined,
              fontFamily: "'Tajawal', sans-serif",
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            {letter}
          </motion.div>
        ))}

        <motion.div
          className="absolute top-20 right-16 w-64 h-64 rounded-full bg-[#c2a05e]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-80 h-80 rounded-full bg-[#670320]/8 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white border border-[#c2a05e]/40 rounded-full shadow-sm"
        >
          <Sparkles size={14} className="text-[#c2a05e]" />
          <span
            className="text-sm font-medium text-[#670320]"
            style={{ fontFamily }}
          >
            {t.hero.badge}
          </span>
          <div className="w-2 h-2 rounded-full bg-[#c2a05e] animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          style={{ fontFamily }}
        >
          <span className="text-[#670320] block">{t.hero.headline1}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #c2a05e 0%, #e8c97a 50%, #c2a05e 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.hero.headline2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily }}
        >
          {t.hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="/mubeen-beta.apk"
            download="Mubeen-Beta.apk"
            id="download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-3 px-8 py-4 bg-[#670320] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#7a0328] transition-all duration-200"
            style={{ fontFamily }}
          >
            <Download size={20} className="group-hover:animate-bounce" />
            {t.hero.downloadBtn}
          </motion.a>

          <motion.a
            href="#features"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-8 py-4 border-2 border-[#670320]/25 text-[#670320] rounded-full font-semibold text-lg hover:border-[#670320]/50 hover:bg-[#670320]/5 transition-all duration-200"
            style={{ fontFamily }}
          >
            {t.hero.learnMore}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <div className="flex -space-x-3">
            {["#670320", "#c2a05e", "#8B5CF6", "#059669", "#0369a1"].map((color, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                style={{ backgroundColor: color }}
              >
                {["أ", "س", "م", "ن", "خ"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500" style={{ fontFamily }}>
            <span className="font-bold text-[#670320]">{t.hero.trustedBy} +500 </span>
            {t.hero.users}
          </p>
        </motion.div>
      </div>

      <motion.a
        href="#features"
        {...floatingVariants}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#670320]/40 hover:text-[#670320] transition-colors"
      >
        <ChevronDown size={32} />
      </motion.a>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

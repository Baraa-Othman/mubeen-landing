import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, FileText, Languages, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [Brain, FileText, Languages, BookOpen];

const cardColors = [
  { bg: "from-[#670320]/8 to-[#670320]/3", icon: "text-[#670320]", iconBg: "bg-[#670320]/10", accent: "#670320" },
  { bg: "from-[#c2a05e]/12 to-[#c2a05e]/4", icon: "text-[#9a7a40]", iconBg: "bg-[#c2a05e]/15", accent: "#c2a05e" },
  { bg: "from-[#670320]/8 to-[#670320]/3", icon: "text-[#670320]", iconBg: "bg-[#670320]/10", accent: "#670320" },
  { bg: "from-[#c2a05e]/12 to-[#c2a05e]/4", icon: "text-[#9a7a40]", iconBg: "bg-[#c2a05e]/15", accent: "#c2a05e" },
];

function FeatureCard({
  item,
  index,
  Icon,
  color,
  fontFamily,
}: {
  item: { title: string; description: string; highlight: string };
  index: number;
  Icon: React.ElementType;
  color: (typeof cardColors)[0];
  fontFamily: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative group bg-gradient-to-br ${color.bg} rounded-2xl p-7 border border-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
    >
      <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        <div className={`w-13 h-13 rounded-xl ${color.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 w-14 h-14`}>
          <Icon size={28} className={color.icon} />
        </div>

        <div className="mb-3">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-3"
            style={{
              backgroundColor: `${color.accent}18`,
              color: color.accent,
              fontFamily,
            }}
          >
            {item.highlight}
          </span>
          <h3
            className="text-xl font-bold text-[#1a0a0f] leading-snug"
            style={{ fontFamily }}
          >
            {item.title}
          </h3>
        </div>

        <p className="text-gray-600 leading-relaxed text-[15px]" style={{ fontFamily }}>
          {item.description}
        </p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)` }}
      />
    </motion.div>
  );
}

export default function Features() {
  const { t, language } = useLanguage();
  const fontFamily = language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-[#670320]/8 rounded-full"
          >
            <span className="w-2 h-2 rounded-full bg-[#c2a05e]" />
            <span className="text-sm font-semibold text-[#670320]" style={{ fontFamily }}>
              {t.features.sectionBadge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#1a0a0f] mb-5"
            style={{ fontFamily }}
          >
            {t.features.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily }}
          >
            {t.features.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.features.items.map((item, index) => {
            const Icon = icons[index];
            const color = cardColors[index];
            return (
              <FeatureCard
                key={index}
                item={item}
                index={index}
                Icon={Icon}
                color={color}
                fontFamily={fontFamily}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

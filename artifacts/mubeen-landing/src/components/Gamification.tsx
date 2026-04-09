import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, ShoppingBag, Crown, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const rankColors = ["#c2a05e", "#9ca3af", "#b45309"];
const rankIcons = [Crown, Trophy, Star];

export default function Gamification() {
  const { t, language } = useLanguage();
  const fontFamily = language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section id="gamification" className="py-28 bg-[#f9f6f0] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f9f6f0] to-white pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c2a05e]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={sectionRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 bg-[#c2a05e]/15 rounded-full"
          >
            <Zap size={14} className="text-[#c2a05e]" />
            <span className="text-sm font-semibold text-[#9a7a40]" style={{ fontFamily }}>
              {t.gamification.sectionBadge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-[#1a0a0f] mb-5"
            style={{ fontFamily }}
          >
            {t.gamification.headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily }}
          >
            {t.gamification.subheadline}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 60 : -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#670320] to-[#8a0430] px-6 py-5 flex items-center gap-3">
              <Trophy size={22} className="text-[#c2a05e]" />
              <h3 className="text-white font-bold text-lg" style={{ fontFamily }}>
                {t.gamification.leaderboardTitle}
              </h3>
            </div>
            <div className="p-4">
              {t.gamification.players.map((player, index) => {
                const RankIcon = index < 3 ? rankIcons[index] : null;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: language === "ar" ? 30 : -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className={`flex items-center gap-4 p-4 rounded-xl mb-2 transition-colors hover:bg-[#f9f6f0] ${
                      index === 0 ? "bg-gradient-to-r from-[#c2a05e]/10 to-transparent" : ""
                    }`}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                      style={{
                        backgroundColor: index < 3 ? `${rankColors[index]}20` : "#f3f4f6",
                        color: index < 3 ? rankColors[index] : "#6b7280",
                      }}
                    >
                      {RankIcon ? <RankIcon size={16} /> : player.rank}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-gray-900 text-sm" style={{ fontFamily }}>
                          {player.name}
                        </span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            backgroundColor: index < 3 ? `${rankColors[index]}15` : "#f3f4f6",
                            color: index < 3 ? rankColors[index] : "#6b7280",
                            fontFamily,
                          }}
                        >
                          {player.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <Star size={13} className="text-[#c2a05e] fill-[#c2a05e]" />
                      <span className="font-bold text-[#670320] text-sm" style={{ fontFamily }}>
                        {player.points.toLocaleString()}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#c2a05e] to-[#e8c97a] px-6 py-5 flex items-center gap-3">
                <ShoppingBag size={22} className="text-white" />
                <h3 className="text-white font-bold text-lg" style={{ fontFamily }}>
                  {t.gamification.shopTitle}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-gray-500 text-sm mb-5" style={{ fontFamily }}>
                  {t.gamification.shopDesc}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {t.gamification.shopItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.07 }}
                      whileHover={{ scale: 1.03 }}
                      className="relative rounded-2xl p-4 border-2 border-transparent hover:border-[#c2a05e]/30 transition-all duration-200 cursor-pointer overflow-hidden"
                      style={{ backgroundColor: `${item.color}10` }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${item.color}20` }}
                      >
                        <Crown size={18} style={{ color: item.color }} />
                      </div>
                      <div
                        className="text-xs font-bold mb-1.5 leading-tight"
                        style={{ color: item.color, fontFamily }}
                      >
                        {item.title}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={11} className="fill-current" style={{ color: item.color }} />
                        <span className="text-xs font-semibold text-gray-700" style={{ fontFamily }}>
                          {item.price.toLocaleString()} {t.gamification.pointsLabel}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: language === "ar" ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { icon: Zap, label: t.gamification.earnPoints, desc: t.gamification.earnPointsDesc, color: "#c2a05e" },
                { icon: Trophy, label: t.gamification.leaderboard, desc: t.gamification.leaderboardDesc, color: "#670320" },
                { icon: Crown, label: t.gamification.titles, desc: t.gamification.titlesDesc, color: "#8B5CF6" },
              ].map((stat, i) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-5 text-center shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <IconComp size={20} style={{ color: stat.color }} />
                    </div>
                    <div className="text-xs font-bold text-gray-900 leading-tight" style={{ fontFamily }}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

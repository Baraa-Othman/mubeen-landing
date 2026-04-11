import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Zap, Lock, Medal, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const MOCK_BALANCE = 3200;

const podiumColors = [
  { avatar: "#c2a05e", platform: "#c2a05e", text: "#7a5e28" },
  { avatar: "#9ca3af", platform: "#9ca3af", text: "#4b5563" },
  { avatar: "#c27a4b", platform: "#c27a4b", text: "#7a4020" },
];

function getInitials(name: string) {
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0].charAt(0).toUpperCase();
  return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
}

export default function Gamification() {
  const { t, language } = useLanguage();
  const fontFamily = language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px" });

  const top3 = t.gamification.players.slice(0, 3);
  const rest = t.gamification.players.slice(3);

  const podiumOrder = [top3[1], top3[0], top3[2]];
  const podiumColorOrder = [podiumColors[1], podiumColors[0], podiumColors[2]];
  const podiumHeights = ["h-14", "h-20", "h-10"];
  const platformRanks = [2, 1, 3];

  const acquireLabel = language === "ar" ? "اكتسبه" : "Acquire";
  const insufficientLabel = language === "ar" ? "نقاط غير كافية" : "Insufficient points";
  const balanceLabel = language === "ar" ? "رصيدك الحالي" : "Your balance";

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

          {/* LEADERBOARD */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? 60 : -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-5 flex items-center justify-between border-b border-gray-50">
              <h3 className="font-bold text-[#670320] text-xl" style={{ fontFamily }}>
                {t.gamification.leaderboardTitle}
              </h3>
              <RefreshCw size={18} className="text-[#c2a05e]" />
            </div>

            {/* Podium */}
            <div className="px-4 pt-8 pb-4 bg-gradient-to-b from-gray-50/50 to-white">
              <div className="flex items-end justify-center gap-4">
                {podiumOrder.map((player, i) => {
                  if (!player) return null;
                  const color = podiumColorOrder[i];
                  const isFirst = platformRanks[i] === 1;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="flex flex-col items-center gap-1 flex-1"
                    >
                      <div className="relative">
                        <div
                          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md"
                          style={{ backgroundColor: color.avatar }}
                        >
                          {getInitials(player.name)}
                        </div>
                        <div
                          className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold shadow"
                          style={{ backgroundColor: color.avatar }}
                        >
                          {platformRanks[i]}
                        </div>
                      </div>
                      <p
                        className="text-xs font-bold text-center text-gray-800 mt-1 leading-tight max-w-[80px] truncate"
                        style={{ fontFamily }}
                      >
                        {player.name}
                      </p>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: color.text, fontFamily }}
                      >
                        {player.title}
                      </p>
                      {isFirst && (
                        <p className="text-xs font-bold" style={{ color: "#c2a05e", fontFamily }}>
                          {player.points.toLocaleString()} {t.gamification.pointsLabel}
                        </p>
                      )}
                      <div
                        className={`w-full ${podiumHeights[i]} rounded-t-xl flex items-center justify-center mt-1`}
                        style={{ backgroundColor: color.platform }}
                      >
                        <span className="text-white font-extrabold text-lg">{platformRanks[i]}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Remaining players */}
            <div className="px-4 pb-4 divide-y divide-gray-50">
              {rest.map((player, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: language === "ar" ? 20 : -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                  className="flex items-center gap-3 py-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-sm flex-shrink-0">
                    {getInitials(player.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate" style={{ fontFamily }}>
                      {player.name}
                    </p>
                    <p className="text-xs text-gray-400" style={{ fontFamily }}>{player.title}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-xs font-bold text-[#670320]" style={{ fontFamily }}>
                        {player.points.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-400" style={{ fontFamily }}>
                        {t.gamification.pointsLabel}
                      </p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 text-xs font-bold">
                      {player.rank}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TITLES SHOP */}
          <motion.div
            initial={{ opacity: 0, x: language === "ar" ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-gray-50">
              <h3 className="font-bold text-[#670320] text-xl" style={{ fontFamily }}>
                {t.gamification.shopTitle}
              </h3>
            </div>

            <div className="p-5">
              {/* Balance pill */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50">
                  <Star size={14} className="text-[#c2a05e] fill-[#c2a05e]" />
                  <span className="text-sm font-semibold text-gray-700" style={{ fontFamily }}>
                    {balanceLabel}{" "}
                    <span className="text-[#670320] font-bold">
                      {MOCK_BALANCE.toLocaleString()} {t.gamification.pointsLabel}
                    </span>
                  </span>
                </div>
              </div>

              {/* Title cards */}
              <div className="grid grid-cols-2 gap-3">
                {t.gamification.shopItems.map((item, index) => {
                  const canAfford = item.unlocked;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.08 }}
                      className="rounded-2xl p-4 border-2 transition-all duration-200"
                      style={{
                        borderColor: canAfford ? "#670320" : "#e5e7eb",
                        backgroundColor: canAfford ? "#fff" : "#fafafa",
                      }}
                    >
                      {/* Top row: points + icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          <Star
                            size={13}
                            className={canAfford ? "fill-[#c2a05e] text-[#c2a05e]" : "text-gray-300 fill-gray-300"}
                          />
                          <span
                            className="text-xs font-bold"
                            style={{ color: canAfford ? "#c2a05e" : "#d1d5db", fontFamily }}
                          >
                            {item.price.toLocaleString()}
                          </span>
                        </div>
                        {canAfford ? (
                          <Medal size={20} className="text-[#670320]" />
                        ) : (
                          <Lock size={16} className="text-gray-300" />
                        )}
                      </div>

                      {/* Title name */}
                      <p
                        className="text-center font-bold text-base mb-4 leading-tight"
                        style={{ color: canAfford ? "#1a0a0f" : "#9ca3af", fontFamily }}
                      >
                        {item.title}
                      </p>

                      {/* Button */}
                      <button
                        className="w-full py-2 rounded-xl text-xs font-bold transition-all duration-200 border"
                        style={
                          canAfford
                            ? {
                                borderColor: "#c2a05e",
                                color: "#7a5e28",
                                backgroundColor: "transparent",
                                fontFamily,
                              }
                            : {
                                borderColor: "#e5e7eb",
                                color: "#9ca3af",
                                backgroundColor: "transparent",
                                fontFamily,
                              }
                        }
                      >
                        {canAfford ? acquireLabel : insufficientLabel}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

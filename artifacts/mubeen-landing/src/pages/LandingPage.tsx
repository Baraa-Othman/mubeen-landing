import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gamification from "@/components/Gamification";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function LandingPage() {
  const { language } = useLanguage();
  const fontFamily = language === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif";

  return (
    <div style={{ fontFamily }} className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Gamification />
      <CTA />
      <Footer />
    </div>
  );
}

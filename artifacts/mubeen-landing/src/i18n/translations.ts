export type Language = "ar" | "en";

export const translations = {
  ar: {
    dir: "rtl",
    lang: "ar",
    nav: {
      features: "المميزات",
      gamification: "نظام النقاط",
      download: "تحميل التطبيق",
      toggleLang: "English",
    },
    hero: {
      badge: "النسخة التجريبية متاحة الآن",
      headline1: "اللغة العربية",
      headline2: "في أبهى صورها",
      subheadline:
        "مُبيَّن هو رفيقك الذكي في رحلة إتقان الفصحى. أدوات مدعومة بالذكاء الاصطناعي وتجربة تعلّم ممتعة تجعل العربية شغفاً لا عبئاً.",
      downloadBtn: "تحميل النسخة التجريبية",
      learnMore: "اكتشف المزيد",
      slogan: "صنع بأيدٍ أمينة",
      professorNote: "تحت إشراف أستاذٍ جامعيّ متمرّس",
    },
    features: {
      sectionBadge: "أدوات الذكاء الاصطناعي",
      headline: "قوة الذكاء الاصطناعي في خدمة لغتك",
      subheadline:
        "أربعة أدوات احترافية صُمِّمَت خصيصاً لتمكين مستخدمي اللغة العربية الفصحى",
      items: [
        {
          title: "تقييم الكتابة بالذكاء الاصطناعي",
          description:
            "اكتب مقالاتك وأطروحاتك واحصل على تقييم فوري من خبير اصطناعي يحلّل أسلوبك وبلاغتك وقواعد لغتك.",
          highlight: "تغذية راجعة فورية",
        },
        {
          title: "مساعد الوثائق الذكي",
          description:
            "أنشئ رسائل رسمية ووثائق مهنية بأسلوب احترافي رفيع. حدد النبرة التي تريد ودع الذكاء الاصطناعي يُبدع لك.",
          highlight: "توليد احترافي",
        },
        {
          title: "الترجمة الراقية إلى العربية",
          description:
            "ترجمة فائقة الجودة من أي لغة إلى العربية الفصحى. ندعم النصوص وملفات TXT و PDF بكل يسر وسهولة.",
          highlight: "دعم PDF و TXT",
        },
        {
          title: "إثراء المفردات اليومي",
          description:
            "أدوات يومية منتقاة بعناية تُوسّع مخزونك اللغوي وتُضيف إلى قاموسك كلمات وتعابير فصيحة جديدة كل يوم.",
          highlight: "تعلّم يومي",
        },
      ],
    },
    gamification: {
      sectionBadge: "نظام المكافآت",
      headline: "تنافس، ارتقِ، تتوَّج",
      subheadline:
        "اجعل تعلُّمك مغامرة! اكسب النقاط يومياً، وتسلّق قائمة المتصدرين، واشترِ ألقاباً حصرية تُعبّر عن مكانتك اللغوية.",
      pointsLabel: "نقطة",
      earnPoints: "اكسب نقاطاً يومياً",
      earnPointsDesc: "أتمّ التحديات اليومية واكسب نقوداً لا تنتهي",
      leaderboard: "لوحة المتصدرين",
      leaderboardDesc: "تنافس مع المتعلمين حول العالم",
      titles: "ألقاب حصرية",
      titlesDesc: "اشترِ ألقاباً مرموقة بنقاطك المكتسبة",
      shopTitle: "متجر الألقاب",
      shopDesc: "استبدل نقاطك بألقاب فريدة",
      leaderboardTitle: "لوحة المتصدرين",
      players: [
        { rank: 1, name: "أحمد الفصيح", points: 12840, title: "أمير البيان" },
        { rank: 2, name: "سارة الأديبة", points: 10920, title: "ملكة القوافي" },
        { rank: 3, name: "عمر الناثر", points: 9560, title: "فارس الكلمة" },
        { rank: 4, name: "نورة البليغة", points: 8340, title: "حكيمة العصر" },
        { rank: 5, name: "خالد الشاعر", points: 7890, title: "لسان الحق" },
      ],
      shopItems: [
        { title: "أمير البيان", price: 5000, color: "#c2a05e" },
        { title: "فارس الكلمة", price: 3000, color: "#670320" },
        { title: "حكيم العصر", price: 8000, color: "#8B5CF6" },
        { title: "لسان الحق", price: 2000, color: "#059669" },
      ],
    },
    cta: {
      headline: "ابدأ رحلتك مع مُبيَّن اليوم",
      subheadline:
        "انضم إلى آلاف المتعلمين الذين اختاروا الطريق الذكي لإتقان العربية الفصحى",
      downloadBtn: "تحميل النسخة التجريبية",
      betaNote: "مجاني تماماً خلال مرحلة التجربة",
    },
    footer: {
      tagline: "رفيقك الذكي في رحلة إتقان العربية الفصحى",
      links: "روابط سريعة",
      contact: "تواصل معنا",
      email: "support@mubeen.app",
      rights: "جميع الحقوق محفوظة",
      appName: "مُبيَّن",
    },
  },
  en: {
    dir: "ltr",
    lang: "en",
    nav: {
      features: "Features",
      gamification: "Gamification",
      download: "Download",
      toggleLang: "عربي",
    },
    hero: {
      badge: "Beta Version Now Available",
      headline1: "Arabic Language",
      headline2: "At Its Finest",
      subheadline:
        "Mubeen is your intelligent companion for mastering Modern Standard Arabic (Fusha). AI-powered tools and an engaging learning experience make Arabic a passion, not a burden.",
      downloadBtn: "Download Beta APK",
      learnMore: "Explore More",
      slogan: "Crafted with integrity",
      professorNote: "Under the supervision of a seasoned, veteran professor",
    },
    features: {
      sectionBadge: "AI-Powered Tools",
      headline: "The Power of AI in Service of Your Language",
      subheadline:
        "Four professional tools crafted exclusively to empower Modern Standard Arabic speakers",
      items: [
        {
          title: "AI Writing Evaluation",
          description:
            "Write your essays and dissertations and receive instant feedback from an AI expert that analyzes your style, eloquence, and grammar.",
          highlight: "Instant Feedback",
        },
        {
          title: "AI Document Assistant",
          description:
            "Create formal letters and professional documents in a refined style. Set the tone you want and let AI craft it for you.",
          highlight: "Professional Generation",
        },
        {
          title: "Elegant Arabic Translation",
          description:
            "High-quality translation from any language into Fusha Arabic. We support text, TXT files, and PDF documents with ease.",
          highlight: "PDF & TXT Support",
        },
        {
          title: "Daily Vocabulary Enrichment",
          description:
            "Carefully curated daily tools that expand your linguistic repertoire and add eloquent new words and expressions every day.",
          highlight: "Daily Learning",
        },
      ],
    },
    gamification: {
      sectionBadge: "Rewards System",
      headline: "Compete, Rise, Be Crowned",
      subheadline:
        "Make your learning an adventure! Earn daily points, climb the leaderboard, and purchase exclusive titles that reflect your linguistic mastery.",
      pointsLabel: "points",
      earnPoints: "Earn Daily Points",
      earnPointsDesc: "Complete daily challenges and earn endless rewards",
      leaderboard: "Leaderboard",
      leaderboardDesc: "Compete with learners around the world",
      titles: "Exclusive Titles",
      titlesDesc: "Purchase prestigious titles with your earned points",
      shopTitle: "Titles Shop",
      shopDesc: "Redeem your points for unique titles",
      leaderboardTitle: "Leaderboard",
      players: [
        { rank: 1, name: "Ahmad Al-Fasih", points: 12840, title: "Prince of Eloquence" },
        { rank: 2, name: "Sara Al-Adiba", points: 10920, title: "Queen of Rhymes" },
        { rank: 3, name: "Omar Al-Nathir", points: 9560, title: "Knight of Words" },
        { rank: 4, name: "Noura Al-Baligha", points: 8340, title: "Sage of the Age" },
        { rank: 5, name: "Khalid Al-Sha'ir", points: 7890, title: "Voice of Truth" },
      ],
      shopItems: [
        { title: "Prince of Eloquence", price: 5000, color: "#c2a05e" },
        { title: "Knight of Words", price: 3000, color: "#670320" },
        { title: "Sage of the Age", price: 8000, color: "#8B5CF6" },
        { title: "Voice of Truth", price: 2000, color: "#059669" },
      ],
    },
    cta: {
      headline: "Start Your Mubeen Journey Today",
      subheadline:
        "Join thousands of learners who chose the smart path to mastering Modern Standard Arabic",
      downloadBtn: "Download Beta APK",
      betaNote: "Completely free during the beta phase",
    },
    footer: {
      tagline: "Your intelligent companion for mastering Modern Standard Arabic",
      links: "Quick Links",
      contact: "Contact Us",
      email: "support@mubeen.app",
      rights: "All rights reserved",
      appName: "Mubeen",
    },
  },
} as const;

export type TranslationKeys = typeof translations.ar;

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
        "مُبين هو رفيقك الذكي في رحلة إتقان الفصحى. أدوات مدعومة بالذكاء الاصطناعي وتجربة تعلّم ممتعة تجعل العربية شغفاً لا عبئاً.",
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
      leaderboard: "التصنيف",
      leaderboardDesc: "تنافس مع المتعلمين حول العالم",
      titles: "قائمة الألقاب",
      titlesDesc: "اشترِ ألقاباً مرموقة بنقاطك المكتسبة",
      shopTitle: "قائمة الألقاب",
      shopDesc: "استبدل نقاطك بألقاب فريدة",
      leaderboardTitle: "التصنيف",
      players: [
        { rank: 1, name: "Baraa Mohammed", points: 209, title: "شاعر" },
        { rank: 2, name: "Khaled", points: 124, title: "مبتدئ" },
        { rank: 3, name: "أسد الأمة", points: 102, title: "محرر محترف" },
        { rank: 4, name: "Khaled", points: 53, title: "شاعر" },
        { rank: 5, name: "د. سلطان", points: 43, title: "خبير لغوي" },
      ],
      shopItems: [
        { title: "محرر محترف", price: 100, color: "#c2a05e" },
        { title: "أستاذ الأدب", price: 300, color: "#670320" },
        { title: "كاتب", price: 500, color: "#059669" },
        { title: "روائي", price: 600, color: "#0369a1" },
        { title: "أديب", price: 700, color: "#7c3aed" },
        { title: "ناقد أدبي", price: 800, color: "#b45309" },
      ],
    },
    cta: {
      headline: "ابدأ رحلتك مع مُبين اليوم",
      subheadline:
        "انضم إلى آلاف المتعلمين الذين اختاروا الطريق الذكي لإتقان العربية الفصحى",
      downloadBtn: "تحميل النسخة التجريبية",
      betaNote: "مجاني تماماً خلال مرحلة التجربة",
    },
    footer: {
      tagline: "رفيقك الذكي في رحلة إتقان العربية الفصحى",
      links: "روابط سريعة",
      contact: "تواصل معنا",
      email: "support@mubeenar.com",
      rights: "جميع الحقوق محفوظة",
      appName: "مُبين",
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
      pointsLabel: "pts",
      earnPoints: "Earn Daily Points",
      earnPointsDesc: "Complete daily challenges and earn endless rewards",
      leaderboard: "Rankings",
      leaderboardDesc: "Compete with learners around the world",
      titles: "Titles List",
      titlesDesc: "Purchase prestigious titles with your earned points",
      shopTitle: "Titles List",
      shopDesc: "Redeem your points for unique titles",
      leaderboardTitle: "Rankings",
      players: [
        { rank: 1, name: "Baraa Mohammed", points: 209, title: "Poet" },
        { rank: 2, name: "Khaled", points: 124, title: "Beginner" },
        { rank: 3, name: "Asad Al-Umma", points: 102, title: "Pro Editor" },
        { rank: 4, name: "Khaled", points: 53, title: "Poet" },
        { rank: 5, name: "Dr. Sultan", points: 43, title: "Language Expert" },
      ],
      shopItems: [
        { title: "Pro Editor", price: 100, color: "#c2a05e" },
        { title: "Literature Prof.", price: 300, color: "#670320" },
        { title: "Writer", price: 500, color: "#059669" },
        { title: "Novelist", price: 600, color: "#0369a1" },
        { title: "Littérateur", price: 700, color: "#7c3aed" },
        { title: "Literary Critic", price: 800, color: "#b45309" },
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
      email: "support@mubeenar.com",
      rights: "All rights reserved",
      appName: "Mubeen",
    },
  },
} as const;

export type TranslationKeys = typeof translations.ar;

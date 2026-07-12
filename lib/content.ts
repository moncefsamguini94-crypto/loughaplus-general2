/** مشروع مستقل — angle 4 / عام لكل شخص باغي يتعلم الإنجليزية. */

export const site = {
  name: "معهد لوغة بلس",
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "212600000000",
  baseUrl: "https://lougha-general-2.garantika.shop",
  locale: "ar_MA",
  responseTime: "عادةً فالجواب كيوصل فـ أقل من ساعة",
  foundedYear: 2019,
  studentsServed: "+2000",
  teachersCount: "100",
  socials: {
    instagram: "https://instagram.com/loughainstitute",
    facebook: "https://facebook.com/loughainstitute",
    tiktok: "https://tiktok.com/@loughainstitute",
  },
  privacyNote: "المعلومات ديالك آمنة وكتستعمل غير باش نتواصلو معاك بخصوص اختبار المستوى.",
} as const;

export const urgency = {
  seatsLeft: 15,
  cohortLabel: "فوج جديد كيبدا قريب",
  badge: "بلايص محدودة للناس اللي باغيين يبداو دابا",
} as const;

export const seo = {
  title: "LOUGHA PLUS — أتقن الإنجليزية خلال 6 أشهر",
  description:
    "مسار LOUGHA PLUS المباشر مع أساتذة معتمدين. اختبار مستوى مجاني، متابعة يومية، شهادة، وعرض 1500 درهم عوض 3500.",
  keywords: [
    "تعلم الإنجليزية",
    "الإنجليزية فالمغرب",
    "LOUGHA PLUS",
    "إنجليزية السفر",
    "إنجليزية العمل",
    "معهد لوغة بلس",
  ],
} as const;

export const topBar = {
  message: "🌍 الإنجليزية ولات مفتاح بزاف ديال الفرص… بدا من اليوم",
} as const;

export const countdown = {
  heading: "باقي على نهاية العرض:",
  labels: { days: "أيام", hours: "ساعات", minutes: "دقائق", seconds: "ثواني" },
} as const;

export const ctas = {
  primary: "دير اختبار المستوى",
  whatsapp: "صيفط ليا التفاصيل فـ واتساب",
  job: "بدا تفتح البيبان",
  form: "صيفط طلب اختبار المستوى",
  stickyShort: "اختبار المستوى بالمجان",
  bookSeat: "حجز بلاصتك",
} as const;

export const heroAngles = {
  default: {
    badge: urgency.badge,
    headline: "كل فرصة كتدوز قدامك… والإنجليزية ممكن تكون السبب.",
    subheadline:
      "الخدمة، القراية، السفر، التجارة، والإنترنت ولى فيهم الإنجليزية حاضرة. تعلمها بثقة مع لوغة وفتح على راسك فرص أكثر.",
  },
  entretien: {
    badge: urgency.badge,
    headline: "أي فرصة جديدة ممكن تبدأ بسؤال بالإنجليزية.",
    subheadline:
      "وجد راسك باش تجاوب، تهضر، وتبان واثق فالمواقف اللي كتحتاج الإنجليزية.",
  },
  callcenter: {
    badge: urgency.badge,
    headline: "إلى بغيتي توسع الاختيارات ديالك، الإنجليزية ضرورية.",
    subheadline:
      "تعلم تواصل بسيط وواضح باش تولي واجد لفرص أكثر فالحياة اليومية والمهنية.",
  },
  multinationale: {
    badge: urgency.badge,
    headline: "العالم كامل كيتواصل بالإنجليزية… واش نتا واجد؟",
    subheadline:
      "من الدراسة للخدمة للسفر، الإنجليزية كتخليك قريب من فرص كانت بعيدة عليك.",
  },
  confidence: {
    badge: urgency.badge,
    headline: "ما تبقاش فاهم شوية وساكت… تعلم تهضر بثقة.",
    subheadline:
      "مع طريقة عملية، تصحيح، ومتابعة، غادي تولي كتستعمل الإنجليزية بلا خوف.",
  },
} as const;

export type HeroAngle = keyof typeof heroAngles;

export const hero = {
  bullets: [
    "فرص فالشغل والقراية",
    "ثقة فالهضرة",
    "اختبار المستوى بالمجان",
    "طريقة مناسبة لأي مستوى",
  ],
  reassurance: "ماكاين حتى أداء دابا. غير اختبار باش نعرفو المستوى ديالك.",
  responseNote: "كنجاوبو فـ واتساب بسرعة",
  proof: {
    avatars: ["أ", "م", "س", "ي"],
    count: "+2000 شخص بداو معانا",
    rating: "4.8/5",
    verified: "آراء موثقة",
  },
  mediaCaption: "تعلم الإنجليزية بطريقة عملية ومريحة",
  miniTestimonial: {
    quote: "كنت كنقول غادي نبدا من بعد… ملي بديت، حسيت بالفرق فالثقة ديالي.",
    name: "أمينة · متعلمة",
  },
} as const;

export const trustBar = {
  items: [
    { value: site.studentsServed, label: "شخص بداو معانا" },
    { value: site.teachersCount, label: "أستاذ من العالم" },
    { value: "4.8/5", label: "تقييم المتعلمين" },
    { value: "2019", label: "من" },
  ],
} as const;

export const pain = {
  heading: "كتحس أن الإنجليزية كتوقفك فبزاف ديال المواقف؟",
  items: [
    "كتفهم شوية ولكن كتخاف تهضر؟",
    "كتضيع فرص حيث خاصها إنجليزية؟",
    "كتشوف ناس كيتقدمو حيث كيتواصلو مزيان؟",
    "جربتي بوحدك ولكن ما كملتيش؟",
  ],
  callout: "المشكل ماشي فيك. غالباً خاصك طريقة كتخليك تطبق وتتصحح وتبقى ملتزم.",
  cta: "دير اختبار المستوى بالمجان",
} as const;

export const whyEnglish = {
  heading: "الإنجليزية ما بقاتش رفاهية… ولات مهارة أساسية.",
  subheading: "فين كتفتح ليك الأبواب؟",
  sectors: [
    { icon: "Briefcase", label: "الخدمة", note: "فرص أكثر وتواصل أحسن" },
    { icon: "BookOpen", label: "القراية", note: "مراجع وكورسات وفهم أسهل" },
    { icon: "Plane", label: "السفر", note: "تواصل براحة فبلدان أخرى" },
    { icon: "Laptop", label: "الإنترنت", note: "محتوى ودورات وفرص عالمية" },
    { icon: "Handshake", label: "التجارة", note: "تعامل مع زبناء وشركاء أكثر" },
  ],
  cta: "بدا من دابا",
  jobProof: {
    heading: "فرص كثيرة كتحتاج الإنجليزية",
    clips: [
      "خدمة فيها زبناء أجانب",
      "دورة أو تكوين عالمي",
      "سفر أو دراسة فبرا",
      "مشروع أو تجارة مع ناس من الخارج",
    ],
  },
  interview: {
    heading: "شنو غادي يتبدل عندك؟",
    subheading: "مواقف يومية كتولي أسهل:",
    questions: [
      "تهضر مع شخص أجنبي.",
      "تفهم فيديو أو درس بالإنجليزية.",
      "تجاوب على رسالة بسيطة.",
      "تقدم راسك بثقة.",
    ],
  },
} as const;

export const program = {
  eyebrow: "مسار واضح",
  heading: "برنامج 180 يوم باش تبني الإنجليزية ديالك خطوة بخطوة",
  subheading: "ماشي حفظ فقط. تطبيق، تصحيح، متابعة، وثقة.",
  steps: [
    { title: "اختبار المستوى بالمجان", desc: "نعرفو منين غادي تبدا." },
    { title: "توجيه مناسب", desc: "نختارو معاك المسار اللي يناسبك." },
    { title: "حصص أسبوعية", desc: "جوج حصص فالأسبوع باش تبقى متابع." },
    { title: "تطبيق مباشر", desc: "تهضر وتطبق مع الأستاذ والمجموعة." },
    { title: "اختبارات تقدم", desc: "باش تشوف التطور ديالك." },
    { title: "شهادة", desc: "كتبين أنك كملت المسار." },
  ],
  stats: [
    { value: "180", label: "يوم" },
    { value: "2", label: "حصص / أسبوع" },
    { value: "مجاني", label: "اختبارات التقدم" },
    { value: "مرافقة", label: "متابعة شخصية" },
  ],
} as const;

export const mechanism = {
  eyebrow: "طريقة عملية",
  heading: "باش الإنجليزية تولي سهلة، خاصك تستعملها ماشي غير تسمعها.",
  subheading: "لوغة كتخليك تتعلم بطريقة واضحة:",
  inputs: [
    { icon: "BookOpen", label: "أساس", desc: "تبني القواعد والكلمات" },
    { icon: "Mic", label: "هضرة", desc: "تطبق كل أسبوع" },
    { icon: "PenLine", label: "تصحيح", desc: "تعرف فين كتغلط" },
    { icon: "ShieldCheck", label: "متابعة", desc: "باش ما توقفش" },
  ],
  result: { icon: "Sparkles", label: "ثقة", desc: "تستعمل الإنجليزية براحة" },
  comparison: {
    heading: "علاش ماشي بحال التعلم بوحدك؟",
    aTitle: "بوحدك",
    bTitle: "مع لوغة",
    rows: [
      { a: "كتجمع معلومات بلا نظام", b: "مسار واضح من البداية" },
      { a: "ماكاينش تصحيح", b: "الأستاذ كيعطيك تصحيح" },
      { a: "كتوقف بسرعة", b: "متابعة كتعاونك تكمل" },
      { a: "ماكتطبقش كفاية", b: "كتطبق فكل حصة" },
    ],
  },
} as const;

export const offer = {
  eyebrow: "بداية جديدة",
  heading: "برنامج كامل باش تفتح فرص أكثر بالإنجليزية",
  subheading: "دروس، تطبيق، اختبارات، شهادة، ومتابعة شخصية.",
  features: [
    { text: "برنامج 180 يوم بجوج حصص فالأسبوع", free: false },
    { text: "حصة ساعة ونص للتطبيق والفهم", free: false },
    { text: "أساتذة دوليين ومتابعة شخصية", free: false },
    { text: "نادي التواصل المباشر", free: true },
    { text: "تدريب على مواقف حقيقية", free: true },
    { text: "اختبارات الانتقال بين المستويات", free: true },
    { text: "ملفات منظمة للمراجعة", free: false },
    { text: "شهادة إتمام بعد الاختبارات", free: false },
    { text: "متابعة تناسب وقتك ومستواك", free: false },
  ],
  price: {
    badge: "عرض محدود",
    current: "1500 درهم",
    original: "3500 درهم",
    reason: "العرض مخفّض بمناسبة فتح فوج جديد.",
    facilites: "كاينة إمكانية الأداء بالتقسيط — هضر مع المستشار.",
    note: "ماكاين حتى أداء دابا — بدا باختبار مجاني.",
  },
  cta: "حجز بلاصتك للاختبار المجاني",
} as const;

export const limitedOffer = {
  eyebrow: "فوج جديد مفتوح",
  title: "بدا الإنجليزية دابا قبل ما تضيع فرصة أخرى",
  subtitle: "عرض مخفّض للناس اللي باغيين يبدلو علاقتهم بالإنجليزية",
  discount: "-50%",
  duration: "6 أشهر",
} as const;

export const programCard = {
  title: "شنو داخل فالبرنامج؟",
  items: [
    "مسار تدريجي كيمتد لـ 180 يوم",
    "جوج حصص كل أسبوع مع متابعة منتظمة",
    "كل حصة مدتها ساعة ونص باش تفهم وتطبق",
    "تدريب على مواقف العمل والقراية والسفر",
    "جلسات تواصل باش تولف الهضرة",
    "اختبارات مستوى بلا مصاريف إضافية",
    "ملفات منظمة باش تراجع فدارك",
    "شهادة إتمام من بعد الاختبارات",
  ],
} as const;

export const whyUs = {
  title: "علاش لوغة؟",
  subtitle: "طريقة مريحة، واضحة، ومناسبة لأي شخص باغي يبدا بجدية.",
  items: [
    "البرنامج كيركز على الهضرة والتطبيق",
    "نوادي مباشرة كتخليك تستعمل الإنجليزية",
    "التوجيه كيتبنى على المستوى والهدف ديالك",
    "فريق كيتابعك باش ما توقفش فالنص",
    "منهجية واضحة ومناسبة للمبتدئين",
    "أساتذة من خلفيات ولهجات مختلفة",
    "حصص مباشرة كتخلي التعلم حي وماشي ممل",
    "قياس تقدم مستمر باش تعرف فين وصلتي",
  ],
} as const;

export const midCta = {
  heading: "باغي تبدا بلا تعقيد؟",
  subheading: "دير اختبار المستوى وغادي نوجهوك حسب الهدف ديالك.",
  cta: "دير اختبار المستوى بالمجان",
} as const;

export const testimonials = {
  heading: "ناس بداو وبدلات عندهم الثقة",
  subheading: "كل واحد عندو هدف مختلف، ولكن الإنجليزية ولات كتعاونهم كاملين.",
  items: [
    {
      type: "video" as const,
      source: "tiktok" as const,
      name: "أمينة",
      meta: "28 سنة · باغية تطور راسها",
      goal: "ثقة",
      quote: "كنت كنخاف نهضر، دابا وليت كنقدر نبدا محادثة بسيطة بلا توتر.",
      initials: "أ",
      verified: true,
    },
    {
      type: "whatsapp" as const,
      source: "whatsapp" as const,
      name: "مروان",
      meta: "31 سنة · مهتم بالسفر",
      goal: "سفر",
      quote: "تعلمت عبارات عملية عاونتني بزاف فالسفر والتواصل.",
      initials: "م",
      verified: true,
    },
    {
      type: "text" as const,
      source: "facebook" as const,
      name: "سارة",
      meta: "24 سنة · كتقلب على فرص جديدة",
      goal: "فرص",
      quote: "وليت كنحس أن الإنجليزية ماشي حاجز، ولكن باب جديد.",
      initials: "س",
      verified: true,
    },
  ],
  rating: { score: "4.8", label: "متوسط تقييم المتعلمين" },
} as const;

export const reviews = {
  heading: "آراء المتعلمين",
  subheading: "ناس بداو من الصفر وولاو كيتواصلو بثقة.",
  items: [
    {
      name: "أمينة الوزاني",
      city: "مراكش",
      rating: 5,
      avatar: "https://i.pravatar.cc/120?img=47",
      text: "الطريقة بسيطة ومريحة، وأول مرة حسيت أنني قادرة نكمل.",
    },
    {
      name: "مروان العلوي",
      city: "طنجة",
      rating: 5,
      avatar: "https://i.pravatar.cc/120?img=15",
      text: "الحصص المباشرة خلاتني نطبق ماشي غير نسمع.",
    },
  ],
} as const;

export const teachers = {
  eyebrow: "الأساتذة",
  heading: "تعلم مع أساتذة كيعرفو كيفاش يخليوك تهضر",
  subheading: "أساتذة دوليين كيساعدوك تولف السماع والهضرة بثقة.",
  reassurance: "مناسب حتى إيلا كنتي مبتدئ — كاتبدا من المستوى ديالك.",
  items: [
    { name: "سارة", country: "أمريكا", specialty: "المحادثة", initials: "س", cert: "مؤطرة" },
    { name: "جيمس", country: "بريطانيا", specialty: "النطق السليم", initials: "ج", cert: "مؤطر" },
    { name: "إيميلي", country: "كندا", specialty: "الإنجليزية اليومية", initials: "إ", cert: "مؤطرة" },
    { name: "دافيد", country: "أمريكا", specialty: "الثقة فالهضرة", initials: "د", cert: "مؤطر" },
  ],
} as const;

export const clubs = {
  heading: "الإنجليزية كتقوى ملي كتستعملها بانتظام.",
  subheading: "كيفاش كتدوز حصة التطبيق؟",
  steps: [
    { title: "موقف بسيط", desc: "محادثة، سفر، خدمة، أو قراية." },
    { title: "عبارات مفيدة", desc: "جمل كتستعملها مباشرة." },
    { title: "تطبيق مباشر", desc: "كتطبق مع الأستاذ والمجموعة." },
    { title: "تصحيح", desc: "كتعرف الخطأ وكيفاش تصلحو." },
    { title: "ثقة", desc: "كل أسبوع كتولي أجرأ فالهضرة." },
  ],
  badge: "جو مريح بلا حكم",
} as const;

export const certificate = {
  heading: "شهادة كتبيّن التقدم ديالك",
  subheading: "منين كاتسالي وكاتدوز الاختبارات، كاتاخد شهادة كتبيّن المجهود والتقدم ديالك.",
  note: "شهادة إتمام كتثبت المستوى اللي وصلتي ليه، ماشي ضمان لأي نتيجة خارجية.",
  benefits: ["زيدها فالملف ديالك", "شاركها مع اللي يهمهم الأمر", "دليل أنك طورت مهارة مهمة"],
} as const;

export const afterTest = {
  heading: "شنو غادي يوقع من بعد ما تصيفط؟",
  steps: [
    { title: "كنتواصلو معاك", desc: "مستشار كايصيفط ليك فـ واتساب." },
    { title: "اختبار المستوى بالمجان", desc: "اختبار بسيط فـ 5 دقايق باش نعرفو المستوى." },
    { title: "توجيه مناسب", desc: "كنوجهوك حسب الهدف والمستوى ديالك." },
  ],
} as const;

export const ENGLISH_LEVELS = ["مبتدئ", "بسيط", "متوسط", "متمكن"] as const;
export type EnglishLevel = (typeof ENGLISH_LEVELS)[number];

export const checkout = {
  badge: "الخطوة الأخيرة",
  heading: "حجز بلاصتك للاختبار المجاني",
  subheading: "عمّر الفورم وغادي يتواصل معاك مستشار فـ واتساب — بلا أي التزام.",
  summary: {
    title: "ملخص الطلب",
    program: "برنامج 180 يوم — معهد لوغة بلس",
    duration: "6 شهور · جوج حصص فالأسبوع",
    highlights: [
      "اختبار المستوى بالمجان",
      "أساتذة دوليين + نادي التواصل المباشر",
      "شهادة إتمام + متابعة شخصية",
    ],
    paymentNote: "ماكاين حتى أداء دابا — الأداء كيتناقش مع المستشار.",
    installment: "كاين التقسيط",
  },
  secureNote: "المعلومات ديالك محمية.",
} as const;

export const leadForm = {
  badge: "اختبار المستوى بالمجان",
  heading: "خلّي المعلومات ديالك",
  subheading: "باش المستشار يعاونك تعرف المستوى والبرنامج المناسب ليك.",
  fields: {
    fullName: { label: "الاسم الكامل", placeholder: "الاسم والنسب" },
    phone: {
      label: "رقم الهاتف",
      placeholder: "6XXXXXXXX",
      hint: "غادي نتواصلو معاك هنا فـ واتساب — بلا مكالمات مزعجة.",
    },
    level: {
      label: "المستوى ديالك فالإنجليزية",
      options: ENGLISH_LEVELS,
      hint: "باش نوجهوك حسب المستوى والهدف ديالك.",
    },
  },
  submit: "صيفط ليا اختبار المستوى بالمجان",
  submitting: "جاري الإرسال…",
  microcopy: "غادي نتواصلو بيك فـ واتساب باش نحددو المستوى ديالك.",
  reassurances: ["اختبار بالمجان", "ماكاين حتى أداء", "نتواصلو فـ واتساب"],
  sideProof: {
    quote: "صيفطت الطلب وتواصلو معايا بسرعة. الاختبار كان سهل وفهمت شنو خاصني ندير.",
    name: "أمينة · متعلمة",
    count: "+2000 شخص دازو من نفس الاختبار",
  },
  success: {
    title: "طلبك توصل بنجاح",
    subtitle:
      "غادي يتواصل معك مستشار من معهد لوغة بلس على واتساب باش يحدد معاك المستوى والبرنامج المناسب ليك.",
    whatsappCta: "فتح واتساب دابا",
  },
  errors: {
    required: "هاد الخانة ضرورية",
    name: "كتب الاسم الكامل ديالك",
    phone: "دخل رقم هاتف صحيح",
    level: "اختار المستوى ديالك",
    submit: "وقع مشكل، عاود حاول من فضلك.",
  },
} as const;

export const faq = {
  heading: "أسئلة متكررة",
  items: [
    { q: "واش البرنامج مناسب لأي مستوى؟", a: "إيه، كتبدأ باختبار المستوى ونوجهوك حسب فين وصلتي." },
    { q: "واش غادي نقدر نهضر؟", a: "البرنامج فيه تطبيق مباشر وتصحيح باش تولي كتستعمل الإنجليزية ماشي غير كتسمعها." },
    { q: "واش خاصني وقت بزاف؟", a: "جوج حصص فالأسبوع كافيين باش تبقى متابع بلا ضغط كبير." },
    { q: "واش اختبار المستوى مجاني؟", a: "إيه، اختبار المستوى بالمجان وبلا التزام." },
    { q: "واش خاصني نخلص دابا؟", a: "لا. دابا غير صيفط الطلب والمستشار يشرح ليك التفاصيل." },
    { q: "واش كاين الأداء بالتقسيط؟", a: "إيه، كاينة إمكانية الأداء بالتقسيط. المستشار يشرح ليك فـ واتساب." },
  ],
  contactCta: "باقي عندك سؤال؟ صيفط لينا فـ واتساب",
} as const;

export const finalCta = {
  heading: "ما تخليش الإنجليزية تبقى حاجز بينك وبين الفرص.",
  recap: ["180 يوم", "حصتين / أسبوع", "اختبار مجاني", "متابعة شخصية"],
  cta: "بدا باختبار المستوى بالمجان",
} as const;

export const confirmation = {
  successTitle: "طلبك توصل بنجاح",
  successSubtitle:
    "غادي يتواصل معك مستشار من معهد لوغة بلس على واتساب باش يحدد معاك المستوى والبرنامج المناسب ليك.",
  responseNote: "عادةً كنجاوبو فـ أقل من ساعة.",
  steps: [
    "شيك على واتساب ديالك",
    "جاوب المستشار باش تستافد من اختبار المستوى",
    "وجد 5 دقايق باش تجاوب على شوية أسئلة",
  ],
  cta: "فتح واتساب دابا",
  microQuestionTitle: "شنو الهدف ديالك من الإنجليزية؟",
  microQuestionOptions: ["خدمة", "قراية", "سفر", "تجارة", "ثقة"],
  whatsappPrefill:
    "السلام، صيفطت طلب اختبار المستوى بالمجان من معهد لوغة بلس. بغيت نعرف المستوى ديالي.",
} as const;

export const whatsappSequence = [
  {
    id: "welcome",
    label: "رسالة 1 — فورية",
    text: "السلام [الاسم] 👋 هنا معهد لوغة بلس. وصلنا طلب ديالك ديال اختبار المستوى بالمجان. شنو الهدف ديالك من الإنجليزية؟ 1. خدمة 2. قراية 3. سفر 4. تجارة 5. ثقة",
  },
  {
    id: "qualify",
    label: "رسالة 2 — تأهيل",
    text: "زوين. والمستوى ديالك دابا كيفاش كاتشوفو؟ 1. مبتدئ 2. كنفهم شوية ولكن ماكنهضرش 3. متوسط 4. ماعرفتش المستوى ديالي",
  },
  {
    id: "reassure",
    label: "رسالة 3 — طمأنة",
    text: "ماكاين مشكل إيلا كنتي مبتدئ. البرنامج كيبدا من المستوى ديالك وبطريقة عملية.",
  },
  {
    id: "booking",
    label: "رسالة 4 — موعد",
    text: "نقدرو نديرو ليك اختبار المستوى بالمجان. شنو الوقت اللي كيناسبك؟ 1. الصباح 2. العشية 3. الليل",
  },
  {
    id: "reminder",
    label: "رسالة 5 — تذكير",
    text: "السلام [الاسم]، باقي مهتم تعرف المستوى ديالك فالإنجليزية؟ الاختبار مجاني وماكاين حتى التزام.",
  },
  {
    id: "nudge",
    label: "رسالة 6 — تذكير عاطفي",
    text: "ما تخليش الإنجليزية تضيع عليك فرص جديدة. نبداو غير باختبار بسيط ومجاني.",
  },
] as const;

export const footer = {
  tagline: "معهد لوغة بلس — تعلم الإنجليزية بثقة باش تفتح فرص أكثر.",
  rights: "جميع الحقوق محفوظة",
  privacyLabel: "سياسة الخصوصية",
} as const;

/** Pro SaaS landing structure (A → Z). */
export const pro = {
  header: {
    cta: "احجز الآن",
    whatsapp: "واتساب",
  },
  hero: {
    badge: "⭐ +5000 طالب",
    headline: "أتقن اللغة الإنجليزية خلال 6 أشهر",
    headlineAccent: "حتى لو كنت تبدأ من الصفر",
    subtitle: "برنامج مباشر مع أساتذة معتمدين ودعم يومي حتى تحقق هدفك.",
    ctaPrimary: "احجز مستواك مجانا",
    ctaSecondary: "شاهد الفيديو",
    reassurances: ["بدون عقد", "شهادة", "دعم مباشر"],
    image: "/general-hero.webp",
  },
  logos: ["British Council", "Cambridge", "TOEFL", "IELTS"],
  whyUs: {
    title: "لماذا لوغة؟",
    subtitle: "منصة تعليمية مصممة باش توصل للنتيجة بسرعة وثقة.",
    cards: [
      { icon: "GraduationCap", title: "مدرسون معتمدون", desc: "أساتذة دوليين بمعايير عالية" },
      { icon: "MonitorPlay", title: "أونلاين مباشر", desc: "حصص حية تفاعلية كل أسبوع" },
      { icon: "FileText", title: "ملفات PDF", desc: "50 ملف منظم للمراجعة" },
      { icon: "Users", title: "مجموعات صغيرة", desc: "متابعة أفضل وتفاعل أكثر" },
      { icon: "Target", title: "متابعة شخصية", desc: "فريق يواكب تقدمك يومياً" },
      { icon: "Award", title: "شهادة", desc: "شهادة بعد اجتياز الاختبارات" },
    ],
  },
  beforeAfter: {
    title: "قبل وبعد لوغة",
    subtitle: "الفرق كيبان فالثقة والتواصل اليومي.",
    before: {
      label: "قبل",
      items: ["تخاف من التحدث", "لا تفهم الأفلام", "أخطاء كثيرة"],
    },
    after: {
      label: "بعد",
      items: ["تتحدث بثقة", "تفهم المحادثات", "تتواصل بسهولة"],
    },
  },
  howItWorks: {
    title: "كيف يعمل البرنامج؟",
    subtitle: "4 خطوات واضحة من التسجيل حتى النجاح.",
    steps: [
      { title: "اختبار مجاني", desc: "نحدد مستواك الحالي" },
      { title: "تحديد المستوى", desc: "نختار المسار المناسب لك" },
      { title: "بداية الدراسة", desc: "حصص مباشرة ومتابعة" },
      { title: "النجاح", desc: "شهادة وثقة في التحدث" },
    ],
  },
  features: {
    title: "ماذا ستحصل عليه؟",
    subtitle: "كل ما تحتاجه فمسار واحد واضح.",
    items: [
      { value: "180", label: "يوم" },
      { value: "72", label: "حصة" },
      { value: "50", label: "PDF" },
      { value: "30", label: "ساعة Club" },
      { value: "50", label: "ساعة Live" },
      { value: "∞", label: "اختبارات" },
      { value: "✓", label: "شهادة" },
    ],
  },
  program: {
    title: "البرنامج الشهري",
    subtitle: "مسار 6 أشهر، خطوة بخطوة.",
    months: [
      { title: "الشهر 1", body: "الأساسيات، النطق، وبناء الثقة في التحدث البسيط." },
      { title: "الشهر 2", body: "المفردات اليومية والمحادثات القصيرة." },
      { title: "الشهر 3", body: "القواعد العملية والاستماع المكثف." },
      { title: "الشهر 4", body: "التحدث بطلاقة في مواقف حقيقية." },
      { title: "الشهر 5", body: "الكتابة، العروض، والتواصل المهني." },
      { title: "الشهر 6", body: "مراجعة شاملة، اختبارات نهائية، والشهادة." },
    ],
  },
  video: {
    title: "شوف الفرق بنفسك",
    subtitle: "أساتذة ونتائج حقيقية للمتعلمين.",
    items: [
      { title: "كلمة الأستاذ", image: "/general-hero.webp", label: "فيديو الأستاذ" },
      { title: "نجاح الطلاب", image: "/general-secondary.webp", label: "قصص النجاح" },
    ],
  },
  testimonials: {
    title: "آراء المتعلمين",
    subtitle: "ناس بدأو من الصفر ووصلو للثقة.",
    items: [
      { name: "Ahmed", rating: 5, quote: "كنت كنخاف نهضر… دابا كنقدر نتحاور فالخدمة بثقة." },
      { name: "Sara", rating: 5, quote: "الأساتذة والمتابعة اليومية هما اللي خلّاوني نكمل." },
      { name: "Youssef", rating: 5, quote: "فـ 6 أشهر حسّيت بالفرق فالفهم والتواصل." },
    ],
  },
  stats: [
    { value: 5000, suffix: "+", label: "Students" },
    { value: 96, suffix: "%", label: "Success" },
    { value: 4.9, suffix: "★", label: "Rating", decimals: 1 },
    { value: 12, suffix: "", label: "Teachers" },
  ],
  offer: {
    title: "عرض محدود هذا الأسبوع",
    original: "3500 DH",
    current: "1500 DH",
    note: "برنامج 6 أشهر كامل",
    cta: "احجز الآن",
  },
  bonus: {
    title: "بونوس مجاني مع التسجيل",
    items: [
      { title: "Club Speaking", desc: "تدريب على التحدث المباشر" },
      { title: "Conversation", desc: "محادثات مع متعلمين آخرين" },
      { title: "Private Group", desc: "مجموعة خاصة للمتابعة" },
      { title: "PDF", desc: "ملفات منظمة لكل مستوى" },
      { title: "Exercises", desc: "تمارين يومية للتثبيت" },
    ],
  },
  faq: {
    title: "الأسئلة الشائعة",
    items: [
      { q: "هل البرنامج مناسب للمبتدئين؟", a: "نعم، كتبدا باختبار مجاني وكنوجهوك من مستواك الحالي." },
      { q: "كم عدد الحصص في الأسبوع؟", a: "حصتين في الأسبوع، ساعة ونصف لكل حصة." },
      { q: "هل الدراسة أونلاين؟", a: "نعم، حصص مباشرة أونلاين مع أساتذة معتمدين." },
      { q: "هل هناك شهادة؟", a: "نعم، شهادة بعد اجتياز جميع الاختبارات." },
      { q: "هل يمكنني الدفع بالتقسيط؟", a: "نعم، تقدر تهضر مع المستشار على التسهيلات." },
      { q: "متى أبدأ؟", a: "بعد اختبار المستوى نحدد ليك أقرب فوج مناسب." },
      { q: "هل هناك نوادي تواصل؟", a: "نعم، Live Communication Club ونادي التواصل مع الأجانب." },
      { q: "ما الأجهزة المطلوبة؟", a: "هاتف أو حاسوب مع إنترنت مستقر وكاميرا اختيارية." },
      { q: "هل الاختبار مجاني؟", a: "نعم، اختبار تحديد المستوى مجاني 100%." },
      { q: "كيف أتواصل مع الدعم؟", a: "عبر واتساب أو نموذج الحجز، كنردو بسرعة." },
    ],
  },
  form: {
    title: "احجز مقعدك الآن",
    subtitle: "عمر المعلومات وكنرجعو ليك لتحديد موعد الاختبار.",
    fields: {
      fullName: { label: "الاسم الكامل", placeholder: "مثال: ياسين العلوي" },
      phone: { label: "رقم الهاتف", placeholder: "6XXXXXXXX" },
      age: { label: "العمر", placeholder: "مثال: 24" },
      city: { label: "المدينة", placeholder: "مثال: الدار البيضاء" },
      level: { label: "المستوى" },
    },
    submit: "احجز الآن",
  },
  guarantee: {
    title: "ضمانات لوغة",
    items: [
      { title: "Satisfaction", desc: "رضا المتعلمين أولويتنا" },
      { title: "Paiement sécurisé", desc: "أداء آمن وواضح" },
      { title: "Assistance", desc: "دعم مباشر عبر واتساب" },
    ],
  },
  footer: {
    contact: "تواصل معنا",
    address: "المغرب — دراسة عن بعد",
    rights: "جميع الحقوق محفوظة",
  },
} as const;

/** @deprecated kept for compatibility — use `pro` */
export const longForm = {
  mainTitle: pro.hero.headline,
  subBanner: pro.hero.subtitle,
  images: { hero: pro.hero.image, benefits: "/general-secondary.webp" },
  form: { header: pro.form.title, submit: pro.form.submit },
  featureBlocks: [],
  gallery: [],
  offers: {
    title: pro.offer.title,
    line1: pro.offer.note,
    line2: "",
    price: offer.price,
    cta: pro.offer.cta,
  },
} as const;

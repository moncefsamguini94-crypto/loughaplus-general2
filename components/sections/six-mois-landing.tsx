"use client";

import { useState } from "react";
import {
  AudioLines,
  Award,
  BadgeCheck,
  BookOpen,
  Bot,
  CalendarClock,
  ClipboardCheck,
  FileText,
  Gift,
  Loader2,
  MessagesSquare,
  RotateCw,
  Route,
  Target,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { getAttribution, track } from "@/lib/analytics";
import { normalizeMoroccanPhone, submitLead } from "@/lib/leads";
import { ENGLISH_LEVELS } from "@/lib/content";

const A = "/6mois";
const ICON_NAVY = "#0B1D6B";
const ICON_GOLD = "#C9A227";
const ICON_BLUE = ICON_NAVY;

type ProgramItem =
  | { text: string; Icon: LucideIcon; badge?: undefined }
  | { text: string; Icon: LucideIcon; badge: string };

const programItems: ProgramItem[] = [
  { text: "حصتين في الأسبوع", Icon: CalendarClock },
  { text: "برنامج لمدة 180 يومًا", Icon: Route },
  { text: "ساعة ونصف في الحصة", Icon: Timer },
  { text: "خمسون ساعة إضافية مجانية في : Live Communication Club", Icon: RotateCw, badge: "50" },
  { text: "ثلاثون ساعة إضافية مجانية في : نادي التواصل مع الأجانب", Icon: RotateCw, badge: "30" },
  { text: "سعر الاختبارات للانتقال من مستوى إلى مستوى آخر مجاني", Icon: Gift },
  { text: "خمسون ملف PDF دروس", Icon: FileText },
  { text: "شهادة بعد إجتياز جميع الإختبارات", Icon: BadgeCheck },
];

function ProgramIcon({ Icon, badge }: { Icon: LucideIcon; badge?: string }) {
  return (
    <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-md">
      {badge ? (
        <span className="relative flex size-9 items-center justify-center">
          <RotateCw
            className="absolute size-9"
            color={ICON_NAVY}
            strokeWidth={2}
            absoluteStrokeWidth
            aria-hidden
          />
          <span className="relative text-[13px] font-black leading-none" style={{ color: ICON_GOLD }}>
            {badge}
          </span>
        </span>
      ) : (
        <Icon className="size-7" color={ICON_NAVY} strokeWidth={2} absoluteStrokeWidth aria-hidden />
      )}
    </span>
  );
}

/** Premium Lucide icons — same card shell, icons only replaced */
const whyItems: { text: string; Icon: LucideIcon }[] = [
  { text: "أول معهد كي ركّز على التواصل والنطق بـ80% من البرنامج", Icon: MessagesSquare },
  { text: "أول معهد فالعالم العربي عندو 7 نوادي للتواصل المباشر", Icon: Bot },
  { text: "كنقراو حسب الهدف، العمر، والوقت المناسب ليك", Icon: Target },
  { text: "فريق خاص كيواكب الالتزام وحضور الحصص فالوقت", Icon: ClipboardCheck },
  { text: "أساتذة جامعيين أمريكيين كيضمنو منهجية التدريس عن بعد", Icon: BookOpen },
  { text: "أكثر من 100 أستاذ من مختلف أنحاء العالم", Icon: AudioLines },
  { text: "إمكانيات تدريس عن بعد بأحدث الطرق والأساليب", Icon: Award },
];

function RegisterForm({ id }: { id: string }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (fullName.trim().length < 2) {
      setError("كتب سمية صحيحة");
      return;
    }
    if (phone.replace(/\D/g, "").length < 9) {
      setError("رقم الهاتف غير صحيح");
      return;
    }
    if (!age.trim()) {
      setError("كتب العمر");
      return;
    }

    setStatus("loading");
    track("form_start");
    const attribution = getAttribution();
    const res = await submitLead({
      fullName: fullName.trim(),
      phone: normalizeMoroccanPhone(phone),
      level: ENGLISH_LEVELS[0],
      submittedAt: new Date().toISOString(),
      attribution: {
        ...attribution,
        utm_content: [attribution.utm_content, `age:${age.trim()}`].filter(Boolean).join("|"),
      },
    });

    if (res.ok) {
      track("lead_submit");
      setStatus("success");
    } else {
      setStatus("error");
      setError("وقع مشكل، عاود حاول من فضلك.");
    }
  };

  if (status === "success") {
    return (
      <div id={id} className="mx-4 my-6 rounded-2xl bg-white p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
        <p className="text-xl font-black text-[#001A57]">تسجلات بنجاح ✅</p>
        <p className="mt-2 text-gray-600">غادي نتواصلو معاك قريب باش نحدّدو موعد الاختبار.</p>
      </div>
    );
  }

  return (
    <div id={id} className="mx-4 my-6 overflow-hidden rounded-2xl bg-white text-center shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      {/* Navy curved header — matches mockup */}
      <div className="relative bg-[#001A57] px-6 pb-10 pt-7 text-lg font-black leading-relaxed text-white sm:text-xl">
        إحجز موعدك دابا لاختبار تحديد المستوى
        <svg
          className="pointer-events-none absolute inset-x-0 -bottom-px h-6 w-full text-white"
          viewBox="0 0 400 24"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0 0 Q200 24 400 0 L400 24 L0 24 Z" fill="currentColor" />
        </svg>
      </div>
      <form onSubmit={onSubmit} className="space-y-3 px-5 pb-5 pt-2" noValidate>
        <input
          className="w-full rounded-xl border-0 bg-[#F1F3F5] px-4 py-3.5 text-right font-bold text-gray-800 placeholder:font-semibold placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#001A57]/25"
          placeholder="الاسم الكامل — Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="w-full rounded-xl border-0 bg-[#F1F3F5] px-4 py-3.5 text-right font-bold text-gray-800 placeholder:font-semibold placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#001A57]/25"
          placeholder="رقم الهاتف — Phone number"
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="w-full rounded-xl border-0 bg-[#F1F3F5] px-4 py-3.5 text-right font-bold text-gray-800 placeholder:font-semibold placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#001A57]/25"
          placeholder="العمر — Age"
          inputMode="numeric"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {error ? <p className="text-sm font-bold text-red-500">{error}</p> : null}
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-1 w-full rounded-xl bg-[#001A57] px-14 py-4 text-xl font-black text-white shadow-md transition hover:bg-[#002266] disabled:opacity-70"
        >
          {status === "loading" ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="size-5 animate-spin" /> جاري…
            </span>
          ) : (
            "تسجيل"
          )}
        </button>
      </form>
    </div>
  );
}
function PriceBeside() {
  return (
    <div className="relative mx-4 mb-2 mt-8 grid grid-cols-5 items-center px-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${A}/polygon_gradient.v2.webp`}
        alt=""
        className="pointer-events-none absolute -start-2 -top-12 z-0 w-28 rotate-45 scale-125 opacity-80"
      />
      <h2 className="relative z-10 col-span-3 row-span-2 text-5xl font-black leading-none text-[#111]">
        6 أشهر
      </h2>
      <p className="relative z-10 col-span-2 text-2xl font-black text-green-600">1500 درهم</p>
      <p className="relative z-10 col-span-2 text-lg text-red-500 line-through">عوض 3500 درهم</p>
    </div>
  );
}

/** Dynamic offer card — gift sash -50% above the border */
function OfferSpecialCard({ navy }: { navy: string }) {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[430px] pt-5">
      {/* Gift sash — sits on top border, clearly visible */}
      <div className="offer-sash absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="offer-sash__band relative flex items-center justify-center px-4 py-1.5" dir="rtl" lang="ar">
          <span className="text-sm font-black leading-none tracking-tight">خصم 50٪</span>
        </div>
      </div>

      <div
        className="offer-card relative overflow-hidden rounded-2xl bg-white text-center shadow-[0_12px_40px_rgba(11,29,107,0.14)]"
        style={{ ["--offer-navy" as string]: navy }}
      >
        <div className="offer-card__glow pointer-events-none absolute inset-0" aria-hidden />
        <div className="offer-card__shimmer pointer-events-none absolute inset-0" aria-hidden />

        <div className="relative z-10 px-6 pb-7 pt-10">
          <p
            className="offer-card__title text-2xl font-black underline decoration-4 underline-offset-8"
            style={{ color: navy, textDecorationColor: navy }}
          >
            عرض خاص
          </p>
          <p className="mt-4 text-xl font-bold text-gray-700">6 أشهر</p>
          <p className="offer-card__price mt-2 text-4xl font-black text-[#00e09b]">1500 درهم</p>
          <p className="mt-2 text-lg font-bold text-[#e50000] line-through decoration-2">عوض 3500 درهم</p>
        </div>
      </div>
    </div>
  );
}

export function SixMoisLanding() {
  return (
    <div className="min-h-screen bg-[#F5F6FB] font-[family-name:var(--font-cairo)] text-[#111]" dir="rtl">
            {/* Header — full LOUGHA PLUS banner */}
      <header className="sticky top-0 z-40 w-full bg-[#001A57]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lougha-plus-header-banner.png"
          alt="LOUGHA PLUS +"
          className="block h-auto w-full"
          loading="eager"
          decoding="async"
        />
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center overflow-hidden bg-gradient-to-b from-transparent to-[rgba(11,29,107,0.18)]">
        <h1 className="mt-8 mb-8 px-4 text-center text-3xl font-black leading-tight">
          الإنجليزية مفتاح الفرص ديالك
          <br />
          و 6 أشهر كافية باش تبدّل المستوى
        </h1>
        <p className="mb-4 px-4 text-center text-lg leading-7 text-gray-700">
          مع LOUGHA PLUS كتقرا أونلاين مع أساتذة معتمدين من أمريكا وبريطانيا، فجوّ عملي كيخلي التواصل والنطق أولوية.
        </p>
        <p className="mb-2 px-4 text-center text-base leading-6 text-gray-400">
          استماع، تحدث، قراءة، كتابة، قواعد، نطق، ومفردات — برنامج واضح يوم بيوم حتى توصل للنتيجة.
        </p>
        <div className="cta-hero-wrap relative my-6 inline-flex">
          <span className="cta-hero-badge" aria-hidden>
            -50%
          </span>
          <a
            href="#form"
            className="cta-hero rounded-lg bg-[#0B1D6B] px-14 py-4 text-xl font-black text-white shadow-lg"
          >
            إشترك الآن
          </a>
        </div>

        {/* Hero portrait — centered stable 430×460 cutout */}
        <div className="hero-portrait relative mx-auto flex w-full max-w-[430px] items-end justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${A}/hero-model.v2.png?v=nobg3`}
            alt="LOUGHA PLUS"
            id="hero-model"
            width={430}
            height={460}
            decoding="async"
            fetchPriority="high"
            className="relative z-10 mx-auto block h-[460px] w-[430px] max-w-full select-none object-contain object-bottom"
            draggable={false}
          />
        </div>
      </section>

      {/* Offer banner */}
      <section className="relative overflow-hidden bg-white pb-8 pt-2 text-center">
        <div className="scroller mx-auto h-8 overflow-hidden text-lg font-bold">
          <div className="animate-[sixmois-scroll_4s_ease-in-out_infinite]">
            <span className="block h-8 leading-8">عرض خاص LOUGHA PLUS</span>
            <span className="block h-8 leading-8">بلايص محدودة — هذا الأسبوع فقط</span>
            <span className="block h-8 leading-8">عرض خاص LOUGHA PLUS</span>
          </div>
        </div>

        <div className="relative mx-auto mt-4 w-full max-w-[430px] px-4">
          <p className="relative z-10 mb-2 text-right text-xs font-bold text-gray-700">
            العرض محدود وعدد المقاعد قليل
          </p>
          <OfferSpecialCard navy="#0B1D6B" />
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${A}/program_2x.dbc1a19b.webp?v=books`}
          alt="برنامج LOUGHA PLUS"
          className="relative z-10 mx-auto mt-10 w-48"
        />
      </section>

      {/* Program features */}
      <section className="relative overflow-hidden px-2 pb-10 pt-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${A}/polygon_solid.49eb110b.webp`}
          alt=""
          className="pointer-events-none absolute -end-24 -top-8 w-48 opacity-70"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${A}/polygon_gradient.v2.webp`}
          alt=""
          className="pointer-events-none absolute -start-10 bottom-0 z-0 w-40 rotate-180 scale-[2] opacity-40"
        />
        <div className="relative z-10 mx-8 rounded-xl bg-white p-8 text-center text-3xl font-black leading-snug shadow-[0_25px_25px_rgba(0,0,0,0.15)]">
          مسار LOUGHA PLUS — 6 أشهر للنتيجة
        </div>
        <ul className="relative z-10 mx-auto mt-6 max-w-lg">
          {programItems.map((item) => (
            <li key={item.text} className="m-2 flex items-center gap-3 text-right font-bold">
              <ProgramIcon Icon={item.Icon} badge={item.badge} />
              <span className="flex-1 text-[15px] leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <PriceBeside />
      <RegisterForm id="form" />

      {/* Why us intro — matches mockup */}
      <section className="relative px-4 py-10 text-center">
        <h2 className="text-2xl font-black leading-relaxed">علاش الآلاف كايختارو LOUGHA PLUS؟</h2>
        <div className="relative mx-auto mt-8 max-w-sm rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${A}/forase_why_us.v2.webp`}
            alt="لماذا LOUGHA PLUS؟"
            className="mx-auto w-48"
          />
          <p className="mt-4 text-2xl font-black">لماذا LOUGHA PLUS؟</p>
        </div>
      </section>

      {/* Why us list */}
      <section className="relative overflow-hidden px-2 pb-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${A}/polygon_gradient.v2.webp`}
          alt=""
          className="pointer-events-none absolute -end-8 top-0 z-0 w-36 opacity-50"
        />
        <ul className="relative z-10 mx-auto max-w-lg">
          {whyItems.map((item) => (
            <li key={item.text} className="m-2 flex items-center gap-3 text-right font-bold">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white p-1 shadow-md">
                <item.Icon
                  className="size-7"
                  color={ICON_NAVY}
                  strokeWidth={2}
                  absoluteStrokeWidth
                  aria-hidden
                />
              </span>
              <span className="flex-1 text-[15px] leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <PriceBeside />
      <div className="px-4 pb-2 text-center">
        <a href="#form-bottom" className="inline-block w-full max-w-md rounded-lg bg-[#0B1D6B] px-8 py-4 text-xl font-black text-white shadow-lg">
          احجز مقعدك الآن
        </a>
      </div>
      <RegisterForm id="form-bottom" />

      <footer className="bg-[#EEF0F8] p-6 pb-28 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LOUGHA PLUS — جميع الحقوق محفوظة
      </footer>

      {/* Sticky red CTA — 430px wide */}
      <div className="cta-sticky-wrap pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2">
        <a
          href="#form"
          className="cta-sticky pointer-events-auto flex h-14 w-full max-w-[430px] items-center justify-center rounded-xl bg-[#E50000] text-lg font-black text-white shadow-[0_10px_28px_rgba(229,0,0,0.35)]"
        >
          إشترك دابا
        </a>
      </div>

      <style jsx global>{`
        @keyframes sixmois-scroll {
          0% { transform: translateY(0); }
          25% { transform: translateY(-2rem); }
          50% { transform: translateY(-2rem); }
          75% { transform: translateY(-4rem); }
          100% { transform: translateY(-4rem); }
        }
        @keyframes offer-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes offer-shimmer {
          0% { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
          20% { opacity: 0.55; }
          45% { opacity: 0.2; }
          100% { transform: translateX(140%) skewX(-18deg); opacity: 0; }
        }
        @keyframes offer-glow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        @keyframes offer-badge-pulse {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-2px) scale(1.03); }
        }
        @keyframes offer-price-pulse {
          0%, 100% { transform: scale(1); text-shadow: 0 0 0 transparent; }
          50% { transform: scale(1.04); text-shadow: 0 0 18px rgba(0, 224, 155, 0.45); }
        }
        .offer-card {
          animation: offer-float 3.6s ease-in-out infinite;
          border: 1px solid rgba(11, 29, 107, 0.08);
        }
        .offer-card__glow {
          background:
            radial-gradient(circle at 20% 20%, rgba(0, 224, 155, 0.16), transparent 42%),
            radial-gradient(circle at 85% 15%, rgba(201, 162, 39, 0.18), transparent 38%),
            radial-gradient(circle at 50% 100%, rgba(11, 29, 107, 0.08), transparent 50%);
          animation: offer-glow 2.8s ease-in-out infinite;
        }
        .offer-card__shimmer {
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(255, 255, 255, 0.55) 45%,
            transparent 70%
          );
          animation: offer-shimmer 3.2s ease-in-out infinite;
        }
        .offer-sash {
          animation: offer-badge-pulse 2s ease-in-out infinite;
          filter: drop-shadow(0 8px 14px rgba(229, 0, 0, 0.28));
        }
        .offer-sash__band {
          background: linear-gradient(
            105deg,
            #c40000 0%,
            #ff2a2a 28%,
            #ffffff 48%,
            #ffffff 52%,
            #ff2a2a 72%,
            #c40000 100%
          );
          clip-path: polygon(10px 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0 50%);
          min-width: 148px;
          color: #ffffff;
          text-shadow:
            0 0 2px #8f0000,
            0 1px 2px rgba(120, 0, 0, 0.55),
            0 0 8px rgba(255, 255, 255, 0.35);
        }
        .offer-sash__sep {
          background: rgba(255, 255, 255, 0.7);
        }
        .offer-card__price {
          animation: offer-price-pulse 2.2s ease-in-out infinite;
          display: inline-block;
        }
        @keyframes cta-soft-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 10px 20px rgba(11, 29, 107, 0.28); }
          50% { transform: scale(1.03); box-shadow: 0 12px 26px rgba(11, 29, 107, 0.4); }
        }
        @keyframes cta-sticky-soft {
          0%, 100% { transform: translateY(0); box-shadow: 0 10px 28px rgba(229, 0, 0, 0.32); }
          50% { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(229, 0, 0, 0.42); }
        }
        .cta-hero {
          animation: cta-soft-pulse 2.8s ease-in-out infinite;
          will-change: transform;
        }
        .cta-hero-wrap {
          isolation: isolate;
        }
        .cta-hero-badge {
          position: absolute;
          top: -0.65rem;
          left: -0.35rem;
          z-index: 2;
          min-width: 3.1rem;
          padding: 0.28rem 0.55rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 900;
          line-height: 1;
          color: #fff;
          letter-spacing: 0.02em;
          background: linear-gradient(
            105deg,
            #c40000 0%,
            #ff2a2a 32%,
            #ffffff 50%,
            #ff2a2a 68%,
            #c40000 100%
          );
          box-shadow: 0 6px 14px rgba(229, 0, 0, 0.35);
          text-shadow:
            0 0 2px #8f0000,
            0 1px 2px rgba(120, 0, 0, 0.55);
          transform: rotate(-8deg);
          animation: offer-badge-pulse 2s ease-in-out infinite;
        }
        .cta-sticky {
          animation: cta-sticky-soft 2.8s ease-in-out infinite;
          will-change: transform;
        }
        .hero-portrait {
          margin-inline: auto;
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-hero,
          .cta-hero-badge,
          .cta-sticky,
          .offer-card,
          .offer-sash,
          .offer-card__price {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

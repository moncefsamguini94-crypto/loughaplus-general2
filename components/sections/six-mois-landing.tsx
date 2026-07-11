"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { getAttribution, track } from "@/lib/analytics";
import { normalizeMoroccanPhone, submitLead } from "@/lib/leads";
import { ENGLISH_LEVELS } from "@/lib/content";

const A = "/6mois";

const programItems = [
  { text: "حصتين في الأسبوع", icon: `${A}/forase_session_schedule.74e10f4c.webp` },
  { text: "برنامج لمدة 180 يومًا", icon: `${A}/forase_program_timeline.be85da43.webp` },
  { text: "ساعة ونصف في الحصة", icon: `${A}/forase_session_duration.1a267e12.webp` },
  { text: "خمسون ساعة إضافية مجانية في : Live Communication Club", icon: `${A}/forase_plus_50h.b5f7cb7b.webp` },
  { text: "ثلاثون ساعة إضافية مجانية في : نادي التواصل مع الأجانب", icon: `${A}/forase_plus_30h.517e9b28.webp` },
  { text: "سعر الاختبارات للانتقال من مستوى إلى مستوى آخر مجاني", icon: `${A}/forase_free_test.e2bdbc87.webp` },
  { text: "خمسون ملف PDF دروس", icon: `${A}/forase_course_docs.0780c082.webp` },
  { text: "شهادة بعد إجتياز جميع الإختبارات", icon: `${A}/forase_certification.0d5e4b0f.webp` },
] as const;

const whyItems = [
  { text: "أول معهد يركز على التواصل والنطق بـ80% من برنامجه", icon: `${A}/forase_communication.f9f942f4.webp` },
  { text: "أول معهد في العالم العربي يمتلك 7 نوادي للتواصل المباشر", icon: `${A}/forase_clubs.b146e601.webp` },
  { text: "أول معهد يدرس على حسب الهدف والعمر والوقت المناسب للمتعلم", icon: `${A}/forase_flexible_env.7e570339.webp` },
  { text: "لدينا فريق خاص لمواكبة المتعلمين على الإلتزام وحضور حصصهم في الوقت", icon: `${A}/forase_support.33964325.webp` },
  { text: "لدينا فريق من أساتذة جامعيين أمريكيين لمواكبة منهجية التدريس عن بعد", icon: `${A}/forase_program.4a1edf9e.webp` },
  { text: "لدينا 100 أستاذ من مختلف أنحاء العالم", icon: `${A}/forase_glob_teachers.d955122e.webp` },
  { text: "لدينا إمكانيات التدريس عن بعد بأحدث الطرق والأساليب", icon: `${A}/forase_technologies.089099cc.webp` },
] as const;

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
      <div id={id} className="m-4 rounded-xl bg-white p-8 text-center shadow-lg">
        <p className="text-xl font-black text-[#000000]">تم التسجيل بنجاح ✅</p>
        <p className="mt-2 text-gray-600">غادي نتواصلو معاك قريب لتحديد موعد الاختبار.</p>
      </div>
    );
  }

  return (
    <div id={id} className="m-4 overflow-hidden rounded-xl bg-white text-center shadow-lg">
      <div
        className="bg-[#0B1D6B] px-6 py-6 text-xl font-black leading-relaxed text-white"
        style={{ clipPath: "ellipse(100% 150% at 50% -50%)" }}
      >
        إحجز موعدك الآن
        <br />
        لإختبار تحديد المستوى
      </div>
      <form onSubmit={onSubmit} className="space-y-2 p-4" noValidate>
        <input
          className="mb-1 w-full rounded border-0 bg-gray-100 px-3 py-3 font-bold outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="الاسم الكامل — Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="mb-1 w-full rounded border-0 bg-gray-100 px-3 py-3 font-bold outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="رقم الهاتف — Phone number"
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="mb-1 w-full rounded border-0 bg-gray-100 px-3 py-3 font-bold outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="العمر — Age"
          inputMode="numeric"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {error ? <p className="text-sm font-bold text-red-500">{error}</p> : null}
        <button
          type="submit"
          disabled={status === "loading"}
          className="mt-2 w-full rounded-lg bg-[#0B1D6B] px-14 py-4 text-xl font-black text-white shadow-lg disabled:opacity-70"
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

export function SixMoisLanding() {
  return (
    <div className="min-h-screen bg-[#F5F6FB] font-[family-name:var(--font-cairo)] text-[#111]" dir="rtl">
            {/* Header — full LOUGHA PLUS banner */}
      <header className="sticky top-0 z-40 w-full bg-[#001A57]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/lougha-plus-navy-banner.png"
          alt="LOUGHA PLUS +"
          className="mx-auto block h-auto w-full max-h-[110px] object-contain object-center sm:max-h-[140px]"
          loading="eager"
          decoding="async"
        />
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center overflow-hidden bg-gradient-to-b from-transparent to-[rgba(11,29,107,0.18)]">
        <h1 className="mt-8 mb-8 px-4 text-center text-3xl font-black leading-tight">
          الدراسة عن بعد أسهل مما تظن
          <br />
          وأنت حاليا على المسار الصحيح
        </h1>
        <p className="mb-4 px-4 text-center text-lg leading-7 text-gray-700">
          مدرسين معتمدين من قبل المعاهد الأمريكية و البريطانية، مما يعني أنك ستتعلم في بيئة غنية بالثقافات و اللهجات المختلفة.
        </p>
        <p className="mb-2 px-4 text-center text-base leading-6 text-gray-400">
          يغطي منهجنا الفريد كل شيء من الإستماع و التحدث و القراءة والكتابة إلى القواعد وممارسة النطق وبناء المفردات والثقافة
        </p>
        <a
          href="#form"
          className="my-6 rounded-lg bg-[#0B1D6B] px-14 py-4 text-xl font-black text-white shadow-lg"
        >
          إشترك الآن
        </a>
      </section>

      {/* Offer banner */}
      <section className="relative overflow-hidden bg-white pb-8 pt-2 text-center">
        <div className="scroller mx-auto h-8 overflow-hidden text-lg font-bold">
          <div className="animate-[sixmois-scroll_4s_ease-in-out_infinite]">
            <span className="block h-8 leading-8">هذا الأسبوع فقط</span>
            <span className="block h-8 leading-8">أفضل برنامج لتعلم اللغة الإنجليزية</span>
            <span className="block h-8 leading-8">هذا الأسبوع فقط</span>
          </div>
        </div>

        <div className="relative mx-auto mt-4 max-w-md px-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${A}/price_stack.ae33ff54.webp`}
            alt="50%"
            className="absolute -start-2 top-8 z-0 w-36 -translate-x-4 scale-110 md:w-44"
          />
          <p className="relative z-10 mb-2 text-right text-xs font-bold text-gray-700">
            عرض محدود و عدد المقاعد محدودة
          </p>
          <div className="relative z-10 ms-auto w-[70%] rounded-2xl bg-white p-5 text-center shadow-xl">
            <p className="text-2xl font-bold text-[#0B1D6B] underline decoration-[#0B1D6B] underline-offset-4">
              عرض خاص
            </p>
            <p className="mt-2 text-xl font-bold text-gray-700">6 أشهر</p>
            <p className="mt-1 text-3xl font-black text-[#C9A227]">1500 درهم</p>
            <p className="mt-1 text-xl font-bold text-[#e50000] line-through">عوض 3500 درهم</p>
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${A}/program_2x.dbc1a19b.webp`}
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
          برنامج LOUGHA PLUS لستة أشهر
        </div>
        <ul className="relative z-10 mx-auto mt-6 max-w-lg">
          {programItems.map((item) => (
            <li key={item.text} className="m-2 flex flex-row-reverse items-center gap-3 text-right font-bold">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" className="size-14 shrink-0 rounded-xl bg-white p-1 shadow-md" />
              <span className="flex-1 text-[15px] leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <PriceBeside />
      <RegisterForm id="form" />

      {/* Why us intro */}
      <section className="relative px-4 py-10 text-center">
        <h2 className="text-2xl font-black">نقدم لكم برامج وأجواء خاصة للتعلم</h2>
        <div className="relative mx-auto mt-8 max-w-sm rounded-xl bg-white p-8 shadow-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${A}/forase_why_us.v2.webp`} alt="لماذا نحن" className="mx-auto w-40" />
          <p className="mt-4 text-2xl font-black">لماذا نحن ؟ 🤔</p>
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
            <li key={item.text} className="m-2 flex flex-row-reverse items-center gap-3 text-right font-bold">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.icon} alt="" className="size-14 shrink-0 rounded-xl bg-white p-1 shadow-md" />
              <span className="flex-1 text-[15px] leading-relaxed">{item.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <PriceBeside />
      <div className="px-4 pb-2 text-center">
        <a href="#form-bottom" className="inline-block w-full max-w-md rounded-lg bg-[#0B1D6B] px-8 py-4 text-xl font-black text-white shadow-lg">
          إحجز مقعدك الآن
        </a>
      </div>
      <RegisterForm id="form-bottom" />

      <footer className="bg-[#EEF0F8] p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LOUGHA PLUS — جميع الحقوق محفوظة
      </footer>

      <style jsx global>{`
        @keyframes sixmois-scroll {
          0% { transform: translateY(0); }
          25% { transform: translateY(-2rem); }
          50% { transform: translateY(-2rem); }
          75% { transform: translateY(-4rem); }
          100% { transform: translateY(-4rem); }
        }
      `}</style>
    </div>
  );
}

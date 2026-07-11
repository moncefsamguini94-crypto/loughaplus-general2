"use client";

import { useEffect, useRef, useState } from "react";
import {
  Award,
  Check,
  ChevronDown,
  Facebook,
  FileText,
  Gift,
  GraduationCap,
  Instagram,
  MonitorPlay,
  Play,
  ShieldCheck,
  Target,
  Users,
  X,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "@/components/shared/logo";
import { Reveal } from "@/components/shared/reveal";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Countdown } from "@/components/sections/countdown";
import { ProLeadForm } from "@/components/sections/pro-form";
import { pro, site } from "@/lib/content";
import { buildWhatsAppLink, cn } from "@/lib/utils";

const whyIcons = {
  GraduationCap,
  MonitorPlay,
  FileText,
  Users,
  Target,
  Award,
} as const;

function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-l from-[#1E88E5] to-[#00B8FF] transition-[width] duration-150"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

function ProHeader() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "السلام، بغيت نحجز اختبار المستوى مع لوغة.",
  );
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-white/80 backdrop-blur-xl">
      <div className="pro-container flex h-16 items-center justify-between md:h-[72px]">
        <a href="#" aria-label="LOUGHA PLUS">
          <Logo size="sm" />
        </a>
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-md transition hover:scale-105"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="size-5" />
          </a>
          <a href="#form" className="pro-btn-primary !min-h-11 !px-5 !text-[14px] md:!min-h-12 md:!px-6 md:!text-[15px]">
            {pro.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pro-gradient-hero relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="pro-container grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <span className="pro-eyebrow">{pro.hero.badge}</span>
          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.2] text-[#111827] md:text-[48px]">
            {pro.hero.headline}
            <span className="mt-2 block text-[#1E88E5]">{pro.hero.headlineAccent}</span>
          </h1>
          <p className="mt-5 max-w-xl text-[17px] font-medium leading-relaxed text-[#6B7280] md:text-[19px]">
            {pro.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#form" className="pro-btn-primary">
              <span className="text-[#6EDC3D]">●</span>
              {pro.hero.ctaPrimary}
            </a>
            <a href="#video" className="pro-btn-secondary">
              <Play className="size-5" />
              {pro.hero.ctaSecondary}
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
            {pro.hero.reassurances.map((item) => (
              <li key={item} className="inline-flex items-center gap-2 text-[14px] font-bold text-[#111827]">
                <Check className="size-4 text-[#6EDC3D]" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <div className="pro-glass overflow-hidden p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={pro.hero.image}
              alt="طالب لوغة"
              className="aspect-[4/3] w-full rounded-[20px] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 start-4 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_rgba(17,24,39,0.12)] md:start-8">
            <p className="text-[13px] font-bold text-[#1E88E5]">+5000 طالب</p>
            <p className="text-[12px] font-medium text-[#6B7280]">يثقون بلوغة</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function LogosSection() {
  return (
    <section className="border-y border-[#E5E7EB] bg-white py-10">
      <div className="pro-container">
        <p className="mb-6 text-center text-[13px] font-bold uppercase tracking-wide text-[#9CA3AF]">
          معايير عالمية
        </p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {pro.logos.map((name) => (
            <div
              key={name}
              className="flex h-16 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] text-[14px] font-extrabold text-[#6B7280] md:text-[16px]"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="pro-section pro-gradient-soft">
      <div className="pro-container">
        <Reveal>
          <h2 className="pro-h2">{pro.whyUs.title}</h2>
          <p className="pro-sub">{pro.whyUs.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pro.whyUs.cards.map((card, i) => {
            const Icon = whyIcons[card.icon as keyof typeof whyIcons];
            return (
              <Reveal key={card.title} delay={i * 0.05}>
                <div className="pro-card h-full p-6">
                  <div className="pro-icon-wrap">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-[18px] font-extrabold text-[#111827]">{card.title}</h3>
                  <p className="mt-2 text-[14px] font-medium text-[#6B7280]">{card.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  return (
    <section className="pro-section bg-white">
      <div className="pro-container">
        <Reveal>
          <h2 className="pro-h2">{pro.beforeAfter.title}</h2>
          <p className="pro-sub">{pro.beforeAfter.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[24px] border border-red-100 bg-red-50/60 p-7">
              <p className="text-[15px] font-extrabold text-red-500">{pro.beforeAfter.before.label}</p>
              <ul className="mt-5 space-y-4">
                {pro.beforeAfter.before.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-semibold text-[#111827]">
                    <span className="flex size-8 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <X className="size-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[24px] border border-emerald-100 bg-emerald-50/70 p-7">
              <p className="text-[15px] font-extrabold text-emerald-600">{pro.beforeAfter.after.label}</p>
              <ul className="mt-5 space-y-4">
                {pro.beforeAfter.after.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[16px] font-semibold text-[#111827]">
                    <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <Check className="size-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="pro-section bg-[#F8FAFC]">
      <div className="pro-container">
        <Reveal>
          <h2 className="pro-h2">{pro.howItWorks.title}</h2>
          <p className="pro-sub">{pro.howItWorks.subtitle}</p>
        </Reveal>
        <div className="mx-auto mt-12 max-w-2xl space-y-0">
          {pro.howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="relative flex gap-4 pb-10 last:pb-0">
                {i < pro.howItWorks.steps.length - 1 ? (
                  <span className="absolute start-[23px] top-12 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#1E88E5] to-[#00B8FF]" />
                ) : null}
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#1E88E5] text-[16px] font-extrabold text-white shadow-[0_8px_20px_rgba(30,136,229,0.35)]">
                  {i + 1}
                </div>
                <div className="pro-card flex-1 p-5">
                  <h3 className="text-[18px] font-extrabold text-[#111827]">{step.title}</h3>
                  <p className="mt-1 text-[14px] font-medium text-[#6B7280]">{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="pro-section bg-white">
      <div className="pro-container">
        <Reveal>
          <h2 className="pro-h2">{pro.features.title}</h2>
          <p className="pro-sub">{pro.features.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {pro.features.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.04}>
              <div className="pro-card flex h-full flex-col items-center justify-center p-5 text-center">
                <p className="text-[28px] font-extrabold text-[#1E88E5] md:text-[32px]">{item.value}</p>
                <p className="mt-1 text-[13px] font-bold text-[#6B7280]">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramSection() {
  return (
    <section className="pro-section bg-[#F8FAFC]">
      <div className="pro-container max-w-3xl">
        <Reveal>
          <h2 className="pro-h2">{pro.program.title}</h2>
          <p className="pro-sub">{pro.program.subtitle}</p>
        </Reveal>
        <Reveal className="mt-10">
          <div className="pro-card overflow-hidden px-2">
            <Accordion type="single" collapsible defaultValue="m0">
              {pro.program.months.map((m, i) => (
                <AccordionItem key={m.title} value={`m${i}`} className="border-[#E5E7EB] px-4">
                  <AccordionTrigger className="text-[#111827] hover:text-[#1E88E5]">
                    {m.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] font-medium text-[#6B7280]">
                    {m.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section id="video" className="pro-section scroll-mt-24 bg-white">
      <div className="pro-container">
        <Reveal>
          <h2 className="pro-h2">{pro.video.title}</h2>
          <p className="pro-sub">{pro.video.subtitle}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pro.video.items.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <a href="#form" className="pro-card group relative block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.image} alt={v.label} className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-[#111827]/35">
                  <span className="flex size-16 items-center justify-center rounded-full bg-white text-[#1E88E5] shadow-xl transition group-hover:scale-110">
                    <Play className="ms-1 size-7 fill-current" />
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111827]/80 to-transparent p-5">
                  <p className="text-[16px] font-extrabold text-white">{v.title}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="pro-section bg-[#F8FAFC]">
      <div className="pro-container">
        <Reveal>
          <h2 className="pro-h2">{pro.testimonials.title}</h2>
          <p className="pro-sub">{pro.testimonials.subtitle}</p>
        </Reveal>
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {pro.testimonials.items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06} className="w-[85%] shrink-0 snap-center sm:w-[45%] lg:w-[32%]">
              <article className="pro-card h-full p-6">
                <p className="text-[#FFC107]">{"★".repeat(t.rating)}</p>
                <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#374151]">“{t.quote}”</p>
                <p className="mt-5 text-[15px] font-extrabold text-[#111827]">{t.name}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function useCountUp(target: number, decimals = 0, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Number((target * eased).toFixed(decimals)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, decimals, active]);
  return value;
}

function StatItem({
  value,
  suffix,
  label,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const n = useCountUp(value, decimals, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="pro-glass p-6 text-center">
      <p className="text-[36px] font-extrabold text-white md:text-[44px]">
        {decimals ? n.toFixed(decimals) : Math.round(n)}
        {suffix}
      </p>
      <p className="mt-1 text-[14px] font-bold text-white/80">{label}</p>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="pro-section pro-gradient-offer">
      <div className="pro-container grid grid-cols-2 gap-4 md:grid-cols-4">
        {pro.stats.map((s) => (
          <StatItem
            key={s.label}
            value={s.value}
            suffix={s.suffix}
            label={s.label}
            decimals={"decimals" in s ? s.decimals : 0}
          />
        ))}
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section id="offer" className="pro-section scroll-mt-24 bg-white">
      <div className="pro-container max-w-xl">
        <Reveal>
          <div className="pro-card overflow-hidden p-8 text-center md:p-10">
            <span className="inline-flex rounded-full bg-[#FFC107]/20 px-4 py-1.5 text-[13px] font-extrabold text-[#B45309]">
              {pro.offer.title}
            </span>
            <p className="mt-6 text-[28px] font-bold text-[#9CA3AF] line-through">{pro.offer.original}</p>
            <ChevronDown className="mx-auto my-2 size-6 text-[#1E88E5]" />
            <p className="text-[52px] font-extrabold leading-none text-[#1E88E5] md:text-[64px]">
              {pro.offer.current}
            </p>
            <p className="mt-3 text-[15px] font-semibold text-[#6B7280]">{pro.offer.note}</p>
            <div className="mt-8">
              <Countdown />
            </div>
            <a href="#form" className="pro-btn-primary mt-8 w-full">
              {pro.offer.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BonusSection() {
  return (
    <section className="pro-section bg-[#F8FAFC]">
      <div className="pro-container">
        <Reveal>
          <h2 className="pro-h2">{pro.bonus.title}</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pro.bonus.items.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="pro-card h-full p-5 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#FFC107]/20 text-[#B45309]">
                  <Gift className="size-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-[16px] font-extrabold text-[#111827]">{b.title}</h3>
                <p className="mt-2 text-[13px] font-medium text-[#6B7280]">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="pro-section bg-white">
      <div className="pro-container max-w-3xl">
        <Reveal>
          <h2 className="pro-h2">{pro.faq.title}</h2>
        </Reveal>
        <Reveal className="mt-10">
          <div className="pro-card overflow-hidden px-2">
            <Accordion type="single" collapsible>
              {pro.faq.items.map((item, i) => (
                <AccordionItem key={item.q} value={`f${i}`} className="border-[#E5E7EB] px-4">
                  <AccordionTrigger className="text-start text-[16px] text-[#111827] hover:text-[#1E88E5]">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] font-medium leading-relaxed text-[#6B7280]">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FormSection() {
  return (
    <section id="form" className="pro-section scroll-mt-24 bg-[#F8FAFC]">
      <div className="pro-container max-w-xl">
        <Reveal>
          <h2 className="pro-h2">{pro.form.title}</h2>
          <p className="pro-sub">{pro.form.subtitle}</p>
        </Reveal>
        <Reveal className="mt-10">
          <div className="pro-card p-6 md:p-8">
            <ProLeadForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function GuaranteeSection() {
  return (
    <section className="pb-20 md:pb-[7.5rem]">
      <div className="pro-container grid gap-4 md:grid-cols-3">
        {pro.guarantee.items.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="pro-glass flex items-start gap-3 p-5">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-[#6EDC3D]" />
              <div>
                <p className="text-[15px] font-extrabold text-[#111827]">{g.title}</p>
                <p className="mt-1 text-[13px] font-medium text-[#6B7280]">{g.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProFooter() {
  const wa = buildWhatsAppLink(site.whatsappPhone, "السلام، بغيت معلومات على برنامج لوغة.");
  return (
    <footer className="bg-[#111827] text-white">
      <div className="pro-container grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Logo size="sm" />
          <p className="mt-4 text-[14px] font-medium text-white/70">{pro.footer.contact}</p>
          <p className="mt-1 text-[13px] text-white/50">{pro.footer.address}</p>
        </div>
        <div className="flex flex-col gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 hover:text-white">
            <WhatsAppIcon className="size-4" /> WhatsApp
          </a>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 hover:text-white">
            <Instagram className="size-4" /> Instagram
          </a>
          <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/80 hover:text-white">
            <Facebook className="size-4" /> Facebook
          </a>
        </div>
        <div className="md:text-end">
          <a href="#form" className="pro-btn-gold !min-h-12 !text-[14px]">
            {pro.header.cta}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 pb-24 md:pb-0">
        <p className="pro-container py-5 text-center text-[12px] text-white/40">
          © {new Date().getFullYear()} {site.name} · {pro.footer.rights}
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  const wa = buildWhatsAppLink(
    site.whatsappPhone,
    "السلام، بغيت نحجز اختبار المستوى مع لوغة.",
  );
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={cn(
        "fixed bottom-24 end-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition hover:scale-110 md:bottom-8 md:end-8",
      )}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}

function StickyMobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E5E7EB] bg-white/95 p-3 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a href="#form" className="pro-btn-primary w-full">
        {pro.header.cta}
      </a>
    </div>
  );
}

export function ProLanding() {
  return (
    <>
      <ScrollProgress />
      <ProHeader />
      <main>
        <HeroSection />
        <LogosSection />
        <WhyUsSection />
        <BeforeAfterSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ProgramSection />
        <VideoSection />
        <TestimonialsSection />
        <StatsSection />
        <OfferSection />
        <BonusSection />
        <FaqSection />
        <FormSection />
        <GuaranteeSection />
      </main>
      <ProFooter />
      <FloatingWhatsApp />
      <StickyMobileCta />
    </>
  );
}

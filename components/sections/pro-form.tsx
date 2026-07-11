"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Check, Loader2, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { confirmation, ENGLISH_LEVELS, pro, site } from "@/lib/content";
import { getAttribution, track } from "@/lib/analytics";
import {
  normalizeMoroccanPhone,
  submitLead,
  type LeadAttribution,
} from "@/lib/leads";
import { buildWhatsAppLink, cn } from "@/lib/utils";

type Errors = Partial<Record<"fullName" | "phone" | "age" | "city" | "level", string>>;

export function ProLeadForm() {
  const started = useRef(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [level, setLevel] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const [attribution, setAttribution] = useState<LeadAttribution>({});

  useEffect(() => {
    setAttribution(getAttribution());
    track("form_view");
  }, []);

  const markStarted = () => {
    if (!started.current) {
      started.current = true;
      track("form_start");
    }
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (fullName.trim().length < 2) next.fullName = "كتب سمية صحيحة";
    if (phone.replace(/\D/g, "").length < 9) next.phone = "رقم الهاتف غير صحيح";
    if (!age.trim() || Number(age) < 10 || Number(age) > 80) next.age = "العمر غير صحيح";
    if (city.trim().length < 2) next.city = "كتب المدينة";
    if (!level) next.level = "اختار المستوى";
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      track("form_error", { fields: Object.keys(found) });
      return;
    }

    setStatus("loading");
    setSubmitError("");

    const res = await submitLead({
      fullName: fullName.trim(),
      phone: normalizeMoroccanPhone(phone),
      level: level as (typeof ENGLISH_LEVELS)[number],
      submittedAt: new Date().toISOString(),
      attribution: {
        ...attribution,
        utm_content: [attribution.utm_content, `age:${age.trim()}`, `city:${city.trim()}`]
          .filter(Boolean)
          .join("|"),
      },
    });

    if (res.ok) {
      track("lead_submit", { level });
      setStatus("success");
    } else {
      track("lead_error", { error: res.error });
      setStatus("error");
      setSubmitError("وقع مشكل، عاود حاول من فضلك.");
    }
  };

  if (status === "success") {
    return <SuccessPanel name={fullName.trim()} />;
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field label={pro.form.fields.fullName.label} htmlFor="pro-name" error={errors.fullName}>
        <Input
          id="pro-name"
          value={fullName}
          placeholder={pro.form.fields.fullName.placeholder}
          hasError={!!errors.fullName}
          onChange={(e) => {
            markStarted();
            setFullName(e.target.value);
            setErrors((p) => ({ ...p, fullName: undefined }));
          }}
        />
      </Field>

      <Field label={pro.form.fields.phone.label} htmlFor="pro-phone" error={errors.phone}>
        <div className="flex items-stretch gap-2" dir="ltr">
          <span className="flex items-center rounded-2xl border border-input bg-[#F8FAFC] px-3 text-[14px] font-medium text-[#6B7280]">
            🇲🇦 +212
          </span>
          <Input
            id="pro-phone"
            type="tel"
            inputMode="numeric"
            value={phone}
            placeholder={pro.form.fields.phone.placeholder}
            hasError={!!errors.phone}
            className="text-start"
            onChange={(e) => {
              markStarted();
              setPhone(e.target.value);
              setErrors((p) => ({ ...p, phone: undefined }));
            }}
          />
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={pro.form.fields.age.label} htmlFor="pro-age" error={errors.age}>
          <Input
            id="pro-age"
            type="number"
            inputMode="numeric"
            value={age}
            placeholder={pro.form.fields.age.placeholder}
            hasError={!!errors.age}
            onChange={(e) => {
              markStarted();
              setAge(e.target.value);
              setErrors((p) => ({ ...p, age: undefined }));
            }}
          />
        </Field>
        <Field label={pro.form.fields.city.label} htmlFor="pro-city" error={errors.city}>
          <Input
            id="pro-city"
            value={city}
            placeholder={pro.form.fields.city.placeholder}
            hasError={!!errors.city}
            onChange={(e) => {
              markStarted();
              setCity(e.target.value);
              setErrors((p) => ({ ...p, city: undefined }));
            }}
          />
        </Field>
      </div>

      <div>
        <Label className="mb-2 block text-[14px] font-bold text-[#111827]">
          {pro.form.fields.level.label}
        </Label>
        <div className="flex flex-wrap gap-2">
          {ENGLISH_LEVELS.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                markStarted();
                setLevel(opt);
                setErrors((p) => ({ ...p, level: undefined }));
              }}
              className={cn(
                "rounded-2xl border px-4 py-2.5 text-[14px] font-bold transition",
                level === opt
                  ? "border-[#1E88E5] bg-[#1E88E5] text-white"
                  : "border-[#E5E7EB] bg-white text-[#111827] hover:border-[#1E88E5]",
              )}
            >
              {opt}
            </button>
          ))}
        </div>
        {errors.level ? (
          <p className="mt-2 text-[13px] font-medium text-destructive">{errors.level}</p>
        ) : null}
      </div>

      {submitError ? (
        <p className="flex items-center gap-2 rounded-2xl bg-destructive/10 px-4 py-3 text-[14px] font-medium text-destructive" role="alert">
          <AlertCircle className="size-4" />
          {submitError}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="pro-btn-primary mt-2 w-full !rounded-2xl"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            جاري الإرسال…
          </>
        ) : (
          pro.form.submit
        )}
      </Button>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12px] text-[#6B7280]">
        {["بدون أداء دابا", "رد سريع", "اختبار مجاني"].map((r) => (
          <li key={r} className="inline-flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-[#6EDC3D]" />
            {r}
          </li>
        ))}
      </ul>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="mb-2 block text-[14px] font-bold text-[#111827]">
        {label}
      </Label>
      {children}
      {error ? <p className="mt-2 text-[13px] font-medium text-destructive">{error}</p> : null}
    </div>
  );
}

function SuccessPanel({ name }: { name: string }) {
  const reduce = useReducedMotion();
  const wa = buildWhatsAppLink(site.whatsappPhone, confirmation.whatsappPrefill);
  return (
    <div className="py-6 text-center" role="status">
      <motion.span
        initial={{ scale: reduce ? 1 : 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#6EDC3D]/20 text-[#16A34A]"
      >
        <Check className="size-8" />
      </motion.span>
      <h3 className="mt-4 text-[22px] font-extrabold text-[#111827]">تم التسجيل بنجاح</h3>
      <p className="mt-2 text-[15px] font-medium text-[#6B7280]">
        شكراً {name} — غادي نتواصلو معاك قريب لتحديد موعد الاختبار.
      </p>
      <a href={wa} target="_blank" rel="noopener noreferrer" className="pro-btn-primary mt-6 inline-flex">
        <WhatsAppIcon className="size-5" />
        تواصل فواتساب
      </a>
    </div>
  );
}

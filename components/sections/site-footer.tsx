import { Facebook, Instagram, Music2 } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { footer, site } from "@/lib/content";

const socials = [
  { href: site.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: site.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: site.socials.tiktok, label: "TikTok", Icon: Music2 },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0D0B3D] text-white">
      <div className="container flex flex-col items-center gap-4 px-4 py-8 text-center md:flex-row md:justify-between md:text-start">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Logo />
          <p className="text-[14px] font-medium text-white/85">{footer.tagline}</p>
          <p className="text-[12px] text-white/55">{site.privacyNote}</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-[#F5C04A] hover:text-[#0D0B3D]"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 pb-24 md:pb-0">
        <p className="container py-4 text-center text-[12px] text-white/45">
          © {new Date().getFullYear()} {site.name} · {footer.rights}
        </p>
      </div>
    </footer>
  );
}

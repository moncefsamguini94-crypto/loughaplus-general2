import type { Metadata, Viewport } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import { Analytics } from "@/components/shared/analytics";
import { seo, site } from "@/lib/content";
import "./globals.css";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "معهد لوغة — LOUGHA PLUS — General 2",
    template: `%s · ${site.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.baseUrl,
    siteName: site.name,
    title: "معهد لوغة — LOUGHA PLUS — General 2",
    description: seo.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={kufi.variable}>
      <body className="bg-[#FCFEFF] font-sans text-[#111]">
        <Analytics />
        {children}
      </body>
    </html>
  );
}

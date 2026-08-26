import type { Metadata } from "next";
import "@/app/css/style.css";
import LenisProvider from "@/components/home/LenisProvider";
import AmbientBackground from "@/components/home/AmbientBackground";
import Navbar from "@/components/home/Navbar";
import { constructMetadata } from "@/utils/metadata";
import JsonLd from "@/components/seo/JsonLd";

/**
 * Public-facing layout metadata.
 *
 * This overrides the root layout metadata for the (public) route group.
 * It must stay consistent with the root applicationName / og:site_name
 * so Google sees a single canonical site name across all signals.
 */
export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "الملكية للاستثمار | Almalakiyah Investment",
    description:
      "شريكك الموثوق للاستثمار والتطوير العقاري والسياحي في سلطنة عُمان. " +
      "Your trusted partner for premium real estate, tourism, and technology investments in the Sultanate of Oman.",
    path: "/",
    keywords: [
      "Almalakiyah Investment",
      "الملكية للاستثمار",
      "Al Malakiyah",
      "Oman real estate investment",
      "عقارات عمان",
      "استثمار سياحي",
      "Tourism investment Oman",
      "Luxury real estate Oman",
      "شركة استثمار عمانية",
      "مشاريع استثمارية عمان",
    ],
  });
}

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`public-layout-wrapper bg-site min-h-screen relative`}>
      {/* Structured data: rendered once at the layout level for all public pages */}
      <JsonLd />
      <AmbientBackground />

      {/* Luxury Cursor */}
      <div className="luxury-cursor pointer-events-none fixed z-[999]"></div>

      <LenisProvider>
        <Navbar />
        {/* Page Content */}
        {children}
      </LenisProvider>
    </div>
  );
}

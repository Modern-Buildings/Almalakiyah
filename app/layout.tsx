import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";
import { SITE_NAME, SITE_NAME_AR, BASE_URL } from "@/utils/metadata";

const fontAr = localFont({
  src: "../public/assets/fonts/Milan-Display-Black.otf",
  variable: "--font-ar",
  display: "swap",
});

const fontEn = localFont({
  src: "../public/assets/fonts/abeatbyKai-Regular.otf",
  variable: "--font-en",
  display: "swap",
});

import { LanguageProvider } from "@/context/LanguageContext";

/**
 * Root layout metadata — applies to every route unless overridden.
 *
 * Why these fields matter for Google site name recognition:
 * • title.default    → fallback title for pages that don't set their own
 * • title.template   → ensures consistent brand suffix on all child titles
 * • applicationName  → Google's preferred signal for the site name in search
 * • metadataBase     → required for Next.js to resolve relative OG image URLs
 */
export const metadata: Metadata = {
  metadataBase:    new URL(BASE_URL),
  applicationName: SITE_NAME,

  title: {
    default:  `${SITE_NAME} | ${SITE_NAME_AR}`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Your trusted partner for premium real estate, tourism, and technology investments in the Sultanate of Oman — " +
    "شريكك الموثوق للاستثمار والتطوير العقاري والسياحي في سلطنة عُمان",

  keywords: [
    "Almalakiyah Investment",
    "الملكية للاستثمار",
    "Al Malakiyah",
    "Oman real estate",
    "استثمار عمان",
    "تطوير عقاري عمان",
    "Oman investment",
    "Tourism investment Oman",
    "Luxury real estate Oman",
  ],

  // og:site_name is the primary Open Graph signal for Google site name.
  openGraph: {
    siteName: SITE_NAME,
    type:     "website",
    locale:   "ar_OM",
    url:      BASE_URL,
  },

  // Explicit robots directive at root level.
  robots: {
    index:    true,
    follow:   true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${fontAr.variable} ${fontEn.variable}`}
    >
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/img/favicon.png" type="image/png" />
        {/* Explicit canonical brand signal for older crawlers */}
        <meta name="application-name" content={SITE_NAME} />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

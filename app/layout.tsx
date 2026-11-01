import type { Metadata } from "next";
import { Zain } from "next/font/google";
import "./css/main.css";
import "./css/style.css";
import { LanguageProvider } from "@/context/LanguageContext";

const zain = Zain({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800", "900"],
  variable: "--font-zain",
  display: "swap",
});

export const metadata: Metadata = {
  title: "الملكية العقارية | Almalakiyah Real Estate",
  description: "شركة الملكية العقارية للاستثمار والتطوير العقاري",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={zain.variable}>
      <body className="font-zain antialiased bg-[#090D16] text-white selection:bg-[#C9A050] selection:text-black">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
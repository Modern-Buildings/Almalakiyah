import type { Metadata } from "next";
import "@/app/css/admin.css";

import { constructMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "روابط الملكية للاستثمار - Al Malakiyah Links",
    description: "تواصل مع شركة الملكية للاستثمار. استكشف قنوات التواصل الرسمية، وحساباتنا على منصات التواصل الاجتماعي. Connect with Al Malakiyah Investment.",
    path: "/links",
  });
}

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://almalakiyah.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "روابط الملكية",
        "item": "https://almalakiyah.com/links"
      }
    ]
  };

  return (
    <div className="admin-root" lang="ar" dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخريطة التفاعلية | الملكية العقارية",
  description: "استعرض مشاريعنا وأراضينا عبر الخريطة التفاعلية",
};

export default function MapPage() {
  return (
    <main className="w-full h-screen pt-20 bg-[#090D16]">
      <iframe
        src="/map.html"
        className="w-full h-full border-0"
        title="خريطة المشاريع"
        loading="lazy"
      />
    </main>
  );
}
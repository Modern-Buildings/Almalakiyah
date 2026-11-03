import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الخريطة التفاعلية | الملكية العقارية",
  description: "استعرض مشاريعنا وأراضينا عبر الخريطة التفاعلية",
};

export default function MapPage() {
  return (
    <main className="w-full h-[calc(100vh-5rem)] min-h-[32rem] pt-0 bg-[#090D16] max-md:h-[calc(100dvh-4.25rem)] max-md:min-h-[28rem]">
      <iframe
        src="/map.html"
        className="w-full h-full border-0"
        title="خريطة المشاريع"
        loading="lazy"
      />
    </main>
  );
}
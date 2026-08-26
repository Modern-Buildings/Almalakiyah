import type { Metadata } from "next";
import Link from "next/link";

import { constructMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    title: "العقارات | Al-Malakiyah",
    description: "مقتنيات نادرة استكشف مجموعتنا الحصرية من العقارات الفاخرة",
    path: "/app/(public)/properties/",
  });
}

export default function PropertiesPage() {
  return (
    <main className="section-light min-h-screen">
      {/* Editorial Magazine Title */}
      <section className="pt-48 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-charcoal/10 pb-12">
          <h1 className="split-text text-6xl md:text-[8vw] font-light font-ar leading-none text-charcoal">
            مقتنيات <br/><span className="font-bold">نادرة</span>
          </h1>
          <div className="text-right mt-10 md:mt-0 max-w-sm">
            <p className="split-text-lines text-charcoal/60 font-light text-lg">
              استكشف مجموعتنا الحصرية من العقارات الفاخرة المصممة لتتجاوز التوقعات وتلبي تطلعات النخبة
            </p>
          </div>
        </div>
      </section>

      {/* Property Editorial 1 (Full Width Transition to Margin) */}
      <section className="pb-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <Link href="/properties/1" className="block group property-card">
          <div className="relative w-full h-[70vh] md:h-[90vh] img-parallax-wrap clip-path-reveal mb-12">
            <img src="https://images.unsplash.com/photo-1613490908592-fd5e48f43fb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Villa" className="transition-transform duration-[2s] group-hover:scale-105" />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <div className="max-w-xl">
              <p className="font-en text-xs tracking-[0.2em] uppercase text-charcoal/50 mb-4">Dubai Palm Jumeirah</p>
              <h2 className="text-4xl md:text-6xl font-bold font-ar text-charcoal mb-6">فيلا روما الفاخرة</h2>
              <div className="flex gap-8 font-en text-sm text-charcoal/60">
                <span>5 Bedrooms</span>
                <span>7 Bathrooms</span>
                <span>12,000 SQFT</span>
              </div>
            </div>
            <div className="mt-8 md:mt-0 text-left md:text-right flex flex-col items-start md:items-end">
              <p className="font-en text-3xl font-light text-charcoal mb-4">$15,000,000</p>
              <span className="inline-block text-xs font-en uppercase tracking-[0.2em] border-b border-charcoal pb-2 group-hover:text-gold group-hover:border-gold transition-colors">Inquire Now</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Property Editorial 2 (Offset Magazine Layout) */}
      <section className="py-32 bg-charcoal text-white section-dark">
        <div className="px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-5/12 order-2 md:order-1">
            <p className="font-en text-xs tracking-[0.2em] uppercase text-white/50 mb-4">Riyadh KAFD</p>
            <h2 className="text-4xl md:text-6xl font-bold font-ar mb-6">بنتهاوس السحاب</h2>
            <p className="text-white/70 font-light text-lg mb-10 max-w-md">إطلالة بانورامية لا تضاهى على أفق الرياض المالي مساحات مفتوحة وتصميم داخلي من توقيع أشهر المصممين العالميين</p>
            
            <div className="flex gap-8 font-en text-sm text-white/60 mb-10 border-t border-white/10 pt-6">
              <span>4 Bedrooms</span>
              <span>5 Bathrooms</span>
              <span>6,500 SQFT</span>
            </div>
            
            <div className="flex items-end gap-12">
              <p className="font-en text-2xl font-light text-white">Price on Request</p>
              <Link href="/contact" className="inline-block text-xs font-en uppercase tracking-[0.2em] border-b border-white pb-2 hover:text-gold hover:border-gold transition-colors magnetic-wrap">Inquire Now</Link>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 order-1 md:order-2">
            <Link href="/properties/2" className="block group property-card">
              <div className="relative w-full h-[60vh] md:h-[80vh] img-parallax-wrap clip-path-reveal">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Penthouse" className="transition-transform duration-[2s] group-hover:scale-105" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

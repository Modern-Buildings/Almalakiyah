import Hero from "@/components/home/01_Hero";
import WhoWeAre from "@/components/home/02_WhoWeAre";
import WhyOman from "@/components/home/03_WhyOman";
import OurStrategy from "@/components/home/04_OurStrategy";
import InvestmentSectors from "@/components/home/05_InvestmentSectors";
import HowWeWork from "@/components/home/06_HowWeWork";


import OurGoals from "@/components/home/09_OurGoals";
import Footer from "@/components/home/10_Footer";

import Navbar from "@/components/home/Navbar";
import LenisProvider from "@/components/home/LenisProvider";

export default function Home() {
  return (
    <LenisProvider>
      <main className="min-h-screen relative font-ar antialiased text-[#2B2B2B] overflow-x-hidden selection:bg-[#770705] selection:text-white bg-site">
        <Navbar />
        
        {/* All Sections */}
        <Hero />
        <WhoWeAre />

        <OurGoals />
        <InvestmentSectors />
        <OurStrategy />
        <HowWeWork />
        <WhyOman />
        <Footer />
      </main>
    </LenisProvider>
  );
}

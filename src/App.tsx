import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ResearchSnapshot } from "@/components/ResearchSnapshot";
import { ProbeSection } from "@/components/ProbeSection";
import { DataProducts } from "@/components/DataProducts";
import { IncentiveModel } from "@/components/IncentiveModel";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { OpenSourceSection } from "@/components/OpenSourceSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/lib/locales";

export default function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  );
}

function AppContent() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#020617] font-sans text-slate-50">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-cyan-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
      >
        Skip to content
      </a>

      {/* ambient grid layer */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_0%,black_50%,transparent_100%)]" />
      </div>
      {/* film grain */}
      <div aria-hidden="true" className="noise-overlay pointer-events-none fixed inset-0 z-[80]" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Ticker />
          <ProblemSection />
          <HowItWorks />
          <ResearchSnapshot />
          <ProbeSection />
          <DataProducts />
          <IncentiveModel />
          <ArchitectureSection />
          <OpenSourceSection />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import LookbookSection from "@/components/LookbookSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {/* Gradiente suave: Ink Black → Platinum */}
      <div className="h-32 md:h-48 bg-gradient-to-b from-ink to-platinum" />
      <ManifestoSection />
      {/* Gradiente suave: Platinum → Ink Black */}
      <div className="h-32 md:h-48 bg-gradient-to-b from-platinum to-ink" />
      <LookbookSection />
      {/* Gradiente suave: Lookbook → Footer (ambos ink, linha sutil) */}
      <div className="h-16 md:h-24 bg-ink" />
      <FooterSection />
    </main>
  );
};

export default Index;

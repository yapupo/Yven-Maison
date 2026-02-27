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
      <ManifestoSection />
      <LookbookSection />
      <FooterSection />
    </main>
  );
};

export default Index;

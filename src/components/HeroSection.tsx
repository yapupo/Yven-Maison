import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import LumeLogo from "./LumeLogo";

const fullSlogan = "A Luz de Cada Geração. Descubra.";

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < fullSlogan.length) {
          setDisplayedText(fullSlogan.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 60);
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(startDelay);
  }, []);

  const handleScrollDown = () => {
    const el = document.querySelector("#manifesto");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-ink overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25"
          src={heroVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink" />
      </div>

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-cream/30 font-sans text-xs tracking-[0.5em] uppercase mb-10 font-light"
        >
          Desde 2024
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mb-12"
        >
          <LumeLogo variant="light" size="lg" />
        </motion.div>

        {/* Typing slogan */}
        <div className="h-16 flex items-center justify-center">
          <p className="font-sans text-cream/70 text-lg sm:text-xl md:text-2xl tracking-[0.15em] font-light">
            {displayedText}
            {!typingDone && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[2px] h-5 bg-gold/60 ml-1 align-middle"
              />
            )}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
      >
        <span className="text-cream/25 font-sans text-[10px] tracking-[0.4em] uppercase group-hover:text-gold/50 transition-colors font-light">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 text-gold/30 animate-scroll-bounce group-hover:text-gold/50 transition-colors" />
      </motion.button>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import YvenLogo from "./YvenLogo";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const animate = () => {
      if (!video.duration) return;
      const progress = (video.currentTime % video.duration) / video.duration;
      // Slowly pan from bottom (showing body) to top (showing face)
      // object-position y goes from 80% to 20%
      const yPos = 80 - progress * 60;
      video.style.objectPosition = `center ${yPos}%`;
      requestAnimationFrame(animate);
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleScrollDown = () => {
    const el = document.querySelector("#manifesto");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center bg-forest overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          style={{ objectPosition: "center 80%" }}
          src={heroVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest" />
      </div>

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1 }}
          className="mb-14"
        >
          <YvenLogo variant="light" size="lg" />
        </motion.div>

        {/* Typing slogan removed */}
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 4 }}
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group"
      >
        <span className="text-cream/20 font-sans text-[10px] tracking-[0.4em] uppercase group-hover:text-cream/40 transition-colors font-light">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 text-cream/20 animate-scroll-bounce group-hover:text-cream/40 transition-colors" />
      </motion.button>
    </section>
  );
};

export default HeroSection;

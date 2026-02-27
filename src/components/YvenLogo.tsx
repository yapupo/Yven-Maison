import { motion } from "framer-motion";

interface YvenLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const YvenLogo = ({ variant = "light", size = "md", className = "" }: YvenLogoProps) => {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-5xl md:text-6xl lg:text-7xl",
  };

  const subtitleSizes = {
    sm: "text-[6px] tracking-[0.35em]",
    md: "text-[8px] tracking-[0.4em]",
    lg: "text-[10px] md:text-xs tracking-[0.5em]",
  };

  const lineWidths = {
    sm: "w-6",
    md: "w-10",
    lg: "w-16 md:w-24",
  };

  const textColor = isLight ? "text-cream" : "text-forest";
  const lineColor = isLight ? "bg-cream/25" : "bg-forest/25";
  const diamondColor = isLight ? "text-cream/40" : "text-forest/35";
  const subtitleColor = isLight ? "text-cream/45" : "text-forest/40";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1 className={`font-serif ${sizeClasses[size]} ${textColor} tracking-[0.5em] font-light`}>
        Y V E N
      </h1>

      {/* Decorative line with diamond */}
      <div className="flex items-center gap-3 mt-3">
        <div className={`${lineWidths[size]} h-px ${lineColor}`} />
        <span className={`${diamondColor} text-[7px]`}>◆</span>
        <div className={`${lineWidths[size]} h-px ${lineColor}`} />
      </div>

      <p className={`font-sans ${subtitleSizes[size]} ${subtitleColor} uppercase mt-2.5 font-light`}>
        Maison de l'Enfance
      </p>
    </div>
  );
};

export default YvenLogo;

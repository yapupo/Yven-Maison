import { motion } from "framer-motion";

interface LumeLogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LumeLogo = ({ variant = "light", size = "md", className = "" }: LumeLogoProps) => {
  const isLight = variant === "light";
  
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl md:text-5xl",
  };

  const subtitleSizes = {
    sm: "text-[6px] tracking-[0.35em]",
    md: "text-[8px] tracking-[0.4em]",
    lg: "text-[10px] md:text-xs tracking-[0.45em]",
  };

  const lineWidths = {
    sm: "w-6",
    md: "w-10",
    lg: "w-14 md:w-20",
  };

  const textColor = isLight ? "text-cream" : "text-ink";
  const goldColor = isLight ? "text-gold" : "text-forest";
  const lineColor = isLight ? "bg-gold/40" : "bg-forest/30";
  const diamondColor = isLight ? "text-gold/60" : "text-forest/40";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1 className={`font-serif ${sizeClasses[size]} ${isLight ? "text-gold" : textColor} tracking-[0.5em] font-light`}>
        L U M E
      </h1>
      
      {/* Decorative line with diamond */}
      <div className="flex items-center gap-2 mt-2">
        <div className={`${lineWidths[size]} h-px ${lineColor}`} />
        <span className={`${diamondColor} text-[8px]`}>◆</span>
        <div className={`${lineWidths[size]} h-px ${lineColor}`} />
      </div>

      <p className={`font-sans ${subtitleSizes[size]} ${isLight ? "text-cream/50" : "text-ink/40"} uppercase mt-2 font-light`}>
        A Luz da Infância
      </p>
    </div>
  );
};

export default LumeLogo;

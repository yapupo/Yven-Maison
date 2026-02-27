import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const over = () => setHovering(true);
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, input, textarea, select, [role='button']").forEach((el) => {
        el.addEventListener("mouseenter", over);
        el.addEventListener("mouseleave", out);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      observer.disconnect();
    };
  }, [visible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: pos.x - (hovering ? 20 : 14),
          y: pos.y - (hovering ? 20 : 14),
          width: hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.5 }}
        style={{
          borderRadius: "50%",
          border: "1px solid hsl(40 30% 94% / 0.5)",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "hsl(40 30% 94%)",
        }}
      />
    </>
  );
};

export default CustomCursor;

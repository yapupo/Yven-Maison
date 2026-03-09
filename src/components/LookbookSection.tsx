import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";
import lookbook5 from "@/assets/lookbook-5.jpg";
import lookbook6 from "@/assets/lookbook-6.jpg";

const lookbookItems = [
  { src: lookbook1, concept: "Jardim Secreto", collection: "Essentials" },
  { src: lookbook2, concept: "Primeira Luz", collection: "Infância" },
  { src: lookbook3, concept: "Ninho Quente", collection: "Juventude" },
  { src: lookbook4, concept: "Algodão Orgânico", collection: "Materialidade" },
  { src: lookbook5, concept: "Campo Dourado", collection: "Lifestyle" },
  { src: lookbook6, concept: "Primeiros Passos", collection: "Bebê" },
];

const LookbookItem = ({
  item,
  index,
}: {
  item: (typeof lookbookItems)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative overflow-hidden group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`overflow-hidden ${
          index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-[4/3]" : "aspect-square"
        }`}
      >
        <motion.img
          src={item.src}
          alt={`YVEN — ${item.concept}`}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
          loading="lazy"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-deep-green/70 flex flex-col items-center justify-center"
      >
        <p className="font-serif text-cream text-lg md:text-xl italic tracking-wide">
          {item.concept}
        </p>
        <p className="font-sans text-cream/40 text-xs tracking-[0.3em] uppercase mt-2 font-light">
          {item.collection}
        </p>
      </motion.div>
    </motion.div>
  );
};

const LookbookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="lookbook"
      ref={ref}
      className="bg-forest py-24 md:py-40 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-baseline justify-between mb-16"
        >
          <div>
            <p className="text-cream/25 font-sans text-xs tracking-[0.5em] uppercase mb-4 font-light">
              Lookbook
            </p>
            <h2 className="font-serif text-cream text-3xl md:text-4xl tracking-wide">
              Concept
            </h2>
          </div>
          <p className="hidden md:block text-cream/20 font-sans text-xs tracking-[0.3em] uppercase font-light">
            SS 2025
          </p>
        </motion.div>

        <div className="masonry-grid">
          {lookbookItems.map((item, index) => (
            <LookbookItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;

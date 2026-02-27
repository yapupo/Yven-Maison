import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import manifesto1 from "@/assets/manifesto-1.jpg";
import manifesto2 from "@/assets/manifesto-2.jpg";

const ManifestoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative bg-cream pt-0 pb-24 md:pb-40 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-forest/50 font-sans text-xs tracking-[0.5em] uppercase mb-16 font-light"
        >
          Manifesto
        </motion.p>

        {/* Main statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-forest text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide">
              Vestir é um ato
              <br />
              <span className="italic">de pertencimento.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 flex items-end"
          >
            <p className="font-sans text-forest/50 text-sm md:text-base leading-relaxed tracking-wide font-light">
              Cada peça Y V E N nasce da intenção de acompanhar — não definir —
              quem a veste. Do primeiro toque ao último olhar no espelho,
              acreditamos que conforto e design são indissociáveis.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric image grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="md:col-span-7 aspect-[4/3] overflow-hidden"
          >
            <img
              src={manifesto1}
              alt="Y V E N — design consciente e contemporâneo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.7 }}
            className="md:col-span-5 md:mt-20 aspect-[3/4] overflow-hidden"
          >
            <img
              src={manifesto2}
              alt="Y V E N — texturas e materialidade"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Philosophy text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-2xl ml-auto"
        >
          <p className="font-serif text-forest text-lg md:text-xl italic leading-relaxed tracking-wide mb-6">
            "Não criamos roupas para faixas etárias.
            Criamos para fases de luz."
          </p>
          <div className="w-10 h-px bg-forest/25" />
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;

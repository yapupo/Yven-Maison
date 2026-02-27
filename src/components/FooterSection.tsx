import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Send } from "lucide-react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.nome && form.email && form.mensagem) {
      setSubmitted(true);
      setForm({ nome: "", email: "", mensagem: "" });
    }
  };

  const inputClasses =
    "w-full bg-transparent border-b border-cream/15 text-cream font-sans text-sm py-3 placeholder:text-cream/20 focus:outline-none focus:border-gold/50 transition-colors duration-300 font-light";

  return (
    <footer
      id="contato"
      ref={ref}
      className="bg-ink py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-gold/40 font-sans text-xs tracking-[0.5em] uppercase mb-4 font-light">
            Contato
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-4xl tracking-wide">
            Fale Conosco
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12"
              >
                <p className="font-serif text-gold text-xl italic">
                  Mensagem enviada com sucesso.
                </p>
                <p className="font-sans text-cream/35 text-sm mt-2 font-light">
                  Retornaremos em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <input
                    type="text"
                    value={form.nome}
                    onChange={(e) =>
                      setForm({ ...form, nome: e.target.value })
                    }
                    placeholder="Nome"
                    className={inputClasses}
                    required
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    placeholder="E-mail"
                    className={inputClasses}
                    required
                  />
                </div>
                <input
                  type="text"
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm({ ...form, mensagem: e.target.value })
                  }
                  placeholder="Mensagem"
                  className={inputClasses}
                  required
                />
                <button
                  type="submit"
                  className="bg-forest text-cream font-sans text-xs tracking-[0.3em] uppercase px-10 py-3.5 hover:bg-forest/80 transition-colors duration-300 mt-4 font-light"
                >
                  Enviar
                </button>
              </form>
            )}
          </motion.div>

          {/* Side info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="mb-12">
              <p className="font-sans text-gold/35 text-xs tracking-[0.3em] uppercase mb-4 font-light">
                Assessoria de Imprensa
              </p>
              <p className="font-sans text-cream/50 text-sm leading-relaxed font-light">
                xxxxxx@xxxxx.xxx.xx
              </p>
            </div>

            <div className="mb-12">
              <p className="font-sans text-gold/35 text-xs tracking-[0.3em] uppercase mb-4 font-light">
                Parcerias Comerciais
              </p>
              <p className="font-sans text-cream/50 text-sm leading-relaxed font-light">
                xxxxxx@xxxxx.xxx.xx
              </p>
            </div>

            <div>
              <p className="font-sans text-gold/35 text-xs tracking-[0.3em] uppercase mb-4 font-light">
                Social
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="text-cream/35 hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-cream/35 hover:text-gold transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gold/10"
        >
          <h3 className="font-serif text-gold/40 text-lg tracking-[0.3em]">
            L U M E
          </h3>
          <p className="font-sans text-cream/15 text-xs tracking-wider mt-4 md:mt-0 font-light">
            © 2025 L U M E. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

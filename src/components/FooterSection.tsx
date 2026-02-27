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
    "w-full bg-transparent border-b border-cream/12 text-cream font-sans text-sm py-3 placeholder:text-cream/18 focus:outline-none focus:border-cream/40 transition-colors duration-300 font-light";

  return (
    <footer
      id="contato"
      ref={ref}
      className="bg-deep-green py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-cream/25 font-sans text-xs tracking-[0.5em] uppercase mb-4 font-light">
            Contato
          </p>
          <h2 className="font-serif text-cream text-3xl md:text-4xl tracking-wide">
            Fale Conosco
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
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
                <p className="font-serif text-cream text-xl italic">
                  Mensagem enviada com sucesso.
                </p>
                <p className="font-sans text-cream/30 text-sm mt-2 font-light">
                  Retornaremos em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <input
                    type="text"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Nome"
                    className={inputClasses}
                    required
                  />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="E-mail"
                    className={inputClasses}
                    required
                  />
                </div>
                <input
                  type="text"
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Mensagem"
                  className={inputClasses}
                  required
                />
                <button
                  type="submit"
                  className="bg-cream/10 text-cream font-sans text-xs tracking-[0.3em] uppercase px-10 py-3.5 hover:bg-cream/20 transition-colors duration-300 mt-4 font-light border border-cream/15"
                >
                  Enviar
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="mb-12">
              <p className="font-sans text-cream/25 text-xs tracking-[0.3em] uppercase mb-4 font-light">
                Assessoria de Imprensa
              </p>
              <p className="font-sans text-cream/45 text-sm leading-relaxed font-light">
                xxxxxx@xxxxx.xxx.xx
              </p>
            </div>

            <div className="mb-12">
              <p className="font-sans text-cream/25 text-xs tracking-[0.3em] uppercase mb-4 font-light">
                Parcerias Comerciais
              </p>
              <p className="font-sans text-cream/45 text-sm leading-relaxed font-light">
                xxxxxx@xxxxx.xxx.xx
              </p>
            </div>

            <div>
              <p className="font-sans text-cream/25 text-xs tracking-[0.3em] uppercase mb-4 font-light">
                Social
              </p>
              <div className="flex items-center gap-5">
                <a href="#" className="text-cream/30 hover:text-cream transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-cream/30 hover:text-cream transition-colors" aria-label="Telegram">
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cream/8"
        >
          <h3 className="font-serif text-cream/30 text-lg tracking-[0.3em]">
            Y V E N
          </h3>
          <p className="font-sans text-cream/12 text-xs tracking-wider mt-4 md:mt-0 font-light">
            © 2025 Y V E N. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

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
    "w-full bg-transparent border-b border-platinum/20 text-platinum font-sans text-sm py-3 placeholder:text-platinum/25 focus:outline-none focus:border-teal transition-colors duration-300";

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
          <p className="text-platinum/30 font-sans text-xs tracking-[0.5em] uppercase mb-4">
            Contato
          </p>
          <h2 className="font-serif text-platinum text-3xl md:text-4xl tracking-wide">
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
                <p className="font-serif text-teal text-xl italic">
                  Mensagem enviada com sucesso.
                </p>
                <p className="font-sans text-platinum/40 text-sm mt-2">
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
                  className="bg-teal text-platinum font-sans text-xs tracking-[0.3em] uppercase px-10 py-3.5 rounded-full hover:bg-teal/80 transition-colors duration-300 mt-4"
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
              <p className="font-sans text-platinum/30 text-xs tracking-[0.3em] uppercase mb-4">
                Assessoria de Imprensa
              </p>
              <p className="font-sans text-platinum/60 text-sm leading-relaxed">
                xxxxxx@xxxxx.xxx.xx
              </p>
            </div>

            <div className="mb-12">
              <p className="font-sans text-platinum/30 text-xs tracking-[0.3em] uppercase mb-4">
                Parcerias Comerciais
              </p>
              <p className="font-sans text-platinum/60 text-sm leading-relaxed">
                xxxxxx@xxxxx.xxx.xx
              </p>
            </div>

            <div>
              <p className="font-sans text-platinum/30 text-xs tracking-[0.3em] uppercase mb-4">
                Social
              </p>
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="text-platinum/40 hover:text-teal transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="text-platinum/40 hover:text-teal transition-colors"
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
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-platinum/10"
        >
          <h3 className="font-serif text-platinum/30 text-lg tracking-[0.3em]">
            L U M E
          </h3>
          <p className="font-sans text-platinum/15 text-xs tracking-wider mt-4 md:mt-0">
            © 2025 L U M E. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;

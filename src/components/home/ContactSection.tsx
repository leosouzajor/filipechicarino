import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contato@filipechicarino.com.br",
    link: "mailto:contato@filipechicarino.com.br",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(27) 981178654",
    link: "tel:+5527981178654",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Serra, Espírito Santo - Brasil",
    link: null,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white border-t border-gray-100" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C85A3A] font-bold tracking-widest text-sm uppercase mb-4 block">
            Fale Conosco
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-4 font-serif">
            Vamos começar uma conversa?
          </h2>
          <div className="w-24 h-1 bg-[#C85A3A] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-[800px] mx-auto font-light leading-[1.7]">
            Descubra como a comunicação humanizada pode transformar os resultados da sua organização.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-4 bg-[#001F3F]/10 rounded-full mb-4">
                  <info.icon className="w-8 h-8 text-[#001F3F]" />
                </div>
                <h4 className="font-semibold text-[#001F3F] mb-2 text-xl">{info.title}</h4>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-600 hover:text-[#C85A3A] transition-colors duration-300 text-lg leading-[1.7]"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600 text-lg leading-[1.7]">{info.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <a href="/contato" className="btn-primary">
            Ir para a página de contato
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mic2, Users, Film, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Mic2,
    title: "Palestras",
    description:
      "Conteúdos impactantes sobre comunicação não-violenta, saúde mental e NR-1 para inspirar e transformar equipes.",
  },
  {
    icon: Users,
    title: "Treinamentos",
    description:
      "Programas práticos e personalizados para desenvolver lideranças empáticas e fortalecer vínculos organizacionais.",
  },
  {
    icon: Film,
    title: "Histórias Humanizadas",
    description:
      "Produções audiovisuais com narrativa documental para conectar marcas e pessoas através da emoção.",
  },
];

const NR1Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C85A3A] font-bold tracking-widest text-sm uppercase mb-3 block">
            O que oferecemos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] mb-6 font-serif">
            Nossas Soluções
          </h2>
          <div className="w-24 h-1 bg-[#C85A3A] mx-auto opacity-50"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#F5F3EF] rounded-[8px] p-8 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-[#C85A3A]/20 group hover:-translate-y-1"
            >
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-[#C85A3A]" />
              </div>
              <h3 className="text-2xl font-bold text-[#001F3F] mb-4 font-serif">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-[1.7] h-auto min-h-[96px]">
                {service.description}
              </p>
              <a
                href="/solucoes"
                className="inline-flex items-center text-[#C85A3A] font-semibold tracking-wide group-hover:gap-3 gap-2 transition-all duration-300"
              >
                SAIBA MAIS
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NR1Section;

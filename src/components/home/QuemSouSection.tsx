import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/assets";

const QuemSouSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#F5F3EF] border-b border-gray-200" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="mb-8">
              <span className="text-[#C85A3A] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                Autoridade
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F3F] font-serif mb-6 leading-tight">
                O HumanizaDOR
              </h2>
              <div className="w-24 h-1 bg-[#C85A3A] mb-8"></div>
            </div>

            <div className="prose prose-lg text-gray-700 font-light leading-[1.7] mb-10 max-w-[800px]">
              <h3 className="text-2xl font-serif text-[#001F3F] mb-4"></h3>
              <p className="text-xl leading-[1.7] mb-6">
                Acredito que o maior ruído do nosso tempo não é o excesso de informação, mas a falta
                de conexão. Minha atuação como Humanizador de processos e narrativas nasce da
                urgência de devolver o sentido e a profundidade às interações humanas. Por meio da
                lente da Comunicação Não Violenta e de uma escuta que chamo de "acolhedora e
                provocativa", meu trabalho é identificar as dores invisíveis, seja no ambiente
                institucional, corporativo ou em territórios de conflito, e transformá-las em
                clareza.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <a href="/quem-sou" className="btn-primary group">
                CONHEÇA A TRAJETÓRIA
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Image Content - "Seal of Expertise" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <div className="relative z-10 rounded-[8px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] aspect-[3/4] max-w-md mx-auto border-8 border-white">
              <img
                src={images.retratoFilipe}
                alt="Filipe Chicarino - Facilitador de Comunicação"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              {/* Institutional Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/60 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 text-white z-20">
                <p className="text-3xl font-serif font-bold">20</p>
                <p className="text-xs uppercase tracking-widest opacity-90">Anos de Experiência</p>
              </div>
            </div>

            {/* Institutional Elements */}
            <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-[#001F3F]/10 rounded-[8px] z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C85A3A]/10 rounded-full blur-3xl z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuemSouSection;

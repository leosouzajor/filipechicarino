import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/assets";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#001F3F] overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${images.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-16 font-serif text-center max-w-5xl mx-auto drop-shadow-lg"
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.5)" }}
            >
              Comunicação que conecta, humaniza e{" "}
              <span className="text-[#C85A3A]">transforma</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
              <a href="/solucoes" className="btn-primary w-full sm:w-auto px-10 py-5 text-lg shadow-xl">
                Conheça Nossas Soluções
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="/contato"
                className="btn-secondary text-white border-white hover:bg-white hover:text-[#001F3F] w-full sm:w-auto px-10 py-5 text-lg shadow-xl"
              >
                Solicitar Proposta
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { parceiros } from "@/lib/assets";

const ParceirosSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-8 md:mb-16 text-center">
        <h3 className="text-sm font-bold text-[#C85A3A] uppercase tracking-[0.2em] mb-3 md:mb-4">
          Credibilidade
        </h3>
        <h2 className="text-3xl md:text-4xl font-serif text-[#001F3F] font-bold">Parceiros</h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-48 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div className="flex">
          <motion.div
            className="flex gap-8 md:gap-32 items-center px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" },
            }}
            style={{ width: "fit-content" }}
          >
            {/* Original List */}
            {parceiros.map((partner, index) => (
              <div
                key={`orig-${index}`}
                className="flex-shrink-0 w-28 h-20 md:w-56 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter contrast-125"
                />
              </div>
            ))}

            {/* Duplicated List for seamless loop */}
            {parceiros.map((partner, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 w-28 h-20 md:w-56 md:h-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter contrast-125"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParceirosSection;

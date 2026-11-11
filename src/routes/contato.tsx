import { createFileRoute } from "@tanstack/react-router";
import Header, { INSTAGRAM_URL, LINKEDIN_URL } from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, MapPin, Phone } from "lucide-react";
import { images } from "@/lib/assets";

const WHATSAPP_PHONE = "5527981178654";
const WHATSAPP_MESSAGE = "Olá, Filipe! Conheci seu site e gostaria de conversar sobre um projeto.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Filipe Chicarino" },
      {
        name: "description",
        content:
          "Entre em contato com Filipe Chicarino para palestras, treinamentos e consultorias.",
      },
      { property: "og:title", content: "Contato | Filipe Chicarino" },
      {
        property: "og:description",
        content:
          "Entre em contato com Filipe Chicarino para palestras, treinamentos e consultorias.",
      },
      { property: "og:url", content: "https://filipechicarino.com/contato" },
      { property: "og:image", content: images.logo },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.logo },
    ],
    links: [{ rel: "canonical", href: "https://filipechicarino.com/contato" }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />

      {/* Hero Section */}
      <section className="pt-48 pb-16 px-4 md:px-8 lg:px-16 bg-[#001F3F] text-white">
        <div className="container mx-auto max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-serif mb-6"
          >
            Vamos conversar?
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-[800px] mx-auto">
            Estamos prontos para ouvir você e entender como podemos transformar a comunicação da sua
            empresa.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column: Direct Conversation Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white p-8 md:p-12 rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] space-y-8 border-t-4 border-[#C85A3A]">
                <div>
                  <span className="text-[#C85A3A] font-bold text-xs uppercase tracking-widest block mb-3">
                    Atendimento Direto
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] font-serif mb-4">
                    Vamos conversar?
                  </h2>
                  <div className="w-12 h-1 bg-[#C85A3A] mb-6"></div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Seja para palestras, treinamentos executivos, consultorias em comunicação
                    humanizada ou parcerias institucionais, o diálogo direto é a forma mais ágil e
                    acolhedora de iniciarmos um alinhamento.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#001F3F] text-white px-6 py-4 rounded-[8px] font-semibold text-base md:text-lg hover:bg-[#C85A3A] transition-all duration-300 flex items-center justify-between shadow-md hover:shadow-xl group"
                  >
                    <span className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-[#C85A3A] group-hover:text-white transition-colors shrink-0" />
                      <span>Conversar pelo WhatsApp</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                  </a>

                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#F5F3EF] text-[#001F3F] px-6 py-4 rounded-[8px] font-semibold text-base md:text-lg hover:bg-[#EBE6DF] transition-all duration-300 flex items-center justify-between border border-[#001F3F]/10 group"
                  >
                    <span className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-[#C85A3A] shrink-0" />
                      <span>Conectar pelo LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#001F3F]/60 group-hover:text-[#001F3F] transition-colors shrink-0" />
                  </a>
                </div>

                <div className="pt-6 border-t border-gray-100 text-sm text-gray-500 leading-relaxed space-y-1">
                  <p className="font-medium text-[#001F3F]">Atendimento ágil e personalizado</p>
                  <p>
                    O link de WhatsApp já inclui uma mensagem inicial pronta para você iniciar a
                    conversa sem complicações.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-12 flex flex-col justify-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#001F3F] font-serif mb-6">
                  Informações de Contato
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed max-w-[500px]">
                  Prefere falar diretamente? Utilize um dos nossos canais de atendimento abaixo.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#C85A3A] transition-colors duration-300">
                    <Linkedin className="w-6 h-6 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-[#001F3F] text-lg mb-1">LinkedIn</h4>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#C85A3A] transition-colors text-base md:text-lg break-all"
                    >
                      Filipe Chicarino
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#C85A3A] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-[#001F3F] text-lg mb-1">WhatsApp / Telefone</h4>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#C85A3A] transition-colors text-base md:text-lg"
                    >
                      +55 (27) 98117-8654
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-[#F5F3EF] rounded-full flex items-center justify-center group-hover:bg-[#C85A3A] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001F3F] text-lg mb-1">Localização</h4>
                    <span className="text-gray-600 text-lg block">Espírito Santo - Brasil</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <h4 className="font-bold text-[#001F3F] mb-4">Redes Sociais</h4>
                <div className="flex gap-4">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Filipe Chicarino"
                    className="bg-[#001F3F] text-white p-3 rounded-full hover:bg-[#C85A3A] transition-all duration-300 shadow-md hover:-translate-y-1"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Filipe Chicarino"
                    className="bg-[#001F3F] text-white p-3 rounded-full hover:bg-[#C85A3A] transition-all duration-300 shadow-md hover:-translate-y-1"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

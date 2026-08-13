import { createFileRoute } from '@tanstack/react-router';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Ear, Users } from 'lucide-react';
import { images } from '@/lib/assets';

export const Route = createFileRoute('/quem-sou')({
  head: () => ({
    meta: [
      { title: "Quem Sou | Filipe Chicarino - O Facilitador" },
      {
        name: "description",
        content: "Saiba mais sobre Filipe Chicarino, facilitador de comunicação com 20 anos de experiência, Mestre em Sociologia Política e especialista em CNV.",
      },
      { property: "og:title", content: "Quem Sou | Filipe Chicarino - O Facilitador" },
      { property: "og:description", content: "Saiba mais sobre Filipe Chicarino, facilitador de comunicação com 20 anos de experiência, Mestre em Sociologia Política e especialista em CNV." },
      { property: "og:url", content: "https://filipechicarino.com.br/quem-sou" },
      { property: "og:image", content: images.retratoFilipe },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.retratoFilipe },
    ],
    links: [
      { rel: "canonical", href: "https://filipechicarino.com.br/quem-sou" }
    ]
  }),
  component: QuemSouPage,
});

function QuemSouPage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      
      {/* Page Hero */}
      <section className="pt-48 pb-24 px-4 md:px-8 lg:px-16 bg-[#001F3F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-5" style={{ backgroundImage: `url('${images.cubes}')` }}></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 tracking-tight">Quem Sou</h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Identifico dores, desato nós e transformo a complexidade na clareza da boa prosa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Image & Authority Column (5 cols) */}
            <div className="lg:col-span-5 relative top-0 lg:-mt-40 z-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative rounded-sm overflow-hidden shadow-2xl border-4 border-white"
              >
                <img 
                  src={images.retratoFilipe} 
                  alt="Filipe Chicarino Portrait" 
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F]/40 to-transparent"></div>
              </motion.div>
              
              {/* Authority Badges */}
              <div className="grid grid-cols-1 gap-6 mt-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-6 border-l-4 border-[#C85A3A] shadow-lg flex items-center gap-6 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-[#F5F3EF] p-4 rounded-full group-hover:bg-[#001F3F] transition-colors duration-300">
                    <Star className="w-8 h-8 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-2xl font-serif font-bold text-[#001F3F]">20 anos</span>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500">de experiência</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-6 border-l-4 border-[#C85A3A] shadow-lg flex items-center gap-6 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-[#F5F3EF] p-4 rounded-full group-hover:bg-[#001F3F] transition-colors duration-300">
                    <Ear className="w-8 h-8 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-2xl font-serif font-bold text-[#001F3F]">Escuta Ativa</span>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500">e Provocativa</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-white p-6 border-l-4 border-[#C85A3A] shadow-lg flex items-center gap-6 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-[#F5F3EF] p-4 rounded-full group-hover:bg-[#001F3F] transition-colors duration-300">
                    <Users className="w-8 h-8 text-[#C85A3A] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-2xl font-serif font-bold text-[#001F3F]">Humanização</span>
                    <span className="text-sm font-bold tracking-widest uppercase text-gray-500">de Processos</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Text Column (7 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-7 space-y-12"
            >
              <div>
                <span className="text-[#C85A3A] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">HUMANIZADOR</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001F3F] font-serif leading-tight">
                  Facilitador de diálogos <br />e construtor de pontes
                </h2>
              </div>

              <div className="prose prose-lg prose-headings:font-serif prose-headings:text-[#001F3F] text-gray-700 leading-relaxed font-light max-w-none space-y-6">
                <div className="border-l-2 border-[#001F3F]/10 pl-8 py-2 mb-8">
                  <h3 className="text-2xl font-bold mb-4 mt-0">Propósito Claro</h3>
                  <p className="text-lg">
                    "Humanizar as interações e promover ambientes de escuta ativa e compreensão mútua."
                  </p>
                </div>

                <p className="text-lg">
                  Um <strong>estrategista de comunicação</strong> que utiliza a <strong>abordagem humanizada e não violenta</strong> para reduzir ruídos, desatar nós e construir conexões reais em diferentes espaços, diálogos e culturas institucionais.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Base Acadêmica e Prática</h3>
                <p className="text-lg">
                  Com 20 anos de experiência no ecossistema da Comunicação, além de jornalista, sou Mestre em Sociologia Política e pós-graduado em Telejornalismo e Narrativas Digitais. Desenvolvi uma metodologia única que transforma conceitos complexos em diálogos acessíveis, humanizados e impactantes.
                </p>

                <h3 className="text-2xl font-bold mt-10 mb-4">Impacto e Entrega</h3>
                <p className="text-lg">
                  Minha entrega foca em resultados humanos. Seja em palestras, treinamentos ou produções audiovisuais, o impacto é a restauração da clareza. Ofereço ferramentas que não apenas resolvem conflitos ou cumprem normas (como a NR-1), mas que devolvem o sentido ao diálogo, transformando o institucional frio em um território de confiança e empatia real.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Viral / Meme Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#C85A3A] text-white overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
                Um dia, virei meme
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
                Fui protagonista de um dos memes mais icônicos do telejornalismo e da internet. Quem não conhece o meme da árvore de 30 anos? Vivi na pele o que acontece quando o ruído domina a cena e a narrativa foge ao controle. Mas o que para muitos é apenas um vídeo viral, para mim foi um baita aprendizado. Transformei a exposição em aprendizado e o ruído em método. Hoje, uso essa vivência para provar que comunicação humanizada não é sobre perfeição, é sobre como reagimos ao imprevisto e como reconstruímos conexões.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl aspect-video border-4 border-white/20"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Tytu1tA2t0A?rel=0"
                title="Meme da árvore de 30 anos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto / Closing Section */}
      <section className="py-32 bg-[#001F3F] text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-repeat opacity-10" style={{ backgroundImage: `url('${images.cubes}')` }}></div>
        {/* Decorative gradients */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/20 to-transparent"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Star className="w-12 h-12 text-[#C85A3A] mx-auto mb-8 opacity-90" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            "Comunicação humanizada não é apenas uma metodologia. É um compromisso com a transformação de pessoas e organizações."
          </h2>
          <div className="w-20 h-1 bg-[#C85A3A] mx-auto mb-12"></div>
          
          <a href="/#contato" className="inline-flex items-center gap-3 bg-[#F5F3EF] text-[#001F3F] px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#C85A3A] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105">
            VAMOS CONVERSAR
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

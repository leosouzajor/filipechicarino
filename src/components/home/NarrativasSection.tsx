import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    id: 1,
    image: "https://img.youtube.com/vi/0u5iIU5zqp4/maxresdefault.jpg",
    title: "Meninos do Sertão / <strong>Fortlev</strong>",
    url: "https://youtu.be/0u5iIU5zqp4?si=zEmOje9LcWxOMBrC",
    category: "WEBDOCUMENTÁRIO",
  },
  {
    id: 2,
    image: "https://img.youtube.com/vi/v3vQGwcmEjI/maxresdefault.jpg",
    title: "Ser Senac / <strong>Senac ES</strong>",
    url: "https://www.youtube.com/watch?v=v3vQGwcmEjI",
    category: "WEBSÉRIE",
  },
  {
    id: 3,
    image: "https://img.youtube.com/vi/U_J1KToT9B0/maxresdefault.jpg",
    title: "10 anos, 10 histórias / <strong>Instituto Água Viva (IAV)</strong>",
    url: "https://youtu.be/U_J1KToT9B0?si=4T8b-x843FnSOHNs",
    category: "WEBSÉRIE",
  },
  {
    id: 4,
    image: "https://img.youtube.com/vi/nKuV76iZ7jQ/maxresdefault.jpg",
    title: "Reflorestar para transformar / <strong>Fortlev e Instituto Terra</strong>",
    url: "https://www.youtube.com/watch?v=nKuV76iZ7jQ",
    category: "GRANDE REPORTAGEM",
  },
  {
    id: 5,
    image: "https://img.youtube.com/vi/AHfLOlyHBvc/hqdefault.jpg",
    title: "Especial Dia das Crianças / <strong>Fortlev</strong>",
    url: "https://www.youtube.com/watch?v=AHfLOlyHBvc",
    category: "INSTITUCIONAL",
  },
  {
    id: 6,
    image: "https://img.youtube.com/vi/YfsjnLtj4wA/maxresdefault.jpg",
    title: "Ser Senac / <strong>Senac ES</strong>",
    url: "https://www.youtube.com/watch?v=YfsjnLtj4wA",
    category: "WEBSÉRIE",
  },
];

const NarrativasSection = () => {
  return (
    <section className="section-padding bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <span className="text-[#C85A3A] font-bold tracking-widest text-xs md:text-sm uppercase mb-3 block">
              Produção Audiovisual
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#001F3F] font-serif leading-tight">
              Narrativas que Conectam
            </h2>
          </div>
          <a
            href="/solucoes"
            className="text-[#001F3F] hover:text-[#C85A3A] font-semibold border-b-2 border-[#001F3F] hover:border-[#C85A3A] pb-1 transition-all duration-300 inline-block mt-2 md:mt-0 text-sm md:text-base"
          >
            Ver Portfolio Completo
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video) => (
            <motion.a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -10 }}
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] aspect-video mb-4 md:mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
                <img
                  src={video.image}
                  alt={video.title.replace(/<[^>]*>?/gm, "")}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-[#C85A3A] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <span className="text-[10px] md:text-xs font-bold text-[#C85A3A] uppercase tracking-wider">
                  {video.category}
                </span>
                <h3
                  className="text-lg md:text-xl font-medium text-[#001F3F] font-serif group-hover:text-[#C85A3A] transition-colors"
                  dangerouslySetInnerHTML={{ __html: video.title }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarrativasSection;

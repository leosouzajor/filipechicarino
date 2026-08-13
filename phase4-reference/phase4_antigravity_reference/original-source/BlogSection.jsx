import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const recentArticles = [
    {
      id: 5,
      title: "A engenharia do prejuízo",
      excerpt: "O impacto do vício em apostas virtuais na saúde pública e na economia do Brasil",
      category: "ARTIGO",
      date: "05 Ago 2026",
      readTime: "5 min",
      author: "Filipe Chicarino",
      link: "/blog/a-engenharia-do-prejuizo",
      image: "https://horizons-cdn.hostinger.com/c9c44d5a-7b6c-49a2-a669-295003b83b7f/1be0c6d2b22fe71329d7a6f22c418606.jpg",
      authorImage: "https://horizons-cdn.hostinger.com/c9c44d5a-7b6c-49a2-a669-295003b83b7f/56117ad5fadf793022a65f1ff928e574.jpg"
    },
    {
      id: 4,
      title: "A Reunião Fantasma: você está presente ou apenas conectado?",
      excerpt: "92% dos profissionais admitem realizar outras tarefas durante uma reunião online",
      category: "ARTIGO",
      date: "28 Mar 2026",
      readTime: "4 min",
      author: "Filipe Chicarino",
      link: "/blog/a-reuniao-fantasma-voce-esta-presente-ou-apenas-conectado",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      authorImage: "https://horizons-cdn.hostinger.com/c9c44d5a-7b6c-49a2-a669-295003b83b7f/56117ad5fadf793022a65f1ff928e574.jpg"
    },
    {
      id: 3,
      title: "A Clickzação da Vida",
      excerpt: "O que o filme de Adam Sandler nos ensinou (e ignoramos)",
      category: "ARTIGO",
      date: "22 Mar 2026",
      readTime: "7 min",
      author: "Filipe Chicarino",
      link: "/blog/a-clickzacao-da-vida",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      authorImage: "https://horizons-cdn.hostinger.com/c9c44d5a-7b6c-49a2-a669-295003b83b7f/56117ad5fadf793022a65f1ff928e574.jpg"
    }
  ];

  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#F5F3EF]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[#C85A3A] font-bold tracking-widest text-sm uppercase mb-4 block">
              Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#001F3F] font-serif leading-tight">
              Blog & Artigos
            </h2>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-[#001F3F] font-semibold hover:text-[#C85A3A] transition-colors gap-2"
          >
            Ver todos os artigos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <Link to={article.link} className="relative overflow-hidden h-56 block">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#C85A3A] uppercase tracking-wider shadow-sm">
                  {article.category}
                </div>
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                
                <Link to={article.link}>
                  <h3 className="text-xl font-bold text-[#001F3F] font-serif mb-3 group-hover:text-[#C85A3A] transition-colors leading-tight">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow font-light">
                  {article.excerpt}
                </p>
                
                <div className="pt-5 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img src={article.authorImage} alt={article.author} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-bold text-[#001F3F]">{article.author}</span>
                  </div>
                  
                  <Link to={article.link} className="inline-flex items-center text-[#C85A3A] font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                    Ler artigo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
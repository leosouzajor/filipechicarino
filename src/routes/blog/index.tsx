import { createFileRoute, Link } from '@tanstack/react-router';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { images } from '@/lib/assets';

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: "Blog | Filipe Chicarino - Insights sobre Comunicação e Liderança" },
      {
        name: "description",
        content: "Artigos sobre comunicação não-violenta, saúde mental no trabalho, NR-1 e liderança empática.",
      },
      { property: "og:title", content: "Blog | Filipe Chicarino - Insights sobre Comunicação e Liderança" },
      { property: "og:description", content: "Artigos sobre comunicação não-violenta, saúde mental no trabalho, NR-1 e liderança empática." },
      { property: "og:url", content: "https://filipechicarino.com.br/blog/" },
      { property: "og:image", content: images.logo },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: images.logo },
    ],
    links: [
      { rel: "canonical", href: "https://filipechicarino.com.br/blog/" }
    ]
  }),
  component: BlogPage,
});

import { getAllPosts } from '@/lib/blog';

function BlogPage() {
  const posts = getAllPosts();
  
  const articles = posts.map((post, index) => ({
    id: index,
    title: post.title,
    excerpt: post.excerpt,
    category: "ARTIGO",
    date: post.date,
    readTime: post.readTime,
    author: post.author,
    link: `/blog/${post.slug}`,
    image: post.coverImage,
    authorImage: images.autorAvatar
  }));

  return (
    <div className="min-h-screen bg-[#F5F3EF]">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-8 lg:px-16 bg-[#001F3F] text-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Blog & Insights</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Reflexões profundas sobre o mundo corporativo, comportamento humano e comunicação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
            {articles.map((article, index) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <Link to={article.link} className="relative overflow-hidden h-64 md:h-72 block">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-[#C85A3A] uppercase tracking-wider shadow-sm">
                    {article.category}
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-grow">
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
                    <h2 className="text-2xl font-bold text-[#001F3F] font-serif mb-4 group-hover:text-[#C85A3A] transition-colors leading-tight">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow font-light">
                    {article.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
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

      <Footer />
    </div>
  );
}
